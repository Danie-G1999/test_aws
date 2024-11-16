<template>
    <h3 class="text-2xl font-bold text-left py-2 flex gap-2">Add Contacts</h3>
    <div class="overflow-y-auto max-w-full mx-auto p-8 bg-white rounded-lg shadow-md">
         <!-- Success Message -->
    <p v-if="submitted" class="mt-4 text-green-600">Form submitted successfully!</p>
      <form @submit.prevent="handleSubmit" class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- First Name -->
        <div>
          <label for="firstName" class="block text-sm font-medium text-gray-700">First Name</label>
          <input
            required
            id="firstName"
            type="text"
            v-model="form.firstName"
            class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter your first name"
          />
        </div>
  
        <!-- Phone Number -->
        <div>
          <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            required
            id="phone"
            type="number"
            v-model="form.phone"
            class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter your phone number"
          />
        </div>
  
        <!-- Email -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            required
            id="email"
            type="email"
            v-model="form.email"
            class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter your email address"
          />
        </div>
  
        <!-- Address -->
        <div>
          <label for="address" class="block text-sm font-medium text-gray-700">Address</label>
          <input
            required
            id="address"
            type="text"
            v-model="form.address"
            class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter your address"
          />
        </div>
  
        <!-- Profession -->
        <div>
          <label for="profession" class="block text-sm font-medium text-gray-700">Profession</label>
          <input
            required
            id="profession"
            type="text"
            v-model="form.profession"
            class="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter your profession"
          />
        </div>
  
        <!-- Botón de envío -->
        <div class="md:col-span-2 flex justify-end">
            <!-- Botón de Cancelar -->
            <button
                type="button"
                @click="goBack"
                class="px-6 py-2 text-white bg-gray-500 hover:bg-gray-600 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mr-2"
            >
                Cancel
            </button>

            <!-- Botón de Save con texto dinámico -->
            <button
                type="button" 
                @click="saveContact" 
                :disabled="isSaving"  
                class="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                {{ isEditMode ? 'Actualizar' : 'Guardar' }} <!-- Texto dinámico -->
            </button>
        </div>

      </form>
    </div>
  </template>
<script>
import api from '@/api'
export default {
    data() {
        return {
            form: {
                firstName: '',
                phone: '',
                email: '',
                address: '',
                profession: ''
            },
            submitted: false,
            isEditMode: false,
            isSaving: false, 
        }
    },
    async created() {
        const contactId = this.$route.params.id;  // Obtiene el ID de la URL
        if (contactId) {
        this.isEditMode = true;
            this.fetchContact(contactId);  
        }
    },
    methods: {
        // Método que será llamado al hacer clic en "Save"
        async saveContact() {
            this.isSaving = true;  // Deshabilitar el botón

            try {
                if (this.isEditMode) {
                    // Si estamos en modo de edición, actualizamos el contacto
                    await this.updateContact();
                } else {
                    // Si no estamos editando, creamos un nuevo contacto
                    await this.handleSubmit();
                }
            } catch (error) {
                console.error('Error al guardar el contacto:', error);
                alert('Ocurrió un error al guardar el contacto');
            } finally {
                this.isSaving = false;  // Habilitar el botón nuevamente
            }
        },
        async fetchContact(id) {
            try {
                const response = await api.get(`/api/contact/${id}`);  // Llama al API para obtener el contacto
                const contact = response.data.contact;
                this.form = {
                firstName: contact.name,
                phone: contact.phone,
                email: contact.email,
                address: contact.direction,
                profession: contact.profession
                };
            } catch (error) {
                alert('Error al obtener el contacto');
            }
        },
        // Guardamos el contacto
        async handleSubmit() {
            // Validación básica
            if (
                !this.form.firstName ||
                !this.form.phone ||
                !this.form.email ||
                !this.form.address ||
                !this.form.profession
            ) {
                alert('Please complete all fields.');
                return;
            }
             
            // Preparar los datos del formulario
            const formData = {
                name: this.form.firstName,
                phone: this.form.phone,
                email: this.form.email,
                direction: this.form.address,
                profession: this.form.profession
            };
            try {
                const response = await api.post('/api/saveContact', formData);
                if(response.status){
                    this.submitted = true; 
                    this.form = {
                        firstName: '',
                        lastName: '',
                        phone: '',
                        email: '',
                        address: '',
                        profession: ''
                    }
                }
            } catch (error) {
                alert('Error al guardar los datos', error);
            }
        },
        // Editamos contacto
        async updateContact() {
            const formData = {
                name: this.form.firstName,
                phone: this.form.phone,
                email: this.form.email,
                direction: this.form.address,
                profession: this.form.profession
            };
            const contactId = this.$route.params.id;
            try {
                const response = await api.put(`/api/updateContact/${contactId}`, formData);
                if(response.status){
                    this.$router.push('/home');  // Redirige al inicio después de actualizar
                } else {
                    alert('Error en consulta')
                }
            } catch (error) {
                alert('Error al actualizar el contacto');
            }
        },
        goBack() {
            this.$router.go(-1);  // Retrocede a la página anterior
        },
        resetForm() {
            this.form = {
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
                address: '',
                profession: ''
            };
        }
    },
    mounted() {
        this.resetForm();
    }
}
</script>
<style lang="">
    
</style>