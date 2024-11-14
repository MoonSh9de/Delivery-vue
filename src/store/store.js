import { arrayOfGoods } from "@/constants/goods";
import { arrayOfRests } from "@/constants/rests";
import { reactive, ref } from "vue";

export const store = reactive ({
    isOpen: ref(false),
    rests: arrayOfRests,
    modalType: ref(null),
    goods: arrayOfGoods,
    cart: ref([]),
    toggleModal (value, modalType = null) {
        this.isOpen = value;
        this.modalType = modalType
    },
    updateCart(newCart) {
        this.cart = newCart;
    },
    clearCart() {
        this.cart.length = 0;
    }
})

