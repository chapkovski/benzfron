<template>
    <div class="my-3">
    <RowComponent :dropdown="dropdown"  />
    </div>
    <div class="d-flex flex-row flex-grow-0" >
            <v-btn-toggle  class="align-self-start my-3" variant="outlined" >
                <v-btn rounded="1" variant="outlined" @click="addRow" :disabled="numrows>4" >

                    <v-icon>mdi-plus</v-icon>
                </v-btn>

                <v-btn rounded="1" variant="outlined" @click="deleteRow(index)" :disabled="numrows<2"  >
                    <v-icon>mdi-minus</v-icon>
                </v-btn>

            </v-btn-toggle>

        </div>
    <v-btn-toggle style="my-5" v-model="dropdown" rounded="1" color="deep-purple-accent-3" group variant="outlined">
        <v-btn :value="true" outlined>
            dropdown
        </v-btn>

        <v-btn :value="false" outlined>
            Free text
        </v-btn>




    </v-btn-toggle>

  
</template>
  
<script>
import { ref, computed } from 'vue'
import RowComponent from './RowComponent.vue'
import { useRowsStore } from '../stores/rows'

export default {
    name: 'Table',
    components: {
        RowComponent,
    },
    setup() {
        const store = useRowsStore()
        const numrows = computed(() => store.rows.length)
        const rows = computed(() => store.rows)
        const addRow = () => {
            store.addRow({ input1: '', input2: '' })
        }
        const deleteRow = (index) => {
            store.deleteRow(index)
        }

        const dropdown = ref(true)
        
        return { dropdown,  addRow, deleteRow, numrows }
    },
}
</script>
  