import { arrayOfGoods } from "@/constants/goods";
import { arrayOfRests } from "@/constants/rests";
import { reactive } from "vue";


export const store = reactive ({
    isOpen: false,
    rests: arrayOfRests,
    goods: arrayOfGoods,

    toggleModal (value) {
        this.isOpen = value;
    }
})

