Ext.define('NewExtApp.model.CustomerParam', {
    extend: 'Ext.data.Model',
   
    fields: [
        { name: 'cartId', type: 'int' },
        { name: 'customerId', type: 'int' },
        { name: 'loginStatus', type: 'boolean' },
        { name: 'userName', type: 'auto' }
    ]
});
