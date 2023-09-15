<template>
  <div class="htmlClass">
    <h1>{{ title }}</h1>
    <form>
      <input type="text" id="firstName" v-model="firstName" />
      <input type="text" id="secondName" v-model="secondName" />
      <button @click="submitForm()" class="submitForm">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HtmlComponent',
  data() {
    return {
      title: 'Vue is awesome.',
      firstName: '',
      secondName: '',
    }
  },
  methods: {
    submitForm() {
      this.$emit('submit form')
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
