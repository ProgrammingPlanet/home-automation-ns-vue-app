<template>
    <StackLayout class="home-panel">
        <ListView v-if="!loading" for="Space in Spaces" @itemTap="onSpaceTap" style="height:1250px">
            <v-template>
                <FlexboxLayout flexDirection="row">
                    <Image :src="Space.icon" class="thumb img-circle" />
                    <Label :text="Space.name" class="t-20" style="width: 40%" />
                </FlexboxLayout>
            </v-template>
        </ListView>
        <ActivityIndicator :busy="loading" v-else-if="loading" />  <!-- @busyChange="onBusyChanged" -->
    </StackLayout>
    
</template>

<script>
    import {getspaces} from '../utilities/http-services.js'
    export default {
        data() {
            return {
                loading: false,
                Spaces: []
            };
        },
        methods: {
            onSpaceTap: function(args) {
                let item = args.item;
                if(item.name == "Other"){
                    this.$goto("things",{
                        props: {
                            space: item,
                            number: null
                        }
                    });
                }else{
                    this.$goto("space",{
                        props: {
                            space: item
                        }
                    });
                }
                // console.log(args.item/* .name */);
            }
        },
        mounted(){
            // console.log('mounted');
            getspaces(this);
        }
    };
</script>

<style scoped>
    .home-panel {
        vertical-align: center;
        font-size: 20;
        margin: 5 10 0 10;
    }

    .description-label {
        margin-bottom: 15;
    }
</style>