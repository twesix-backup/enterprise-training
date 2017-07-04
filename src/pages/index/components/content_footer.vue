<template>
    <footer>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-8">
                    <img src="../../../vendor/img/footer_logo.png" alt="footer logo">
                    <br>
                    <br>
                    <br>
                    <p>
                        高校邦秉承“重构教学，智慧学习”的愿景，专为中国高校打造智慧学习平台，成为高校在线教育
                        的创新型合作伙伴，共同推进中国高校智慧学习模式与教学模式的创新，培养面向时间的人才。
                    </p>
                    <br>
                    <br>
                    <img src="../../../vendor/img/footer_partner.png" alt="footer partner">
                </div>
                <div class="col-sm-4">
                    <h4>关注我们</h4>
                    <br>
                    <div id="contact">
                        <img src="../../../vendor/img/second_toPhone.png" alt="second to phone">
                        <img src="../../../vendor/img/second_toPhone.png" alt="second to phone">
                        <img src="../../../vendor/img/second_toPhone.png" alt="second to phone">
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
    export default
    {
        data: function () {
            return {
                owner: 'vanging.com'
            };
        },
        components: {}
    }
</script>
<style scoped>
    footer
    {
        background-color: #2f383d;
        padding: 30px;
        color: white;
        border-bottom: 80px solid #21262a;
    }
    #contact img
    {
        margin-right: 30px;
    }
</style>