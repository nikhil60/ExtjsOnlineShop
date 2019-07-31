/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('NewExtApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'NewExtApp.view.main.MainController',
        'NewExtApp.view.main.MainModel',
        'NewExtApp.view.main.List',
        'NewExtApp.view.main.ProductForm'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [
    	{
            title: 'Login Form',
            iconCls: 'fa-sign-in',
            id : 'loginForm',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'loginForm'
            }]
        },
    	{
            title: 'Registration Form',
            iconCls: 'fa-users',
            id:'registrationForm',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'customerForm'
            }]
        },
    	{
        disabled :true,
        title: 'Products',
        iconCls: 'fa-list',
        id:'productList',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'productList'
        }]
    },
    {
    	disabled :true,
        title: 'Cart',
        iconCls: 'fa-shopping-cart',
        id:'cart',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'orderList'
        }]
        
    },
    {
    	
        title: 'Logout',
        iconCls: 'fa-sign-out',
        id:'logout',
        tabConfig: {
            handler : 'onLogoutClick',
        },
        // The following grid shares a store with the classic version's grid as well!
        items: [{
        	
        }]
        
    },
    {
    	hidden:true,
    	disabled :true,
        title: 'CustomerParam',
        id:'customerParam',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: ''
        }]
        
    }]
});
