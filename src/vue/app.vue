<template>
  <div>
    <div @click="swin = !swin" class="msgClass">{{msg}}</div>
    <div v-if="swin">This is a list!</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Demo',
        swin: false
      }
    },
    methods: {
    }
  }
</script>