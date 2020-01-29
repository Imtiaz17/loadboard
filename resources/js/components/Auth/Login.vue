<template>
    <main>
         <div class="auth-outer">

        <div class="mobile-auth-toggle">
            <h3 class="title">Have an account?</h3>
            <button type="button" class="button action-btn is-rounded">Register</button>
        </div>

        <div class="auth-box shadow">
            <div class="form-wrapper">
                <div class="login">
                    <div class="header">
                        <h2 class="title is-4">Login</h2>
                    </div>
                    <div class="item-list">
                        <div class="item shadow">
                            <a><i class="fa fa-google"></i></a>
                            <a><i class="fa fa-facebook"></i></a>
                            <a><i class="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div class="body">
                        <form  @submit.prevent="login">
                            <div class="field">
                                <div class="control">
                                    <input type="text" class="input" placeholder="Email or Username" v-model="form.email" name="email" v-validate="'required'" :class="{ 'is-danger': errors.has('email') }">
                                    <div class="form-icon">
                                        <i class="sl sl-icon-envelope-open"></i>
                                    </div>
                                </div>
                                <span v-show="errors.has('email')" class="invalid-feedback">{{ errors.first('email') }}</span>
                            </div>
                            <div class="field">
                                <div class="control">
                                    <input type="password" class="input" v-model="form.password" placeholder="Password" name="password" v-validate="'required'" :class="{ 'is-danger': errors.has('password') }">
                                    <div class="form-icon">
                                        <i class="sl sl-icon-lock"></i>
                                    </div>
                                </div>
                                 <span v-show="errors.has('password')" class="invalid-feedback">{{ errors.first('password') }}</span>

                            </div>
                            <button type="submit" v-bind:class="(loading)?'button accent-btn is-bold is-rounded raised is-loading':'button accent-btn raised is-rounded is-bold'">Login</button>
                            <a href="#" class="forgot-password">
                                Forgot Password?
                            </a>
                        </form>
                    </div>
                </div>
              <!--   <div class="register">
                    <div class="header">
                        <h2 class="title is-4">Register</h2>
                    </div>
                    <div class="item-list">
                        <div class="item shadow">
                            <a><i class="fa fa-google"></i></a>
                            <a><i class="fa fa-facebook"></i></a>
                            <a><i class="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div class="body">
                        <form>
                            <div class="field">
                                <div class="control">
                                    <input type="text" class="input" placeholder="Email or Username" v-model="form.email" name="email" v-validate="'required'" :class="{ 'is-danger': errors.has('email') }">
                                    <div class="form-icon">
                                        <i class="sl sl-icon-user"></i>
                                    </div>
                                    <span v-show="errors.has('email')" class="invalid-feedback">{{ errors.first('email') }}</span>
                                </div>
                            </div>
                            <div class="field">
                                <div class="control">
                                    <input type="text" class="input" placeholder="Email or Username" v-model="form.email" name="email" v-validate="'required'" :class="{ 'is-danger': errors.has('email') }">
                                    <div class="form-icon">
                                        <i class="sl sl-icon-envelope-open"></i>
                                    </div>
                                </div>
                                <span v-show="errors.has('email')" class="invalid-feedback">{{ errors.first('email') }}</span>
                            </div>
                            <div class="field">
                                <div class="control">
                                    <input type="password" class="input" v-model="form.password" placeholder="Password" name="password" v-validate="'required'" :class="{ 'is-danger': errors.has('password') }">
                                    <div class="form-icon">
                                        <i class="sl sl-icon-lock"></i>
                                    </div>
                                </div>
                                 <span v-show="errors.has('password')" class="invalid-feedback">{{ errors.first('password') }}</span>
                            </div>
                            <div class="d-flex flex-column">
                                <button type="submit" class="button primary-btn raised is-rounded is-bold">Register</button>
                            </div>
                        </form>
                    </div>
                </div> -->
            </div>

            <div class="side-box">
                <h3 class="title is-light">Have an account?</h3>
                <button type="button" class="button action-btn is-rounded">
                    <router-link to="register">Register</router-link></button>
            </div>
        </div>
    </div>
       <!--  <div class="container">
            <div class="columns is-centered" style="margin-top:40px">
                <div class="column is-5-tablet is-4-desktop is-5-widescreen">
                    <article class="card is-rounded">
                        <div class="card-content">
                            <div class="field">
                                <label for="" class="label">Email or Username</label>
                                <p class="control has-icons-left">
                                    <input class="input" type="text" placeholder="Email or username" v-model="form.email" name="email" v-validate="'required'" :class="{ 'is-danger': errors.has('email') }">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-envelope"></i>
                                    </span>
                                </p>
                                <span v-show="errors.has('email')" class="invalid-feedback">{{ errors.first('email') }}</span>
                            </div>
                            <div class="field">
                                <label for="" class="label">Email</label>
                                <p class="control has-icons-left">
                                    <input class="input" type="password" v-model="form.password" placeholder="Password" name="password" v-validate="'required'" :class="{ 'is-danger': errors.has('password') }">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-lock"></i>
                                    </span>
                                </p>
                                <span v-show="errors.has('password')" class="invalid-feedback">{{ errors.first('password') }}</span>
                            </div>
                            <div class="field has-text-right rightdiv">
                                <b-button type="is-info" @click="login" :class="loading?'is-loading':' '">Login</b-button>
                                <div>
                                    <a href="#" style="font-size: 13px;color: #0F77EA;">Forget password?</a>
                                </div>
                                <div>
                                    <a href="#" style="font-size: 13px;color: #0F77EA;">Register a new account</a>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div> -->
    </main>
</template>
<script>
export default {

    data() {
        return {
            loading: false,
            form: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            this.$validator.validateAll().then((result) => {
                if (result) {
                    this.loading = true
                    axios.post('/api/login', this.form)
                        .then(res => {
                            this.$store.dispatch('saveToken', {
                                token: res.data.access_token,
                            }, )

                            this.$router.push('/dashboard')

                        })
                        .catch(error => {
                            this.loading = false
                        })
                }
            })
        }
    }
}

</script>
<style>
.card-header {
    padding: 0px;
}

input {
    height: 2.5em !important;
}

.card-content {
    background-color: transparent;
    padding: 2rem !important;
}
.rightdiv a:hover
{
    text-decoration: underline !important;
}
.is-danger
{
 border-color: #ff3860 !important;
}
</style>
