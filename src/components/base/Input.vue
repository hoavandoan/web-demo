<template>
  <div class="flex flex-col" :class="containerStyle">
    <span class="text-green-700 font-semibold" :class="labelStyle">{{label}}</span>
    <!--TODO-->
    <input
        :type="type"
        :placeholder="placeholder"
        v-model="value"
        :value="value"
        @change="onChange"
        :disabled="disabled"
        :readOnly="readOnly"
        class="mt-1 border-2 py-2 px-3.5 focus:outline-none shadow-sm"
        :class="inputStyle"
    >
  </div>
</template>

<script>
export default {
  props:{
   type: {
     required: false,
     default: 'text'
   },
    label: {
      required: false,
      default: ''
    },
    placeholder: {
      required: false,
      default: 'Placeholder'
    },
    value: {
      required: false,
      default: ''
    },
    readOnly: {
      required: false,
      default: false
    },
    disabled: {
      required: false,
      default: false
    },
    containerStyle: {
     required: false,
      default: ''
    },
    labelStyle: {
     required: false,
      default: ''
    },
    inputStyle: {
     required: false,
      default: ''
    },
  },
  name: "Input",
  methods: {
    onChange(value) {
      console.log('valueeee', value)
      this.$emit('input', value)
    }
  }
}
</script>

<style scoped>

</style>
