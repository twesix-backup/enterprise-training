<template>
    <div id="app">
        <register_box></register_box>
    </div>
</template>
<script>
    import register_box from './register_box.vue';

    export default
        {
            data: function ()
            {
                return {
                };
            },
            components:
                {
                    register_box: register_box,
                },
            mounted: function()
            {
            }
        }
</script>
<style scoped>
    #app
    {
        background-image: url("../../../vendor/img/bg.png");
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
<style>
    html,
    body
    {
        position: relative;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
    }
</style>