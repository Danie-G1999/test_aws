<template>

    <div>
      <h3 class="text-2xl font-bold text-left py-2 flex gap-2">Contacts
        <router-link 
          to="/add-contact"
          class="cursor-pointer px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Agregar
        </router-link>
        
      </h3>
      <div class="overflow-x-auto relative  sm:rounded-lg max-w-50">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                Name
              </th>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                  Phone
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                  Email
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                  Direction
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <div class="flex items-center">
                  Profession
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                <span class="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="contact in contacts" :key="contact.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="py-4 px-6">
                {{ contact.name }}
              </td>
              <td class="py-4 px-6">
                {{ contact.phone }}
              </td>
              <td class="py-4 px-6">
                {{ contact.email }}
              </td>
              <td class="py-4 px-6">
                {{ contact.direction }}
              </td>
              <td class="py-4 px-6">
                {{ contact.profession }}
              </td>
              <router-link 
                :to="'/add-contact/' + contact.id" 
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                Edit
              </router-link>
            </tr>
            
            
            
            
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import api from '@/api'

  export default {
    data() {
      return {
        contacts: []
      }
    },
    mounted() {
      this.fetchItems();
    },
    methods: {
      async fetchItems() {
        try {
          const response = await api.get('/api/contacts'); 
          this.contacts = response.data.contacts.rows;  
        } catch (error) {
          alert('Error al obtener los datos', error);
        }
      }
    }
  }
  </script>
  
  <style>
  
  </style>