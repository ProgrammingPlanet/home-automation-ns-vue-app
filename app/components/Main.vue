<template>
    <Page>
        <ActionBar title="Home" />
        <TabView androidTabsPosition="bottom"> <!-- "top" for tabs -->
            <TabViewItem title="Home" iconSource="res://home">
                <StackLayout>
                    <Spaces />
                </StackLayout>
            </TabViewItem>
            <TabViewItem title="Settings" iconSource="res://gear">
                <Label text="Content for Settings" />
            </TabViewItem>
            <TabViewItem title="Info" iconSource="res://info">
                <Label text="Content for Info" />
            </TabViewItem>
        </TabView>
        
    </Page>
</template>

<script>
    import Spaces from "./Spaces.vue";

    export default {
        components: {
            Spaces
        },
        methods: {
            
        },
        data() {
            return {

            };
        }
    };
</script>

<style scoped>
    
</style>