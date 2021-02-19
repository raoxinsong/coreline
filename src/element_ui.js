import { 
	Select, 
	Option,
	OptionGroup, 
	Input,
	Form,
	FormItem,
	Dialog,
	Row, 
	Col,
	Button,
	Card,
	Pagination,
	MessageBox,
	Message,
	Table,
	TableColumn,
	Loading,
	DatePicker,
	Tooltip,
	Switch
	} from 'element-ui'
const element = {
  install: function (Vue) {
    Vue.use(Select)
    Vue.use(Option)
    Vue.use(OptionGroup)
    Vue.use(Input)
    Vue.use(Form)
	Vue.use(FormItem)
    Vue.use(Dialog)
    Vue.use(Row)
    Vue.use(Col)
	Vue.use(Button)
	Vue.use(Card)
	Vue.use(Table)
	Vue.use(TableColumn)
	Vue.use(Loading.directive)
	Vue.use(Pagination)
	Vue.use(DatePicker)
	Vue.use(Switch)
	Vue.use(Tooltip) 
	Vue.prototype.$loading = Loading.service
	Vue.prototype.$msgbox = MessageBox
	Vue.prototype.$alert = MessageBox.alert
	Vue.prototype.$confirm = MessageBox.confirm
	Vue.prototype.$prompt = MessageBox.prompt
	Vue.prototype.$message = Message
  }
}
export default element