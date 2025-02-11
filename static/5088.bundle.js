"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[5088],{45088:(e,n,t)=>{t.r(n),t.d(n,{CommandIDs:()=>b,default:()=>g});var a=t(70273),o=t(28054),l=t(64588),r=t(1531),d=t(52124),i=t(70394),u=t(57356),s=t(90710),c=t(33625),m=t(20998),p=t(9267);const _="@jupyterlab/mainmenu-extension:plugin";var b;!function(e){e.openEdit="editmenu:open",e.undo="editmenu:undo",e.redo="editmenu:redo",e.clearCurrent="editmenu:clear-current",e.clearAll="editmenu:clear-all",e.find="editmenu:find",e.goToLine="editmenu:go-to-line",e.openFile="filemenu:open",e.closeAndCleanup="filemenu:close-and-cleanup",e.createConsole="filemenu:create-console",e.shutdown="filemenu:shutdown",e.logout="filemenu:logout",e.openKernel="kernelmenu:open",e.interruptKernel="kernelmenu:interrupt",e.reconnectToKernel="kernelmenu:reconnect-to-kernel",e.restartKernel="kernelmenu:restart",e.restartKernelAndClear="kernelmenu:restart-and-clear",e.changeKernel="kernelmenu:change",e.shutdownKernel="kernelmenu:shutdown",e.shutdownAllKernels="kernelmenu:shutdownAll",e.openView="viewmenu:open",e.wordWrap="viewmenu:word-wrap",e.lineNumbering="viewmenu:line-numbering",e.matchBrackets="viewmenu:match-brackets",e.openRun="runmenu:open",e.run="runmenu:run",e.runAll="runmenu:run-all",e.restartAndRunAll="runmenu:restart-and-run-all",e.runAbove="runmenu:run-above",e.runBelow="runmenu:run-below",e.openTabs="tabsmenu:open",e.activateById="tabsmenu:activate-by-id",e.activatePreviouslyUsedTab="tabsmenu:activate-previously-used-tab",e.openSettings="settingsmenu:open",e.openHelp="helpmenu:open",e.getKernel="helpmenu:get-kernel",e.openFirst="mainmenu:open-first"}(b||(b={}));const g={id:_,description:"Adds and provides the application main menu.",requires:[a.IRouter,u.ITranslator],optional:[o.ICommandPalette,a.ILabShell,i.ISettingRegistry],provides:r.IMainMenu,activate:async(e,n,t,i,u,m)=>{const{commands:_}=e,g=t.load("jupyterlab"),C=new r.MainMenu(_);C.id="jp-MainMenu",C.addClass("jp-scrollbar-tiny"),m&&(await h.loadSettingsMenu(m,(e=>{C.addMenu(e,!1,{rank:e.rank})}),(e=>r.MainMenu.generateMenu(_,e,g)),t),C.update());const v=l.PageConfig.getOption("quitButton").toLowerCase();C.fileMenu.quitEntry="true"===v,function(e,n,t){const o=e.commands;o.addCommand(b.undo,(0,a.createSemanticCommand)(e,n.undoers.undo,{label:t.__("Undo")},t)),o.addCommand(b.redo,(0,a.createSemanticCommand)(e,n.undoers.redo,{label:t.__("Redo")},t)),o.addCommand(b.clearCurrent,(0,a.createSemanticCommand)(e,n.clearers.clearCurrent,{label:t.__("Clear")},t)),o.addCommand(b.clearAll,(0,a.createSemanticCommand)(e,n.clearers.clearAll,{label:t.__("Clear All")},t)),o.addCommand(b.goToLine,(0,a.createSemanticCommand)(e,n.goToLiners,{label:t.__("Go to Line…")},t))}(e,C.editMenu,g),function(e,n,t,r){const i=e.commands;i.addCommand(b.closeAndCleanup,{...(0,a.createSemanticCommand)(e,n.closeAndCleaners,{execute:"application:close",label:r.__("Close and Shut Down"),isEnabled:!0},r),isEnabled:()=>!!e.shell.currentWidget&&!!e.shell.currentWidget.title.closable}),i.addCommand(b.createConsole,(0,a.createSemanticCommand)(e,n.consoleCreators,{label:r.__("New Console for Activity")},r)),i.addCommand(b.shutdown,{label:r.__("Shut Down"),caption:r.__("Shut down JupyterLab"),isVisible:()=>n.quitEntry,isEnabled:()=>n.quitEntry,execute:()=>(0,o.showDialog)({title:r.__("Shutdown confirmation"),body:r.__("Please confirm you want to shut down JupyterLab."),buttons:[o.Dialog.cancelButton(),o.Dialog.warnButton({label:r.__("Shut Down")})]}).then((async n=>{if(n.button.accept){const n=d.ServerConnection.makeSettings(),t=l.URLExt.join(n.baseUrl,"api/shutdown");try{await Promise.all([e.serviceManager.sessions.shutdownAll(),e.serviceManager.terminals.shutdownAll()])}catch(e){console.log(`Failed to shutdown sessions and terminals: ${e}`)}return d.ServerConnection.makeRequest(t,{method:"POST"},n).then((e=>{if(!e.ok)throw new d.ServerConnection.ResponseError(e);{const e=document.createElement("div"),n=document.createElement("p");n.textContent=r.__("You have shut down the Jupyter server. You can now close this tab.");const t=document.createElement("p");t.textContent=r.__("To use JupyterLab again, you will need to relaunch it."),e.appendChild(n),e.appendChild(t),(0,o.showDialog)({title:r.__("Server stopped"),body:new p.Widget({node:e}),buttons:[]}),window.close()}})).catch((e=>{throw new d.ServerConnection.NetworkError(e)}))}}))}),i.addCommand(b.logout,{label:r.__("Log Out"),caption:r.__("Log out of JupyterLab"),isVisible:()=>n.quitEntry,isEnabled:()=>n.quitEntry,execute:()=>{t.navigate("/logout",{hard:!0})}})}(e,C.fileMenu,n,g),function(e,n,t){const l=e.commands;l.addCommand(b.interruptKernel,{...(0,a.createSemanticCommand)(e,n.kernelUsers.interruptKernel,{label:t.__("Interrupt Kernel"),caption:t.__("Interrupt the kernel")},t),icon:e=>e.toolbar?s.stopIcon:void 0}),l.addCommand(b.reconnectToKernel,(0,a.createSemanticCommand)(e,n.kernelUsers.reconnectToKernel,{label:t.__("Reconnect to Kernel")},t)),l.addCommand(b.restartKernel,{...(0,a.createSemanticCommand)(e,n.kernelUsers.restartKernel,{label:t.__("Restart Kernel…"),caption:t.__("Restart the kernel")},t),icon:e=>e.toolbar?s.refreshIcon:void 0}),l.addCommand(b.restartKernelAndClear,(0,a.createSemanticCommand)(e,[n.kernelUsers.restartKernel,n.kernelUsers.clearWidget],{label:t.__("Restart Kernel and Clear…")},t)),l.addCommand(b.changeKernel,(0,a.createSemanticCommand)(e,n.kernelUsers.changeKernel,{label:t.__("Change Kernel…")},t)),l.addCommand(b.shutdownKernel,(0,a.createSemanticCommand)(e,n.kernelUsers.shutdownKernel,{label:t.__("Shut Down Kernel"),caption:t.__("Shut down kernel")},t)),l.addCommand(b.shutdownAllKernels,{label:t.__("Shut Down All Kernels…"),isEnabled:()=>!e.serviceManager.sessions.running().next().done,execute:()=>(0,o.showDialog)({title:t.__("Shut Down All?"),body:t.__("Shut down all kernels?"),buttons:[o.Dialog.cancelButton({label:t.__("Dismiss")}),o.Dialog.warnButton({label:t.__("Shut Down All")})]}).then((n=>{if(n.button.accept)return e.serviceManager.sessions.shutdownAll()}))})}(e,C.kernelMenu,g),function(e,n,t){const o=e.commands;o.addCommand(b.run,{...(0,a.createSemanticCommand)(e,n.codeRunners.run,{label:t.__("Run Selected"),caption:t.__("Run Selected")},t),icon:e=>e.toolbar?s.runIcon:void 0}),o.addCommand(b.runAll,(0,a.createSemanticCommand)(e,n.codeRunners.runAll,{label:t.__("Run All"),caption:t.__("Run All")},t)),o.addCommand(b.restartAndRunAll,{...(0,a.createSemanticCommand)(e,[n.codeRunners.restart,n.codeRunners.runAll],{label:t.__("Restart Kernel and Run All"),caption:t.__("Restart Kernel and Run All")},t),icon:e=>e.toolbar?s.fastForwardIcon:void 0})}(e,C.runMenu,g),function(e,n,t){const o=e.commands;o.addCommand(b.lineNumbering,(0,a.createSemanticCommand)(e,n.editorViewers.toggleLineNumbers,{label:t.__("Show Line Numbers")},t)),o.addCommand(b.matchBrackets,(0,a.createSemanticCommand)(e,n.editorViewers.toggleMatchBrackets,{label:t.__("Match Brackets")},t)),o.addCommand(b.wordWrap,(0,a.createSemanticCommand)(e,n.editorViewers.toggleWordWrap,{label:t.__("Wrap Words")},t))}(e,C.viewMenu,g),function(e,n,t){e.commands.addCommand(b.getKernel,(0,a.createSemanticCommand)(e,n.getKernel,{label:t.__("Get Kernel"),isVisible:!1},t))}(e,C.helpMenu,g),u&&function(e,n,t,a){const o=e.commands,l=[];let r;o.addCommand(b.activateById,{label:n=>{if(void 0===n.id)return a.__("Activate a widget by its `id`.");const t=n.id||"",o=(0,c.find)(e.shell.widgets("main"),(e=>e.id===t));return o&&o.title.label||""},isToggled:n=>{const t=n.id||"";return!!e.shell.currentWidget&&e.shell.currentWidget.id===t},execute:n=>e.shell.activateById(n.id||"")});let d="";o.addCommand(b.activatePreviouslyUsedTab,{label:a.__("Activate Previously Used Tab"),isEnabled:()=>!!d,execute:()=>o.execute(b.activateById,{id:d})}),t&&e.restored.then((()=>{const a=()=>{r&&!r.isDisposed&&r.dispose(),l.length=0;let t=!1;for(const n of e.shell.widgets("main"))n.id===d&&(t=!0),l.push({command:b.activateById,args:{id:n.id}});r=n.addGroup(l,1),d=t?d:""};a(),t.layoutModified.connect((()=>{a()})),t.currentChanged.connect(((e,n)=>{const t=n.oldValue;t&&(d=t.id)}))}))}(e,C.tabsMenu,u,g);const w=e=>{C.activeMenu=e,C.openActiveMenu()};return _.addCommand(b.openEdit,{label:g.__("Open Edit Menu"),execute:()=>w(C.editMenu)}),_.addCommand(b.openFile,{label:g.__("Open File Menu"),execute:()=>w(C.fileMenu)}),_.addCommand(b.openKernel,{label:g.__("Open Kernel Menu"),execute:()=>w(C.kernelMenu)}),_.addCommand(b.openRun,{label:g.__("Open Run Menu"),execute:()=>w(C.runMenu)}),_.addCommand(b.openView,{label:g.__("Open View Menu"),execute:()=>w(C.viewMenu)}),_.addCommand(b.openSettings,{label:g.__("Open Settings Menu"),execute:()=>w(C.settingsMenu)}),_.addCommand(b.openTabs,{label:g.__("Open Tabs Menu"),execute:()=>w(C.tabsMenu)}),_.addCommand(b.openHelp,{label:g.__("Open Help Menu"),execute:()=>w(C.helpMenu)}),_.addCommand(b.openFirst,{label:g.__("Open First Menu"),execute:()=>{C.activeIndex=0,C.openActiveMenu()}}),i&&(i.addItem({command:b.shutdown,category:g.__("Main Area")}),i.addItem({command:b.logout,category:g.__("Main Area")}),i.addItem({command:b.shutdownAllKernels,category:g.__("Kernel Operations")}),i.addItem({command:b.activatePreviouslyUsedTab,category:g.__("Main Area")})),e.shell.add(C,"menu",{rank:100}),C}};var h;!function(e){async function n(e){(await(0,o.showDialog)({title:e.__("Information"),body:e.__("Menu customization has changed. You will need to reload JupyterLab to see the changes."),buttons:[o.Dialog.cancelButton(),o.Dialog.okButton({label:e.__("Reload")})]})).button.accept&&location.reload()}e.loadSettingsMenu=async function(e,t,a,l){var r;const d=l.load("jupyterlab");let u=null,s={};function c(n){var t,a;s={};const o=Object.keys(e.plugins).map((n=>{var t,a;const o=null!==(a=null===(t=e.plugins[n].schema["jupyter.lab.menus"])||void 0===t?void 0:t.main)&&void 0!==a?a:[];return s[n]=o,o})).concat([null!==(a=null===(t=n["jupyter.lab.menus"])||void 0===t?void 0:t.main)&&void 0!==a?a:[]]).reduceRight(((e,n)=>i.SettingRegistry.reconcileMenus(e,n,!0)),n.properties.menus.default);n.properties.menus.default=i.SettingRegistry.reconcileMenus(o,n.properties.menus.default,!0).sort(((e,n)=>{var t,a;return(null!==(t=e.rank)&&void 0!==t?t:1/0)-(null!==(a=n.rank)&&void 0!==a?a:1/0)}))}e.transform(_,{compose:e=>{var n,t,a,o;u||(u=m.JSONExt.deepCopy(e.schema),c(u));const l=null!==(a=null===(t=null===(n=u.properties)||void 0===n?void 0:n.menus)||void 0===t?void 0:t.default)&&void 0!==a?a:[],r={...e.data.user,menus:null!==(o=e.data.user.menus)&&void 0!==o?o:[]},d={...e.data.composite,menus:i.SettingRegistry.reconcileMenus(l,r.menus)};return e.data={composite:d,user:r},e},fetch:e=>(u||(u=m.JSONExt.deepCopy(e.schema),c(u)),{data:e.data,id:e.id,raw:e.raw,schema:u,version:e.version})});const p=await e.load(_),b=null!==(r=m.JSONExt.deepCopy(p.composite.menus))&&void 0!==r?r:[],g=new Array;o.MenuFactory.createMenus(b.filter((e=>!e.disabled)).map((e=>{var n;return{...e,items:i.SettingRegistry.filterDisabledItems(null!==(n=e.items)&&void 0!==n?n:[])}})),a).forEach((e=>{g.push(e),t(e)})),p.changed.connect((()=>{var e;const t=null!==(e=p.composite.menus)&&void 0!==e?e:[];m.JSONExt.deepEqual(b,t)||n(d)})),e.pluginChanged.connect((async(l,r)=>{var u,c,p;if(r!==_){const l=null!==(u=s[r])&&void 0!==u?u:[],_=null!==(p=null===(c=e.plugins[r].schema["jupyter.lab.menus"])||void 0===c?void 0:c.main)&&void 0!==p?p:[];if(!m.JSONExt.deepEqual(l,_))if(s[r])await n(d);else{s[r]=m.JSONExt.deepCopy(_);const e=i.SettingRegistry.reconcileMenus(_,b,!1,!1).filter((e=>!e.disabled)).map((e=>{var n;return{...e,items:i.SettingRegistry.filterDisabledItems(null!==(n=e.items)&&void 0!==n?n:[])}}));o.MenuFactory.updateMenus(g,e,a).forEach((e=>{t(e)}))}}}))}}(h||(h={}))}}]);