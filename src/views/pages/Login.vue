<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <b-form @submit.prevent="handleSubmit">
                  <h1>Login</h1>
                  <p class="text-muted">Sign In to your account</p>
                  <b-alert variant="danger" show v-if="authenticationError">{{authenticationError}}</b-alert>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend>
                      <b-input-group-text>
                        <i class="icon-user"></i>
                      </b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input
                      type="text"
                      class="form-control"
                      placeholder="Email" v-model="email"
                      autocomplete="username email"
                    />
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend>
                      <b-input-group-text>
                        <i class="icon-lock"></i>
                      </b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input
                      type="password"
                      class="form-control"
                      placeholder="Password" v-model="password"
                      autocomplete="current-password"
                    />
                  </b-input-group>
                  <b-row>
                    <b-col cols="6">
                      <b-button variant="primary"  type="submit" class="px-4">Login</b-button>
                    </b-col>
                    <b-col cols="6" class="text-right">
                      <router-link to="/reset-password">
                        <a class="navbar-item">Forget password?</a>
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
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      submitted: false
    };
  },
  computed: {
    ...mapGetters({
      authenticationError: "auth/authenticationError"
    })
  },
  methods: {
    ...mapActions({ login: "auth/login" }),

    handleSubmit() {
      // Call login service and emit store function and then redirect to to.actualPath
      const { email, password } = this;
      if ("" != email && "" != password) {
        this.login({ email, password });
        this.password = "";
      }
    }
  }
};
</script>
