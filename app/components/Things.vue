<template>
    <Page class="page">
        <ActionBar title="Things" class="action-bar" />
        <StackLayout class="home-panel">

            <ListView for="thing in Things" @itemTap="onItemTap"
                style="height:1250px">
                <v-template>
                    <FlexboxLayout flexDirection="row">
                        <Image :src="thing.icon" class="thumb img-circle" />
                        <Label :text="thing.name" class="t-18"
                            style="width: 50%" />
                        <Switch :checked="Boolean(thing.state)" />
                    </FlexboxLayout>
                </v-template>
            </ListView>

        </StackLayout>
    </Page>
</template>

<script>
    import {
        Home
    } from "../data/home.json";
    export default {
        props: ["space", "number"], //getting this from previous(source) page
        data() {
            return {
                countries: [{
                        name: "Australia",
                        imageSrc: "~/assets/icons/thing/waterpump.png"
                    },
                    {
                        name: "Belgium",
                        imageSrc: "~/assets/icons/thing/light.png"
                    }
                ],

                Things: Home.Things
            };
        },
        methods: {
            onItemTap: function(args) {
                console.log("Item with index: " + args.index + " tapped");
            },
            onButtonTap() {}
        },
        created() {
            console.log("create event fired: " + this.space);
        },
        mounted() {
            console.log("mounted event fired " + this.space);
        }
    };
</script>

<style>
    .home-panel {
        vertical-align: center;
        font-size: 20;
        margin: 10;
    }

    .description-label {
        margin-bottom: 15;
    }
</style>