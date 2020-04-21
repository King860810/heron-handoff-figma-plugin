!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=209)}({209:function(e,t,n){"use strict";n.r(t);var i=n(7),o=n(4),r=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function l(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}c((i=i.apply(e,t||[])).next())}))};const a={Ultralight:"ultralight",100:"ultralight",Thin:"thin",200:"thin",Light:"light",300:"light",Normal:"regular",Regular:"regular",400:"regular",Medium:"medium",Semibold:"semibold",Demibold:"semibold",500:"semibold",600:"semibold",Bold:"bold",700:"bold",Extrabold:"heavy",Ultrabold:"heavy",Heavy:"heavy",800:"heavy",Black:"black",900:"bacl"},l=(e,t)=>{const n=Object.getOwnPropertyNames(e),i=Object.getOwnPropertyNames(t);if(n.length!==i.length)return!1;for(const n in e){if(e.hasOwnProperty(n)!==t.hasOwnProperty(n))return!1;switch(typeof e[n]){case"object":if(!l(e[n],t[n]))return!1;break;default:if(e[n]!==t[n])return!1}}return!0},c=(e,t)=>{const n=void 0===t?e.fillStyleId:e.getRangeFillStyleId(t,t+1),i=void 0===t?e.textStyleId:e.getRangeTextStyleId(t,t+1),o=void 0===t?e.fontSize:e.getRangeFontSize(t,t+1),r=void 0===t?e.fontName:e.getRangeFontName(t,t+1),l=void 0===t?e.textDecoration:e.getRangeTextDecoration(t,t+1),c=void 0===t?e.letterSpacing:e.getRangeLetterSpacing(t,t+1),s=void 0===t?e.lineHeight:e.getRangeLineHeight(t,t+1),d=void 0===t?e.fills:e.getRangeFills(t,t+1);return{fillStyleId:n,textStyleId:i,fontSize:o,fontFamily:r.family,fontWeight:a[r.style]||r.style,textDecoration:l,letterSpacing:c.value,letterSpacingUnit:c.unit,lineHeight:s.value,lineHeightUnit:s.unit,fills:d,textAlignHorizontal:e.textAlignHorizontal,textAlignVertical:e.textAlignVertical}},s=e=>{if((e=>{const{fontName:t,fontSize:n,lineHeight:i,textDecoration:o,letterSpacing:r,fills:a}=e;return!![t,n,i,o,r,a].filter(e=>"symbol"==typeof e).length})(e)){const t=[];let n;return Array.prototype.map.call(e.characters,(i,o)=>{if(0===o)n=c(e,o),t.push(Object.assign({text:i},n));else{const r=c(e,o),a=t.length;((e,t)=>{if(e.fillStyleId&&t.fillStyleId&&e.textStyleId&&t.textStyleId&&e.fillStyleId===t.fillStyleId&&e.textStyleId===t.textStyleId)return!0;if(e.fillStyleId||t.fillStyleId||e.textStyleId||t.textStyleId)return!1;return l(e,t)})(n,r)?t[a-1].text+=i:t.push(Object.assign({text:i},r)),n=r}}),t}return c(e)},d={POLYGON:"REGULAR_POLYGON",PAGE:"CANVAS"},f=(e,t,n)=>{const i={isFromPlugin:!0,name:e.name,document:{}};let o=[];const r=[],l=[],c=[],f=(e,n)=>{const i=d[e.type]||e.type,o={id:e.id,name:e.name,type:i};return((e,t)=>{1!==t.opacity&&void 0!==t.opacity&&(e.opacity=t.opacity),["visible","locked","blendMode","size","clipsContent","relativeTransform","effects","isMask","isMaskOutline","booleanOperation"].map(n=>{void 0!==t[n]&&(e[n]=t[n])})})(o,e),((e,t,n)=>{switch(n){case"CANVAS":e.backgroundColor=t.backgrounds[0];break;case"TEXT":e.characters=t.characters;const n=s(t),i=Array.isArray(n);if(e.isMixedText=i,i){const t=Object.assign({},n[0]);delete t.text,e.style=t,e.textTable=n,e.fills=n[0].fills}else e.textTable=[],e.style=n;break;case"INSTANCE":try{e.componentId=t.masterComponent.id}catch(e){console.log(e)}}})(o,e,i),((e,t)=>{void 0!==t.fills&&"symbol"!=typeof t.fills&&(e.fills=t.fills),void 0!==t.strokes&&(e.strokes=t.strokes,e.strokeWeight=void 0!==e.strokeWeight?e.strokeWeight:1,e.strokeAlign=e.strokeAlign||"INSIDE");const n=(e=>{if(!(e.fillStyleId||e.textStyleId||e.strokeStyleId||e.effectStyleId))return!1;const t={};return e.fillStyleId&&"symbol"!=typeof e.fillStyleId&&(t.fill=e.fillStyleId),e.textStyleId&&"symbol"!=typeof e.textStyleId&&(t.text=e.textStyleId),e.strokeStyleId&&(t.stroke=e.strokeStyleId),e.effectStyleId&&(t.effect=e.effectStyleId),t})(t);n&&(e.styles=n)})(o,e),((e,t)=>{t.cornerRadius&&("number"==typeof t.cornerRadius?(e.cornerRadius=t.cornerRadius,e.rectangleCornerRadii=Array.from(Array(4),()=>t.cornerRadius)):e.rectangleCornerRadii=[t.topLeftRadius,t.topRightRadius,t.bottomRightRadius,t.bottomLeftRadius])})(o,e),((e,t,n)=>{"CANVAS"!==n&&"DOCUMENT"!==n&&(e.absoluteBoundingBox={x:t.absoluteTransform[0][2],y:t.absoluteTransform[1][2],width:t.width,height:t.height})})(o,e,i),((e,t,n)=>{t.exportSettings&&(e.exportSettings=t.exportSettings,t.exportSettings.length&&n&&n(t.exportSettings))})(o,e,t=>{n||!e.visible||e.isMask||t.map(t=>{l.push({exportType:"exportSetting",node:e}),c.push(Object.assign(Object.assign({},t),{id:e.id,name:e.name}))})}),e.children&&(o.children=e.children.filter(e=>{const n="PAGE"===e.parent.type&&"FRAME"===e.type;return n&&t.indexOf(e.id)>-1&&r.push({exportType:"frame",node:e}),n?t.indexOf(e.id)>-1:"PAGE"!==e.parent.type}).map(e=>f(e))),o};return i.styles={FILL:figma.getLocalPaintStyles().map(e=>(e=>({id:e.id,key:e.key,name:e.name,description:e.description,styleType:"FILL",items:e.paints}))(e)),TEXT:figma.getLocalTextStyles().map(e=>(e=>({id:e.id,key:e.key,name:e.name,description:e.description,styleType:"TEXT",items:{fontSize:e.fontSize,fontFamily:e.fontName.family,fontWeight:a[e.fontName.style]||e.fontName.style,textDecoration:e.textDecoration,letterSpacing:e.letterSpacing.value,letterSpacingUnit:e.letterSpacing.unit,lineHeight:e.lineHeight.value,lineHeightUnit:e.lineHeight.unit}}))(e)),EFFECT:figma.getLocalEffectStyles().map(e=>(e=>({id:e.id,key:e.key,name:e.name,description:e.description,styleType:"EFFECT",items:e.effects}))(e)),GRID:figma.getLocalGridStyles().map(e=>(e=>({id:e.id,key:e.key,name:e.name,description:e.description,styleType:"GRID",items:e.layoutGrids}))(e))},o=e.findAll(e=>"COMPONENT"===e.type&&e.visible).map(e=>({exportType:"component",node:e})),i.components=o.map(({node:e})=>n?f(e,!0):{id:e.id,name:e.name,description:e.description}),i.document=f(e),i.exportSettings=c,{fileData:i,frameNodes:r,exportSettingNodes:l,componentNodes:o}};var u=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function l(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}c((i=i.apply(e,t||[])).next())}))};let y,g,p,m=[],h=[],x=[],b=[];figma.showUI(__html__,{width:300,height:480}),figma.ui.onmessage=e=>u(void 0,void 0,void 0,(function*(){if("ui:set-welcomed"===e.type)yield figma.clientStorage.setAsync("welcomed",!0);else if("ui:get-welcomed"===e.type){const e=yield figma.clientStorage.getAsync("welcomed");Object(o.e)({type:"bg:welcomed-got",message:{welcomed:e}})}else if("ui:get-frames"===e.type)Object(o.e)({type:"bg:frames-got",message:{allFrames:Object(i.a)(figma.root),currentFrames:Object(i.b)(figma.currentPage),currentPageKey:figma.currentPage.id}});else if("ui:get-document"===e.type){const{pagedFrames:t,selectedFrameKeys:n,includeComponents:i,useHDImages:r}=e,a=f(figma.root,n,i);y=a.fileData,p=i,g=r,m=a.frameNodes,h=a.exportSettingNodes,x=a.componentNodes,b=m.concat(h,p?x:[]),Object(o.e)({type:"bg:document-got",message:{fileData:y,pagedFrames:t,selectedFrameKeys:n,includeComponents:p,useHDImages:g}})}else if("ui:export-image"===e.type){const{index:i}=e,{exportType:a,node:l}=b[i];switch(a){case"frame":yield(t=l,n=g,r(void 0,void 0,void 0,(function*(){try{const e=yield t.exportAsync({format:"PNG",constraint:{type:"SCALE",value:n?2:1}}),i=Object(o.f)(`${t.id}.png`),r=`${t.name}.png`;Object(o.e)({type:"bg:image-exported",message:{imgData:e,fileActualName:r,fileName:i,type:"frame"}})}catch(e){console.log(e),figma.notify(`Error occurs when exporting ${t.name}, please check it.`)}})));break;case"exportSetting":yield((e,t,n)=>r(void 0,void 0,void 0,(function*(){try{const i=Object.assign({},t[n]),r=Object(o.c)(i,n);delete i.id,delete i.name;const a=yield e.exportAsync(i);Object(o.e)({type:"bg:image-exported",message:{imgData:a,fileActualName:r,fileName:r,type:"exportSetting"}})}catch(t){console.log(t),figma.notify(`Error occurs when exporting ${e.name}, please check it.`)}})))(l,y.exportSettings,i-m.length);break;case"component":yield((e,t)=>r(void 0,void 0,void 0,(function*(){try{const n=yield e.exportAsync({format:"PNG",constraint:{type:"SCALE",value:t?2:1}}),i=Object(o.f)(`${e.id}.png`),r=`${e.name}.png`;Object(o.e)({type:"bg:image-exported",message:{imgData:n,fileActualName:r,fileName:i,type:"component"}})}catch(t){console.log(t),figma.notify(`Error occurs when exporting ${e.name}, please check it.`)}})))(l,g)}}var t,n}))},4:function(e,t,n){"use strict";n.d(t,"e",(function(){return o})),n.d(t,"a",(function(){return r})),n.d(t,"f",(function(){return a})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return s}));var i=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function l(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}c((i=i.apply(e,t||[])).next())}))};const o=e=>{figma.ui.postMessage(e)},r=(e,t)=>i(void 0,void 0,void 0,(function*(){for(let n=0;n<e.length;n++)yield t(e[n],n,e)})),a=e=>e.replace(/\//g,"-").replace(/:/g,"-"),l=(e,t)=>{const{name:n,suffix:i,format:o,constraint:r}=e;let l=i?`${n}-${i}`:n;void 0!==t&&(l+=`-${t}`);const c="SVG"===o?"":`@${r.value}x`,s=o.toLowerCase();return l=l.replace(/ /g,"-"),`${a(l)}${c}.${s}`},c=e=>fetch(e).then(e=>e.text()).catch(e=>(console.dir(e),{err:e})),s=e=>fetch(e).then(e=>e.arrayBuffer()).catch(e=>(console.dir(e),{err:e}))},7:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return l}));const i=(e,t)=>{const n=[];return e.map(({children:e})=>{e.filter(({key:e})=>!t||t.indexOf(e)>-1).map(({key:e})=>{n.push(e)})}),n},o=(e,t)=>{const n={};return e.map(({key:e,title:i,children:o})=>{const r=o.filter(({key:e})=>t.indexOf(e)>-1);r.length&&(n[e]={name:i,frames:r.map(({key:e,title:t})=>({id:e,name:t}))})}),n},r=e=>{return e.map(({key:e})=>e)},a=e=>e.children.map(e=>({key:e.id,title:e.name,children:e.children.filter(({type:e,visible:t})=>"FRAME"===e&&t).map(e=>({key:e.id,title:e.name})).reverse()})).filter(e=>!!e.children.length),l=e=>e.children.filter(({type:e,visible:t})=>"FRAME"===e&&t).map(e=>e.id)}});