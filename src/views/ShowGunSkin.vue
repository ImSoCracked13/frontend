<template>
    <div>
        <h1>Show Gun Skin</h1>
    
        <div class="ui labeled input fluid">
            <div class="ui label"><i class="fire icon"></i>Gun</div>
            <input type="text" disabled :value="gunSkin.gun" />
        </div>
    
        <div class="ui labeled input fluid">
            <div class="ui label"><i class="paint brush icon"></i>Skin</div>
            <input type="text" disabled :value="gunSkin.skin" />
        </div>

        <div class="ui labeled input fluid">
            <div class="ui label"><i class="money bill alternate icon"></i>Price</div>
            <input type="text" disabled :value="gunSkin.price" />
        </div>

        <div class="ui labeled input fluid">
            <div class="ui label"><i class="calendar plus icon"></i>Date</div>
            <input type="text" disabled :value="gunSkin.created_date" />
        </div>

        <div class="actions">
            <router-link :to="{ name: 'edit', params: { id: this.$route.params.id } }">
                <button class="ui yellow button">Edit</button>
            </router-link>
        </div>
    </div>
</template>

<script>
    import { api } from "../methods/gateway"
    
    export default {
        name: "show-gun-skin",
        data() {
            return {
                gunSkin: {},
            };
        },
        async mounted() {
            this.gunSkin = await api.getGunSkin(this.$route.params.id);
        }
    };
</script>


<style scoped>
    .actions a {
    display: block;
    text-decoration: underline;
    margin: 20px 10px;
    }
</style>
