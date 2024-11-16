<template>
  <div class="h-full bg-gray-100 flex justify-center">
    <div class="container grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      <!-- Card 1: Angie Natalia Garzón Castro -->
      <div class="bg-white shadow-lg rounded-lg p-6">
        <h1 class="text-2xl font-semibold text-center">ANGIE NATALIA GARZON CASTRO</h1>
        <p class="text-center text-gray-600">57265</p>
        <p class="text-center text-gray-600 mt-2">9° Semestre</p>
      </div>

      <!-- Card 2: Kevin Humberto Calderón Toro -->
      <div class="bg-white shadow-lg rounded-lg p-6">
        <h1 class="text-2xl font-semibold text-center">KEVIN HUMBERTO CALDERON TORO</h1>
        <p class="text-center text-gray-600">57265</p>
        <p class="text-center text-gray-600 mt-2">9° Semestre</p>
      </div>

      <!-- Card 3: Angie Mondragón Adame -->
      <div class="bg-white shadow-lg rounded-lg p-6">
        <h1 class="text-2xl font-semibold text-center">ANGIE MONDRAGON ADAME</h1>
        <p class="text-center text-gray-600">57265</p>
        <p class="text-center text-gray-600 mt-2">9° Semestre</p>
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
/* Personaliza la apariencia de las tarjetas */
.bg-white {
  background-color: white;
}

.shadow-lg {
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.rounded-lg {
  border-radius: 8px;
}

.p-6 {
  padding: 1.5rem;
}

.text-center {
  text-align: center;
}

.text-gray-600 {
  color: #4b5563;
}

.text-2xl {
  font-size: 1.5rem;
}

.font-semibold {
  font-weight: 600;
}

.mt-2 {
  margin-top: 0.5rem;
}
</style>
