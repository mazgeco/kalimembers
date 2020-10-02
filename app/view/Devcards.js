/*
 * File: app/view/Devcards.js
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

Ext.define('Kali.view.Devcards', {
  extend: 'Ext.Container',
  alias: 'widget.devcards',

  requires: [
    'Kali.view.DevcardsViewModel',
    'Kali.view.DevcardsViewController',
    'Kali.view.FilterForm',
    'Kali.view.MyDataForm',
    'Ext.TitleBar',
    'Ext.Button',
    'Ext.dataview.List',
    'Ext.XTemplate',
    'Ext.tab.Panel',
    'Ext.form.Panel'
  ],

  controller: 'devcards',
  viewModel: {
    type: 'devcards'
  },
  reference: 'devcards',

  layout: {
    type: 'card',
    animation: 'slide'
  },
  items: [
    {
      xtype: 'container',
      layout: 'hbox',
      items: [
        {
          xtype: 'titlebar',
          docked: 'top',
          title: 'Integrantes',
          titleAlign: 'left',
          items: [
            {
              xtype: 'button',
              align: 'right',
              iconCls: 'x-fa fa-filter',
              listeners: {
                tap: 'onOpenFilterButtonTap'
              }
            },
            {
              xtype: 'button',
              align: 'right',
              iconCls: 'x-fa fa-user',
              listeners: {
                tap: 'onMyDataTap'
              }
            },
            {
              xtype: 'button',
              align: 'right',
              iconCls: 'x-fa fa-sign-out',
              listeners: {
                tap: 'onSalir'
              }
            }
          ]
        },
        {
          xtype: 'list',
          flex: 1,
          reference: 'devlist',
          itemId: 'devList',
          minWidth: 300,
          disableSelection: true,
          itemTpl: [
            '<div class="list-item-dev">',
            '    <div class="list-header">',
            '        <img class="list-item-image" src="{picture.thumbnail}"/> ',
            '    </div>',
            '    <div class="list-item-details">',
            '        <div class="list-item-name">{name.first:capitalize} {name.last:capitalize}</div> ',
            '        <tpl for="skills"> ',
            '            <div class="list-item-skill-tag">{.}</div> ',
            '        </tpl> ',
            '    </div> ',
            '</div>'
          ],
          striped: true,
          bind: {
            store: '{devs}'
          },
          listeners: {
            childtap: 'onDevTap'
          }
        }
      ]
    },
    {
      xtype: 'container',
      layout: {
        type: 'vbox',
        align: 'center'
      },
      items: [
        {
          xtype: 'titlebar',
          docked: 'top',
          items: [
            {
              xtype: 'button',
              iconCls: 'x-fa fa-long-arrow-left',
              text: 'Integrantes',
              listeners: {
                tap: 'onDevListButtonTap'
              }
            }
          ]
        },
        {
          xtype: 'component',
          margin: 20,
          bind: {
            html: '<img class="dev-card-image" src="{dev.picture.large}" />'
          }
        },
        {
          xtype: 'component',
          margin: '0 0 20 0',
          bind: {
            html: '<div class="dev-card-name">{dev.name.first:capitalize} {dev.name.last:capitalize}</div>'
          }
        },
        {
          xtype: 'tabpanel',
          flex: 1,
          width: '100%',
          items: [
            {
              xtype: 'container',
              iconCls: 'x-fa fa-info',
              title: 'Info',
              padding: 20,
              scrollable: 'vertical',
              items: [
                {
                  xtype: 'component',
                  html: '<b>Registered since:</b> July 12, 2013',
                  margin: '0 0 29 0'
                },
                {
                  xtype: 'component',
                  html: '<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p><br><p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p><br><p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p><br><p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to</p>'
                },
                {
                  xtype: 'component',
                  tpl: [
                    '<div class="dev-card-skills-ct"><b>Skills:<br></b><tpl for="."><span class="dev-card-skill-tag">{.}</span></tpl></div>'
                  ],
                  bind: {
                    data: '{dev.skills}'
                  }
                }
              ]
            },
            {
              xtype: 'container',
              iconCls: 'x-fa fa-address-book',
              title: 'Contact',
              padding: 20,
              scrollable: 'vertical',
              bind: {
                html: '<b>e-mail:</b> {dev.email}<br><br><b>phone:</b> {dev.cell}<br><br><b>Loc:</b> {dev.location.city:capitalize}, {dev.location.state:capitalize} &nbsp;&nbsp;<b><i>{dev.nat:uppercase}</i></b>'
              }
            }
          ]
        }
      ]
    },
    {
      xtype: 'filterform',
      platformConfig: {
        phone: {
          floated: true,
          width: '100%',
          showAnimation: {
            type: 'slide',
            direction: 'down'
          },
          hideAnimation: {
            type: 'slideOut',
            direction: 'up'
          }
        },
        '!phone': {
          width: 150,
          showAnimation: {
            type: 'slide',
            direction: 'right'
          },
          hideAnimation: {
            type: 'slideOut',
            direction: 'left'
          }
        }
      },
      reference: 'filters',
      floated: true
    },
    {
      xtype: 'mydataform',
      reference: 'mydata'
    }
  ]

});