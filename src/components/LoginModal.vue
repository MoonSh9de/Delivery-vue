<template>
    <div class="modal__overlay" :class="{open: isOpen}" @click.self="closeModal()">
         <div class="modal login-modal">
             <div class="modal__header">
                 <h2 class="modal__title">Авторизация</h2>
                 <span @click="closeModal()"><img class="modal__close" src="../assets/images/other/close.svg" alt=""></span>
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
                <form @submit.prevent>
                    <p>
                      <input
                          ref="phoneInput"
                          class="login-modal__input login-modal__input--phone"
                          type="text"
                          name="phone"
                          placeholder="Номер телефона"
                          required
                      />
                    </p>
                    <p>
                        <input
                        class="login-modal__input"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Пароль"
                        required>
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
                <form @submit.prevent>
                    <p>
                      <input
                          ref="phoneInput"
                          class="login-modal__input login-modal__input--phone"
                          type="text"
                          name="phone"
                          placeholder="Номер телефона"
                          required
                      />
                    </p>

                    <p>
                      <input
                          class="login-modal__input"
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Пароль"
                          required>
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
import {ref} from 'vue';

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

<style lang="scss">
.login-modal {
    max-width: 600px;
    height: auto;

    margin: 0 1rem;

    .login-modal__buttons {
        display: flex;
        justify-content: center;
        gap: 2rem;

        margin-bottom: 2rem;

        @include mobile {
            flex-direction: column;
            align-items: center;
        }

    .btn__login {
        display: inline-block;
        padding: 1rem 3rem;
        border-radius: 1rem;
        border: 0;
        background-color: transparent;

        font-size: 2rem;
        transition: 0.3s linear all;

        @include mobile {
            width: 200px;
        }
    }

    .btn__login--active {
        background-color: $black-color;
        color: $white-color;

        transition: 0.3s linear all;
        }
    }

    .login-modal__body,
    .login-modal__body--registration {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        gap: 2rem;

        .lable {
            position: absolute;
        }

        .login-modal__input {
            width: 300px;

            margin: 1rem 0;
            padding: 0.5rem;

            border: 2px solid $gray-bg-color;

            font-size: 1.5rem;

            transition: 0.1s all linear;
        }
        .login-modal__input--registration {
            margin: 1rem 0 3rem ;
        }

        .login-modal__input:hover {
            border-color: $black-color;
        }

        .login-modal__input:focus {
            border-color: $black-color;
            
            outline: none;
        }

        .login-modal__submit {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;

            .forgot-pass-link {
                font-size: 1.5rem;
                color: $black-color;
            }

            .btn__login-modal {
                padding: 1rem 3rem;
            }
        }

        .remember-me {
            margin-bottom: 2rem;

            font-size: 1.4rem;
        }
        .custom-checkbox input {
            display: none;
        }

        .remember-me__label {
            vertical-align: middle;
            cursor: pointer;
        }
        //Переделать
        .checkmark {
            display: inline-block;
            vertical-align: middle;

            width: 17px;
            height: 17px;

            margin-right: 8px;

            background-color: $white-color;
            border: 2px solid $gray-text-color;

            transition: 0.1s all linear;

            cursor: pointer;

            position: relative;
        }
        .checkmark:hover {
            border: 2px solid $black-color;
        }

        .checkmark::after {
            display: none;
            content: "";
            
            position: absolute;
        }

        .custom-checkbox input:checked + .checkmark {
            background-color: $blue-color; /* Цвет, когда чекбокс выбран */
            border-color: $blue-color;

            transition: border 0.1s linear;
        }
        .custom-checkbox input:checked + .checkmark:hover {
            background-color: $dark-blue-color; /* Цвет, когда чекбокс выбран */
            border-color: $dark-blue-color;
        }
        .custom-checkbox input:checked + .checkmark::after {
            display: block;
            content: '✔';
            color: $white-color;
            left: 50%;
            top: 45%;
            transform: translate(-50%, -50%);
            font-size: 1.6rem;
        }
    }

    .login-modal__reCAPTCHA,
    .login-modal__agreement {
        text-align: center;
        color: $gray-text-color;
        font-size: 1rem;
    }
    .login-modal__reCAPTCHA--link,
    .login-modal__agreement--link {
        color: $black-color;
        text-decoration: none;
    }

    .login-modal__agreement--link:hover,
    .login-modal__reCAPTCHA--link:hover {
        text-decoration: underline;
    }

    .login-modal__agreement {
        font-size: 1.3rem;
    }

    .login-modal__reCAPTCHA {
        opacity: 0.6;
    }
}
</style>