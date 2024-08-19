<template>
    <div>
        <h1>Edit Gun (or) Skin</h1>
        <gun-skin-form @createOrUpdate="createOrUpdate" :gunSkin="this.gunSkin"></gun-skin-form>
    </div>
</template>

<script>
    import GunSkinForm from "../components/GunSkinForm.vue"; 
    import { api } from "../methods/gateway"

    export default {
        name: "edit-gun-skin",
        components: {
            'gun-skin-form': GunSkinForm,
        },
        data: function () {
            return {
                gunSkin: {},
            };
        },
        methods: {
            createOrUpdate: async function (gunSkin) {
                await api.updateGunSkin(gunSkin);
                this.flash("A Gun (or) Skin has been changed!", "success");
                this.$router.push(`/gunSkins/`);
            },
        },
        async mounted() {
            this.gunSkin = await api.getGunSkin(this.$route.params.id);
        }
    };
</script>
