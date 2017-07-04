<template>
    <div id="register_box">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-8" id="left">
                    <img id="title_image" src="../../../vendor/img/xiaohui1.jpg" alt="">
                    <span id="title_text">用户登录</span>
                    <br>
                    <br>
                    <form @submit.prevent="submit">
                        <select class="long-input-box" name="school" id="school">
                            <option value="xiaohui1">大连交通大学</option>
                            <option value="xiaohui2">大连交通大学</option>
                            <option value="xiaohui3">大连交通大学</option>
                            <option value="xiaohui4">大连交通大学</option>
                        </select>
                        <br>
                        <br>
                        <input class="long-input-box" type="text" placeholder="请输入手机号/邮箱/学号">
                        <br>
                        <br>
                        <input class="long-input-box" type="text" placeholder="请输入密码">
                        <br>
                        <br>
                        <br>
                        <div>
                            <input type="checkbox">&nbsp;&nbsp;七天内免登陆
                            <span id="forget">忘记密码？</span>
                        </div>
                        <br>
                        <br>
                        <button type="submit" class="long-input-box">登录</button>
                        <div>
                            <span>有问题请联系 <a href="#">在线客服</a></span>
                            <span id="register"><a href="#">立即注册</a></span>
                        </div>
                    </form>
                </div>
                <div id="right" class="col-sm-4">
                    <br>
                    <br>
                    <div id="boy">
                        <img src="../../../vendor/img/handcode.png" alt="hand">
                        <img src="../../../vendor/img/health.png" alt="body">
                    </div>
                    <img src="../../../vendor/img/code.png" alt="code">
                    <br>
                    <br>
                    <div>
                        扫码下载 <a href="#">高校邦APP</a> 移动学习新体验
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default
    {
        data: function () {
            return {
                school: null
            };
        },
        methods:
            {
                submit: function()
                {
                    alert('表单提交了');
                }
            }
    }
</script>
<style scoped>
    #register_box
    {
        width: 60%;
        padding: 30px;
        background-color: white;
        box-shadow: 3px 3px 10px #eff4f7;
    }
    #title_image
    {
        height: 50px;
    }
    #title_text
    {
        padding-left: 10px;
        border-left: 1px solid grey;
        font-size: 16px;
        line-height: 30px;
        display: inline-block;
    }
    .long-input-box
    {
        width: 100%;
        padding: 10px;
        font-size: 20px;
    }
    #forget,
    #register
    {
        float: right;
    }
    #left
    {
        border-right: 1px dashed grey;
        padding-right: 40px;
    }
    #right
    {
        padding-left: 40px;
        text-align: center;
    }
    button
    {
        background-color: #1fb5ff;
        color: white;
        font-size: 20px;
        border: none;
    }
    button:hover
    {
        background-color: rgba(31,179,255,0.65);
    }
    #boy
    {
        position: relative;
        height: 110px;
        width: 100%;
    }
    #boy img
    {
        width: 100px;
        position: absolute;
        bottom: 0;
    }
</style>