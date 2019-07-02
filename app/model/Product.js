Ext.define('NewExtApp.model.Product', {
    extend: 'Ext.data.Model',
   
    fields: [
        { name: 'productId', type: 'int' },
        { name: 'productName', type: 'auto' },
        { name: 'productPrice', type: 'float' }
    ],
    
    idProperty: 'productId'
});
