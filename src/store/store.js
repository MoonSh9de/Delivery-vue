import { arrayOfGoods } from "@/constants/goods";
import { arrayOfRests } from "@/constants/rests";
import { reactive, ref } from "vue";

export const store = reactive ({
    isOpen: false,
    rests: arrayOfRests,
    goods: arrayOfGoods,
    cart: [],
    toggleModal (value) {
        this.isOpen = value;
    },
    updateCart(newCart) {
        this.cart = newCart;
    },
    clearCart() {
        this.cart.length = 0;
    }
})

