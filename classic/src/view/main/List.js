/**
 * This view is an example list of people.
 */
Ext.define('NewExtApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'NewExtApp.store.CustomerParamStore'
    ],

    title: 'customerparamstore',

    store: {
        type: 'customerParamStore'
    },

    columns: [
        { text: 'cartId',  dataIndex: 'cartId' },
        { text: 'customerId', dataIndex: 'customerId', flex: 1 },
        { text: 'loginStatus', dataIndex: 'loginStatus', flex: 1 },
        { text: 'userName', dataIndex: 'userName', flex: 1 }
    ],
});
