/**
 * This view is an example list of people.
 */
Ext.define('NewExtApp.view.main.ProductForm', {
    extend: 'Ext.grid.Panel',
    xtype: 'productList',
    
    buttonAlign: 'left',

    viewModel: { type: 'productviewmodel' },
    
    controller : 'productController',

    title: 'Product List',
    
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
        store: '{productListStore}'
    },
    
    plugins: [Ext.create('Ext.grid.plugin.RowEditing',
            {
                clicksToEdit: 2
            })],
            
    columns: [
        { text: 'Id',  dataIndex: 'productId',flex:1 },
        { text: 'Name', dataIndex: 'productName', editor:
	        {
	            allowBlank: false
	        },
	        flex:3
        },
        { text: 'Price', dataIndex: 'productPrice', editor:
        {
            allowBlank: false
        },
        flex:1}
    ],
    tbar: [{
        text: 'Add Product',
        iconCls: 'fa-plus',
        handler: 'onAddClick'
    },
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
        itemId: 'addtoCart',
        text: 'Add to Cart',
        iconCls: 'fa-times',
        reference: 'btnAddtoCart',
        handler: 'onAddtoCartClick',
        disabled: true
    },
    {
        itemId: 'logout',
        text: 'Logout',
        iconCls: 'fa-times',
        reference: 'btnLogout',
        handler: 'onLogoutClick',
    }],
});
