<template>
    <Page class="page">
        <ActionBar :title="space.name+'s'" class="action-bar" />
        <StackLayout>
            <ListView v-if="!loading" for="count in spacescount" @itemTap="onSpaceNumberTap" style="height:1250px">
                <v-template>
                    <FlexboxLayout flexDirection="row">
                        <Image :src="space.icon" class="thumb img-circle" />
                        <Label :text="space.name+' '+count" class="t-20" style="width: 40%" />
                    </FlexboxLayout>
                </v-template>
            </ListView>
            <ActivityIndicator :busy="loading" v-else-if="loading" />
        </StackLayout>
        <!-- <Button @tap="this.$navigateBack" text="Go Back"></Button> -->
    </Page>
</template>

<script>
    import {getspacecount} from '../utilities/http-services.js';

    export default {
        props: ["space"],
        data() {
            return {
                loading: false,
                spacescount: []
            };
        },
        methods: {
            onSpaceNumberTap: function(args){
                console.log('as');
                console.log(args.item);
            }
        },
        mounted(){
            getspacecount(this);
            // console.log(this.space.id);
        }
    };
</script>

<style>
</style>