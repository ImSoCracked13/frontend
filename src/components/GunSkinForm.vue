<template>
    <form action="#" @submit.prevent="onSubmit" class="ui form">
        <p v-if="errorsPresent" class="ui red message">Please fill out all fields!</p>

        <div class="ui labeled input fluid">
            <div class="ui label"><i class="fire icon"></i>Gun</div>
            <input type="text" placeholder="Enter Gun Model..." v-model="gunSkin.gun" />
        </div>

        <div class="ui labeled input fluid">
            <div class="ui label"><i class="paint brush icon"></i>Skin</div>
            <input type="text" placeholder="Enter Skin Pattern..." v-model="gunSkin.skin" />
        </div>

        <div class="ui labeled input fluid">
            <div class="ui label"><i class="money bill alternate icon"></i>Price</div>
            <input type="text" placeholder="Enter Market Price..." v-model="gunSkin.price" />
        </div>

        <button class="ui primary button">Submit</button>

    </form>
</template>


<script>
    export default {
        name: "gun-skin-form",
        props: {
            gunSkin: {
                type: Object,
                required: false,
                default: () => ({
                    gun: "",
                    skin: "",
                    price: "",
                }),
            },
        },
        data() {
            return {
                errorsPresent: false,
            };
        },
        methods: {
            onSubmit: function() {
                if (this.gunSkin.gun === "" || this.gunSkin.skin === "" || this.gunSkin.price === "") {
                    this.errorsPresent = true;
                } else {
                    this.$emit("createOrUpdate", this.gunSkin);
                }
            },
        },
    };
</script>


