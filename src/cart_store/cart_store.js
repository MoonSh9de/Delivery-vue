import { createStore } from "vuex";

export default createStore({
    state: {
        cart: []
    },
    mulations: {
        addToCart(state, product) {
            state.cart.push(product)
        },
        removeFromCart(state, productId) {
            state.cart = state.cart.filter(product => product.id !== productId);
        }
    },
    actions: {
        addToCart({commit}, product) {
            commit('addToCart', product);
        },
        removeFormCart({commit}, productId) {
            commit('removeFromCar', productId);
        }
    },
    getters: {
        cart: state => state.cart
    }
})