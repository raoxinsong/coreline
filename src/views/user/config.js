const baseColumn = [{
  prop: 'username',
  label: 'User name',
  sortable: true,
  width: '150',
},{
  prop: 'real_name',
  label: 'Real name',
  sortable: true,
  width: '120'
},{
  prop: 'email_address',
  label: 'Email address',
  sortable: true,
  width: '140',
},{
  prop: 'dept',
  label: 'Dept',
  sortable: true,
},{
  prop: 'password',
  label: 'Password',
  sortable: true,
  width: '120',
  type:'password',
  isshow:false
},{
  prop: 'reentry_password',
  label: 'Re-enter password',
  sortable: true,
  width: '120',
  type:'password',
  isshow:false
},{
  prop: 'group',
  label: 'Access group',
  sortable: true,
  width: '140',
  type:'select',
  selectOption:[{
	  value:1,
	  label:'Normal user'
  },{
	  value:2,
	  label:'Advanced user'
  },{
	  value:3,
	  label:'Admin user'
  }]
  
}] 
export  {
   baseColumn,
}
