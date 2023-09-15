<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HtmlComponent msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HtmlComponent from '@/components/HtmlComponent.vue'

export default {
  name: 'HomeView',
  components: {
    HtmlComponent,
  },
}
</script>
