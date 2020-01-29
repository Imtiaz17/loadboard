<template>
    <section>
        <div class="columns" style="margin:0px">
            <div class="column">
                <div class="control">
                    <input class="input" name="pick up" type="text" v-model="form.pickup" v-validate="'required'" :class="{ 'is-danger': errors.has('pick up') }" />
                    <div class="field-placeholder">
                        <span>Pick Up (origin)</span>
                    </div>
                    <span v-show="errors.has('pick up')" class="invalid-feedback">{{ errors.first('pick up') }}</span>
                </div>
            </div>
            <div class="column">
                <div class="control">
                    <VueCtkDateTimePicker v-validate="'required'" name="load_date" :class="{ 'is-danger': errors.has('load_date') }" id="DatePicker" label="Pick Up Date & Time" :no-label="true" color="#6BA3FF" input-size="sm" v-model="form.pickup_date_time" :no-header="true" formatted="lll" output-format="YYYY-MM-DD HH:mm" :no-button-now="true" />
                    <span style="margin-top:-11px" v-show="errors.has('load_date')" class="invalid-feedback">Date is required</span>
                </div>
            </div>
            <div class="column">
                <div class="control">
                    <VueCtkDateTimePicker v-validate="'required'" name="delivery_date" id="DateTimePicker" label="Delivery Date & Time" :no-label="true" formatted="lll" output-format="HH:mm" color="#6BA3FF" input-size="sm" v-model="form.delivery_date_time" :no-header="true" :no-button-now="true" />
                    <span v-show="errors.has('delivery_date')" class="invalid-feedback" style="margin-top: -9px;">Delivery date and time is required</span>
                </div>
            </div>
            <div class="column">
                <div class="control">
                    <input class="input" type="text" v-validate="'required'" name="drop off point" v-model="form.unload" :class="{ 'is-danger': errors.has('drop off point') }" />
                    <div class="field-placeholder">
                        <span>Unload point (destination)</span>
                    </div>
                    <span v-show="errors.has('drop off point')" class="invalid-feedback">Unload point is required</span>
                </div>
            </div>
            <div class="column">
                <div class="control">
                    <div class="select" :class="{ 'is-danger': errors.has('vehicle') }">
                        <select v-model="form.vehicle" v-validate="'required'" name="vehicle">
                            <option v-for="item,index in vtype" :key="index" :value="item">{{item}}</option>
                        </select>
                    </div>
                    <div class="select-placeholder">
                        <span>Vehicle</span>
                    </div>
                    <span v-show="errors.has('vehicle')" class="invalid-feedback">{{ errors.first('vehicle') }}</span>
                </div>
            </div>
        </div>
        <div class="columns" style="margin:0px">
            <div class="column">
                <div class="field has-addons">
                    <p class="control">
                        <input class="input" type="text" v-validate="'required'" v-model="form.weight" name="weight" :class="{ 'is-danger': errors.has('weight') }" />
                    </p>
                    <p class="control">
                        <a class="button" style="height: 2.35em !important;font-size: 13px;">
                            lbs
                        </a>
                    </p>
                    <div class="field-placeholder" style="transform: scale(.75) translateY(-19px) translateX(-147px);z-index: 9999">
                        <span>Weight</span>
                    </div>
                </div>
                <span v-show="errors.has('weight')" class="invalid-feedback">Weight is required</span>
            </div>
            <div class="column">
                <div class="control">
                    <div class="select" :class="{ 'is-danger': errors.has('load_type') }">
                        <select v-model="form.load_type" v-validate="'required'" name="load_type">
                            <option v-for="item,index in ltype" :key="index" :value="item">{{item}}</option>
                        </select>
                    </div>
                    <div class="select-placeholder">
                        <span>Load Type</span>
                    </div>
                    <span v-show="errors.has('load_type')" class="invalid-feedback">Load type is required</span>
                </div>
            </div>
            <div class="column">
                <div class="control">
                    <div class="select" :class="{ 'is-danger': errors.has('material_type') }">
                        <select v-model="form.material_type" v-validate="'required'" name="material_type">
                            <option v-for="item,index in mtype" :key="index" :value="item">{{item}}</option>
                        </select>
                    </div>
                    <div class="select-placeholder">
                        <span>Material Type</span>
                    </div>
                    <span v-show="errors.has('material_type')" class="invalid-feedback">Material type is required</span>
                </div>
            </div>
            <div class="column">
                <div class="control">
                    <input class="input" type="text" v-validate="'required'" v-model="form.load_info" name="goods" :class="{ 'is-danger': errors.has('goods') }" />
                    <div class="field-placeholder">
                        <span>Load Description</span>
                    </div>
                    <span v-show="errors.has('goods')" class="invalid-feedback">Load description is requried</span>
                </div>
            </div>
            <div class="column">
                <div class="control">
                    <div class="select" :class="{ 'is-danger': errors.has('package_type') }">
                        <select v-model="form.package_type" v-validate="'required'" name="package_type">
                            <option v-for="item,index in ptype" :key="index" :value="item">{{item}}</option>
                        </select>
                    </div>
                    <div class="select-placeholder">
                        <span>Package type</span>
                    </div>
                    <span v-show="errors.has('package_type')" class="invalid-feedback">Package type is required</span>
                </div>
            </div>
        </div>
        <div class="columns" style="margin:0px">
            <div class="column is-2">
                <div class="control">
                    <div class="field has-addons">
                        <p class="control">
                            <a class="button" style="height: 2.35em !important;font-size: 13px;">
                                $
                            </a>
                        </p>
                        <p class="control">
                            <input class="input" type="text" v-validate="'required'" v-model="form.price" name="price" :class="{ 'is-danger': errors.has('price') }" />
                        </p>
                        <div class="field-placeholder" style="transform: scale(.75) translateY(-19px) translateX(14px);z-index: 9999">
                            <span>Price</span>
                        </div>
                    </div>
                    <span v-show="errors.has('price')" class="invalid-feedback">Price is required</span>
                </div>
            </div>
            <div class="column is-3" style="margin-top: -18px;">
                <span style="font-size: 13px;color:#5c5e61;">Dimension (in ft)</span>
                <div class="control">
                    <div class="columns">
                        <div class="column">
                            <input class="input" type="text" placeholder="L" v-validate="'required'" v-model="form.dimension[0]" />
                        </div>
                        <div class="column">
                            <input class="input" type="text" placeholder="W" v-validate="'required'" v-model="form.dimension[1]" />
                        </div>
                        <div class="column">
                            <input class="input" type="text" placeholder="H" v-validate="'required'" v-model="form.dimension[2]" />
                        </div>
                    </div>
                    <span v-show="errors.has('amount')" class="invalid-feedback">{{ errors.first('amount') }}</span>
                </div>
            </div>
            <div class="column is-3">
                <div class="control">
                    <textarea class="textarea" rows="3" placeholder="Notes" v-model="form.notes"></textarea>
                </div>
            </div>
            <div class="column">
                <button type="submit" @click="submit" style="margin-top:46px;" class="is-pulled-right button accent-btn raised btn-outlined">Submit</button>
                <!--  <b-button style="margin-top:46px;" type="is-info is-pulled-right" @click="submit">Submit</b-button> -->
            </div>
        </div>
    </section>
