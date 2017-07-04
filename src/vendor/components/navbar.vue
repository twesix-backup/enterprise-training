<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <div class="navbar-brand">
                    <p>Vanging</p>
                </div>
                <button type="button" class="navbar-toggle collapsed"
                        data-toggle="collapse" data-target="#navbar_collapse">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>
            <div class="collapse navbar-collapse" id="navbar_collapse">
                <ul class="nav navbar-nav navbar-left">
                    <li><a href="#">item 1</a></li>
                    <li><a href="#">item 2</a></li>
                    <li><a href="#">item 3</a></li>
                    <li><a href="#">item 4</a></li>
                    <li><a href="#">item 5</a></li>
                    <li><a href="#">item 6</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#">right 1</a></li>
                    <li><a href="#">right 2</a></li>
                    <li><a href="#">right 3</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
    export default
        {
            data: function ()
            {
                return {
                };
            }
        }
</script>
<style scoped>
    .navbar
    {
        border-radius: 0;
    }
</style>