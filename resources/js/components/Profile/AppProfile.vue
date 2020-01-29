<template>
    <section>
        <div class="fab js-hamburger is-active">
            <div class="profile-container" style="top:55px;">
                <div class="inner" style="margin-left:0px;">
                    <div class="container">
                        <div class="con">
                            <div class="columns">
                                <div class="column is-3">
                                    <div class="flex-card simple-shadow light-bordered light-raised" style="min-height: 400px;">
                                        <figure class="image" style="width:200px;height:auto;">
                                            <img src="https://bulma.io/images/placeholders/256x256.png">
                                        </figure>
                                    </div>
                                </div>
                                <div class="column is-9" style="padding-bottom: 47px;">
                                    <div class="profile-sections-wrapper">
                                        <!-- Profile details -->
                                        <div id="profile-details">
                                            <div class="abc">
                                                <!-- Details sub view -->
                                                <div id="profile-view">
                                                    <div class="flex-card simple-shadow light-bordered light-raised animated preFadeInUp fadeInUp">
                                                        <!-- Profile details card -->
                                                        <div class="card-body">
                                                            <div class="columns">
                                                                <div class="column is-6">
                                                                    <div class="info-section">
                                                                        <!-- Personal info -->
                                                                        <h1 class="info-heading">Personal info</h1>
                                                                        <div class="info-divider"><span></span></div>
                                                                        <div class="info-item">
                                                                            <div class="columns is-gapless">
                                                                                <div class="column is-5">
                                                                                    <div class="info-title">
                                                                                        First name :
                                                                                    </div>
                                                                                </div>
                                                                                <div class="column is-7">
                                                                                    <div class="info-description highlighted">
                                                                                        {{user.first_name}}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="info-item">
                                                                            <div class="columns is-gapless">
                                                                                <div class="column is-5">
                                                                                    <div class="info-title">
                                                                                        M Name:
                                                                                    </div>
                                                                                </div>
                                                                                <div class="column is-7">
                                                                                    <div class="info-description">
                                                                                        {{user.m_name}}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="info-item">
                                                                            <div class="columns is-gapless">
                                                                                <div class="column is-5">
                                                                                    <div class="info-title">
                                                                                        Last Name:
                                                                                    </div>
                                                                                </div>
                                                                                <div class="column is-7">
                                                                                    <div class="info-description">
                                                                                        {{user.last_name}}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="info-section">
                                                                        <h1 class="info-heading">Contact info</h1>
                                                                        <div class="info-divider"><span></span></div>
                                                                        <div class="info-item">
                                                                            <div class="columns is-gapless">
                                                                                <div class="column is-5">
                                                                                    <div class="info-title">
                                                                                        Email :
                                                                                    </div>
                                                                                </div>
                                                                                <div class="column is-7">
                                                                                    <div class="info-description highlighted">
                                                                                        {{user.email}}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="info-item">
                                                                            <div class="columns is-gapless">
                                                                                <div class="column is-5">
                                                                                    <div class="info-title">
                                                                                        Mobile :
                                                                                    </div>
                                                                                </div>
                                                                                <div class="column is-7">
                                                                                    <div class="info-description">
                                                                                        {{user.phone}}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="info-item">
                                                                            <div class="columns is-gapless">
                                                                                <div class="column is-5">
                                                                                    <div class="info-title">
                                                                                        Address :
                                                                                    </div>
                                                                                </div>
                                                                                <div class="column is-7">
                                                                                    <div class="info-description">
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="info-item">
                                                                            <div class="columns is-gapless">
                                                                                <div class="column is-5">
                                                                                    <div class="info-title">
                                                                                        City :
                                                                                    </div>
                                                                                </div>
                                                                                <div class="column is-7">
                                                                                    <div class="info-description">
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="info-item">
                                                                            <div class="columns is-gapless">
                                                                                <div class="column is-5">
                                                                                    <div class="info-title">
                                                                                        State :
                                                                                    </div>
                                                                                </div>
                                                                                <div class="column is-7">
                                                                                    <div class="info-description">
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="info-item">
                                                                            <div class="columns is-gapless">
                                                                                <div class="column is-5">
                                                                                    <div class="info-title">
                                                                                        Zip Code :
                                                                                    </div>
                                                                                </div>
                                                                                <div class="column is-7">
                                                                                    <div class="info-description">
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="info-item">
                                                                            <div class="columns is-gapless">
                                                                                <div class="column is-5">
                                                                                    <div class="info-title">
                                                                                        Country :
                                                                                    </div>
                                                                                </div>
                                                                                <div class="column is-7">
                                                                                    <div class="info-description">
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="column is-6">
                                                                    <div class="info-section">
                                                                        <h1 class="info-heading">Company info</h1>
                                                                        <div class="info-divider"><span></span></div>
                                                                        <div class="info-item">
                                                                            <div class="columns is-gapless">
                                                                                <div class="column is-5">
                                                                                    <div class="info-title">
                                                                                        Company :
                                                                                    </div>
                                                                                </div>
                                                                                <div class="column is-7">
                                                                                    <div class="info-description highlighted">
                                                                                        Acme Inc.
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="info-item">
                                                                            <div class="columns is-gapless">
                                                                                <div class="column is-5">
                                                                                    <div class="info-title">
                                                                                        Department :
                                                                                    </div>
                                                                                </div>
                                                                                <div class="column is-7">
                                                                                    <div class="info-description">
                                                                                        Sales & Marketing
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="info-item">
                                                                            <div class="columns is-gapless">
                                                                                <div class="column is-5">
                                                                                    <div class="info-title">
                                                                                        Position :
                                                                                    </div>
                                                                                </div>
                                                                                <div class="column is-7">
                                                                                    <div class="info-description highlighted">
                                                                                        Sales Manager
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="info-section">
                                                                        <h1 class="info-heading">Emmergency Contact Info</h1>
                                                                        <div class="info-divider"><span></span></div>
                                                                        <div class="info-item">
                                                                            <div class="columns is-gapless">
                                                                                <div class="column is-5">
                                                                                    <div class="info-title">
                                                                                        Full Name :
                                                                                    </div>
                                                                                </div>
                                                                                <div class="column is-7">
                                                                                    <div class="info-description highlighted">
                                                                                       Alex
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="info-item">
                                                                            <div class="columns is-gapless">
                                                                                <div class="column is-5">
                                                                                    <div class="info-title">
                                                                                        Contact Number :
                                                                                    </div>
                                                                                </div>
                                                                                <div class="column is-7">
                                                                                    <div class="info-description highlighted">
                                                                                        +02748484
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="info-item">
                                                                            <div class="columns is-gapless">
                                                                                <div class="column is-5">
                                                                                    <div class="info-title">
                                                                                        Email :
                                                                                    </div>
                                                                                </div>
                                                                                <div class="column is-7">
                                                                                    <div class="info-description highlighted">
                                                                                        abc@gmail.com
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <!-- Personal info -->
                                                            </div>
                                                            <div class="edit-button edit-trigger has-text-right">
                                                                <button class="button btn-dash secondary-btn raised ripple no-lh rounded">Edit profile</button>
                                                            </div>
                                                        </div>
                                                        <!-- Profile details card -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            username: this.$route.params.username,

        }
    },
    computed: {
        user() {
            return this.$store.getters['user']
        }

    },

    mounted() {

    },
    methods: {

    },
    watch: {

    }
};

</script>
<style scoped>
.image img {
    margin-left: 36px;
    padding: 8px;
    display: block;
    height: auto;
    width: 100%;
    margin-top: 10px;
}

</style>
