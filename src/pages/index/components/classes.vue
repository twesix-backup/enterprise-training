<template>
    <div class="container-fluid">
        <div id="classes" class="col-sm-6 col-sm-offset-3">
            <img src="../../../vendor/img/0813-circle.png" alt="0813 circle">
            <h2>四大课程品类</h2>
            <p>做眼未来,全面提升大学生核心竞争力</p>
            <div id="class-items">
                <span class="class-item">创新创业</span><!--
                --><span class="class-item">互联网+</span><!--
                --><span class="class-item">职前教育</span><!--
                --><span class="class-item">通时素养</span>
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
        components: {}
    }
</script>
<style scoped>
    .container-fluid
    {
        background-color: darkgray;
        padding: 30px;
        margin: 0;
    }
    img
    {
        float: right;
    }
    h2
    {
        margin-top: 90px;
        text-align: center;
    }
    p
    {
        text-align: center;
    }
    #class-items
    {
        padding-left: 0;
        margin-top: 40px;
    }
    .class-item
    {
        padding: 10px;
        margin-left: 1px;
        background-color: white;
    }
    #class-items .class-item:first-child
    {
        border-radius: 5px 0 0 5px;
    }
    #class-items .class-item:last-child
    {
        border-radius: 0 5px 5px 0;
    }
</style>