<template>
    <div class="card">
        <div class="card-element">
            <div class="columns" style="margin-bottom:-20px">
                <div class="column is-2">
                    <div class="control">
                        <input class="input" type="text" />
                        <div class="field-placeholder">
                            <span>City</span>
                        </div>
                    </div>
                </div>
                <div class="column is-2">
                    <div class="control">
                        <input class="input" type="text" />
                        <div class="field-placeholder">
                            <span>State</span>
                        </div>
                    </div>
                </div>
                <div class="column is-2">
                    <VueCtkDateTimePicker v-validate="'required'" id="DatePicker" label="Pick Up Date" :no-label="true" v-model="datesearch" color="#6BA3FF" input-size="sm" :no-header="true" formatted="YYYY-MM-DD" output-format="YYYY-MM-DD" :no-button-now="true" :only-date="true" :auto-close="true" />
                </div>
            </div>
            <b-table :data="shipment" :striped="true" :hoverable="true" v-if="shipment.length>0">
                <template slot-scope="props">
                    <b-table-column field="pickup_date" label="Pick Up Date" width="40" centered>{{ props.row.pickup_date }}</b-table-column>
                    <b-table-column field="pickup" label="Pick Up" width="40" centered>{{ props.row.pickup }}</b-table-column>
                    <b-table-column field="unload" label="Delivery" width="40" centered>{{ props.row.unload }}</b-table-column>
                    <b-table-column field="distance" label="Distance" width="40" centered>{{ props.row.distance }}</b-table-column>
                    <b-table-column field="weight" label="Weight" width="40" centered>{{ props.row.weight }}</b-table-column>
                    <b-table-column field="load_type" label="Load Type" width="40" centered>{{ props.row.load_type}}</b-table-column>
                    <b-table-column field="price" label="Price" width="40" centered>{{ props.row.price }}</b-table-column>
                    <b-table-column label="Company" width="40" centered>
                        <router-link :to="props.row.company">
                            <a>company</a>
                        </router-link>
                    </b-table-column>
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
</template>
<script>
export default {
    data() {
        return {
            datesearch: null,
        };
    },
    computed: {
        shipment() {
            return this.$store.getters.shipments.filter(ship => {
                return ship.status=="in-transit"
            });
        }
    },



};

</script>
<style scoped>
.button.is-small {
    border-radius: 2px;
    font-size: 0.75rem;
    width: 55px;
    padding: 2px;
}
.field-label {
    text-align: left !important;
}

.input {
    font-size: 0.8rem !important;
    height: 2.4em !important;
}

.select select {
    height: 2.5em !important;
    font-size: 0.8rem !important;
}
</style>
