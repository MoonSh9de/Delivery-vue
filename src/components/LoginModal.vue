<template>
    <div class="modal__overlay" :class="{open: isOpen}" @click.self="closeModal()">
         <div class="modal login-modal">
             <div class="modal__header">
                 <h2 class="modal__title">Авторизация</h2>
                 <span class="modal__close" @click="closeModal()"><img src="../assets/images/other/close.svg" alt=""></span>
             </div>
             <div class="login-modal__buttons">
                <button
                class="btn btn__login"
                :class="{'btn__login--active': activeButton === 'login'}"
                type="submit"
                @click="setActiveButton('login')"
                >
                Вход</button>
                <button
                class="btn btn__login"
                :class="{'btn__login--active': activeButton === 'register'}"
                type="submit"
                @click="setActiveButton('register')"
                >
                Регистрация</button>
            </div>
                
            <section class="login-modal__body" v-if="activeButton === 'login'">
                <form action="" method="get">
                    <p>
                        <input class="login-modal__input" type="text" name="phone" id="phone" placeholder="Номер телефона" required>
                    </p>
                    <p>
                        <input class="login-modal__input" type="password" name="password" id="password" placeholder="Пароль" required>
                    </p>
                    <p class="remember-me custom-checkbox">
                        <input type="checkbox" name="remember" id="remember" checked>
                        <label for="remember" class="checkmark"></label>
                        <label for="remember" class="remember-me__label">Запомнить меня</label>
                    </p>

                    <div class="login-modal__submit">
                        <a class="forgot-pass-link" href="#">Забыли пароль?</a>
                        <button class="btn btn__primary btn__login-modal" type="submit">Войти</button>
                    </div>  
                </form>
                <p class="login-modal__reCAPTCHA">
                    Этот сайт защищен reCAPTCHA, и к нему применяются
                    <a class="login-modal__reCAPTCHA--link" target="_blank" href="https://policies.google.com/privacy">политика конфиденциальности</a> и
                    <a class="login-modal__reCAPTCHA--link" target="_blank" href="https://policies.google.com/terms">условия использования Google</a> 
                </p>
            </section>

            <section class="login-modal__body--registration" v-else>
                <form action="" method="get">
                    <p>
                        <input class="login-modal__input login-modal__input--registration" type="text" name="phone" id="phone" placeholder="Номер телефона" required>
                    </p>

                    <div class="login-modal__submit">
                        <button class="btn btn__primary btn__login-modal" type="submit">Подтвердить</button> 
                    </div>  
                </form>

                <p class="login-modal__agreement">
                    Регистрируясь, Вы соглашаетесь с условиями
                    <router-link to="/policy" target="_blank" class="login-modal__agreement--link">оферты</router-link> и даете
                    <router-link to="/user_consent" target="_blank" class="login-modal__agreement--link">согласие на обработку ваших персональных данных</router-link>
                </p>

                <p class="login-modal__reCAPTCHA">
                    Этот сайт защищен reCAPTCHA, и к нему применяются
                    <a class="login-modal__reCAPTCHA--link" target="_blank" href="https://policies.google.com/privacy">политика конфиденциальности</a> и
                    <a class="login-modal__reCAPTCHA--link" target="_blank" href="https://policies.google.com/terms">условия использования Google</a> 
                </p>
            </section>

        </div>
    </div>
</template>

<script setup>

    import { ref } from 'vue';
    const activeButton = ref('login');

   const props = defineProps({
        isOpen: Boolean,
    });

    const emit = defineEmits(['toggleModal']);
    const closeModal = () => emit("toggleModal");

    function setActiveButton(btn) {
        activeButton.value = btn;
    }
</script>

<style>
    .login-modal {
        height: auto;
    }
    .login-modal__buttons {
        display: flex;
        justify-content: center;

        margin-bottom: 2rem;
        
    }
    .login-modal__body,
    .login-modal__body--registration {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        gap: 2rem;

        padding: 0 8rem;
    }

    .lable {
        position: absolute;
    }

    .login-modal__input {
        margin: 1rem 0;
        border: 2px solid var(--gray-bg-color);

        transition: 0.1s all linear;
    }

    .login-modal__input--registration {
        margin: 1rem 0 3rem ;
    }

    .login-modal__input:hover {
        border-color: var(--black-color);
    }

    .login-modal__input:focus {
        border-color: var(--black-color);
        
        outline: none;
    }
    .btn__login {
        display: inline-block;

        margin-right: 2rem;
        padding: 1rem 3rem;
        border-radius: 1rem;
        border: 0;
        background-color: transparent;

        font-size: 2rem;

    }

    .login-modal__input {
        width: 300px;
        padding: 0.5rem;
        font-size: 1.5rem;
    }

    .login-modal__reCAPTCHA,
    .login-modal__agreement {
        text-align: center;
        color: var(--gray-text-color);
        font-size: 1rem;
    }
    .login-modal__reCAPTCHA {
        opacity: 0.6;
    }
    .login-modal__reCAPTCHA--link,
    .login-modal__agreement--link {
        color: var(--black-color);
        text-decoration: none;
    }

    .login-modal__agreement--link:hover,
    .login-modal__reCAPTCHA--link:hover {
        text-decoration: underline;
    }


    .login-modal__agreement {
        font-size: 1.3rem;
    }

    .login-modal__submit {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }

    .forgot-pass-link {
        font-size: 1.5rem;
        color: var(--black-color);
    }

    .remember-me {
        margin-bottom: 2rem;

        font-size: 1.4rem;
    }
    .custom-checkbox input {
        display: none; /* Скрываем стандартный checkbox */
    }

    .checkmark {
        position: relative;
        display: inline-block;
        width: 17px;
        height: 17px;
        background-color: #fff;
        border: 2px solid var(--gray-text-color);
        vertical-align: middle;
        margin-right: 8px;

        cursor: pointer;

        transition: 0.1s all linear;
    }
    .checkmark:hover {
        border: 2px solid var(--black-color);
    }

    .checkmark::after {
        content: "";
        position: absolute;
        display: none;
    }

    .custom-checkbox input:checked + .checkmark {
        background-color: var(--blue-color); /* Цвет, когда чекбокс выбран */
        border-color: var(--blue-color);

        transition: border 0.1s linear;
    }
    .custom-checkbox input:checked + .checkmark:hover {
        background-color: var(--dark-blue-color); /* Цвет, когда чекбокс выбран */
        border-color: var(--dark-blue-color);
    }
    .custom-checkbox input:checked + .checkmark::after {
        display: block;
        content: '✔'; /* Или используйте Unicode символ галочки */
        color: white;
        left: 50%;
        top: 45%;
        transform: translate(-50%, -50%);
        font-size: 1.6rem;
    }

    .remember-me__label {
        vertical-align: middle;
        cursor: pointer;
    }

    .btn__login-modal {
        padding: 1rem 3rem;
    }
    .btn__login--active {
        background-color: var(--black-color);
        color: var(--white-color);
    }
</style>