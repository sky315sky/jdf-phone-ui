/*
 * @Author: jdf
 * @Date: 2018-01-04 16:18:23
 * @Last Modified by: jdf
 * @Last Modified time: 2018-01-08 13:25:29
 * @desc 自定义组件集合
 */
// 引入组件
import N22Field from './common/n22Field'
import N22Address from './common/n22Address'
import N22Calendar from './common/n22Calendar'
import N22Page from './common/n22Page'
import N22Tab from './common/n22Tab'
import N22Zoom from './common/n22Zoom'

// 定义组件集合
const components = {
  N22Field,
  N22Address,
  N22Calendar,
  N22Page,
  N22Tab,
  N22Zoom
}

// 初始化组件
const install = function (Vue) {
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key])
  })
}

// 当全局引入的时候执行（eg:vue.use(N22UI)）
if (typeof window !== 'undefined' && window.Vue) install(window.Vue)

export default {
  install,
  N22Field,
  N22Address,
  N22Calendar,
  N22Page,
  N22Tab,
  N22Zoom
}
