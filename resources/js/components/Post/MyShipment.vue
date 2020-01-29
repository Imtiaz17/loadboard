<template>
	<section style="margin:20px 0px">
    <div class="container">
        <div class="columns">
            <div class="column">
                <div class="card">
                    <div class="card-element">
                        <b-table :data="myshipments" :striped="true" :hoverable="true" v-if="myshipments.length>0">
                            <template slot-scope="props">
                                <b-table-column field="pickup_date" label="Pick Up Date" width="40" centered>{{ props.row.pickup_date }}</b-table-column>
                                <b-table-column field="pickup" label="Pick Up" width="40" centered>{{ props.row.pickup }}</b-table-column>
                                <b-table-column field="unload" label="Delivery" width="40" centered>{{ props.row.unload }}</b-table-column>
                                <b-table-column field="distance" label="Distance" width="40" centered>{{ props.row.distance }}</b-table-column>
                                <b-table-column field="weight" label="Weight" width="40" centered>{{ props.row.weight }}</b-table-column>
                                <b-table-column field="load_type" label="Load Type" width="40" centered>{{ props.row.load_type}}</b-table-column>
                                <b-table-column field="price" label="Price" width="40" centered>{{ props.row.price }}</b-table-column>
                                <b-table-column label="Action" width="40" centered>
                                    <button class="button is-small btn-align accent-btn raised rounded btn-outlined">Distance</button>
                                    <router-link :to="props.row.path">
                                        <button class="button is-small btn-align accent-btn raised rounded btn-outlined">view</button>
                                    </router-link>
                                </b-table-column>
                                <!-- <b-table-column field="id" label="Userid" width="40" centered>{{ props.row.id }}</b-table-column> -->
                            </template>
                        </b-table>
                        <div v-else style="padding:30px">
                            <p style="font-size:22px;text-align:center;">Sorry,No data found</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            username: ''
        }
    },
    computed: {
        myshipments() {
            return this.$store.getters['myshipments']
        },

    },
    created() {
        this.getMyShipments();
    },
    mounted() {

    },
    methods: {
        getMyShipments() {
            this.$store.dispatch('myshipments')
            // setTimeout(() => {
            //    this.$axios.get('/myshipments/' + this.username)
            //        .then((res) => {
            //            console.log(res)
            //        })
            //    },2000)
        }

    },
    watch: {

    }
};

</script>
<style scoped>
</style>
