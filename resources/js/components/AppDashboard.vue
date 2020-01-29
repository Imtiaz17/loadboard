<template>
    <div class="container">
        <div class="columns" style="margin-top:6px;">
            <post-shipment></post-shipment>
        </div>
        <div class="columns" style="margin-top:-29px;margin-bottom:10px;">
            <div class="column is-12">
                <b-tabs type="is-boxed">
                    <b-tab-item>
                        <template slot="header">
                            <span>All Loads <b-tag rounded> 150</b-tag> </span>
                        </template>
                         <all-shipments></all-shipments>
                    </b-tab-item>
                    <b-tab-item>
                        <template slot="header">
                            <span>Available <b-tag rounded> 150</b-tag> </span>
                        </template>
                        <available-shipments></available-shipments>
                    </b-tab-item>
                    <b-tab-item>
                        <template slot="header">
                            <span>Intransit<b-tag rounded> 150</b-tag> </span>
                        </template>
                        <intransit-shipments></intransit-shipments>
                    </b-tab-item>
                    <b-tab-item>
                        <template slot="header">
                            <span>Delivered<b-tag rounded> 150</b-tag> </span>
                        </template>
                        <delivered-shipments></delivered-shipments>
                         
                    </b-tab-item>
                    <b-tab-item>
                        <template slot="header">
                            <span>Paid<b-tag rounded> 150</b-tag> </span>
                        </template>
                        <paid-shipments></paid-shipments>
                        
                    </b-tab-item>
                    <b-tab-item>
                        <template slot="header">
                            <span>Driver Preferences<b-tag rounded> 150</b-tag> </span>
                        </template>
                     <driver-preferences></driver-preferences>
                    </b-tab-item>
                   <!--  <b-tab-item label="Available">
                        <available-shipments></available-shipments>
                    </b-tab-item>
                    <b-tab-item label="In-transit">
                        <intransit-shipments></intransit-shipments>
                    </b-tab-item>
                    <b-tab-item label="Delivered">
                        <delivered-shipments></delivered-shipments>
                    </b-tab-item>
                    <b-tab-item label="Paid">
                        <paid-shipments></paid-shipments>
                    </b-tab-item>
                    <b-tab-item label=" Drivers Preferences">
                        <driver-preferences></driver-preferences>
                    </b-tab-item> -->
                </b-tabs>
                <!--  <div class="navigation-tabs full-pills rounded accent animated-tabs">
            <div class="tabs is-centered">
                <ul>
                    <li class="tab-link" @click="load"  :class="first?'is-active':''" data-tab="tab-j1"><a style="font-weight:500">Posted Loads</a></li>
                    <li class="tab-link" @click="search" :class="second?'is-active':''" data-tab="tab-j2"><a style="font-weight:500">Seek Loads</a></li>
                </ul>
            </div>
            <div class="navtab-content" :class="first?'is-active':''" >
                   <shipment-table></shipment-table>
            </div>
             <div class="navtab-content" :class="second?'is-active':''" >
                <carry-table></carry-table>
            </div>
          </div> -->
            </div>
        </div>
    </div>
</template>
<script>
import postShipment from "./Post/PostShipment";
import allShipments from "./Tables/AllShipments";
import availableShipments from "./Tables/AvailableShipments"
import intransitShipments from "./Tables/IntransitShipments"
import deliveredShipments from "./Tables/DeliveredShipments"
import paidShipments from "./Tables/PaidShipments"
import driverPreferences from "./Tables/DriverPreferences"
export default {
    components: { postShipment, allShipments, availableShipments, intransitShipments, deliveredShipments, paidShipments, driverPreferences },
    data() {
        return {
            first: true,
            second: false
        }
    },
    methods: {
        load() {
            this.first = true
            this.second = false

        },
        search() {
            this.first = false
            this.second = true
        },
    }
}

</script>
<style scoped>
.navtab-content {
    display: none;
}

.is-active {
    display: block;
}

.tabs {
    margin-bottom: 0px !important;
}

</style>
