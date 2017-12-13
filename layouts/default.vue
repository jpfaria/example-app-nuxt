<template>

    <v-app>

        <v-navigation-drawer
                fixed
                v-model="sidebar"
                app
        >
            <v-list dense>
                <v-list-tile @click="">
                    <v-list-tile-action>
                        <v-icon>home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Home</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="">
                    <v-list-tile-action>
                        <v-icon>contact_mail</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Contact</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar color="indigo" dark fixed app>
            <v-toolbar-side-icon @click.stop="sidebar = !sidebar"></v-toolbar-side-icon>
            <v-toolbar-title>Application</v-toolbar-title>
        </v-toolbar>
        <v-content>
            <v-container fluid fill-height>
                <nuxt/>
            </v-container>
        </v-content>
        <v-footer color="indigo" app>
            <div>© {{ footer }}</div>
        </v-footer>

    </v-app>

</template>

<script>
    export default {
        data() {
            return {
                footer: new Date().getFullYear(),
                sidebar: true
            }
        }
    }
</script>

<style scoped>
    .title {
        padding-left: 20px;
    }
</style>