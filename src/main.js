import Vue from 'vue'
import App from './App.vue'
import BaseInput from '../src/components/base/Input'
import BaseSelect from '../src/components/base/Select'
import BaseTextArea from '../src/components/base/TextArea'
import './index.css'

Vue.config.productionTip = false
Vue.component('base-input', BaseInput)
Vue.component('base-select', BaseSelect)
Vue.component('base-text-area', BaseTextArea)

new Vue({
  render: h => h(App),
}).$mount('#app')
