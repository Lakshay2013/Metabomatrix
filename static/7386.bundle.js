"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[7386,4811],{37386:(e,t,o)=>{o.r(t),o.d(t,{CellBarExtension:()=>u,CellToolbarTracker:()=>c});var l=o(28054),n=o(7437),a=o(90710),i=o(33625),s=o(81997);const r=["text/plain","application/vnd.jupyter.stdout","application/vnd.jupyter.stderr"],d="jp-toolbar-overlap";class c{constructor(e,t,o){if(this._isDisposed=!1,this._toolbar=null,this._toolbarItems=null,this._toolbarFactory=null,this._panel=e,this._previousActiveCell=this._panel.content.activeCell,this._toolbarItems=null!=t?t:null,this._toolbarFactory=null!=o?o:null,null===this._toolbarItems&&null===this._toolbarFactory)throw Error("You must provide the toolbarFactory or the toolbar items.");!this._toolbarFactory&&this._toolbarItems&&(this._onToolbarChanged(),this._toolbarItems.changed.connect(this._onToolbarChanged,this)),e.revealed.then((()=>{requestAnimationFrame((()=>{const t=e.content;this._onActiveCellChanged(t),t.activeCellChanged.connect(this._onActiveCellChanged,this),t.renderingLayoutChanged.connect(this._onActiveCellChanged,this),t.disposed.connect((()=>{t.activeCellChanged.disconnect(this._onActiveCellChanged)}))}))}))}_onMetadataChanged(e,t){"jupyter"===t.key&&("object"!=typeof t.newValue||!0!==t.newValue.source_hidden||"add"!==t.type&&"change"!==t.type?"object"==typeof t.oldValue&&!0===t.oldValue.source_hidden&&this._addToolbar(e):this._removeToolbar(e))}_onActiveCellChanged(e){this._previousActiveCell&&!this._previousActiveCell.isDisposed&&(this._removeToolbar(this._previousActiveCell.model),this._previousActiveCell.model.metadataChanged.disconnect(this._onMetadataChanged));const t=e.activeCell;null===t||t.inputHidden||(t.model.metadataChanged.connect(this._onMetadataChanged,this),this._addToolbar(t.model),this._previousActiveCell=t)}get isDisposed(){return this._isDisposed}dispose(){var e,t;this.isDisposed||(this._isDisposed=!0,null===(e=this._toolbarItems)||void 0===e||e.changed.disconnect(this._onToolbarChanged,this),null===(t=this._toolbar)||void 0===t||t.dispose(),this._panel=null,s.Signal.clearData(this))}_addToolbar(e){const t=this._getCell(e);if(t&&!t.isDisposed){const e=this._toolbar=new a.Toolbar;e.addClass("jp-cell-menu"),e.addClass("jp-cell-toolbar");const o=[t.ready];if(this._toolbarFactory)(0,l.setToolbar)(t,this._toolbarFactory,e),e.layout.widgets.forEach((e=>{e.update()}));else for(const{name:t,widget:l}of this._toolbarItems)e.addItem(t,l),l instanceof a.ReactWidget&&void 0!==l.renderPromise&&(l.update(),o.push(l.renderPromise));Promise.all(o).then((()=>{var o;t.isDisposed||(null===(o=this._panel)||void 0===o?void 0:o.content.activeCell)!==t?e.dispose():(t.layout.insertWidget(0,e),t.displayChanged.connect(this._resizeEventCallback,this),t.model.contentChanged.connect(this._changedEventCallback,this),this._updateCellForToolbarOverlap(t))})).catch((e=>{console.error("Error rendering buttons of the cell toolbar: ",e)}))}}_getCell(e){var t;return null===(t=this._panel)||void 0===t?void 0:t.content.widgets.find((t=>t.model===e))}_removeToolbar(e){var t,o;const l=this._getCell(e);l&&!l.isDisposed&&l.displayChanged.disconnect(this._resizeEventCallback,this),e.contentChanged.disconnect(this._changedEventCallback,this),(null===(t=this._toolbar)||void 0===t?void 0:t.parent)===l&&!1===(null===(o=this._toolbar)||void 0===o?void 0:o.isDisposed)&&this._toolbar.dispose()}_onToolbarChanged(){var e;const t=null===(e=this._panel)||void 0===e?void 0:e.content.activeCell;t&&(this._removeToolbar(t.model),this._addToolbar(t.model))}_changedEventCallback(){var e;const t=null===(e=this._panel)||void 0===e?void 0:e.content.activeCell;null!=t&&this._updateCellForToolbarOverlap(t)}_resizeEventCallback(){var e;const t=null===(e=this._panel)||void 0===e?void 0:e.content.activeCell;null!=t&&this._updateCellForToolbarOverlap(t)}_updateCellForToolbarOverlap(e){requestAnimationFrame((()=>{const t=e.node;t.classList.remove(d),this._cellToolbarOverlapsContents(e)&&t.classList.add(d)}))}_cellToolbarOverlapsContents(e){var t,o,l,n;const a=e.model.type,i=null===(t=e.editorWidget)||void 0===t?void 0:t.node.getBoundingClientRect(),s=null!==(o=null==i?void 0:i.left)&&void 0!==o?o:0,r=null!==(l=null==i?void 0:i.right)&&void 0!==l?l:0,d=this._cellToolbarLeft(e);return null!==d&&((s+r)/2>d||("markdown"===a&&e.rendered?this._markdownOverlapsToolbar(e):"default"===(null===(n=this._panel)||void 0===n?void 0:n.content.renderingLayout)?this._codeOverlapsToolbar(e):this._outputOverlapsToolbar(e)))}_markdownOverlapsToolbar(e){const t=e.inputArea;if(!t)return!1;const o=t.renderedInput.node.firstElementChild;if(null===o)return!1;const l=o.style.maxWidth;o.style.maxWidth="max-content";const n=o.getBoundingClientRect().right;o.style.maxWidth=l;const a=this._cellToolbarLeft(e);return null!==a&&n>a}_outputOverlapsToolbar(e){const t=e.outputArea.node;if(t){const o=t.querySelectorAll("[data-mime-type]"),l=this._cellToolbarRect(e);if(l){const{left:e,bottom:t}=l;return(0,i.some)(o,(o=>{const l=o.firstElementChild;if(l){const n=new Range;r.includes(o.getAttribute("data-mime-type")||"")?n.selectNodeContents(l):n.selectNode(l);const{right:a,top:i}=n.getBoundingClientRect();return a>e&&i<t}return!1}))}}return!1}_codeOverlapsToolbar(e){const t=e.editorWidget,o=e.editor;if(!t||!o)return!1;if(o.lineCount<1)return!1;const l=t.node.getElementsByClassName("cm-line");if(l.length<1)return!1;let n=l[0].getBoundingClientRect().left;const a=document.createRange();a.selectNodeContents(l[0]),n+=a.getBoundingClientRect().width;const i=this._cellToolbarLeft(e);return null!==i&&n>i}_cellToolbarRect(e){var t;return(null===(t=this._toolbar)||void 0===t?void 0:t.parent)!==e?null:this._toolbar.node.getBoundingClientRect()}_cellToolbarLeft(e){var t;return(null===(t=this._cellToolbarRect(e))||void 0===t?void 0:t.left)||null}}const h=[{command:"notebook:duplicate-below",name:"duplicate-cell"},{command:"notebook:move-cell-up",name:"move-cell-up"},{command:"notebook:move-cell-down",name:"move-cell-down"},{command:"notebook:insert-cell-above",name:"insert-cell-above"},{command:"notebook:insert-cell-below",name:"insert-cell-below"},{command:"notebook:delete-cell",name:"delete-cell"}];class u{constructor(e,t){this._commands=e,this._toolbarFactory=null!=t?t:this.defaultToolbarFactory}get defaultToolbarFactory(){const e=(0,l.createDefaultFactory)(this._commands);return t=>new n.ObservableList({values:h.map((o=>({name:o.name,widget:e(u.FACTORY_NAME,t,o)})))})}createNew(e){return new c(e,void 0,this._toolbarFactory)}}u.FACTORY_NAME="Cell"}}]);