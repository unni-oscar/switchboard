<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <b-form @submit.prevent="handleSubmit">
                  <h1>Reset Password</h1>
                  <p class="text-muted">Please enter your email to reset the password</p>
                  <b-alert variant="primary" show v-if="message">{{message}}</b-alert>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend>
                      <b-input-group-text>
                        <i class="icon-user"></i>
                      </b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input
                      type="text"
                      name="email"
                      class="form-control" v-validate="'required|email'"
                      placeholder="Email" v-model="email"
                      autocomplete="email"
                    />
                    <b-form-invalid-feedback :state="false" v-show="errors.has('email')">
                      {{ errors.first('email') }}
                    </b-form-invalid-feedback>
                  </b-input-group>
                  
                  <b-row>
                    <b-col cols="5">
                      <b-button variant="primary"  type="submit" class="px-4">Reset</b-button>
                    </b-col>
                    <b-col cols="7" class="text-right">
                      <router-link to="/login">
                        <a class="navbar-item">Already have password? Click here</a>
                      </router-link>
                    </b-col>
                  </b-row>
                </b-form>
              </b-card-body>
            </b-card>
            <!-- <b-card no-body class="text-white bg-primary py-5 d-md-down-none" style="width:44%">
              <b-card-body class="text-center">
                <div>
                  <h2>Sign up</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <b-button variant="primary" class="active mt-3">Register Now!</b-button>
                </div>
              </b-card-body>
            </b-card>-->
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import UserService from "../../services/user.service.js";
import { mapActions } from "vuex";
export default {
  name: "login",
  data() {
    return {
      email: "",
      activeClass: "",
      message: ""
    };
  },
  methods: {
    ...mapActions({ logout: "auth/logout" }),

    doLogout() {
      this.logout();
    },
    handleSubmit() {
      this.$validator.validateAll().then(res => {
        if (res) {
          this.doLogout();
          UserService.resetPassword({ email: this.email })
            .then(res => {
              this.message = res.data.message;
            })
            .then( r => {
              this.email =""
              this.$validator.reset();
            })
            .catch(e => {
              // Adding error to error bag
              this.errors.add({
                field: "email",
                msg: e.response.data.message
              });
            });
        }
      });
    }
  }
};
</script>
