<template>

    <v-app>

        <v-navigation-drawer
                :persistent="true"
                :clipped="false"
                :floating="false"
                :mini-variant="false"
                absolute
                overflow
                enable-resize-watcher
                v-model="sidebar">

            <v-list>

                <v-list-item>
                    <v-list-tile router nuxt href="/">
                        <v-list-tile-title>Home</v-list-tile-title>
                    </v-list-tile>
                </v-list-item>
                <v-list-item>
                    <v-list-tile router nuxt href="/test">
                        <v-list-tile-title>Test</v-list-tile-title>
                    </v-list-tile>
                </v-list-item>

            </v-list>

        </v-navigation-drawer>

        <v-toolbar dark class="primary">
            <v-toolbar-side-icon  @click.stop="sidebar = !sidebar" />
            <v-toolbar-logo>B2W</v-toolbar-logo>
            <v-toolbar-title class="white--text">Title</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>apps</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>refresh</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>more_vert</v-icon>
            </v-btn>
        </v-toolbar>

        <main>

            <v-container fluid>
                <nuxt/>
            </v-container>

        </main>
        <v-footer class="pa-3">
            <v-spacer></v-spacer>
            <div>© {{ footer }}</div>
        </v-footer>
    </v-app>

</template>

<script>
    export default {
        data() {
            return {
                footer: new Date().getFullYear(),
                sidebar: false
            }
        }
    }
</script>

<style scoped>
    .title {
        padding-left: 20px;
    }
</style>