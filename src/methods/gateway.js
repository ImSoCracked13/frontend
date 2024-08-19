import axios from 'axios'
import Vue from 'vue'
import VueFlashMessage from 'vue-flash-message'
import 'vue-flash-message/dist/vue-flash-message.min.css'

Vue.use(VueFlashMessage, {
    messageOptions: {
        timeout: 4000,
        pauseOnInteract: true
    }
})

const vm = new Vue()
const baseURL = 'http://localhost:4000/gunSkins/'

const handleError = fn => (...params) =>
    fn(...params).catch(error => {
        vm.flash(`${error.response.status}: ${error.response.statusText}`, 'error')
    })

    export const api = {
    getGunSkin: handleError(async (id) => {
        const res = await axios.get(baseURL + id)
        return res.data
    }),
    getGunSkins: handleError(async () => {
        const res = await axios.get(baseURL)
        return res.data
    }),
    deleteGunSkin: handleError(async (id) => {
        const res = await axios.delete(baseURL + id)
        return res.data
    }),
    // deleteGunSkins: handleError(async () => {
    //    const res = await axios.delete(baseURL)
    //    return res.data
    // }),
    createGunSkin: handleError(async (payload) => {
        const res = await axios.post(baseURL, payload)
        return res.data
    }),
    updateGunSkin: handleError(async (payload) => {
        const res = await axios.put(baseURL + payload._id, payload)
        return res.data
    })
}
