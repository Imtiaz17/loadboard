import Vuex from 'vuex';
import Vue from 'vue';
import Cookies from 'js-cookie'
import $axios from '../app';

import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        user: null,
        name: null,
        role: null,
        token: null,
        id: null,
        username: null,
        isLoading: false,
        shipments:[],
        shipment:[],
        seekshipments: {},
        myshipments:[]
    },

    getters: {
        isLoading: state => state.isLoading,
        user: state => state.user,
        token: state => state.token,
        check: state => state.user !== null,
        shipments: state => state.shipments,
        shipment: state => state.shipment,
        myshipments: state => state.myshipments,
        seekshipments: state => state.seekshipments
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
        },
        SET_SHIPMENT(state, data) {
            state.shipment = data
        },
        SAVE_SHIPMENTS(state,data){
            state.shipments = data
        },
        FETCH_USER_SUCCESS(state, user) {

            state.user = user.data
            state.name = user.data['first_name']
            state.role = user.data['role']
            state.id = user.data['id']
            state.username = user.data['username']
        },
        SET_MYSHIPMENTS(state,data){
            state.myshipments=data.data

        },

        Remove_User(state) {
            state.user = null
            state.name = null
            state.token = null
            state.id = null
            state.role = null
            state.username = null
        },
        SET_SHIPS: (state, data) => {
            state.shipments = data.data;
        },
        SET_SEEK_SHIPS: (state, data) => {
            state.seekshipments = data;
        },
    },
    // plugins: [createPersistedState({
    //     storage: {
    //         getItem: key => Cookies.get(key),
    //         setItem: (key, value) => Cookies.set(key, value, { expires: 3 }),
    //         removeItem: key => Cookies.remove(key)
    //     }
    // })],
    actions: {
        getInfo({ commit, state }) {
            state.isLoading = true
            $axios.get('/user')
                .then((res) => {
                    commit('FETCH_USER_SUCCESS', res.data)
                    state.isLoading = false

                })
        },
        saveShipments({ commit, dispatch },{data}) {
            commit('SAVE_SHIPMENTS',data)
        },
        saveToken({ commit, dispatch }, { token }) {
            commit('SET_TOKEN', token)
            Cookies.set('token', token)
            $axios.get('/user')
                .then((res) => {
                    commit('FETCH_USER_SUCCESS', res.data)
                })
        },
        logout({ commit, state }) {
            state.isLoading = true
            return new Promise((resolve, reject) => {
                $axios.post('/logout')
                    .then(() => {
                        Cookies.remove('token');
                        commit('Remove_User')
                        resolve();
                    })

            })
        },
        isload({ state }) {
            state.isLoading = false
        },
        getAllShipments({ commit, state }) {
            $axios.get('/shipment')
                .then((res) => {
                    commit('SET_SHIPS', res.data.data)
                })

        },
        getShipment({ commit }, shipment_id) {
            $axios.get('/shipment/' + shipment_id)
                .then((res) => {
                    commit('SET_SHIPMENT', res.data.data)
                })

        },
        getSeekingShipments({ commit, state }) {
            $axios.get('/seekshipment')
                .then((res) => {
                    commit('SET_SEEK_SHIPS', res.data)
                })

        },
        myshipments({ commit, state }) {
            setTimeout(() => {
            $axios.get('/myshipments/' + state.username)
                .then((res) => {
                  commit('SET_MYSHIPMENTS', res.data)
                })
            },2000)

        },
    }
})
