/**
 * This view is an example list of people.
 */
Ext.define('NewExtApp.view.main.OrdertForm', {
    extend: 'Ext.grid.Panel',
    xtype: 'orderList',
    
    buttonAlign: 'left',

    viewModel: { type: 'orderviewmodel' },
    
    controller : 'orderController',
    
    stores: [
        // TODO: add global / shared stores here
    	'mycouponStore'
    ],

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
    
    layout: 'hbox',
    
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
        text: 'Remove from Cart',
        iconCls: 'fa-times',
        reference: 'btnRemoveProduct',
        handler: 'onRemoveClick',
        disabled: true
    },
    {
        itemId: 'applyCoupon',
        text: 'Apply coupon',
        iconCls: 'fa-times',
        reference: 'btnApplyCoupon',
        handler: 'onApplyCouponClick'
    },    
    {
        itemId: 'removeCoupon',
        text: 'Remove coupon',
        iconCls: 'fa-times',
        reference: 'btnRemoveCoupon',
        handler: 'onRemoveCouponClick'
    },
    {
        text: 'Refresh',
        iconCls: 'fa-plus',
        handler: 'onLoadClick'
    }],
    dockedItems: [
    	{
            xtype: 'toolbar',
            dock: 'bottom',
            layout: 'hbox',
            items: [
                {
                    xtype : 'toolbar',
                    itemId: 'bottomToolbar1',
                    flex:2,
                    items : [
                            {
                                xtype: 'label',
                                style: 'font-weight:bold',
                                text: 'Total Amount'
                                
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
                   id: 'cartTotal',
                   flex:1
                }
            ]
        },
    	{
            xtype: 'toolbar',
            dock: 'bottom',
            layout: 'hbox',
            items: [
                {
                    xtype : 'toolbar',
                    itemId: 'bottomToolbar1',
                    flex:2,
                    items : [
                            {
                                xtype: 'label',
                                style: 'font-weight:bold',
                                text: 'Tax Amount'
                                
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
                   id: 'cartTax',
                   flex:1
                }
            ]
        },
    	{
        xtype: 'toolbar',
        dock: 'bottom',
        layout: 'hbox',
        items: [
            {
                xtype : 'toolbar',
                itemId: 'bottomToolbar1',
                flex:2,
                items : [
                        {
                            xtype: 'label',
                            style: 'font-weight:bold',
                            text: 'Discount'
                            
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
               id: 'cartDiscount',
               flex:1
            }
        ]
    },
	{
        xtype: 'toolbar',
        dock: 'bottom',
        layout: 'hbox',
        items: [
            {
                xtype : 'toolbar',
                itemId: 'bottomToolbar',
                flex:2,
                items : [
                        {
                            xtype: 'label',
                            style: 'font-weight:bold',
                            text: 'Net Total'
                            
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
   ]
});
