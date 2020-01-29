<template>
<!--     <div  ></div> -->
    <main class="">
            <div class="columns columns is-modile is-centered main">
                <div class="column is-7" v-bind:style="{ backgroundImage: 'url(' + truck + ')' }" style="background-size: cover;">
                </div>
                <div class="column is-5 mt-5">
                    <b-tabs type="is-toggle" expanded>
                        <b-tab-item label="I am a Shipper">
                            <shipper-register></shipper-register>
                        </b-tab-item>
                        <b-tab-item label="I am a driver">
                            <driver-register></driver-register>
                        </b-tab-item>
                    </b-tabs>
                </div>
            </div>
    </main>
</template>
<script>
import shipperRegister from './ShipperRegister'
import driverRegister from './DriverRegister'
export default {
    components: { shipperRegister, driverRegister },
    data() {
        return {}
    },
    computed: {
        truck() {
            let truck = "images/truck.jpg";
            return truck;
        }

    },
    method: {

    }

}

</script>
<style>
.main {
    position: absolute;
    top: 65px;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
    overflow:hidden;
}

.header {
    margin-top: 20px;
    text-align: center;
    font-size: 26px;
    font-weight: 600;
}

.card-content {
    background-color: transparent;
    padding: 0.5rem;
}

.shipper {
    margin-top: 10px;
}
.tabs.is-toggle li {
    background-color: #fff;
}
.tabs.is-toggle li.is-active a {
    background-color: #17a2b8;
    border-color: #17a2b8;
    color: white;
}
</style>
