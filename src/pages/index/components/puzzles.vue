<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-4 block">
                <img src="../../../vendor/img/bf86b41c733c42638e2581f9519d6da5.png" alt="1-1">
            </div>
            <div class="col-sm-2 block text-block-1">
                <div class="block-text">
                    <div class="triangle"></div>
                    <h4>移动互联网思维</h4>
                    <p>
                        乔布斯，重新定义了移动互联网；移动互联网，
                        重新定义了人类生产力。移动互联网浪潮已经席卷全球，
                        这种技术最先出现在消费领域，并得到市场认可，
                        创造了巨大的经济价值。但真正推动人类生产力进步
                        的生产领域，移动互联网
                    </p>
                </div>
                <div class="block-footer">
                    <span class="detail"><a href="#">查看详情</a></span><!--
                    --><span class="add">+</span>
                </div>
            </div>
            <div class="col-sm-4 block block-vertical-center">
                <img src="../../../vendor/img/zhihui.png" alt="zhi hui">
            </div>
            <div class="col-sm-2 block text-block-2">
                <div class="block-text">
                    <div class="triangle"></div>
                    <h4>创业启蒙与案例分享</h4>
                    <p>
                        由天使汇投资平台的投资经理主讲，并配有配套教材，
                        致力于打造接地气的，符合中国实际情况的，
                        创业者能看明白的创业世界观与方法论，解决中国创业者
                        不会创业，不敢创业的问题和创业过程中普适性的困难，将潜在创业者迈
                    </p>
                </div>
                <div class="block-footer">
                    <span class="detail"><a href="#">查看详情</a></span><!--
                    --><span class="add">+</span>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-2 block">
                <img src="../../../vendor/img/bf05323b57984486b9d1a60ef3649c5c.jpg" alt="2-1">
            </div>
            <div class="col-sm-2 block text-block-3">
                <div class="block-text">
                    <div class="triangle"></div>
                    <h4>移动互联网思维</h4>
                    <p>
                        乔布斯，重新定义了移动互联网；移动互联网，
                        重新定义了人类生产力。移动互联网浪潮已经席卷全球，
                        这种技术最先出现在消费领域，并得到市场认可，
                        创造了巨大的经济价值。但真正推动人类生产力进步
                        的生产领域，移动互联网
                    </p>
                </div>
                <div class="block-footer">
                    <span class="detail"><a href="#">查看详情</a></span><!--
                    --><span class="add">+</span>
                </div>
            </div>
            <div class="col-sm-4 block block-vertical-center">
                <img src="../../../vendor/img/32ac816ce564495ca5ae4c0645e06db1.jpg" alt="2-2">
            </div>
            <div class="col-sm-2 block text-block-4">
                <div class="block-text">
                    <div class="triangle"></div>
                    <h4>创业启蒙与案例分享</h4>
                    <p>
                        由天使汇投资平台的投资经理主讲，并配有配套教材，
                        致力于打造接地气的，符合中国实际情况的，
                        创业者能看明白的创业世界观与方法论，解决中国创业者
                        不会创业，不敢创业的问题和创业过程中普适性的困难，将潜在创业者迈
                    </p>
                </div>
                <div class="block-footer">
                    <span class="detail"><a href="#">查看详情</a></span><!--
                    --><span class="add">+</span>
                </div>
            </div>
            <div class="col-sm-2 block last-block">
                <div id="icon_add">+</div>
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
        margin: 0;
        background-color: #eff4f7;
    }
    *
    {
        box-sizing: border-box;
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
        height: 400px;
        position: relative;
    }
    .triangle
    {
        width: 10px;
        height: 10px;
        position: absolute;
        left: -5px;
        top: 80px;
        transform: rotate(45deg);
        background-color: inherit;
    }
    .block-text
    {
        height: 90%;
        padding: 20px;
    }
    .block-text > p
    {
        text-overflow: ellipsis;
    }
    .block-text > h4
    {
        text-align: center;
        color: white;
    }
    .block-footer
    {
        height: 10%;
        line-height: 40px;
    }
    .detail
    {
        width: 80%;
        height: 100%;
        font-size: 20px;
        font-weight: bolder;
        display: inline-block;
        text-align: center;
    }
    .add
    {
        height: 100%;
        width: 20%;
        display: inline-block;
        font-size: 20px;
        font-weight: bolder;
        text-align: center;
    }
    .block-vertical-center img
    {
        width: 100%;
        height: 80%;
        position: relative;
        top: 10%;
    }

    .text-block-1 .block-text
    {
        background-color: #2f383d;
        color: #83a18f;
    }
    .text-block-1 .detail
    {
        background-color: #21292c;
    }
    .text-block-1 .add
    {
        color: white;
        background-color: #000000;
    }

    .text-block-2 .block-text
    {
        background-color: #76beea;
        color: white;
    }
    .text-block-2 .detail
    {
        background-color: #0072a6;
    }
    .text-block-2 .add
    {
        color: white;
        background-color: #0e5372;
    }

    .text-block-3 .block-text
    {
        background-color: #76beea;
        color: white;
    }
    .text-block-3 .detail
    {
        background-color: #0072a6;
    }
    .text-block-3 .add
    {
        color: white;
        background-color: #0e5372;
    }

    .text-block-4 .block-text
    {
        background-color: #0072a6;
        color: white;
    }
    .text-block-4 .detail
    {
        background-color: #21292c;
    }
    .text-block-4 .add
    {
        color: white;
        background-color: #000000;
    }

    .last-block
    {
        background-color: #1fb6ff;
        position: relative;
    }
    .last-block #icon_add
    {
        border: 2px solid white;
        border-radius: 50%;
        font-size: 30px;
        position: absolute;
        right: 30px;
        bottom: 70px;
        color: white;
        width: 42px;
        text-align: center;
    }
</style>