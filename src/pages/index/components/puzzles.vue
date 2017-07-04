<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-4 block">
                <img src="../../../vendor/img/bf86b41c733c42638e2581f9519d6da5.png" alt="1-1">
            </div>
            <div class="col-sm-2 block">
                <p class="block-text"></p>
                <div class="block-footer">
                    <span class="detail">查看详情</span>
                    <span class="add">+</span>
                </div>
            </div>
            <div class="col-sm-4 block"></div>
            <div class="col-sm-2 block"></div>
        </div>
        <div class="row">
            <div class="col-sm-4"></div>
            <div class="col-sm-5"></div>
            <div class="col-sm-3"></div>
        </div>
    </div>
</template>
<script>
    export default
    {
        data: function ()
        {
            return {};
        },
        components: {}
    }
</script>
<style scoped>
    .container-fluid
    {
        margin: 0;
        padding: 0;
    }
    img
    {
        width: 100%;
        height: 100%;
    }
    .block
    {
        margin: 0;
        padding: 0;
    }
    .block-text
    {
        height: 85%;
    }
    .block-footer
    {
        height: 15%;
    }
    .detail
    {
        width: 80%;
        display: inline-block;
    }
    .add
    {
        width: 20%;
        display: inline-block;
    }
</style>