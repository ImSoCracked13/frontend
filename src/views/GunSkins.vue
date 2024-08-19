<template>
    <div>
        <h1>Gun Skin(s) Store</h1>
        <table id="gunSkins" class="ui celled compact table">
        <thead>
            <tr>
                <th>Gun</th>
                <th>Skin</th>
                <th>Price</th>
                <th colspan="3">Options</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(gunSkin, i) in gunSkins" :key="i">
                <td>{{ gunSkin.gun }}</td>
                <td>{{ gunSkin.skin }}</td>
                <td>${{ gunSkin.price }}</td>
            
                <td width="75" class="center aligned">
                <router-link :to="{ name: 'show', params: { id: gunSkin._id } }">
                    <button class="ui primary button">Show</button>
                </router-link>
                </td>

                <td width="75" class="center aligned">
                <router-link :to="{ name: 'edit', params: { id: gunSkin._id } }">
                    <button class="ui yellow button">Edit</button>
                </router-link>
                </td>

                <td width="75" class="center aligned" @click.prevent="onDelete(gunSkin._id)">
                    <a href="`/gunSkins/${gunSkin._id}`">
                        <button class="ui red button"> Delete</button>
                    </a>
                </td>
            </tr>
        </tbody>
        </table>
    </div>
</template>

<script>
    import { api } from "../methods/gateway"

    export default {
    name: "gun-skins",
    data() {
        return {
        gunSkins: [],
        };
    },
    methods: {
        async onDelete(id) {
        const sure = window.confirm("Are you really sure to delete this Gun Skin ?");
        if (!sure) return;
        await api.deleteGunSkin(id);
        this.flash("A Gun Skin has been deleted!", "success");
        const newGunSkins = this.gunSkins.filter((gunSkin) => gunSkin._id !== id);
        this.gunSkins = newGunSkins;
        },
    },
    async mounted() {
        this.gunSkins = await api.getGunSkins();
    },
};
</script>
