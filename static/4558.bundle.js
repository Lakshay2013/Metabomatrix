"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[4558],{94558:(t,e,s)=>{s.r(e),s.d(e,{DocumentManager:()=>x,DocumentWidgetManager:()=>P,IDocumentManager:()=>A,IDocumentWidgetOpener:()=>O,PathStatus:()=>W,SaveHandler:()=>f,SavingStatus:()=>E,isValidFileName:()=>d,renameDialog:()=>l,renameFile:()=>h,shouldOverwrite:()=>c});var i,n=s(28054),a=s(64588),o=s(57356),r=s(9267);function l(t,e,s){const i=(s=s||o.nullTranslator).load("jupyterlab"),a=e.localPath.split("/").pop()||e.localPath;return(0,n.showDialog)({title:i.__("Rename File"),body:new g(a),focusNodeSelector:"input",buttons:[n.Dialog.cancelButton(),n.Dialog.okButton({label:i.__("Rename"),ariaLabel:i.__("Rename File")})]}).then((t=>t.value?d(t.value)?e.rename(t.value):((0,n.showErrorMessage)(i.__("Rename Error"),Error(i.__('"%1" is not a valid name for a file. Names must have nonzero length, and cannot include "/", "\\", or ":"',t.value))),null):null))}function h(t,e,s){return t.rename(e,s).catch((i=>{if(409!==i.response.status)throw i;return c(s).then((i=>i?t.overwrite(e,s):Promise.reject("File not renamed")))}))}function c(t,e){const s=(e=e||o.nullTranslator).load("jupyterlab"),i={title:s.__("Overwrite file?"),body:s.__('"%1" already exists, overwrite?',t),buttons:[n.Dialog.cancelButton(),n.Dialog.warnButton({label:s.__("Overwrite"),ariaLabel:s.__("Overwrite Existing File")})]};return(0,n.showDialog)(i).then((t=>Promise.resolve(t.button.accept)))}function d(t){return t.length>0&&!/[\/\\:]/.test(t)}class g extends r.Widget{constructor(t){super({node:i.createRenameNode(t)}),this.addClass("jp-FileDialog");const e=a.PathExt.extname(t),s=this.inputNode.value=a.PathExt.basename(t);this.inputNode.setSelectionRange(0,s.length-e.length)}get inputNode(){return this.node.getElementsByTagName("input")[0]}getValue(){return this.inputNode.value}}!function(t){t.createRenameNode=function(t,e){const s=(e=e||o.nullTranslator).load("jupyterlab"),i=document.createElement("div"),n=document.createElement("label");n.textContent=s.__("File Path");const a=document.createElement("span");a.textContent=t;const r=document.createElement("label");r.textContent=s.__("New Name"),r.className="jp-new-name-title";const l=document.createElement("input");return i.appendChild(n),i.appendChild(a),i.appendChild(r),i.appendChild(l),i}}(i||(i={}));var u=s(26621),_=s(33625),m=s(20998),p=s(14421),v=s(81997);class f{constructor(t){this._autosaveTimer=-1,this._minInterval=-1,this._interval=-1,this._isActive=!1,this._inDialog=!1,this._isDisposed=!1,this._multiplier=10,this._context=t.context,this._isConnectedCallback=t.isConnectedCallback||(()=>!0);const e=t.saveInterval||120;this._minInterval=1e3*e,this._interval=this._minInterval,this._context.fileChanged.connect(this._setTimer,this),this._context.disposed.connect(this.dispose,this)}get saveInterval(){return this._interval/1e3}set saveInterval(t){this._minInterval=this._interval=1e3*t,this._isActive&&this._setTimer()}get isActive(){return this._isActive}get isDisposed(){return this._isDisposed}dispose(){this.isDisposed||(this._isDisposed=!0,clearTimeout(this._autosaveTimer),v.Signal.clearData(this))}start(){this._isActive=!0,this._setTimer()}stop(){this._isActive=!1,clearTimeout(this._autosaveTimer)}_setTimer(){clearTimeout(this._autosaveTimer),this._isActive&&(this._autosaveTimer=window.setTimeout((()=>{this._isConnectedCallback()&&this._save()}),this._interval))}_save(){const t=this._context;if(this._setTimer(),!t)return;if(!t.contentsModel||!t.contentsModel.writable||!t.model.dirty||this._inDialog)return;const e=(new Date).getTime();t.save().then((()=>{if(this.isDisposed)return;const t=(new Date).getTime()-e;this._interval=Math.max(this._multiplier*t,this._minInterval),this._setTimer()})).catch((t=>{const{name:e}=t;"ModalCancelError"!==e&&"ModalDuplicateError"!==e&&console.error("Error in Auto-Save",t.message)}))}}var w,C,y=s(2549),D=s(49503);class P{constructor(t){this._activateRequested=new v.Signal(this),this._confirmClosingTab=!1,this._isDisposed=!1,this._stateChanged=new v.Signal(this),this._registry=t.registry,this.translator=t.translator||o.nullTranslator}get activateRequested(){return this._activateRequested}get confirmClosingDocument(){return this._confirmClosingTab}set confirmClosingDocument(t){if(this._confirmClosingTab!==t){const e=this._confirmClosingTab;this._confirmClosingTab=t,this._stateChanged.emit({name:"confirmClosingDocument",oldValue:e,newValue:t})}}get stateChanged(){return this._stateChanged}get isDisposed(){return this._isDisposed}dispose(){this.isDisposed||(this._isDisposed=!0,v.Signal.disconnectReceiver(this))}createWidget(t,e){const s=t.createNew(e);return this._initializeWidget(s,t,e),s}_initializeWidget(t,e,s){w.factoryProperty.set(t,e);const i=new y.DisposableSet;for(const n of this._registry.widgetExtensions(e.name)){const e=n.createNew(t,s);e&&i.add(e)}w.disposablesProperty.set(t,i),t.disposed.connect(this._onWidgetDisposed,this),this.adoptWidget(s,t),s.fileChanged.connect(this._onFileChanged,this),s.pathChanged.connect(this._onPathChanged,this),s.ready.then((()=>{this.setCaption(t)}))}adoptWidget(t,e){w.widgetsProperty.get(t).push(e),D.MessageLoop.installMessageHook(e,this),e.addClass("jp-Document"),e.title.closable=!0,e.disposed.connect(this._widgetDisposed,this),w.contextProperty.set(e,t)}findWidget(t,e){const s=w.widgetsProperty.get(t);if(s)return(0,_.find)(s,(t=>{const s=w.factoryProperty.get(t);return!!s&&s.name===e}))}contextForWidget(t){return w.contextProperty.get(t)}cloneWidget(t){const e=w.contextProperty.get(t);if(!e)return;const s=w.factoryProperty.get(t);if(!s)return;const i=s.createNew(e,t);return this._initializeWidget(i,s,e),i}closeWidgets(t){const e=w.widgetsProperty.get(t);return Promise.all(e.map((t=>this.onClose(t)))).then((()=>{}))}deleteWidgets(t){const e=w.widgetsProperty.get(t);return Promise.all(e.map((t=>this.onDelete(t)))).then((()=>{}))}messageHook(t,e){switch(e.type){case"close-request":return this.onClose(t),!1;case"activate-request":{const e=this.contextForWidget(t);e&&this._activateRequested.emit(e.path);break}}return!0}async setCaption(t){const e=this.translator.load("jupyterlab"),s=w.contextProperty.get(t);if(!s)return;const i=s.contentsModel;if(i)return s.listCheckpoints().then((n=>{if(t.isDisposed)return;const o=n[n.length-1],r=o?a.Time.format(o.last_modified):"None";let l=e.__("Name: %1\nPath: %2\n",i.name,i.path);s.model.readOnly?l+=e.__("Read-only"):l+=e.__("Last Saved: %1\n",a.Time.format(i.last_modified))+e.__("Last Checkpoint: %1",r),t.title.caption=l}));t.title.caption=""}async onClose(t){var e;const[s,i]=await this._maybeClose(t,this.translator);if(t.isDisposed)return!0;if(s){if(!i){const s=w.contextProperty.get(t);if(!s)return!0;(null===(e=s.contentsModel)||void 0===e?void 0:e.writable)?await s.save():await s.saveAs()}if(t.isDisposed)return!0;t.dispose()}return s}onDelete(t){return t.dispose(),Promise.resolve(void 0)}async _maybeClose(t,e){var s,i;const a=(e=e||o.nullTranslator).load("jupyterlab"),r=w.contextProperty.get(t);if(!r)return Promise.resolve([!0,!0]);let l=w.widgetsProperty.get(r);if(!l)return Promise.resolve([!0,!0]);l=l.filter((t=>{const e=w.factoryProperty.get(t);return!!e&&!1===e.readOnly}));const h=t.title.label,c=w.factoryProperty.get(t),d=r.model.dirty&&l.length<=1&&!(null===(s=null==c?void 0:c.readOnly)||void 0===s||s);if(this.confirmClosingDocument){const t=[n.Dialog.cancelButton(),n.Dialog.okButton({label:d?a.__("Close and save"):a.__("Close"),ariaLabel:d?a.__("Close and save Document"):a.__("Close Document")})];d&&t.splice(1,0,n.Dialog.warnButton({label:a.__("Close without saving"),ariaLabel:a.__("Close Document without saving")}));const e=await(0,n.showDialog)({title:a.__("Confirmation"),body:a.__('Please confirm you want to close "%1".',h),checkbox:d?null:{label:a.__("Do not ask me again."),caption:a.__("If checked, no confirmation to close a document will be asked in the future.")},buttons:t});return e.isChecked&&(this.confirmClosingDocument=!1),Promise.resolve([e.button.accept,!d||"warn"===e.button.displayType])}{if(!d)return Promise.resolve([!0,!0]);const t=(null===(i=r.contentsModel)||void 0===i?void 0:i.writable)?a.__("Save"):a.__("Save as"),e=await(0,n.showDialog)({title:a.__("Save your work"),body:a.__('Save changes in "%1" before closing?',h),buttons:[n.Dialog.cancelButton(),n.Dialog.warnButton({label:a.__("Discard"),ariaLabel:a.__("Discard changes to file")}),n.Dialog.okButton({label:t})]});return[e.button.accept,"warn"===e.button.displayType]}}_widgetDisposed(t){const e=w.contextProperty.get(t);if(!e)return;const s=w.widgetsProperty.get(e);s&&(_.ArrayExt.removeFirstOf(s,t),s.length||e.dispose())}_onWidgetDisposed(t){w.disposablesProperty.get(t).dispose()}_onFileChanged(t){const e=w.widgetsProperty.get(t);for(const t of e)this.setCaption(t)}_onPathChanged(t){const e=w.widgetsProperty.get(t);for(const t of e)this.setCaption(t)}}!function(t){t.contextProperty=new p.AttachedProperty({name:"context",create:()=>{}}),t.factoryProperty=new p.AttachedProperty({name:"factory",create:()=>{}}),t.widgetsProperty=new p.AttachedProperty({name:"widgets",create:()=>[]}),t.disposablesProperty=new p.AttachedProperty({name:"disposables",create:()=>new y.DisposableSet})}(w||(w={}));class x{constructor(t){var e;this._activateRequested=new v.Signal(this),this._contexts=[],this._isDisposed=!1,this._autosave=!0,this._autosaveInterval=120,this._lastModifiedCheckMargin=500,this._renameUntitledFileOnSave=!0,this._stateChanged=new v.Signal(this),this.translator=t.translator||o.nullTranslator,this.registry=t.registry,this.services=t.manager,this._dialogs=null!==(e=t.sessionDialogs)&&void 0!==e?e:new n.SessionContextDialogs({translator:t.translator}),this._isConnectedCallback=t.isConnectedCallback||(()=>!0),this._opener=t.opener,this._when=t.when||t.manager.ready;const s=new P({registry:this.registry,translator:this.translator});s.activateRequested.connect(this._onActivateRequested,this),s.stateChanged.connect(this._onWidgetStateChanged,this),this._widgetManager=s,this._setBusy=t.setBusy}get activateRequested(){return this._activateRequested}get autosave(){return this._autosave}set autosave(t){if(this._autosave!==t){const e=this._autosave;this._autosave=t,this._contexts.forEach((e=>{const s=C.saveHandlerProperty.get(e);s&&(!0!==t||s.isActive?!1===t&&s.isActive&&s.stop():s.start())})),this._stateChanged.emit({name:"autosave",oldValue:e,newValue:t})}}get autosaveInterval(){return this._autosaveInterval}set autosaveInterval(t){if(this._autosaveInterval!==t){const e=this._autosaveInterval;this._autosaveInterval=t,this._contexts.forEach((e=>{const s=C.saveHandlerProperty.get(e);s&&(s.saveInterval=t||120)})),this._stateChanged.emit({name:"autosaveInterval",oldValue:e,newValue:t})}}get confirmClosingDocument(){return this._widgetManager.confirmClosingDocument}set confirmClosingDocument(t){if(this._widgetManager.confirmClosingDocument!==t){const e=this._widgetManager.confirmClosingDocument;this._widgetManager.confirmClosingDocument=t,this._stateChanged.emit({name:"confirmClosingDocument",oldValue:e,newValue:t})}}get lastModifiedCheckMargin(){return this._lastModifiedCheckMargin}set lastModifiedCheckMargin(t){if(this._lastModifiedCheckMargin!==t){const e=this._lastModifiedCheckMargin;this._lastModifiedCheckMargin=t,this._contexts.forEach((e=>{e.lastModifiedCheckMargin=t})),this._stateChanged.emit({name:"lastModifiedCheckMargin",oldValue:e,newValue:t})}}get renameUntitledFileOnSave(){return this._renameUntitledFileOnSave}set renameUntitledFileOnSave(t){if(this._renameUntitledFileOnSave!==t){const e=this._renameUntitledFileOnSave;this._renameUntitledFileOnSave=t,this._stateChanged.emit({name:"renameUntitledFileOnSave",oldValue:e,newValue:t})}}get stateChanged(){return this._stateChanged}get isDisposed(){return this._isDisposed}dispose(){this.isDisposed||(this._isDisposed=!0,v.Signal.clearData(this),this._contexts.forEach((t=>this._widgetManager.closeWidgets(t))),this._widgetManager.dispose(),this._contexts.length=0)}cloneWidget(t){return this._widgetManager.cloneWidget(t)}closeAll(){return Promise.all(this._contexts.map((t=>this._widgetManager.closeWidgets(t)))).then((()=>{}))}closeFile(t){const e=this._contextsForPath(t).map((t=>this._widgetManager.closeWidgets(t)));return Promise.all(e).then((t=>{}))}contextForWidget(t){return this._widgetManager.contextForWidget(t)}copy(t,e){return this.services.contents.copy(t,e)}createNew(t,e="default",s){return this._createOrOpenDocument("create",t,e,s)}deleteFile(t){return this.services.sessions.stopIfNeeded(t).then((()=>this.services.contents.delete(t))).then((()=>(this._contextsForPath(t).forEach((t=>this._widgetManager.deleteWidgets(t))),Promise.resolve(void 0))))}duplicate(t){const e=a.PathExt.dirname(t);return this.services.contents.copy(t,e)}findWidget(t,e="default"){const s=a.PathExt.normalize(t);let i=[e];if("default"===e){const t=this.registry.defaultWidgetFactory(s);if(!t)return;i=[t.name]}else null===e&&(i=this.registry.preferredWidgetFactories(s).map((t=>t.name)));for(const t of this._contextsForPath(s))for(const e of i)if(null!==e){const s=this._widgetManager.findWidget(t,e);if(s)return s}}newUntitled(t){return"file"===t.type&&(t.ext=t.ext||".txt"),this.services.contents.newUntitled(t)}open(t,e="default",s,i){return this._createOrOpenDocument("open",t,e,s,i)}openOrReveal(t,e="default",s,i){const n=this.findWidget(t,e);return n?(this._opener.open(n,{type:e,...i}),n):this.open(t,e,s,null!=i?i:{})}overwrite(t,e){const s=`${e}.${m.UUID.uuid4()}`,i=()=>this.rename(s,e);return this.rename(t,s).then((()=>this.deleteFile(e))).then(i,i)}rename(t,e){return this.services.contents.rename(t,e)}_findContext(t,e){const s=this.services.contents.normalize(t);return(0,_.find)(this._contexts,(t=>t.path===s&&t.factoryName===e))}_contextsForPath(t){const e=this.services.contents.normalize(t);return this._contexts.filter((t=>t.path===e))}_createContext(t,e,s){const i=new u.Context({opener:(t,e)=>{this._widgetManager.adoptWidget(i,t),this._opener.open(t,e)},manager:this.services,factory:e,path:t,kernelPreference:s,setBusy:this._setBusy,sessionDialogs:this._dialogs,lastModifiedCheckMargin:this._lastModifiedCheckMargin,translator:this.translator}),n=new f({context:i,isConnectedCallback:this._isConnectedCallback,saveInterval:this.autosaveInterval});return C.saveHandlerProperty.set(i,n),i.ready.then((()=>{this.autosave&&n.start()})),i.disposed.connect(this._onContextDisposed,this),this._contexts.push(i),i}_onContextDisposed(t){_.ArrayExt.removeFirstOf(this._contexts,t)}_widgetFactoryFor(t,e){const{registry:s}=this;if("default"===e){const i=s.defaultWidgetFactory(t);if(!i)return;e=i.name}return s.getWidgetFactory(e)}_createOrOpenDocument(t,e,s="default",i,n){const a=this._widgetFactoryFor(e,s);if(!a)return;const o=a.modelName||"text",r=this.registry.getModelFactory(o);if(!r)return;const l=this.registry.getKernelPreference(e,a.name,i);let h,c=Promise.resolve(void 0);if("open"===t)h=this._findContext(e,r.name)||null,h||(h=this._createContext(e,r,l),c=this._when.then((()=>h.initialize(!1))));else{if("create"!==t)throw new Error(`Invalid argument 'which': ${t}`);h=this._createContext(e,r,l),c=this._when.then((()=>h.initialize(!0)))}const d=this._widgetManager.createWidget(a,h);return this._opener.open(d,{type:a.name,...n}),c.catch((t=>{console.error(`Failed to initialize the context with '${r.name}' for ${e}`,t),d.close()})),d}_onActivateRequested(t,e){this._activateRequested.emit(e)}_onWidgetStateChanged(t,e){"confirmClosingDocument"===e.name&&this._stateChanged.emit(e)}}!function(t){t.saveHandlerProperty=new p.AttachedProperty({name:"saveHandler",create:()=>{}})}(C||(C={}));var b=s(72145),M=s(90710),S=s(78156),T=s.n(S);function F(t){return T().createElement(b.TextItem,{source:t.name,title:t.fullPath})}class W extends M.VDomRenderer{constructor(t){super(new W.Model(t.docManager)),this.node.title=this.model.path}render(){return T().createElement(F,{fullPath:this.model.path,name:this.model.name})}}function k(t){return T().createElement(b.TextItem,{source:t.fileStatus})}!function(t){class e extends M.VDomModel{constructor(t){super(),this._onTitleChange=t=>{const e=this._getAllState();this._name=t.label,this._triggerChange(e,this._getAllState())},this._onPathChange=(t,e)=>{const s=this._getAllState();this._path=e,this._name=a.PathExt.basename(e),this._triggerChange(s,this._getAllState())},this._path="",this._name="",this._widget=null,this._docManager=t}get path(){return this._path}get name(){return this._name}get widget(){return this._widget}set widget(t){const e=this._widget;if(null!==e){const t=this._docManager.contextForWidget(e);t?t.pathChanged.disconnect(this._onPathChange):e.title.changed.disconnect(this._onTitleChange)}const s=this._getAllState();if(this._widget=t,null===this._widget)this._path="",this._name="";else{const t=this._docManager.contextForWidget(this._widget);t?(this._path=t.path,this._name=a.PathExt.basename(t.path),t.pathChanged.connect(this._onPathChange)):(this._path="",this._name=this._widget.title.label,this._widget.title.changed.connect(this._onTitleChange))}this._triggerChange(s,this._getAllState())}_getAllState(){return[this._path,this._name]}_triggerChange(t,e){t[0]===e[0]&&t[1]===e[1]||this.stateChanged.emit(void 0)}}t.Model=e}(W||(W={}));class E extends M.VDomRenderer{constructor(t){super(new E.Model(t.docManager));const e=(t.translator||o.nullTranslator).load("jupyterlab");this._statusMap={completed:e.__("Saving completed"),started:e.__("Saving started"),failed:e.__("Saving failed")}}render(){return null===this.model||null===this.model.status?null:T().createElement(k,{fileStatus:this._statusMap[this.model.status]})}}!function(t){class e extends M.VDomModel{constructor(t){super(),this._onStatusChange=(t,e)=>{this._status=e,"completed"===this._status?(setTimeout((()=>{this._status=null,this.stateChanged.emit(void 0)}),2e3),this.stateChanged.emit(void 0)):this.stateChanged.emit(void 0)},this._status=null,this._widget=null,this._status=null,this.widget=null,this._docManager=t}get status(){return this._status}get widget(){return this._widget}set widget(t){var e,s;const i=this._widget;if(null!==i){const t=this._docManager.contextForWidget(i);t?t.saveState.disconnect(this._onStatusChange):(null===(e=this._widget.content)||void 0===e?void 0:e.saveStateChanged)&&this._widget.content.saveStateChanged.disconnect(this._onStatusChange)}if(this._widget=t,null===this._widget)this._status=null;else{const t=this._docManager.contextForWidget(this._widget);t?t.saveState.connect(this._onStatusChange):(null===(s=this._widget.content)||void 0===s?void 0:s.saveStateChanged)&&this._widget.content.saveStateChanged.connect(this._onStatusChange)}}}t.Model=e}(E||(E={}));const A=new m.Token("@jupyterlab/docmanager:IDocumentManager","A service for the manager for all\n  documents used by the application. Use this if you want to open and close documents,\n  create and delete files, and otherwise interact with the file system."),O=new m.Token("@jupyterlab/docmanager:IDocumentWidgetOpener","A service to open a widget.")}}]);