<template>
  <footer class="footer">
            <div class="container container--footer">
                <router-link to="/" class="logo">
                    <img src="../assets/images/other/logo.svg" alt="#logo">
                </router-link>
                <div class="footer_content">
                    <ul class="footer__links">
                        <li><router-link to='/rest' class="footer__link">Ресторанам</router-link></li>
                        <li><router-link to='/rest' class="footer__link">Курьерам</router-link></li>
                        <li><router-link to='/rest' class="footer__link">Пресс-центр</router-link></li>
                        <li><router-link to='/rest' class="footer__link">Контакты</router-link></li>
                    </ul>
                    <div class="footer__socials">

                        <router-link to='' class="footer__social">
                            <img src="../assets/images/other/instagram.svg" alt="#instagram">
                        </router-link>

                        <router-link to='' class="footer__social">
                            <img src="../assets/images/other/facebook.svg" alt="#facebook">
                        </router-link>

                        <router-link to='' class="footer__social">
                            <img src="../assets/images/other/vk.svg" alt="#VK">
                        </router-link>
                    </div>
                </div>
            </div>
        </footer>
</template>

<script>
export default {

}
</script>

<style scoped>

footer {
    width: 100%;

    margin-top: auto;
    padding: 6rem 0;
}

.container--footer {
    display: flex;
}

.footer_content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    width: 100%;

    margin-left: 3.55rem;

    font-size: 1.8rem;
}


.footer__links {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
}

.footer__link {

    text-decoration: none;
    color: #595959;

    transition: color 0.2s linear;
}

.footer__link:hover {
    color: #1890ff;
}

.footer__socials {
    display: flex;
    gap: 2.1rem;
    align-items: center;
}

.footer__social {
    display: inline-block;

    transition: all 0.2s linear;

    cursor: pointer;
}

.footer__social:hover {
transform: scale(1.2);
}
</style>