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
                <form action="" method="get">
                    <p>
                        <input
                        ref="phoneInput"
                        class="login-modal__input"
                        type="text"
                        name="phone"
                        :placeholder="placeholder"
                        v-model="phoneNumber"
                        @focus="onFocus"
                        @input="onInput"
                        @keydown="onKeydown"
                        autocomplete="off"
                        required/>
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
                <form action="" method="get">
                    <p>
                        <input
                        class="login-modal__input login-modal__input--registration"
                        type="text"
                        name="phone"
                        placeholder="Номер телефона"
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
import { nextTick, ref } from 'vue';
const activeButton = ref('login');

const props = defineProps({
    isOpen: Boolean,
});

const emit = defineEmits(['toggleModal']);
const closeModal = () => emit("toggleModal");

function setActiveButton(btn) {
    activeButton.value = btn;
}

//Форма
// const phoneInput = ref(null); // Ссылка на элемент <input>
// const phoneNumber = ref('');
// const placeholder = ref('+7(___)___-__-__');
// const mask = ref('+7(___)___-__-__');
// const isFocused = ref(false);

// // Позиции цифр в маске (индексы символов, которые заменяются цифрами)
// const digitPositions = [3, 4, 5, 7, 8, 9, 11, 12, 14, 15];

// const onFocus = () => {
//   isFocused.value = true;
//   if (!phoneNumber.value) {
//     phoneNumber.value = mask.value;
//   }

//   // Установить курсор на первую позицию для ввода цифры
//   nextTick(() => {
//     if (phoneInput.value) {
//       phoneInput.value.setSelectionRange(3, 3);
//     }
//   });
// };

// const onInput = (event) => {
//   if (!isFocused.value) return;

//   const input = event.target;
//   const value = input.value;

//   // Убираем все символы, кроме цифр
//   const cleanedValue = value.replace(/\D/g, '');

// // Применяем маску
//   let maskedValue = mask.value.split('');
//   let digitIndex = 0;

//   for (let i = 0; i < digitPositions.length; i++) {
//     if (cleanedValue[digitIndex]) {
//     maskedValue[digitPositions[i]] = cleanedValue[digitIndex];
//       digitIndex++;
//     } else {
//       maskedValue[digitPositions[i]] = '_'; // Возвращаем '_', если цифры закончились
//     }
//   }

//   // Обновляем значение в поле ввода
//   phoneNumber.value = maskedValue.join('');

//   // Устанавливаем курсор на следующую позицию для ввода
//   nextTick(() => {
//     if (phoneInput.value) {
//       const cursorPosition = digitPositions[digitIndex] || mask.value.length;
//       phoneInput.value.setSelectionRange(cursorPosition, cursorPosition);
//     }
//   });
// };

// // Обработка удаления символов (Backspace)
// const onKeydown = (event) => {
//   if (event.key === 'Backspace') {
//     const input = event.target;
//     const cursorPosition = input.selectionStart;

//     // Если курсор находится на позиции цифры, заменяем её на '_'
//     if (digitPositions.includes(cursorPosition - 1)) {
//       const value = phoneNumber.value.split('');
//       value[cursorPosition - 1] = '_';
//       phoneNumber.value = value.join('');

//       // Устанавливаем курсор на предыдущую позицию
//       nextTick(() => {
//         if (phoneInput.value) {
//           phoneInput.value.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
//         }
//       });

//       event.preventDefault(); // Отменяем стандартное поведение Backspace
//     }
//   }
// };

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