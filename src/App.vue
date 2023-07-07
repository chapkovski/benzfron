<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import BenzTable from './components/Table.vue'
</script>

<template>
  
   <v-app  app>
    
    <v-main app>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <benz-table></benz-table>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
   </v-app>
   
  
</template>

<style scoped>

</style>
