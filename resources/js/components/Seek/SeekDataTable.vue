<template>
    <section>
        <b-table :data="seekshipments.data" :striped="true" :hoverable="true">
            <template slot-scope="props">
                <b-table-column field="pickup_point" label="Loading Point" width="40" centered>
                    {{ props.row.pickup_point }}
                </b-table-column>
                <b-table-column field="delivery_point" label="Delivery point" width="40" centered>
                    {{ props.row.delivery_point }}
                </b-table-column>
                <b-table-column field="load_date" label="Loading date" width="40" centered>
                    {{ props.row.load_date }}
                </b-table-column>
                <b-table-column field="load_time" label="Loading time" width="40" centered>
                    {{ props.row.load_time }}
                </b-table-column>
                <b-table-column field="id" label="Userid" width="40" centered>
                    {{ props.row.id }}
                </b-table-column>
            </template>
        </b-table>
    </section>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    computed: {
        seekshipments() {
            return this.$store.getters.seekshipments
        }
    },
    created() {
        if (this.$store.getters.seekshipments.length<1) {
            this.getSeekingShipments()
        }
    },
    mounted() {

    },
    methods: {
        getSeekingShipments() {
            this.$store.dispatch('getSeekingShipments')
        }

    },
    watch: {

    }
};

</script>
<style scoped>
</style>
