<template>
    <section>
        <div class="shipper">
            <div class="columns">
                <div class="column">
                    <div class="field">
                        <div class="control">
                            <input class="input is-hovered" type="text" placeholder="First name" v-model="form.first_name" name="first name" v-validate="'required'" :class="{ 'is-danger': errors.has('first_name') }">
                        </div>
                        <span v-show="errors.has('first name')" class="invalid-feedback">{{ errors.first('first name') }}</span>
                    </div>
                </div>
                <div class="column">
                    <div class="field">
                        <div class="control">
                            <input class="input is-hovered" type="text" placeholder="middle name" v-model="form.m_name">
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="field">
                        <div class="control">
                            <input class="input is-hovered" type="text" placeholder="Last name" v-model="form.last_name" name="last name" v-validate="'required'" :class="{ 'is-danger': errors.has('last_name') }">
                        </div>
                        <span v-show="errors.has('last name')" class="invalid-feedback">{{ errors.first('last name') }}</span>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <div class="field">
                        <div class="control">
                            <input class="input is-hovered" type="email" placeholder="Email" v-model="form.email" name="email" v-validate="'required|email'" data-vv-as="email" :class="{ 'is-danger': errors.has('email') }">
                        </div>
                         <span v-if="error.email" class="invalid-feedback">{{ error.email[0]}}</span>
                        <span v-show="errors.has('email')" class="invalid-feedback">{{ errors.first('email') }}</span>
                    </div>
                </div>
                <div class="column">
                    <div class="field">
                        <div class="control">
                            <input class="input is-hovered" type="text" placeholder="Phone number" v-model="form.phone" name="phone" v-validate="'required'">
                        </div>
                        <span v-show="errors.has('phone')" class="invalid-feedback">{{ errors.first('phone') }}</span>
                    </div>
                </div>
                <div class="column">
                    <div class="field">
                        <div class="control">
                            <input class="input is-hovered" type="text" placeholder="Username" v-model="form.username" name="username" v-validate="'required'" :class="{ 'is-danger': errors.has('username') }">
                        </div>
                        <span v-if="error.username" class="invalid-feedback">{{ error.username[0]}}</span>
                        <span v-show="errors.has('username')" class="invalid-feedback">{{ errors.first('username') }}</span>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <div class="field">
                        <div class="control">
                            <input class="input is-hovered" type="text" placeholder="Tax Id" v-model="form.tax_id" name="Tax id" v-validate="'required'" :class="{ 'is-danger': errors.has('Tax id') }">
                        </div>
                        <span v-show="errors.has('Tax id')" class="invalid-feedback">{{ errors.first('Tax id') }}</span>
                    </div>
                </div>
                <div class="column">
                    <div class="field">
                        <div class="control">
                            <input class="input is-hovered" type="text" placeholder="Organization" v-model="form.organization" name="organization" v-validate="'required'">
                        </div>
                        <span v-show="errors.has('organization')" class="invalid-feedback">{{ errors.first('organization') }}</span>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <div class="field">
                        <p class="control has-icons-left">
                            <input class="input" ref="password" type="password" placeholder="Password" v-model="form.password" name="password" v-validate="'required|min:6'" :class="{ 'is-danger': errors.has('password') }">
                            <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                            </span>
                        </p>
                        <span v-show="errors.has('password')" class="invalid-feedback">{{ errors.first('password') }}</span>
                    </div>
                </div>
                <div class="column">
                    <div class="field">
                        <p class="control has-icons-left">
                            <input class="input" type="password" name="password_confirmation" v-validate="'required|confirmed:password'" data-vv-as="password" placeholder="Retype password" :class="{ 'is-danger': errors.has('password_confirmation') }">
                            <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                            </span>
                        </p>
                        <span v-show="errors.has('password_confirmation')" class="invalid-feedback">{{ errors.first('password_confirmation') }}</span>
                    </div>
                </div>
            </div>
            <div class="field has-text-right">
                  <a class="button is-info" @click="register"  :class="loading?'is-loading':' '">
                   Register
                    </a>
              <!--   <b-button type="is-info" @click="register" :class="loading?'is-loading':' '">Register</b-button> -->
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            error: '',
            loading: false,
            form: {
                username: '',
                first_name: '',
                m_name: '',
                last_name: '',
                phone: '',
                email: '',
                password: '',
                tax_id: '',
                organization: '',
                role: 'shipper'
            }
        }
    },
    methods: {
        register() {
            this.$validator.validateAll().then((result) => {
                if (result) {
                    this.loading = true
                    axios.post('/api/register', this.form)
                        .then((result) => {
                            this.$buefy.notification.open({
                                message: 'Successfully registered, please check email and verify your account',
                                type: 'is-success',
                                hasIcon: true,
                                position: 'is-top',
                                indefinite: true,
                            })
                            this.$router.push('/login')
                        })
                        .catch(error => {
                            this.loading = false
                            if (error.response.status == 422) {
                                this.error = error.response.data.errors
                            } else {
                               alert("sorry,something not working,please try again.")
                            }
                        })
                }
            })

        }
    }
}

</script>
<style scoped>
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

</style>
