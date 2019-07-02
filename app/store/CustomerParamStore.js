Ext.define('NewExtApp.store.CustomerParamStore', {
    extend: 'Ext.data.Store',

    alias: 'store.customerParamStore',

    model : 'NewExtApp.model.CustomerParam',
    
    storeId : 'customerparamstores',

    proxy: {
        type: 'localstorage',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});

