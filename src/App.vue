<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import BenzTable from './components/Table.vue'
</script>

<template>
  
   <v-app  app>
    
    <v-main app>
      <v-container fill-height fluid class="main-container p-3">
        <v-layout align-center justify-center class="p-5 innerlayout">
        <v-row>
          <v-col cols="12">
            <benz-table></benz-table>
          </v-col>
        </v-row>
        </v-layout>
      </v-container>
    </v-main>
   </v-app>
   
  
</template>

<style scoped>
.innerlayout{padding:20px}
.main-container {
  position: relative !important;
  max-width: 800px !important;
}
</style>
