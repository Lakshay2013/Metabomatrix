"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[8633],{98633:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var i,r=n(70273),a=n(28054),o=n(69384),d=n(90710),s=n(39401),c=n(24758),l=n(70394),g=n(86661),u=n(57356);!function(e){e.open="settingeditor:open",e.openJSON="settingeditor:open-json",e.revert="settingeditor:revert",e.save="settingeditor:save"}(i||(i={}));const p={id:"@jupyterlab/settingeditor-extension:form-ui",description:"Adds the interactive settings editor and provides its tracker.",requires:[l.ISettingRegistry,g.IStateDB,u.ITranslator,d.IFormRendererRegistry,r.ILabStatus],optional:[r.ILayoutRestorer,a.ICommandPalette,c.g],autoStart:!0,provides:c.O,activate:function(e,t,r,o,s,c,l,g,u){const m=o.load("jupyterlab"),{commands:v,shell:y}=e,S="setting-editor",b=new a.WidgetTracker({namespace:S});return l&&l.restore(b,{command:i.open,args:e=>({}),name:e=>S}),v.addCommand(i.open,{execute:async e=>{var l;"ui"===e.settingEditorType?v.execute(i.open,{query:null!==(l=e.query)&&void 0!==l?l:""}):"json"===e.settingEditorType?v.execute(i.openJSON):t.load(p.id).then((l=>{var g;"json"===l.get("settingEditorType").composite?v.execute(i.openJSON):(async e=>{if(b.currentWidget&&!b.currentWidget.isDisposed)return b.currentWidget.isAttached||y.add(b.currentWidget,"main",{type:"Settings"}),void y.activateById(b.currentWidget.id);const l=p.id,{SettingsEditor:g}=await n.e(6445).then(n.t.bind(n,46445,23)),I=new a.MainAreaWidget({content:new g({editorRegistry:s,key:l,registry:t,state:r,commands:v,toSkip:["@jupyterlab/application-extension:context-menu","@jupyterlab/mainmenu-extension:plugin"],translator:o,status:c,query:e.query})});u&&(I.toolbar.addItem("spacer",d.Toolbar.createSpacerItem()),I.toolbar.addItem("open-json-editor",new d.CommandToolbarButton({commands:v,id:i.openJSON,icon:d.launchIcon,label:m.__("JSON Settings Editor")}))),I.id=S,I.title.icon=d.settingsIcon,I.title.label=m.__("Settings"),I.title.closable=!0,b.add(I),y.add(I,"main",{type:"Settings"})})({query:null!==(g=e.query)&&void 0!==g?g:""})}))},label:e=>e.label?e.label:m.__("Settings Editor")}),g&&g.addItem({category:m.__("Settings"),command:i.open,args:{settingEditorType:"ui"}}),b}},m={id:"@jupyterlab/settingeditor-extension:plugin",description:"Adds the JSON settings editor and provides its tracker.",requires:[l.ISettingRegistry,o.IEditorServices,g.IStateDB,s.IRenderMimeRegistry,r.ILabStatus,u.ITranslator],optional:[r.ILayoutRestorer,a.ICommandPalette],autoStart:!0,provides:c.g,activate:function(e,t,r,o,s,c,l,g,u){const m=l.load("jupyterlab"),{commands:v,shell:y}=e,S="json-setting-editor",b=r.factoryService.newInlineEditor,I=new a.WidgetTracker({namespace:S});return g&&g.restore(I,{command:i.openJSON,args:e=>({}),name:e=>S}),v.addCommand(i.openJSON,{execute:async()=>{if(I.currentWidget&&!I.currentWidget.isDisposed)return I.currentWidget.isAttached||y.add(I.currentWidget,"main",{type:"Advanced Settings"}),void y.activateById(I.currentWidget.id);const r=p.id,g=e.restored,{JsonSettingEditor:u}=await n.e(6445).then(n.t.bind(n,46445,23)),h=new u({commands:{registry:v,revert:i.revert,save:i.save},editorFactory:b,key:r,registry:t,rendermime:s,state:o,translator:l,when:g});let w=null;h.commandsChanged.connect(((e,t)=>{t.forEach((e=>{v.notifyCommandChanged(e)})),h.canSaveRaw?w||(w=c.setDirty()):w&&(w.dispose(),w=null),h.disposed.connect((()=>{w&&w.dispose()}))}));const _=new a.MainAreaWidget({content:h});_.id=S,_.title.icon=d.settingsIcon,_.title.label=m.__("Advanced Settings Editor"),_.title.closable=!0,I.add(_),y.add(_,"main",{type:"Advanced Settings"})},label:m.__("Advanced Settings Editor")}),u&&u.addItem({category:m.__("Settings"),command:i.openJSON}),v.addCommand(i.revert,{execute:()=>{var e;null===(e=I.currentWidget)||void 0===e||e.content.revert()},icon:d.undoIcon,label:m.__("Revert User Settings"),isEnabled:()=>{var e,t;return null!==(t=null===(e=I.currentWidget)||void 0===e?void 0:e.content.canRevertRaw)&&void 0!==t&&t}}),v.addCommand(i.save,{execute:()=>{var e;return null===(e=I.currentWidget)||void 0===e?void 0:e.content.save()},icon:d.saveIcon,label:m.__("Save User Settings"),isEnabled:()=>{var e,t;return null!==(t=null===(e=I.currentWidget)||void 0===e?void 0:e.content.canSaveRaw)&&void 0!==t&&t}}),I}},v=[p,m]},24758:(e,t,n)=>{n.d(t,{O:()=>r,g:()=>a});var i=n(20998);const r=new i.Token("@jupyterlab/settingeditor:ISettingEditorTracker","A widget tracker for the interactive setting editor.\n  Use this if you want to be able to iterate over and interact with setting editors\n  created by the application."),a=new i.Token("@jupyterlab/settingeditor:IJSONSettingEditorTracker","A widget tracker for the JSON setting editor.\n  Use this if you want to be able to iterate over and interact with setting editors\n  created by the application.")}}]);