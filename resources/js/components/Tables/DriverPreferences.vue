<template>
 <div class="card">
    <div class="card-element">
        <b-table :data="shipments" :striped="true" :hoverable="true">
            <template slot-scope="props">
                <b-table-column field="load_date" label="Loading date" width="150" centered>
                    {{ props.row.load_date }}
                </b-table-column>
                <b-table-column field="pickup_point" label="Pick Up" width="200" centered>
                    {{ props.row.pickup_point }}
                </b-table-column>
                <b-table-column field="delivery_point" label="Delivery" width="150" centered>
                    {{ props.row.delivery_point }}
                </b-table-column>
                <b-table-column field="vehicle" label="Vehicle" width="150" centered>
                    {{ props.row.vehicle }}
                </b-table-column>
                 <b-table-column field="load_quantity" label="Weight" width="150" centered>
                    {{ props.row.load_quantity }}
                </b-table-column>
                <b-table-column field="amount" label="Price" width="150" centered>
                    {{ props.row.amount }}
                </b-table-column>
                 <b-table-column label="Action" width="100" centered>
                <router-link :to="props.row.path">
                 <button class="button is-small btn-align accent-btn raised rounded btn-outlined">view</button>
                </router-link>
              </b-table-column>
            </template>
        </b-table>
      </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            datesearch: null,
            shipments: []
        }
    },
    computed: {
        // shipment() {
        //     return this.shipments.filter(ship => {
        //         if (this.datesearch == null) {
        //             return this.shipments;
        //         } else {
        //             return ship.pickup_date
        //                 .toLowerCase()
        //                 .includes(this.datesearch.toLowerCase());
        //         }
        //     });
        // }
    },
    created() {
      
     this.getSeekingShipments()
    },
   mounted() {
        EventBus.$on("CarryShipmentPosted", data => {
            this.shipments.unshift(data);
        });
    },
    methods: {
        getSeekingShipments() {
            this.$axios.get('/seekshipment')
                .then((res) => {
                    this.shipments = res.data.data
                })
        }

    },
    watch: {

    }
};

</script>
<style scoped>
</style>
