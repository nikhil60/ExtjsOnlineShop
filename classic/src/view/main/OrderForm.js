/**
 * This view is an example list of people.
 */
Ext.define('NewExtApp.view.main.OrdertForm', {
    extend: 'Ext.grid.Panel',
    xtype: 'orderList',
    
    buttonAlign: 'left',

    viewModel: { type: 'orderviewmodel' },
    
    controller : 'orderController',

    title: 'Order List',
    
    selType: 'rowmodel',
    
    selModel:
    {
        mode: 'SINGLE'
    },
    
    viewConfig:
    {
        stripeRows: true
    },
    
    listeners: {
        selectionchange: 'onSelectionChange'
    },
    
    bind: {
        store: '{orderListStore}'
    },
    
    plugins: [Ext.create('Ext.grid.plugin.RowEditing',
            {
                clicksToEdit: 2
            })],
            
    columns: [
        { text: 'Id',  dataIndex: 'orderId', hidden:true },
        { text: 'Product Id', dataIndex: 'productId', hidden:true},
        { text: 'Product Name', dataIndex: 'productName',flex:2},
        { text: 'Product Price', dataIndex: 'productPrice',flex:1 },
        { text: 'Quantity', dataIndex: 'orderQty',flex:1, editor:
        {
            allowBlank: false,
            listeners: {
            blur: 'calculateOrderPrice',
            }
        },},
        { text: 'Price', dataIndex: 'orderPrice',flex:1,id: 'orderPrice'},
    ],
    tbar: [
    {
        itemId: 'removeProduct',
        text: 'Remove Product',
        iconCls: 'fa-times',
        reference: 'btnRemoveProduct',
        handler: 'onRemoveClick',
        disabled: true
    },
    {
        text: 'Refresh',
        iconCls: 'fa-plus',
        handler: 'onLoadClick'
    },
    {
        itemId: 'logout',
        text: 'Logout',
        iconCls: 'fa-times',
        reference: 'btnLogout',
        handler: 'onLogoutClick',
    }],
    bbar: {
        layout: 'hbox',
        items: [
            {
                xtype : 'toolbar',
                itemId: 'bottonToolbar',
                flex:2,
                items : [
                        {
                            xtype: 'label',
                            style: 'font-weight:bold',
                            text: 'Total'
                            
                        }
                ]
            },
            {
            xtype: 'tbfill',
            flex:1
            },
            {
                xtype: 'tbfill',
                flex:1
            },
            {
               xtype: 'label',
               style: 'font-weight:bold',
               id: 'cartPrice',
               flex:1
            }
        ]
    }
    
});
