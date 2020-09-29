/*
 * File: app/view/Main.js
 *
 * This file was generated by Sencha Architect version 4.2.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.6.x Modern library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.6.x Modern. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Kali.view.Main', {
    extend: 'Ext.Container',
    alias: 'widget.main',

    requires: [
        'Kali.view.MainViewModel',
        'Kali.view.Hero',
        'Kali.view.Devcards',
        'Ext.Container'
    ],

    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'card',
        animation: 'slide',
        'animation.direction': 'up'
    },
    items: [
        {
            xtype: 'hero'
        },
        {
            xtype: 'devcards'
        }
    ]

});