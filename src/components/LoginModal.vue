<template>
    <div class="modal__overlay" :class="{open: isOpen}" @click.self="closeModal()">
         <div class="modal login-modal">
             <div class="modal__header">
                 <h2 class="modal__title">Войти</h2>
                 <span class="modal__close" @click="closeModal()"><img src="../assets/images/other/close.svg" alt=""></span>
             </div>
        <section class="login-modal__body">
            <div class="login-modal__buttons">
                <button class="btn btn__login btn__login--active" type="submit">Вход</button>
                <button class="btn btn__login" type="submit">Регистрация</button>
            </div>
            <form action="" method="get">
                <p>
                    <input class="login-modal__input" type="text" name="phone" id="phone" placeholder="Номер телефона" required>
                </p>
                <p>
                    <input class="login-modal__input" type="password" name="password" id="password" placeholder="Пароль" required>
                </p>
                <p class="remember-me custom-checkbox">
                    <input type="checkbox" name="remember" checked>
                    <span class="checkmark"></span>
                    <span class="remember-me__label">Запомнить меня</span>
                </p>
                <div class="login-modal__submit">
                    <a class="forgot-pass-link" href="#">Забыли пароль?</a>
                    <button class="btn btn__primary btn__login-modal" type="submit">Войти</button>
                </div>  
            </form>
            <p class="reCAPTCHA">
                Этот сайт защищен reCAPTCHA, и к нему применяются
                <a class="reCAPTCHA__link" target="_blank" href="https://policies.google.com/privacy">политика конфиденциальности</a> и
                <a class="reCAPTCHA__link" target="_blank" href="https://policies.google.com/terms">условия использования Google</a> 
            </p>
        </section>
            </div>
        </div>
  </template>

<script setup>

const props = defineProps({
    isOpen: Boolean,
    cart: Array
});
const emit = defineEmits(['toggleModal']);

const closeModal = () => emit("toggleModal");


</script>

<style>
    .login-modal {
        height: auto;
    }

    .login-modal__body {
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
    }

    .btn__login {
        display: inline-block;

        margin-right: 2rem;

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

    .reCAPTCHA {
        text-align: center;
        color: var(--gray-text-color);
        font-size: 1rem;
    }

    .reCAPTCHA__link {
        color: var(--gray-text-color);
        text-decoration: none;
    }
    .reCAPTCHA__link:hover {
        color: var(--black-color);
        text-decoration: underline;
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
    /* Скрываем стандартный чекбокс */
.remember-me input[type="checkbox"] {
    display: none;
}

/* Стили для нового чекбокса */
.remember-me .checkmark {
    position: relative;
    display: inline-block;
    width: 20px;  /* Размер чекбокса */
    height: 20px; /* Размер чекбокса */
    background-color: #eee; /* Цвет фона неотмеченного чекбокса */
    border: 1px solid #ccc;
    vertical-align: middle;
    margin-right: 5px;
}

/* Стили для отмеченного чекбокса */
.remember-me input[type="checkbox"]:checked + .checkmark {
    background-color: #2196F3; /* Цвет фона отмеченного чекбокса */
}

/* Создаем галочку */
.remember-me .checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Показываем галочку, когда чекбокс отмечен */
.remember-me input[type="checkbox"]:checked + .checkmark:after {
    display: block;
    left: 7px;
    top: 3px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
    color: blue;
}

/* Дополнительные стили для текста */
.remember-me__label {
    vertical-align: middle;
    font-size: 14px; /* Размер шрифта метки */
    color: #333; /* Цвет текста метки */
}

    .btn__login-modal {
        padding: 1rem 3rem;
    }
    .btn__login--active {
        background-color: var(--black-color);
        color: var(--white-color);
    }
</style>