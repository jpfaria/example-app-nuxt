<template>

    <div>
        <v-btn @click="test()" color="info">test component</v-btn>
    </div>

</template>

<script>

    export default {

        methods: {
            test() {
                alert('aqui');
            }
        }

    }

</script>

<style scoped>

</style>