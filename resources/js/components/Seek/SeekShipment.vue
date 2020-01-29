<template>
    <section>
        <div class="columns" style="margin-top:2px">
            <div class="column">
                <div class="control">
                    <input class="input" name="pickuppoint" v-validate="'required'" v-model="form.pickup_point" :class="{ 'is-danger': errors.has('pickuppoint') }">
                    <div class="field-placeholder">
                        <span>Loading point</span>
                    </div>
                    <span v-show="errors.has('pickuppoint')" class="help is-danger">Pickup point is required</span>
                </div>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <div class="control">
                    <datetime class="input" v-model="form.load_date" v-validate="'required'" style="width: 100%;" name="load_date" :class="{ 'is-danger': errors.has('load_date') }"></datetime>
                    <div class="field-placeholder">
                        <span>Loading date</span>
                    </div>
                    <span v-show="errors.has('load_date')" class="invalid-feedback">Date is required</span>
                </div>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <div class="control">
                    <datetime class="input" type="time" v-model="form.load_time" v-validate="'required'" style="width: 100%;" use12-hour name="time" :class="{ 'is-danger': errors.has('time') }"></datetime>
                    <div class="field-placeholder">
                        <span>Loading time</span>
                    </div>
                    <span v-show="errors.has('time')" class="invalid-feedback">Time is required</span>
                </div>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <div class="control">
                    <input class="input" type="text" v-model="form.delivery_point">
                    <div class="field-placeholder">
                        <span>Preferred destinatin (optional)</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <div class="control">
                    <div class="select" :class="{ 'is-danger': errors.has('vehicle_type') }">
                        <select v-model="form.vehicle_type" v-validate="'required'" name="vehicle_type">
                            <option v-for="item,index in vtype" :key="index" :value="item">{{item}}</option>
                        </select>
                    </div>
                      <div class="select-placeholder">
                        <span>Vehicle type</span>
                    </div>
                    <span v-show="errors.has('vehicle_type')" class="invalid-feedback">Vehcile type is required</span>
                </div>
                </div>
            </div>
        </div>
        <!--   <div class="columns">
            <div class="column">
                <div class="control">
                    <input class="input"v-model="form.amount"  v-validate="'required'" name="amount"
                    :class="{ 'is-danger': errors.has('amount') }">
                    <div class="field-placeholder">
                        <span>Asking amount</span>
                    </div>
                    <span v-show="errors.has('amount')" class="invalid-feedback">Asking amount is required</span>
                </div>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <div class="control">
                    <input class="input" type="text" v-model="form.load"  v-validate="'required'" name="load"  :class="{ 'is-danger': errors.has('load') }">
                    <div class="field-placeholder">
                        <span>What amount of load you want to carry?</span>
                    </div>
                    <span v-show="errors.has('load')" class="invalid-feedback">Specify amount of load you want to carry</span>
                </div>
            </div>
        </div> -->
        <!--  <div class="columns">
            <div class="column">
                <div class="control">
                     <div class="select" :class="{ 'is-danger': errors.has('package') }">
                        <select v-model="form.package" v-validate="'required'" name="package" >
                            <option v-for="item,index in ptype" :key="index" :value="item">{{item}}</option>
                        </select>
                    </div>
                    <div class="select-placeholder">
                        <span>What do you preffer to carry?</span>
                    </div>
                      <span v-show="errors.has('package')" class="help is-danger">Specify what do you want to carry</span>
                </div>
            </div>
        </div> -->
        <div class="columns">
            <div class="column">
                <div class="control">
                    <textarea class="textarea" v-model="form.note" rows="4" placeholder="Notes"></textarea>
                </div>
            </div>
        </div>
        <b-button type="is-primary is-pulled-right" @click="submit">Submit</b-button>
    </section>
</template>
<script>
export default {
    data() {
        return {
            form: {
                post_type: 'seek_shipment',
                pickup_point: '',
                load_date: '',
                load_time: '',
                delivery_point: '',
                vehicle_type: '',
                note: ''
            },
            ptype: [
                'Boxes in pallet',
                'Boxed',
                'Open',
                'Anything'
            ],
            vtype: [
                'Box Truck',
                'Covered Van/Cargo Van',
                'Flatbed Truck',
                'Heavy Hauler',
                'Pick up Truck',
                'Semi Truck/18-Wheeler'
            ]
        }
    },
    methods: {
        submit() {
            this.$validator.validateAll().then((result) => {
                if (result) {
                    this.$axios.post('/seekshipment', this.form)
                        .then((res) => {
                            this.$buefy.notification.open({
                                message: 'Shipment Successfully posted',
                                type: 'is-success',
                                hasIcon: true,
                                position: 'is-top-right',
                                indefinite: true,
                            })
                        })
                }
            })
        }
    }
}

</script>
<style scoped>
.field-label {
    text-align: left !important;
}

</style>
