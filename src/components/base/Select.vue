<template>
  <label class="block">
    <span class="text-green-700 font-semibold">{{ label }}</span>
    <select class="form-select block w-full mt-1 border p-2 focus:outline-none">
      <option class="text-gray-700 font-semibold uppercase">Option 1</option>
      <option class="text-gray-700 font-semibold uppercase">Option 2</option>
    </select>
  </label>
</template>

<script>
export default {
  props: {
    label: {
      required: false,
      default: ''
    }
  },
  name: "Select"
}
</script>

<style scoped>

</style>
