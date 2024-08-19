<template>
    <div>
        <h1>Add New Gun Skin</h1>
        <gun-skin-form @createOrUpdate="createOrUpdate"></gun-skin-form>
    </div>
</template>

<script>
    import GunSkinForm from "../components/GunSkinForm.vue"
    import { api } from "../methods/gateway"
    
    export default {
        name: 'new-gun-skin',
        components: {
        'gun-skin-form' : GunSkinForm
        },
        methods: {
        createOrUpdate: async function (gunSkin) {
            const res = await api.createGunSkin(gunSkin)
            this.flash('A gun skin has been added to the store!', 'success')
            this.$router.push(`/gunSkins`)
        }
        }
    }
</script>