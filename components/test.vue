<template>

    <div>
        <button @click="test()">test component</button>
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