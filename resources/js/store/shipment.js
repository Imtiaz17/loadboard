import store from '@/store';
import $axios from '../app';

const state = {
    page: 1,
    shipments: [],
    listLoading: false,
};
const mutations = {
    SET_SHIPS: (state, data) => {
        state.shipments = data;
    },
}

const actions = {
    saveShipments({ commit, data }) {
        console.log(data)
    },
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
