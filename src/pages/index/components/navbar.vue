<template>
    <nav>
        <img id="badge" src="../../../vendor/img/0813-logo.png" alt="logo">
        <div id="badge_text">专为中国高校打造的智慧学习平台</div>
        <ul class="nav-list">
            <li class="active">主页</li>
            <li>慕课网</li>
            <li>教书匠</li>
            <li>图书</li>
            <li>联系方式</li>
            <li>关于我们</li>
        </ul>
        <div class="nav-right">
            <button id="download_app">APP下载</button>
            <button class="btn btn-sm btn-primary">登录</button>
            <button class="btn btn-sm btn-info"><a href="register.html" target="_blank">注册</a></button>
        </div>
    </nav>
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
    nav
    {
        padding: 10px;
        display: flex;
        align-items: center;
    }
    #badge_text
    {
        display: inline-block;
        width: 150px;
        border-left: 1px solid white;
        margin-left: 10px;
        padding-left: 10px;
        margin-right: 10px;
    }
    .nav-list
    {
        margin-bottom: 0;
        padding-left: 0;
    }
    .nav-list > li
    {
        display: inline;
        list-style: none;
        padding: 10px;
        cursor: pointer;
        border-radius: 3px;
    }
    .nav-list > li:hover
    {
        background-color: lightskyblue;
    }
    .active
    {
        background-color: dodgerblue;
    }
    .nav-right
    {
        flex-grow: 1;
        justify-content: flex-end;
        display: flex;
    }
    .btn
    {
        margin: 5px;
    }
    #download_app
    {
        border: none;
        background-color: transparent;
    }
</style>