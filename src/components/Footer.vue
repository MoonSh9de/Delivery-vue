<template>
  <footer class="footer">
            <div class="container container--footer">
                <router-link to="/" class="logo">
                    <img src="../assets/images/other/logo.svg" alt="#logo">
                </router-link>
                <div class="footer_content">
                    <ul class="footer__links">
                        <li><router-link to='/about' class="footer__link">О компании</router-link></li>
                        <li><router-link to='/contacts' class="footer__link">Контакты</router-link></li>
                        <li><router-link to='/policy' class="footer__link">Политика</router-link></li>
                    </ul>
                    <div class="footer__socials">

                        <a :href="socials.github" class="footer__social" target="_blank">
                            <img class="footer__social--icon" src="../assets/images/other/github.svg" traalt="#github-icon">
                        </a>

                        <a :href="socials.instagram" class="footer__social" target="_blank">
                            <img class="footer__social--icon" src="../assets/images/other/instagram.svg" alt="#instagram-icon">
                        </a>

                        <a :href="socials.vk" class="footer__social" target="_blank">
                            <img class="footer__social--icon" src="../assets/images/other/vk.svg" alt="#VK-icon">
                        </a>
                    </div>
                </div>
            </div>
        </footer>
</template>

<script>
export default {
    data() {
        return {
            socials: {
                github: "https://github.com/MoonSh9de",
                instagram: "",
                vk: "https://vk.com/moon_sh9de"
            }
        }
    },
}
</script>

<style lang="scss" scoped>

footer {
    width: 100%;

    margin-top: auto;
    padding: 6rem 0;

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

        .footer__links {
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;
        }

        .footer__link {
            text-decoration: none;
            color: $gray-color--link;

            transition: color 0.2s linear;

            @include mobile {
                // font-size: 1.6rem
            }
        }

        .footer__link:hover {
            color: $blue-color;
        }
    }

    .footer__socials {
        display: flex;
        gap: 2.1rem;
        align-items: center;

        .footer__social {
            display: inline-block;
            transition: all 0.2s linear;

            cursor: pointer;

            .footer__social--icon {
                width: 26px;
                height: 26px;
            }
        }

        .footer__social:hover {
            transform: scale(1.2);
        }
    }

}

</style>