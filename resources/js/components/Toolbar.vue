<template>
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <h3>Loadboard</h3>
            </b-navbar-item>
        </template>
        <template slot="start">
            <!--    <b-navbar-item href="#">
                Home
            </b-navbar-item>
            <b-navbar-item href="#">
                Documentation
            </b-navbar-item>
            <b-navbar-dropdown label="Info">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown> -->
        </template>
        <template slot="end">
            <b-navbar-item tag="div" v-if="isLoading">
                <span style="font-size: 13px;">Loading.....</span>
            </b-navbar-item>
            <b-navbar-item tag="div" v-else>
                <div class="buttons">
                    <router-link to="/register" v-show="!loggedin">
                        <a class="button is-info" style="margin-right: 4px;">
                            <strong>Sign up</strong>
                        </a>
                    </router-link>
                    <router-link to="/login" v-show="!loggedin">
                        <a class="button is-light">
                            Log in
                        </a>
                    </router-link>
                  
                        <b-navbar-item v-show="loggedin" style="border-right: 1px solid #ccc;height: 21px;">
                              <router-link to="/myshipment">
                            Load history
                        </router-link>
                        </b-navbar-item>
                
                    <b-dropdown hoverable aria-role="list" v-if="user" v-show="loggedin" style="margin-left: 10px;">
                        <p slot="trigger">{{name}}</p>
                        <b-dropdown-item aria-role="listitem">
                            <router-link :to="{ name: 'profile', params: { username: user.username }}">
                                Profile
                            </router-link>
                        </b-dropdown-item>
                        <b-dropdown-item aria-role="listitem" @click="logout">Logout</b-dropdown-item>
                    </b-dropdown>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>
<script>
import { getToken } from '../utils/auth';
export default {

    data() {
        return {

        }
    },
    computed: {
        user() {
            return this.$store.getters['user']
        },
        loggedin() {
            return this.$store.getters['check']
        },
        name() {
            return this.$store.state['name']
        },
        isLoading() {
            return this.$store.getters.isLoading
        },

    },
    methods: {

        logout() {
            this.$store.dispatch('logout')
            setTimeout(() => {
                this.$router.push('/')
            }, 1000);
            this.$store.dispatch('isload')
        }

    }
}

</script>
<style scoped>
.button.is-small {
    border-radius: 2px;
    font-size: 0.75rem;
    width: 55px;
    padding: 2px;
}

</style>
