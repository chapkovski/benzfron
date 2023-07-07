<template>
    <v-form v-model="valid" @update:model-value="onFormUpdate">
        <v-row class="d-flex flex-row align-baseline my-3" v-for="(row, index) in rows" :key="index">

            <div class="d-flex flex-row flex-grow-1 align-baseline">
               
                <v-select variant="outlined" v-model="row.input1" v-if="dropdown" clearable label="Select item" width="100"
                    density="compact" :items="items1"  :rules="[rules.required, rules.checkInput1]"></v-select>

                <v-text-field 
                :id="`first_input_${index}`"
                label="Insert text here" variant="outlined" @blur="switchTooltipVisibility(0)"
                    @focus="switchTooltipVisibility(0)" density="compact" max-width="100" clearable v-else
                    v-model="row.input1" width="100" :items="items1" :hint="getHint()"
                    :rules="[rules.required, rules.checkInput1]">
                    <v-tooltip  location="bottom" 
                    activator="parent"
                     >
                        Choose one of the following: <br>{{ get_items_desc(items1) }}</v-tooltip>
                </v-text-field>

                <span class="mx-3">fand alle</span>
                <v-select 
                :rules="[rules.required, rules.checkInput2]"
                style="mx-3" v-model="row.input2" v-if="dropdown" clearable density="compact" label="Select item"
                    width="100" variant="outlined" :items="items2" ></v-select>
                <v-text-field density="compact" variant="outlined" clearable :rules="[rules.required, rules.checkInput2]"
                    style='mx-3' label="insert text here" v-else v-model="row.input2" width="100" :items="items2"
                    :hint="getHint()" @blur="switchTooltipVisibility(1)" @focus="switchTooltipVisibility(1)">
                    <v-tooltip   location="bottom" activator="parent">
                        Choose one of the following: <br>
                        {{ get_items_desc(items2) }}</v-tooltip>
                </v-text-field>
                <span class="mx-3">murmeln.</span>
                <v-btn rounded="1"
                class="align-self-start"
                 variant="outlined" @click="deleteRow(index)" :disabled="numrows < 2">
                    <v-icon>mdi-minus</v-icon>
                </v-btn>

            </div>

        </v-row>
    </v-form>
</template>
  
<script setup>
import { computed, ref, reactive, defineEmits } from 'vue'
const emit = defineEmits(['formValidation'])
import { useRowsStore } from '../stores/rows'
const valid=ref(null)
const onFormUpdate=(e)=>{
    emit('formValidation', e)
}
const props = defineProps({
    dropdown: Boolean
})
const numrows = computed(() => store.rows.length)
const tooltips = [false, false]
const store = useRowsStore()
const rows = computed(() => store.rows)

const switchTooltipVisibility = (i) => {

    tooltips[i] = !tooltips[i]
}
const get_items_desc = (ls) => `${ls.join(', ')}`

const getHint = () => {
    return `Choose one of the allowed values.`
    //  \n ${items1}`
}

const items1 = ['Jedes', 'Alle', 'Einige', 'Keines', 'Einige aber nich alle', 'Einige und möglicherweise alle']
const items2 = ['Jedes', 'Alle', 'Einige', 'Keines', 'Einige aber nich alle', 'Einige und möglicherweise alle']
const rules = {
    required: value => !!value || 'Field is required',
    checkInput1: (value) => {
        const items = items1.map(item => item.toLowerCase());
        return items.includes(value.toLowerCase().trim()) || `Error! ${getHint()}`
    },
    checkInput2: (value) => {
        const items = items2.map(item => item.toLowerCase());
        return items.includes(value.toLowerCase().trim()) || `Error! ${getHint()}`
    }
}
const deleteRow = (index) => {

    store.deleteRow(index)
}


</script>
  