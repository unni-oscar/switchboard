<template>
  <router-view></router-view>
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  created(){
    axios.interceptors.response.use(
      response => response,
      error => {
        const {status, config} = error.response;
        if (status === 401 && config && !config.__isRetryRequest ) {
          this.$store.dispatch('auth/setError', { code : '1' , msg : 'Session timed out. Please login' })
          this.$store.dispatch('auth/logout')
          this.$router.replace('/login')
        } 
        return Promise.reject(error);
      }
    )
  }
}
</script>

<style lang="scss">
  // CoreUI Icons Set
  @import '~@coreui/icons/css/coreui-icons.min.css';
  /* Import Font Awesome Icons Set */
  $fa-font-path: '~font-awesome/fonts/';
  @import '~font-awesome/scss/font-awesome.scss';
  /* Import Simple Line Icons Set */
  $simple-line-font-path: '~simple-line-icons/fonts/';
  @import '~simple-line-icons/scss/simple-line-icons.scss';
  /* Import Flag Icons Set */
  @import '~flag-icon-css/css/flag-icon.min.css';
  /* Import Bootstrap Vue Styles */
  @import '~bootstrap-vue/dist/bootstrap-vue.css';
  // Import Main styles for this application
  @import 'assets/scss/style';
</style>
