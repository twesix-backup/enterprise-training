<template>
    <div class="container-fluid">
        <div class="row">
            <div id="classes" class="col-xs-6 col-xs-offset-3">
                <img src="../../../vendor/img/0813-circle.png" alt="0813 circle">
                <div class="content-bottom">
                    <h2>四大课程品类</h2>
                    <p>做眼未来,全面提升大学生核心竞争力</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-8 col-xs-offset-2" id="classes_buttons">
                <div class="btn-group">
                    <button type="button" class="btn btn-default">创新创业</button>
                    <button type="button" class="btn btn-default">互联网+</button>
                    <button type="button" class="btn btn-default">职前教育</button>
                    <button type="button" class="btn btn-default">通时素养</button>
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
        components: {}
    }
</script>
<style scoped>
    .container-fluid
    {
        background-color: #eff4f7;
        margin: 0;
        padding: 30px 30px 100px;
    }
    #classes
    {
        position: relative;
        text-align: center;
    }
    img
    {
        float: right;
    }
    .content-bottom
    {
        position: absolute;
        right: 150px;
        bottom: 0;
    }
    #classes_buttons
    {
        text-align: center;
    }
    .btn-group
    {
        margin-top: 30px;
    }
    .btn-group > button
    {
        padding: 10px 40px;
    }
</style>