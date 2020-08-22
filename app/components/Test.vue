<template>
    <Page>
        <ActionBar title="Home" />
        
        <TabView>
            <TabViewItem title="Home">
                <Label text="Content for Home" />
            </TabViewItem>
            <TabViewItem title="Settings">
                <Label text="Content for Settings" />
            </TabViewItem>
            <TabViewItem title="Info">
                <Label text="Content for Info" />
            </TabViewItem>
        </TabView>
  <!-- <ActivityIndicator busy="false" color="green" />       -->
    </Page>
</template>

<script>
    import {getspaces} from "../utilities/http-services.js";

    export default {
        methods: {
            onButtonTap() {
                this.loading = true;
                getspaces(function(response){
                    this.loading = false;
                    if(response.status)
                    {
                        
                        console.log(response.result)
                    }
                    else{
                        console.log(response);
                    }
                });
            }
        },
        data() {
            return {
                loading: false
            };
        },
        mounted() {
            // this.onButtonTap();
        }
    };
</script>

<style scoped>
    .home-panel {
        vertical-align: center;
        font-size: 20;
        margin: 15;
    }

    .description-label {
        margin-bottom: 15;
    }
</style>