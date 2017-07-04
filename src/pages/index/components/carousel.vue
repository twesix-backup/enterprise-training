<template>
    <div class="container-fluid">
        <div class="col-md-12">
            <div class="carousel slide" id="carousel" data-ride="carousel">
                <!-- Indicators -->
                <ol class="carousel-indicators">
                    <li data-target="#carousel" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel" data-slide-to="1"></li>
                    <li data-target="#carousel" data-slide-to="2"></li>
                </ol>

                <!-- Wrapper for slides -->
                <div class="carousel-inner">
                    <div class="item active">
                        <img src="../../../vendor/img/index_banner03.png" alt="Image">
                    </div>
                    <div class="item">
                        <img src="../../../vendor/img/index_banner04.png" alt="Image">
                    </div>
                    <div class="item">
                        <img src="../../../vendor/img/index_banner05.png" alt="Image">
                    </div>
                </div>
            </div>
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
        components: {},
        mounted: function()
        {
            $('#carousel').carousel
            (
                {
                    interval: 3000
                }
            )
        }
    }
</script>
<style scoped>
    .container-fluid,
    .col-md-12
    {
        margin: 0;
        padding: 0;
    }
</style>