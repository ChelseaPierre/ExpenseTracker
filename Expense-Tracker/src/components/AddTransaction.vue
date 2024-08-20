<script setup>
import { ref } from 'vue';
import {useToast} from 'vue-toastification'

    const text = ref('');
    const amount = ref ('');

    const emit = defineEmits(['transactionSubmitted']);

    const toast = useToast();

    const onsubmit = () => {

        if(!text.value || !amount.value){
            toast.error('Both fields must be filled');
            return;
        };
        if(amount.value != Number){
            toast.error('Must be numerical');
            return;
        };
        const transactionData = {
            text: text.value,
            amount: parseFloat(amount.value),
        };
        
        emit('transactionSubmitted', transactionData);
        text.value ='';
        amount.value='';
    };

</script>

<template>
    <h3>New Transaction</h3>
    <form id="form" @submit.prevent="onsubmit">
        <div class="form-control">
            <label for="text"></label>
            <input type="text" id="text" v-model="text" placeholder="Transaction Type" /> 
        </div>


        <div class="form-control">
            <label for="amount"></label>
            <input type="text" id="amount" v-model="amount" placeholder="$0.00" />
        </div>
        <button class="btn">Add transaction</button>
    </form>
</template>