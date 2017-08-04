import Vue from 'vue'

import 'element-ui/lib/theme-default/index.css'

import {
  Loading,
  Notification,
  MessageBox,
  Row,
  Col,
  Menu,
  MenuItem,
  Submenu,
  Dialog,
  Button,
  ButtonGroup,
  Form,
  FormItem,
  Input,
  Card,
  Switch,
  Select,
  Option,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  DatePicker,
  InputNumber,
  Alert,
  Tabs,
  TabPane,
  Badge,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Tooltip,
  Popover
} from 'element-ui'

Vue.use(Loading)
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Dialog)
Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Card)
Vue.use(Switch)
Vue.use(Select)
Vue.use(Option)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Checkbox)
Vue.use(CheckboxButton)
Vue.use(CheckboxGroup)
Vue.use(DatePicker)
Vue.use(InputNumber)
Vue.use(Alert)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Badge)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Tooltip)
Vue.use(Popover)

Vue.prototype.$loading = Loading.service
Vue.prototype.$notify = Notification
Vue.prototype.$confirm = MessageBox.confirm
