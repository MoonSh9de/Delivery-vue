import { arrayOfGoods } from "@/constants/goods";
import { arrayOfRests } from "@/constants/rests";
import { cart } from "@/constants/cart";
import { reactive } from "vue";


export const store = reactive ({
    isOpen: false,
    rests: arrayOfRests,
    goods: arrayOfGoods,
    cart: cart,
    toggleModal (value) {
        this.isOpen = value;
    }
})

