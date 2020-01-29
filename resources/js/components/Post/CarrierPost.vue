<template>
    <section>
        <div class="columns" style="margin:0px">
            <div class="column">
                <div class="control">
                    <input class="input" name="pick up point" type="text" v-model="form.pickup" v-validate="'required'" :class="{ 'is-danger': errors.has('pick up point') }" />
                    <div class="field-placeholder">
                        <span>Pick Up (origin)</span>
                    </div>
                    <span v-show="errors.has('pick up point')" class="invalid-feedback">Pick Up is required</span>
                </div>
            </div>
            <div class="column">
                <div class="control">
                    <VueCtkDateTimePicker id="DateTimePicker"  label="Pick Up date" :no-label="true" formatted="ll" output-format="YYYY-MM-DD" color="#6BA3FF" input-size="sm" v-model="form.pickup_date" :no-header="true" :no-button="true" :auto-close="true" :only-date="true" />
                    <span v-show="errors.has('load_date')" class="invalid-feedback">Date is required</span>
                </div>
            </div>
            <div class="column">
                <div class="control">
                    <input class="input" type="text" v-validate="'required'" name="drop off point" v-model="form.unload" :class="{ 'is-danger': errors.has('drop off point') }" />
                    <div class="field-placeholder">
                        <span>Unload point (destination)</span>
                    </div>
                    <span v-show="errors.has('drop off point')" class="invalid-feedback">Unload is required</span>
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
            <div class="column">
                <div class="control">
                    <div class="field has-addons">
                        <p class="control">
                            <input class="input" type="text" v-validate="'required'" name="load quantity" v-model="form.weight" :class="{ 'is-danger': errors.has('load quantity') }" />
                        </p>
                        <p class="control">
                            <a class="button" style="height: 2.35em !important;font-size: 13px;">
                                ton
                            </a>
                        </p>
                    </div>
                    <div class="field-placeholder" style="transform: scale(0.75) translateY(-74px) translateX(-28px);z-index: 9999">
                        <span>lbs</span>
                    </div>
                    <span v-show="errors.has('load quantity')" class="invalid-feedback">Weight is required</span>
                </div>
            </div>
        </div>
        <div class="columns" style="margin:0px">
            <div class="column">
                <div class="field has-addons">
                    <p class="control">
                        <a class="button" style="height: 2.35em !important;font-size: 13px;">
                            $
                        </a>
                    </p>
                    <p class="control">
                        <input class="input" type="text" v-model="form.price" />
                    </p>
                    <div class="field-placeholder" style="transform: scale(.75) translateY(-19px) translateX(-91px);z-index: 9999">
                        <span>Asking amount</span>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="control">
                    <textarea class="textarea" rows="3" placeholder="Notes" v-model="form.note"></textarea>
                </div>
            </div>
            <div class="column">
            </div>
            <div class="column">
            </div>
            <div class="column ">
                <button type="submit" @click="submit" style="margin-top:46px;" class="is-pulled-right button accent-btn raised btn-outlined">Submit</button>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            form: {
                post_type: "seek_shipment",
                pickup: "",
                unload: "",
                vehicle: "",
                pickup_date: "",
                weight: "",
                price: "",
                note: ""
            },
            currecny: '',
            ptype: ["Boxes in pallet", "Boxed", "Open"],
            gtype: ["Flammable", "Non-Flammable"],
            vtype: [
                "Box Truck",
                "Covered Van/Cargo Van",
                "Flatbed Truck",
                "Heavy Hauler",
                "Pick up Truck",
                "Semi Truck/18-Wheeler"
            ]
        };
    },

    methods: {
        submit() {
            this.$validator.validateAll().then(result => {
                if (result) {
                    this.$axios.post("/seekshipment", this.form).then(res => {
                        EventBus.$emit('CarryShipmentPosted', res.data)
                        //  this.$store.dispatch("addSeekShipment", {
                        //     data: res.data
                        // });
                        const clear = async () => {
                            this.form.pickup = '',
                                this.form.pickup_date = '',
                                this.form.unload = '',
                                this.form.vehicle = '',
                                this.form.price = '',
                                this.form.weight = '',
                                this.form.note = ''
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

.addon-right {
    position: absolute;
    font-size: 13px;
    color: gray;
    right: 5px;
    padding: 2px;
    padding-left: 6px;
    border-left: 1px solid #d2cbcb;

}

.addon-left {
    position: absolute;
    font-size: 13px;
    color: gray;
    left: 7px;
    padding: 2px;
    padding-right: 6px;
    border-right: 1px solid #d2cbcb;

}

</style>