</template>
<script>
import Vue from "vue";
import VueCtkDateTimePicker from "vue-ctk-date-time-picker";
import "vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css";
Vue.component("VueCtkDateTimePicker", VueCtkDateTimePicker);
export default {
    data() {
        return {
            form: {
                post_type: "post_shipment",
                pickup: "",
                pickup_date_time: "",
                delivery_date_time: "",
                unload: "",
                vehicle: "",
                load_type: "",
                load_info: "",
                package_type: "",
                material_type:"",
                price: "",
                weight: "",
                dimension: [],
                notes: ""
            },
            ptype: ["Boxes in pallet", "Boxed", "Open"],
            mtype: ["Regular", "Hazmat"],
            ltype: ["Full Load (FL)", "Partial Load (PL)"],
            vtype: [
                "Box Truck",
                "Covered Van/Cargo Van",
                "Flatbed Truck",
                "Heavy Hauler",
                "Pick up Truck",
                "Tractor",
                "Reefer"
            ]
        };
    },

    methods: {
        submit() {
            this.$validator.validateAll().then(result => {
                if (result) {
                    this.$axios.post("/shipment", this.form).then(res => {
                        // this.$store.dispatch("addShipment", {
                        //     data: res.data
                        // });
                        EventBus.$emit('ShipmentPosted', res.data)

                        const clear = async () => {
                            this.form.pickup = '',
                                this.form.pickup_date_time = '',
                                this.form.delivery_date_time = '',
                                this.form.unload = '',
                                this.form.vehicle = '',
                                this.form.load_type = '',
                                this.form.load_info = '',
                                this.form.package_type = '',
                                this.form.price = '',
                                this.form.weight = '',
                                this.form.dimension = '',
                                this.form.notes = ''
                        }
                        clear().then(() => {
                            this.$validator.reset()
                        })
                        this.$buefy.notification.open({
                            message: "Shipment Successfully posted",
                            type: "is-success",
                            hasIcon: true,
                            position: "is-top-right",
                            indefinite: true
                        });
                    });
                }
            });
        }
    }
};

</script>
<style scoped>
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
