
Ext.define('NewExtApp.view.CustomerForm',{
    extend: 'Ext.form.Panel',
    xtype: 'customerForm',
    
    title : "Registration Form",
    	
    viewModel: { type: 'customerviewmodel' },
    
    controller : 'customerController',
    
    layout:
    {
        type: 'vbox'
    },
    jsonSubmit: true,
    
    buttonAlign: 'left',
    
    items :[{
    	xtype: 'textfield',
        fieldLabel: 'Customer Id',
        width: "10%",
        name: 'Id',
        labelAlign: 'top',
        labelStyle: 'font-weight:bold',
        readOnly: true,
        hidden:true
    },
    {
    	xtype: 'textfield',
        fieldLabel: 'User Name',
        width: "33.33%",
        name: 'userName',
        labelAlign: 'top',
        labelStyle: 'font-weight:bold',
        allowBlank: false
        	
    },
    {
    	xtype: 'textfield',
        fieldLabel: 'Password',
        width: "33.33%",
        name: 'passWord',
        labelAlign: 'top',
        labelStyle: 'font-weight:bold',
        inputType: 'password',
        allowBlank: false
    },
    {
    	xtype: 'textfield',
        fieldLabel: 'Re-enter Password',
        width: "33.33%",
        name: 'password_check',
        labelAlign: 'top',
        labelStyle: 'font-weight:bold',
        inputType: 'password',
        allowBlank: false,
        listeners: {
        	blur: 'validatePassword'
        }
    },
    {
        xtype: 'fieldcontainer',
        layout: 'hbox',
        defaultType: 'textfield',
        width: '100%',
        fieldDefaults:
        {
            labelAlign: 'top',
            labelStyle: 'font-weight:bold'
        },
        items: [
        {
            fieldLabel: 'First Name',
            flex: 1,
            name: 'firstName',
            margin: '0 0 0 5',
            allowBlank: false
        },
		{
			name: 'middleName',
			margin: '0 0 0 5',
			flex: 1,
			fieldLabel: 'Middle Name:',
			allowBlank: false
		},
		{
			fieldLabel: 'Last Name',
			flex: 1,
			margin: '0 0 0 5',
			name: 'lastName',
			allowBlank: false
		}]
    },
    {
    	xtype: 'textfield',
        fieldLabel: 'Email Address',
        width: "33.33%",
        name: 'emailAddress',
        labelAlign: 'top',
        labelStyle: 'font-weight:bold',
        allowBlank: false
    },
    {
        xtype: 'datefield',
        fieldLabel: 'Date of Birth',
        name: 'dateOfBirth',
        width: "33.33%",
        labelAlign: 'top',
        labelStyle: 'font-weight:bold',
        allowBlank: false,
        format: 'd-m-Y'
    },
    {
        xtype: 'fieldcontainer',
        fieldLabel: 'Gender',
        defaultType: 'radiofield',
		width: '33.33%',
        fieldDefaults: {
        	 name: 'gender',
        	 flex: 1,
			 labelAlign: 'top',
			 labelStyle: 'font-weight:bold'
        },
        layout: 'hbox',
        items: [{
           boxLabel: 'Male',
           inputValue: 'M',
           id: 'Radio1'
        },{
           boxLabel: 'Female',
           inputValue: 'F',
           id: 'Radio2'
        }]
     },
     {
         xtype: 'combobox',
         fieldLabel: 'Marital Status',
         width: '33.33%',
         name: 'maritalStatus',
         labelAlign: 'top',
         labelStyle: 'font-weight:bold',
         store: Ext.create('Ext.data.Store', {
            fields: ['abbr', 'name'],
            data: [{
               'abbr': 'S',
               'name': 'Single'
            },{
               'abbr': 'M',
               'name': 'Married'
            },{
               'abbr': 'W',
               'name': 'Widowed'
            },{
               'abbr': 'D',
               'name': 'Divorced'
            }]
         }),
         valueField: 'abbr',
         displayField: 'name'
	}
    ],
    buttons: [{
        text: 'Save',
        itemId: 'btnSave',
        formBind: true,
        handler: 'onSaveClick'
    },
    {
        text: 'Clear',
        itemId: 'btnClear',
        handler: 'onClearClick'
    }],
    clearForm: function () {
        this.getForm().getFields().each(function (field) {
            field.validateOnChange = false;
            field.setValue('');
            field.resetOriginalValue();
        });
    },
    validatePassword: function()
    {
    	var customerForm = this.getForm();
    	var orignalPassword = customerForm.findField('passWord').getValue();
    	var retypedPassword = customerForm.findField('password_check').getValue();
    	if(orignalPassword!=retypedPassword)
		{
			Ext.Msg.alert('Passwords Dont Match');
			customerForm.findField('password_check').setValue('');
		}
    }
    
});
