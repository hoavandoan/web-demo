<template>
  <div class="flex flex-col" :class="containerStyle" >
    <span class="text-green-700 font-semibold" :class="labelStyle">{{label}}</span>
    <textarea
        :placeholder="placeholder"
        class="mt-1 border p-2 focus:outline-none"
        :class="inputStyle"
    />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      required: false,
      default: 'text'
    },
    placeholder: {
      required: false,
      default: 'Placeholder'
    },
    label: {
      required: false,
      default: ''
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
    colSpan: {
      required: false,
      default: 1
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
  name: "TextArea"
}
</script>

<style scoped>

</style>
