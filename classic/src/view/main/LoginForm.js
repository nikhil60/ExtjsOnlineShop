Ext.define('NewExtApp.view.LoginForm',{
    extend: 'Ext.form.Panel',
    xtype: 'loginForm',
    
    title : "Login Form",

    viewModel: { type: 'loginviewmodel' },
    
    controller : 'loginController',
    
    layout:
    {
        type: 'vbox'
    },
    
    buttonAlign: 'left',
    
    jsonSubmit: true,
    
    items :[
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
    ],
    buttons: [{
        text: 'Login',
        itemId: 'btnLogin',
        formBind: true,
        handler: 'onLoginClick'
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
})