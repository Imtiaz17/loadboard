<template>
    <div class="column is-12">
        <p style="text-align:center;font-weight: 600;font-size: 16px; margin-bottom: 5px;" v-if="role=='shipper'">Post a new load</p>
        <p style="text-align:center;font-weight: 600;font-size: 16px; margin-bottom: 5px;" v-else-if="role=='driver'">Seek for a load</p>
        <div class="card" style="min-height:200px !important">
            <div class="card-element">
                  <b-loading :is-full-page="false" :active.sync="isLoading" :can-cancel="true"></b-loading>
                <div>        
                <shipper-post v-if="role=='shipper'"></shipper-post>
                <carrier-post v-else-if="role=='driver'"></carrier-post>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ShipperPost from './ShipperPost'
import CarrierPost from './CarrierPost'

export default {
    components: { ShipperPost, CarrierPost },
    data() {
        return {}
    },
    computed: {
        isLoading() {
            return this.$store.getters.isLoading
        },
        role() {
            return this.$store.state['role']
        }
        
    },
    methods:{
        getPhoto() {
            let photo = "images/roaling.gif";
            return photo;
        }
    }
}

</script>
<style scoped>
.loading
{
    margin-left: 44%;
}
</style>
