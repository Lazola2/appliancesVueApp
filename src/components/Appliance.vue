<template>
    <div v-for="appliance in appliances" :key="appliance">
        <h1>{{appliance.brand}}</h1>
        <p>{{appliance.uid}}</p>
    </div>
</template>
<script>
    import { mapActions, mapGetters } from 'vuex'
    export default {
        name: 'ApplianceItem',
        computed: {
            ...mapGetters(['appliances']),
        },
        methods: {
            ...mapActions(['fetchAppliances']),
        },
        created(){
            this.fetchAppliances();
        },
    };
</script>
<style lang="">
    
</style>