<template>
    <div class="h-full bg-gray-100  flex justify-center">
      <div class="container grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <!-- Barra lateral de perfil -->
        <div class="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center lg:items-start lg:col-span-1">
          <div class="w-32 h-32 rounded-full overflow-hidden mb-4">
            <img src="@/assets/profile.jpeg" alt="Profile Picture" class="w-full h-full object-cover" />
          </div>
          <h1 class="text-2xl font-semibold text-center lg:text-left">Daniel Guzmán</h1>
          <p class="text-gray-600 text-center lg:text-left">Software Developer</p>
          
          <!-- Información de contacto -->
          <div class="mt-4 text-gray-700 space-y-2">
            <p class="text-center lg:text-left">dguzman@example.com</p>
            <p class="text-center lg:text-left">+123 456 789</p>
          </div>
          
          <!-- Botón de Contacto -->
          <button class="mt-6 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 focus:outline-none">
            Contactar
          </button>
        </div>
  
        <!-- Sección principal de contenido -->
        <div class="bg-white shadow-lg rounded-lg p-6 lg:col-span-2">
          <!-- Descripción -->
          <div>
            <h2 class="text-xl font-semibold mb-4">Acerca de mí</h2>
            <p class="text-gray-700 leading-relaxed">
              Soy desarrollador de software con amplia experiencia en frontend y backend. Me apasiona la tecnología y disfruto trabajando en proyectos innovadores, especialmente en el sector de salud. Siempre estoy en constante aprendizaje para mejorar mis habilidades y conocer las últimas tendencias.
            </p>
          </div>
  
          <!-- Habilidades -->
          <div class="mt-6">
            <h2 class="text-xl font-semibold mb-4">Habilidades</h2>
            <div class="flex flex-wrap gap-3">
              <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
              <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Vue.js</span>
              <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
              <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">PHP</span>
              <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">MySQL</span>
              <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Git</span>
            </div>
          </div>
  
          <!-- Actividades Recientes -->
          <div class="mt-6">
            <h2 class="text-xl font-semibold mb-4">Actividades Recientes</h2>
            <ul class="space-y-4">
              <li class="border-b pb-2">
                <p class="font-semibold">📅 Completó el proyecto "Dashboard de Clínica"</p>
                <p class="text-gray-600 text-sm">Hace 3 días</p>
              </li>
              <li class="border-b pb-2">
                <p class="font-semibold">📈 Mejoras en rendimiento en "App de Trazabilidad"</p>
                <p class="text-gray-600 text-sm">Hace 1 semana</p>
              </li>
              <li class="border-b pb-2">
                <p class="font-semibold">🛠 Integración de pasarela de pagos</p>
                <p class="text-gray-600 text-sm">Hace 2 semanas</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProfilePage",
  };
  </script>
  
  <style scoped>
  /* Puedes agregar estilos personalizados aquí */
  </style>
  