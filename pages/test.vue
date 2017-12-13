<template>

    <div>
        <h1>TESTE</h1>
        <br />
        <img src="~/assets/images/IMG_1610.jpg" width="500"/>
        <test></test>
    </div>

</template>


<script>

    import test from '~/components/test.vue';

    export default {

        //layout: 'test',

        components: {
            'test': test
        }

    }

</script>