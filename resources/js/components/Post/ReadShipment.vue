<template>
    <div class="container">
        <div class="columns mt-2">
            <div class="column is-12">
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">Shipment #{{shipment.shipment_id}}</p>
                         <div class="edit-button edit-trigger has-text-right" style="padding:10px">
                            <button class="button btn-dash accent-btn raised ripple no-lh rounded"  @click="isModalActive"> Bid</button>
                        </div>
                    </header>
                    <div class="card-element">
                        <div class="columns">
                            <div class="column is-6">
                                <div class="tripinfo">
                                    <p class="tripinfotitle">Trip info:</p>
                                    <div class="columns">
                                        <div class="column">
                                            <span class="bold">From:</span>
                                            <span>{{shipment.pickup}}</span>
                                            <br />
                                            <span class="bold">Duration:</span>
                                            <span>7:45 hr</span>
                                        </div>
                                        <div class="column">
                                            <span class="bold">To:</span>
                                            <span>{{shipment.unload}}</span>
                                            <br />
                                            <span class="bold">Distance:</span>
                                            <span>245 mile</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="loadinfo">
                                    <p class="tripinfotitle">Load info:</p>
                                    <div class="columns">
                                        <div class="column">
                                            <span class="bold">Package type:</span>
                                            <span>{{shipment.package_type}}</span>
                                            <br />
                                            <span class="bold">Load type:</span>
                                            <span>{{shipment.load_type}}</span>
                                            <br />
                                            <span class="bold">Goods info:</span>
                                            <span>{{shipment.load_info}}</span>
                                        </div>
                                        <div class="column">
                                            <span class="bold">Load date:</span>
                                            <span>{{shipment.pickup_date_time}}</span>
                                            <br />
                                            <span class="bold">Material type:</span>
                                            <span>{{shipment.material_type}}</span>
                                        </br>
                                            <span class="bold">Load quantity:</span>
                                            <span>{{shipment.load_quantity}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="deliveryinfo">
                                    <p class="tripinfotitle">Delivery info:</p>
                                    <div class="columns">
                                        <div class="column">
                                            <span class="bold">Dlivery Date and time:</span>
                                            <span>{{shipment.delivery_date_time}}</span>
                                            <br />
                                            <span class="bold">Notes:</span>
                                            <span>{{shipment.note}}</span>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="column is-6">
                                <img :src="map()" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="columns mt-2">
            <div class="column is-12">
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">Shippers info</p>
                    </header>
                    <div class="card-element">
                        <div class="columns">
                            <div class="column">
                                <b-rate v-model="rate" :icon="icons" :max="maxs" :disabled="isDisabled">
                                </b-rate>
                                <span class="record">12 Shipments posted</span>
                              </br>
                                <span class="record">Member since:</span>
                                <span> 21st oct 2019</span>
                            </div>
                            <div class="column">
                                <span class="record">Name:</span>
                                <span>Mark</span>
                                <br />
                                <span class="record">Conatct No:</span>
                                <span>0254655</span>
                            </div>
                            <div class="column">
                                <span class="record">Address:</span>
                                <span>23 Ny USA</span>
                                <br />
                                <span class="record">Email:</span>
                                <span>mark@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="columns mt-2" style="padding-bottom:44px;">
            <div class="column is-12">
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">Total Bids</p>
                    </header>
                    <div class="card-content" style="padding:1rem">
                        <div class="allbids">
                            <p style="text-align:center;color:#ccc;font-size:20px;padding:10px"> No one bids yet</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="columns mt-5">
        </div>
       
    </div>
</template>
<script>
const ModalForm = {
        props: ['email', 'password'],
        template: `
            <form action="">
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Login</p>
                    </header>
                    <section class="modal-card-body">
                        <b-field label="Email">
                            <b-input
                                type="email"
                                :value="email"
                                placeholder="Your email"
                                required>
                            </b-input>
                        </b-field>

                        <b-field label="Password">
                            <b-input
                                type="password"
                                :value="password"
                                password-reveal
                                placeholder="Your password"
                                required>
                            </b-input>
                        </b-field>

                        <b-checkbox>Remember me</b-checkbox>
                    </section>
                    <footer class="modal-card-foot">
                        <button class="button" type="button" @click="$parent.close()">Close</button>
                        <button class="button is-primary">Login</button>
                    </footer>
                </div>
            </form>
        `
    }

export default {
    name: "ReadShipment",
    data() {
        return {
            isCardModalActive: false,
            shippment_id: this.$route.params.shipment_id,
            rate: 4.6,
            maxs: 5,
            icons: 'star',
            isDisabled:true
        };
    },
    created() {
       this.getShipment()
    },
    computed: {
        shipment() {
            return this.$store.getters.shipment;
        }
    },
    methods: {
        isModalActive(){
            this.$buefy.dialog.alert({
                    title: 'Title Alert',
                    message: 'I have a title, a custom button and <b>HTML</b>!',
                    confirmText: 'Cool!'
                })

        },
        getShipment() {
            this.$store.dispatch("getShipment", this.shippment_id);
        },
        map() {
            let map = "images/map.png";
            return map;
        }
    }
};

</script>
<style scoped>
.tripinfotitle {
    text-align: center;
    border-bottom: 1px solid #ccc;
    font-size: 18px;
    font-weight: 500;
    display: flex;
}

.tripinfo {
    margin: 0px;
}

.loadinfo {
    margin: 15px 0px;
}

.record
{
  font-size: 1rem;
  font-weight: 500;
}
.mt-2 {
    margin-top: 2px !important;
    margin-bottom: -19px;
}
.is-disabled {
    pointer-events: none;
     opacity:1;
    cursor: default !important;
}

</style>
