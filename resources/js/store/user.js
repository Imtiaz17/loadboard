import store from './index';
import Cookies from 'js-cookie'
import $axios from '../app';
const state = {
    user: null,
    token: null,
    id: null,
    shipments: [],

};

const getters = {
    user: state => state.user,
    token: state => state.token,
    check: state => state.user !== null,
    shipments: state => state.shipments
};
const mutations = {
    SET_TOKEN(state, token) {
        state.token = token
    },
    FETCH_USER_SUCCESS(state, user) {
        state.user = user
        state.id = user.id

    },
    Remove_User(state) {
        state.user = null
        state.token = null
        state.id = null
    },
    SET_SHIPS: (state, data) => {
        state.shipments = data;
    },
};

const actions = {
    saveToken({ commit, state }, { token }) {
        commit('SET_TOKEN', token)
        Cookies.set('token', token)
        $axios.get('/user')
            .then((res) => {
                commit('FETCH_USER_SUCCESS', res.data)
            })
    },
    logout({ commit, state }) {
        return new Promise((resolve, reject) => {
            axios.post('/api/logout')
                .then(() => {
                    Cookies.remove('token');
                    commit('Remove_User')
                    resolve();
                })
        })
    },
    getAllShipments({ commit, state }) {
        $axios.get('/shipment')
            .then((res) => {
                commit('SET_SHIPS', res.data)
            })

    },
};
export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
