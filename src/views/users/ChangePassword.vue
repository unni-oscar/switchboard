<template>
  <div class="animated fadeIn">
    <!-- <b-row>
      <b-col sm="6">
        <b-card>
          <div slot="header">
            <strong>Credit Card </strong> <small>Form</small>
          </div>
          <b-row>
            <b-col sm="12">
              <b-form-group>
                <label for="name">Name</label>
                <b-form-input type="text" id="name" placeholder="Enter your name"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12">
              <b-form-group>
                <label for="ccnumber">Credit Card Number</label>
                <b-form-input type="text" id="ccnumber" placeholder="0000 0000 0000 0000"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="4">
              <b-form-group >
                <label for="month1">Month</label>
                <b-form-select id="month1"
                  :plain="true"
                  :options="[1,2,3,4,5,6,7,8,9,10,11,12]">
                </b-form-select>
              </b-form-group>
            </b-col>
            <b-col sm="4">
              <b-form-group>
                <label for="year1">Year</label>
                <b-form-select id="year1"
                  :plain="true"
                  :options="[2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025]">
                </b-form-select>
              </b-form-group>
            </b-col>
            <b-col sm="4">
              <b-form-group>
                <label for="cvv">CVV/CVC</label>
                <b-form-input type="text" id="cvv" placeholder="123"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col sm="6">
        <b-card>
          <div slot="header">
            <strong>Company </strong><small>Form</small>
          </div>
          <b-form-group>
            <label for="company">Company</label>
            <b-form-input type="text" id="company" placeholder="Enter your company name"></b-form-input>
          </b-form-group>
          <b-form-group>
            <label for="vat">VAT</label>
            <b-form-input type="text" id="vat" placeholder="PL1234567890"></b-form-input>
          </b-form-group>
          <b-form-group>
            <label for="street">Street</label>
            <b-form-input type="text" id="street" placeholder="Enter street name"></b-form-input>
          </b-form-group>
          <b-row>
            <b-col sm="8">
              <b-form-group>
                <label for="city">City</label>
                <b-form-input type="text" id="city" placeholder="Enter your city"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="4">
              <b-form-group>
                <label for="postal-code">Postal Code</label>
                <b-form-input type="text" id="postal-code" placeholder="Postal Code"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-form-group>
            <label for="country">Country</label>
            <b-form-input type="text" id="country" placeholder="Country name"></b-form-input>
          </b-form-group>
        </b-card>
      </b-col>
    </b-row> -->
    <b-row>
      <b-col md="6">
        <b-card>
          <div slot="header">
            <strong>Change password</strong>
          </div>
          <b-form @submit.prevent="handleSubmit">
            <b-alert variant="success" show v-if="message">{{message}}</b-alert>

            <b-form-group
              label="Old password"
              :label-cols="4"
             >
              <b-form-input name="oldPassword" type="password" v-validate="'required'" placeholder="Enter your old password" v-model="formData.oldPassword"></b-form-input>
               <b-form-invalid-feedback :state="false" v-show="errors.has('oldPassword')">
                      {{ errors.first('oldPassword') }} 
                    </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group
              label="New Password"
              :label-cols="4"
              >
               <b-form-input name="newPassword" type="password" v-validate="'required'" placeholder="Enter your new password" v-model="formData.newPassword"></b-form-input>
               <b-form-invalid-feedback :state="false" v-show="errors.has('newPassword')">
                      {{ errors.first('newPassword') }} 
                    </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group
              label="Confirm New Password"
              label-for="horizPass"
              :label-cols="4"
              >
               <b-form-input name="confirmPassword" type="password" v-validate="'required'" placeholder="Confirm new password" v-model="formData.confirmPassword"></b-form-input>
               <b-form-invalid-feedback :state="false" v-show="errors.has('confirmPassword')">
                      {{ errors.first('confirmPassword') }} 
                    </b-form-invalid-feedback>
            </b-form-group>
            <div slot="footer">
              <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Submit</b-button>
            </div>
          </b-form>
        </b-card>
       
      </b-col>
    </b-row>
    <!-- <b-row>
      <b-col sm="12" md="6">
        <b-card no-body :no-block="true">
          <div slot="header">
            <strong>Validation feedback</strong> Form
          </div>
          <b-card-body>
            <b-form>
              <b-form-group validated>
                <label class="col-form-label" for="inputIsValid">Input is valid</label>
                <input type="text" class="form-control is-valid" id="inputIsValid">
                <b-form-valid-feedback>
                  Input is valid.
                </b-form-valid-feedback>
              </b-form-group>
              <b-form-group>
                <label class="col-form-label" for="inputIsInvalid">Input is invalid</label>
                <input type="text" class="form-control is-invalid" id="inputIsInvalid">
                <b-form-invalid-feedback>
                  Please provide a valid information.
                </b-form-invalid-feedback>
              </b-form-group>
            </b-form>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col sm="12" md="6">
        <b-card no-body :no-block="true">
          <div slot="header">
            <strong>Validation feedback</strong> Form
          </div>
          <b-card-body>
            <b-form validated novalidate>
              <b-form-group label-for="inputSuccess2" label="Non-required input">
                <b-form-input type="text" class="form-control-success" id="inputSuccess2"></b-form-input>
                <b-form-valid-feedback>
                  Input is not required.
                </b-form-valid-feedback>
              </b-form-group>
              <b-form-group label-for="inputError2" label="Required input">
                <b-form-input type="text" class="form-control-warning" id="inputError2" required></b-form-input>
                <b-form-valid-feedback>
                  Input provided.
                </b-form-valid-feedback>
                <b-form-invalid-feedback>
                  Please provide a required input.
                </b-form-invalid-feedback>
              </b-form-group>
            </b-form>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row> -->
   
   
    
   
  </div>
</template>

<script>
import UserService from "../../services/user.service.js";
export default {
  data() {
    return {
      formData: {
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
      },
      message: ""
    };
  },
  beforeCreate () {
        this.$store.commit('config/setHeading', 'Change Password')
    },
  methods: {
    handleSubmit(event) {
      this.message = "";
      this.errors.clear();
      this.$validator.validateAll().then(res => {
        if (res) {
          UserService.changePassword(this.formData)
            .then(res => {
              this.message = res.data.message;
              this.formData.oldPassword = this.formData.newPassword = this.formData.confirmPassword =
                "";
              this.$validator.reset();
            })
            .catch(e => {
              var err = e.response.data.message;
              let vm = this;
              // Adding error to error bag
              Object.keys(err).forEach(function(item) {
                vm.errors.add({
                  field: item,
                  msg: err[item][0]
                });
              });
            });
        }
      });
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
