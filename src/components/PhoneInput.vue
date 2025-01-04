<template>
  <input
    ref="phoneInput"
    class="login-modal__input login-modal__input--phone"
    type="text"
    name="phone"
    placeholder="Номер телефона"
  />
</template>

<script>
export default {
    name: "PhoneInput",
    data() {
        return {
            allowedChars: [0,1,2,3,4,5,6,7,8,9],
            placeholderClickValue: "+7(___)___-__-__",
        };
    },
    methods() {


    }

};
</script>

<style lang="scss">
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
</style>
    