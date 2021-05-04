<template>
  <label class="block">
    <span class="text-green-700 font-semibold">{{ label }}</span>
    <select class="form-select block w-full mt-1 border p-2 focus:outline-none" v-model="selected" @change="onChange">
      <option class="text-gray-700 font-semibold uppercase" :value="null">Choose</option>
      <option v-for="opt in data" :key="opt.id" :value="opt" class="text-gray-700 font-semibold uppercase">{{ opt.name }}</option>
    </select>
  </label>
</template>

<script>
export default {
  props: {
    label: {
      required: false,
      default: ''
    },
    value: {
      required: false,
      default: null
    },
    data: {
      type: Array,
      required: false,
    },

  },
  name: "Select",
  data() {
    return {
      selected: null
    }
  },
  methods: {
    onChange() {
      this.$emit('input', this.selected)
    }
  }
}
</script>

<style scoped>

</style>
