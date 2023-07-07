<template>
    <v-row class="d-flex flex-row align-baseline" v-for="(row, index) in rows" :key="index">

        <div class="d-flex flex-row flex-grow-1 align-baseline" >
            <v-select v-model="row.input1" v-if="dropdown" clearable label="Select item" width="100"
                :items="items1"></v-select>

            <v-text-field label="Insert text here" v-else v-model="row.input1" width="100" :items="items1"
                :hint="getHint()"></v-text-field>

            <span class="mx-3">fand alle</span>
            <v-select style="mx-3" v-model="row.input2" v-if="dropdown" clearable label="Select item" width="100"
                :items="items2"></v-select>
            <v-text-field style='mx-3' label="insert text here" v-else v-model="row.input2" width="100" :items="items2"
                :hint="getHint()"></v-text-field>
            <span class="mx-3">murmeln.</span>
        </div>
        
    </v-row>
</template>
  
<script>
import { computed } from 'vue'
import { useRowsStore } from '../stores/rows'

export default {
    name: 'RowComponent',
    props: ['dropdown'],
    setup() {
        const store = useRowsStore()
        const rows = computed(() => store.rows)
        
        const getHint = () => {
            return `Choose one of the following: \n ${items1}`
        }

        const items1 = ['Jedes', 'Alle', 'Einige', 'Keines', 'Einige aber nich alle', 'Einige und möglicherweise alle']
        const items2 = ['Jedes', 'Alle', 'Einige', 'Keines', 'Einige aber nich alle', 'Einige und möglicherweise alle']
        return { rows,  items1, items2, getHint }
    },
}
</script>
  