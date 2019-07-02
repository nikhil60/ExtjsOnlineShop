Ext.define('NewExtApp.model.Order', {
    extend: 'Ext.data.Model',
   
    fields: [
        { name: 'orderId', type: 'int' },
        { name: 'productId', type: 'int' },
        { name: 'productName', type: 'auto' },
        { name: 'productPrice', type: 'auto' },
        { name: 'orderQty', type: 'auto' },
        { name: 'orderPrice', type: 'auto' },
        { name: 'cartId', type: 'auto' },
    ],
    idProperty: 'orderId'
});
