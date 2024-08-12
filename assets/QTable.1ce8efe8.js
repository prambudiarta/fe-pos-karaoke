import{c as A,h as U,a as yt,d as Ce}from"./render.f2fea035.js";import{c as u,h as r,g as I,r as j,w as D,ai as Ne,o as Qe,a3 as _t,P as qt,m as He,L as Le,al as z,J as Me,M as De,am as ke,an as Ee,ao as wt,n as ze,ap as kt,ac as G}from"./index.5079f055.js";import{a as Pe,k as Ue,l as Ke,v as Ct,Q as ie}from"./QBtn.05bc70e0.js";import{Q as Pt,a as xt}from"./QList.41e64a81.js";import{u as se,a as ce,c as Rt}from"./sweetalert2.all.bbac4cee.js";import{u as Tt,b as Bt,c as We,a as Vt}from"./QSelect.d212bd95.js";import{a as Ot,i as $t}from"./QInput.1ca74760.js";var _l=A({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:a}){const l=I(),c=u(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return r("td",{class:c.value},U(a.default));const o=l.vnode.key,v=(e.props.colsMap!==void 0?e.props.colsMap[o]:null)||e.props.col;if(v===void 0)return;const{row:i}=e.props;return r("td",{class:c.value+v.__tdClass(i),style:v.__tdStyle(i)},U(a.default))}}}),Ft=A({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:a,emit:l}){const c=I(),{proxy:{$q:o}}=c,v=i=>{l("click",i)};return()=>{if(e.props===void 0)return r("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:v},U(a.default));let i,d;const f=c.vnode.key;if(f){if(i=e.props.colsMap[f],i===void 0)return}else i=e.props.col;if(i.sortable===!0){const n=i.align==="right"?"unshift":"push";d=yt(a.default,[]),d[n](r(Pe,{class:i.__iconClass,name:o.iconSet.table.arrowUp}))}else d=U(a.default);const m={class:i.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:i.headerStyle,onClick:n=>{i.sortable===!0&&e.props.sort(i),v(n)}};return r("th",m,d)}}});const pt=["horizontal","vertical","cell","none"];var Lt=A({name:"QMarkupTable",props:{...se,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>pt.includes(e)}},setup(e,{slots:a}){const l=I(),c=ce(e,l.proxy.$q),o=u(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(c.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>r("div",{class:o.value},[r("table",{class:"q-table"},U(a.default))])}});function Ge(e,a){return r("div",e,[r("table",{class:"q-table"},a)])}const Mt={list:Pt,table:Lt},Dt=["list","table","__qtable"];var Et=A({name:"QVirtualScroll",props:{...Tt,type:{type:String,default:"list",validator:e=>Dt.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:a,attrs:l}){let c;const o=j(null),v=u(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:i,localResetVirtualScroll:d,padVirtualScroll:f,onVirtualScrollEvt:m}=Bt({virtualScrollLength:v,getVirtualScrollTarget:q,getVirtualScrollEl:k}),n=u(()=>{if(v.value===0)return[];const V=($,x)=>({index:i.value.from+x,item:$});return e.itemsFn===void 0?e.items.slice(i.value.from,i.value.to).map(V):e.itemsFn(i.value.from,i.value.to-i.value.from).map(V)}),b=u(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),w=u(()=>e.scrollTarget!==void 0?{}:{tabindex:0});D(v,()=>{d()}),D(()=>e.scrollTarget,()=>{h(),y()});function k(){return o.value.$el||o.value}function q(){return c}function y(){c=Rt(k(),e.scrollTarget),c.addEventListener("scroll",m,Le.passive)}function h(){c!==void 0&&(c.removeEventListener("scroll",m,Le.passive),c=void 0)}function B(){let V=f(e.type==="list"?"div":"tbody",n.value.map(a.default));return a.before!==void 0&&(V=a.before().concat(V)),Ce(a.after,V)}return Ne(()=>{d()}),Qe(()=>{y()}),_t(()=>{y()}),qt(()=>{h()}),He(()=>{h()}),()=>{if(a.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?Ge({ref:o,class:"q-table__middle "+b.value},B()):r(Mt[e.type],{...l,ref:o,class:[l.class,b.value],...w.value},B)}}});const jt={xs:2,sm:4,md:6,lg:10,xl:14};function je(e,a,l){return{transform:a===!0?`translateX(${l.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var At=A({name:"QLinearProgress",props:{...se,...Ue,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:a}){const{proxy:l}=I(),c=ce(e,l.$q),o=Ke(e,jt),v=u(()=>e.indeterminate===!0||e.query===!0),i=u(()=>e.reverse!==e.query),d=u(()=>({...o.value!==null?o.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),f=u(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),m=u(()=>je(e.buffer!==void 0?e.buffer:1,i.value,l.$q)),n=u(()=>`with${e.instantFeedback===!0?"out":""}-transition`),b=u(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${n.value} q-linear-progress__track--${c.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),w=u(()=>je(v.value===!0?1:e.value,i.value,l.$q)),k=u(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${n.value} q-linear-progress__model--${v.value===!0?"in":""}determinate`),q=u(()=>({width:`${e.value*100}%`})),y=u(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${n.value}`);return()=>{const h=[r("div",{class:b.value,style:m.value}),r("div",{class:k.value,style:w.value})];return e.stripe===!0&&v.value===!1&&h.push(r("div",{class:y.value,style:q.value})),r("div",{class:f.value,style:d.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},Ce(a.default,h))}}});function It(e,a){const l=j(null),c=u(()=>e.disable===!0?null:r("span",{ref:l,class:"no-outline",tabindex:-1}));function o(v){const i=a.value;v!==void 0&&v.type.indexOf("key")===0?i!==null&&document.activeElement!==i&&i.contains(document.activeElement)===!0&&i.focus():l.value!==null&&(v===void 0||i!==null&&i.contains(v.target)===!0)&&l.value.focus()}return{refocusTargetEl:c,refocusTarget:o}}var Nt={xs:30,sm:35,md:40,lg:50,xl:60};const Qt={...se,...Ue,...Ot,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},Ht=["update:modelValue"];function zt(e,a){const{props:l,slots:c,emit:o,proxy:v}=I(),{$q:i}=v,d=ce(l,i),f=j(null),{refocusTargetEl:m,refocusTarget:n}=It(l,f),b=Ke(l,Nt),w=u(()=>l.val!==void 0&&Array.isArray(l.modelValue)),k=u(()=>{const C=z(l.val);return w.value===!0?l.modelValue.findIndex(p=>z(p)===C):-1}),q=u(()=>w.value===!0?k.value>-1:z(l.modelValue)===z(l.trueValue)),y=u(()=>w.value===!0?k.value===-1:z(l.modelValue)===z(l.falseValue)),h=u(()=>q.value===!1&&y.value===!1),B=u(()=>l.disable===!0?-1:l.tabindex||0),V=u(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(l.disable===!0?" disabled":"")+(d.value===!0?` q-${e}--dark`:"")+(l.dense===!0?` q-${e}--dense`:"")+(l.leftLabel===!0?" reverse":"")),$=u(()=>{const C=q.value===!0?"truthy":y.value===!0?"falsy":"indet",p=l.color!==void 0&&(l.keepColor===!0||(e==="toggle"?q.value===!0:y.value!==!0))?` text-${l.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${C}${p}`}),x=u(()=>{const C={type:"checkbox"};return l.name!==void 0&&Object.assign(C,{".checked":q.value,"^checked":q.value===!0?"checked":void 0,name:l.name,value:w.value===!0?l.val:l.trueValue}),C}),T=$t(x),N=u(()=>{const C={tabindex:B.value,role:e==="toggle"?"switch":"checkbox","aria-label":l.label,"aria-checked":h.value===!0?"mixed":q.value===!0?"true":"false"};return l.disable===!0&&(C["aria-disabled"]="true"),C});function K(C){C!==void 0&&(Me(C),n(C)),l.disable!==!0&&o("update:modelValue",W(),C)}function W(){if(w.value===!0){if(q.value===!0){const C=l.modelValue.slice();return C.splice(k.value,1),C}return l.modelValue.concat([l.val])}if(q.value===!0){if(l.toggleOrder!=="ft"||l.toggleIndeterminate===!1)return l.falseValue}else if(y.value===!0){if(l.toggleOrder==="ft"||l.toggleIndeterminate===!1)return l.trueValue}else return l.toggleOrder!=="ft"?l.trueValue:l.falseValue;return l.indeterminateValue}function X(C){(C.keyCode===13||C.keyCode===32)&&Me(C)}function F(C){(C.keyCode===13||C.keyCode===32)&&K(C)}const E=a(q,h);return Object.assign(v,{toggle:K}),()=>{const C=E();l.disable!==!0&&T(C,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const p=[r("div",{class:$.value,style:b.value,"aria-hidden":"true"},C)];m.value!==null&&p.push(m.value);const Y=l.label!==void 0?Ce(c.default,[l.label]):U(c.default);return Y!==void 0&&p.push(r("div",{class:`q-${e}__label q-anchor--skip`},Y)),r("div",{ref:f,class:V.value,...N.value,onClick:K,onKeydown:X,onKeyup:F},p)}}const Ut=r("div",{key:"svg",class:"q-checkbox__bg absolute"},[r("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[r("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),r("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]);var we=A({name:"QCheckbox",props:Qt,emits:Ht,setup(e){function a(l,c){const o=u(()=>(l.value===!0?e.checkedIcon:c.value===!0?e.indeterminateIcon:e.uncheckedIcon)||null);return()=>o.value!==null?[r("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[r(Pe,{class:"q-checkbox__icon",name:o.value})])]:[Ut]}return zt("checkbox",a)}});let J=0;const Kt={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Wt=["update:fullscreen","fullscreen"];function Gt(){const e=I(),{props:a,emit:l,proxy:c}=e;let o,v,i;const d=j(!1);Ct(e)===!0&&D(()=>c.$route.fullPath,()=>{a.noRouteFullscreenExit!==!0&&n()}),D(()=>a.fullscreen,b=>{d.value!==b&&f()}),D(d,b=>{l("update:fullscreen",b),l("fullscreen",b)});function f(){d.value===!0?n():m()}function m(){d.value!==!0&&(d.value=!0,i=c.$el.parentNode,i.replaceChild(v,c.$el),document.body.appendChild(c.$el),J++,J===1&&document.body.classList.add("q-body--fullscreen-mixin"),o={handler:n},De.add(o))}function n(){d.value===!0&&(o!==void 0&&(De.remove(o),o=void 0),i.replaceChild(c.$el,v),d.value=!1,J=Math.max(0,J-1),J===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),c.$el.scrollIntoView!==void 0&&setTimeout(()=>{c.$el.scrollIntoView()})))}return Ne(()=>{v=document.createElement("span")}),Qe(()=>{a.fullscreen===!0&&m()}),He(n),Object.assign(c,{toggleFullscreen:f,setFullscreen:m,exitFullscreen:n}),{inFullscreen:d,toggleFullscreen:f}}function Jt(e,a){return new Date(e)-new Date(a)}const Xt={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function Yt(e,a,l,c){const o=u(()=>{const{sortBy:d}=a.value;return d&&l.value.find(f=>f.name===d)||null}),v=u(()=>e.sortMethod!==void 0?e.sortMethod:(d,f,m)=>{const n=l.value.find(k=>k.name===f);if(n===void 0||n.field===void 0)return d;const b=m===!0?-1:1,w=typeof n.field=="function"?k=>n.field(k):k=>k[n.field];return d.sort((k,q)=>{let y=w(k),h=w(q);return n.rawSort!==void 0?n.rawSort(y,h,k,q)*b:y==null?-1*b:h==null?1*b:n.sort!==void 0?n.sort(y,h,k,q)*b:ke(y)===!0&&ke(h)===!0?(y-h)*b:Ee(y)===!0&&Ee(h)===!0?Jt(y,h)*b:typeof y=="boolean"&&typeof h=="boolean"?(y-h)*b:([y,h]=[y,h].map(B=>(B+"").toLocaleString().toLowerCase()),y<h?-1*b:y===h?0:b)})});function i(d){let f=e.columnSortOrder;if(wt(d)===!0)d.sortOrder&&(f=d.sortOrder),d=d.name;else{const b=l.value.find(w=>w.name===d);b!==void 0&&b.sortOrder&&(f=b.sortOrder)}let{sortBy:m,descending:n}=a.value;m!==d?(m=d,n=f==="da"):e.binaryStateSort===!0?n=!n:n===!0?f==="ad"?m=null:n=!1:f==="ad"?n=!0:m=null,c({sortBy:m,descending:n,page:1})}return{columnToSort:o,computedSortMethod:v,sort:i}}const Zt={filter:[String,Object],filterMethod:Function};function el(e,a){const l=u(()=>e.filterMethod!==void 0?e.filterMethod:(c,o,v,i)=>{const d=o?o.toLowerCase():"";return c.filter(f=>v.some(m=>{const n=i(m,f)+"";return(n==="undefined"||n==="null"?"":n.toLowerCase()).indexOf(d)!==-1}))});return D(()=>e.filter,()=>{ze(()=>{a({page:1},!0)})},{deep:!0}),{computedFilterMethod:l}}function tl(e,a){for(const l in a)if(a[l]!==e[l])return!1;return!0}function Ae(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const ll={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function al(e,a){const{props:l,emit:c}=e,o=j(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:l.rowsPerPageOptions.length!==0?l.rowsPerPageOptions[0]:5},l.pagination)),v=u(()=>{const n=l["onUpdate:pagination"]!==void 0?{...o.value,...l.pagination}:o.value;return Ae(n)}),i=u(()=>v.value.rowsNumber!==void 0);function d(n){f({pagination:n,filter:l.filter})}function f(n={}){ze(()=>{c("request",{pagination:n.pagination||v.value,filter:n.filter||l.filter,getCellValue:a})})}function m(n,b){const w=Ae({...v.value,...n});if(tl(v.value,w)===!0){i.value===!0&&b===!0&&d(w);return}if(i.value===!0){d(w);return}l.pagination!==void 0&&l["onUpdate:pagination"]!==void 0?c("update:pagination",w):o.value=w}return{innerPagination:o,computedPagination:v,isServerSide:i,requestServerInteraction:f,setPagination:m}}function nl(e,a,l,c,o,v){const{props:i,emit:d,proxy:{$q:f}}=e,m=u(()=>c.value===!0?l.value.rowsNumber||0:v.value),n=u(()=>{const{page:x,rowsPerPage:T}=l.value;return(x-1)*T}),b=u(()=>{const{page:x,rowsPerPage:T}=l.value;return x*T}),w=u(()=>l.value.page===1),k=u(()=>l.value.rowsPerPage===0?1:Math.max(1,Math.ceil(m.value/l.value.rowsPerPage))),q=u(()=>b.value===0?!0:l.value.page>=k.value),y=u(()=>(i.rowsPerPageOptions.includes(a.value.rowsPerPage)?i.rowsPerPageOptions:[a.value.rowsPerPage].concat(i.rowsPerPageOptions)).map(T=>({label:T===0?f.lang.table.allRows:""+T,value:T})));D(k,(x,T)=>{if(x===T)return;const N=l.value.page;x&&!N?o({page:1}):x<N&&o({page:x})});function h(){o({page:1})}function B(){const{page:x}=l.value;x>1&&o({page:x-1})}function V(){const{page:x,rowsPerPage:T}=l.value;b.value>0&&x*T<m.value&&o({page:x+1})}function $(){o({page:k.value})}return i["onUpdate:pagination"]!==void 0&&d("update:pagination",{...l.value}),{firstRowIndex:n,lastRowIndex:b,isFirstPage:w,isLastPage:q,pagesNumber:k,computedRowsPerPageOptions:y,computedRowsNumber:m,firstPage:h,prevPage:B,nextPage:V,lastPage:$}}const rl={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},ol=["update:selected","selection"];function il(e,a,l,c){const o=u(()=>{const q={};return e.selected.map(c.value).forEach(y=>{q[y]=!0}),q}),v=u(()=>e.selection!=="none"),i=u(()=>e.selection==="single"),d=u(()=>e.selection==="multiple"),f=u(()=>l.value.length!==0&&l.value.every(q=>o.value[c.value(q)]===!0)),m=u(()=>f.value!==!0&&l.value.some(q=>o.value[c.value(q)]===!0)),n=u(()=>e.selected.length);function b(q){return o.value[q]===!0}function w(){a("update:selected",[])}function k(q,y,h,B){a("selection",{rows:y,added:h,keys:q,evt:B});const V=i.value===!0?h===!0?y:[]:h===!0?e.selected.concat(y):e.selected.filter($=>q.includes(c.value($))===!1);a("update:selected",V)}return{hasSelectionMode:v,singleSelection:i,multipleSelection:d,allRowsSelected:f,someRowsSelected:m,rowsSelectedNumber:n,isRowSelected:b,clearSelection:w,updateSelection:k}}function Ie(e){return Array.isArray(e)?e.slice():[]}const ul={expanded:Array},sl=["update:expanded"];function cl(e,a){const l=j(Ie(e.expanded));D(()=>e.expanded,i=>{l.value=Ie(i)});function c(i){return l.value.includes(i)}function o(i){e.expanded!==void 0?a("update:expanded",i):l.value=i}function v(i,d){const f=l.value.slice(),m=f.indexOf(i);d===!0?m===-1&&(f.push(i),o(f)):m!==-1&&(f.splice(m,1),o(f))}return{isRowExpanded:c,setExpanded:o,updateExpanded:v}}const dl={visibleColumns:Array};function vl(e,a,l){const c=u(()=>{if(e.columns!==void 0)return e.columns;const d=e.rows[0];return d!==void 0?Object.keys(d).map(f=>({name:f,label:f.toUpperCase(),field:f,align:ke(d[f])?"right":"left",sortable:!0})):[]}),o=u(()=>{const{sortBy:d,descending:f}=a.value;return(e.visibleColumns!==void 0?c.value.filter(n=>n.required===!0||e.visibleColumns.includes(n.name)===!0):c.value).map(n=>{const b=n.align||"right",w=`text-${b}`;return{...n,align:b,__iconClass:`q-table__sort-icon q-table__sort-icon--${b}`,__thClass:w+(n.headerClasses!==void 0?" "+n.headerClasses:"")+(n.sortable===!0?" sortable":"")+(n.name===d?` sorted ${f===!0?"sort-desc":""}`:""),__tdStyle:n.style!==void 0?typeof n.style!="function"?()=>n.style:n.style:()=>null,__tdClass:n.classes!==void 0?typeof n.classes!="function"?()=>w+" "+n.classes:k=>w+" "+n.classes(k):()=>w}})}),v=u(()=>{const d={};return o.value.forEach(f=>{d[f.name]=f}),d}),i=u(()=>e.tableColspan!==void 0?e.tableColspan:o.value.length+(l.value===!0?1:0));return{colList:c,computedCols:o,computedColsMap:v,computedColspan:i}}const ue="q-table__bottom row items-center",Je={};We.forEach(e=>{Je[e]={}});var ql=A({name:"QTable",props:{rows:{type:Array,default:()=>[]},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...Je,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...se,...Kt,...dl,...Zt,...ll,...ul,...rl,...Xt},emits:["request","virtualScroll",...Wt,...sl,...ol],setup(e,{slots:a,emit:l}){const c=I(),{proxy:{$q:o}}=c,v=ce(e,o),{inFullscreen:i,toggleFullscreen:d}=Gt(),f=u(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),m=j(null),n=j(null),b=u(()=>e.grid!==!0&&e.virtualScroll===!0),w=u(()=>" q-table__card"+(v.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),k=u(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":w.value)+(v.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(i.value===!0?" fullscreen scroll":"")),q=u(()=>k.value+(e.loading===!0?" q-table--loading":""));D(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+k.value,()=>{b.value===!0&&n.value!==null&&n.value.reset()});const{innerPagination:y,computedPagination:h,isServerSide:B,requestServerInteraction:V,setPagination:$}=al(c,Q),{computedFilterMethod:x}=el(e,$),{isRowExpanded:T,setExpanded:N,updateExpanded:K}=cl(e,l),W=u(()=>{let t=e.rows;if(B.value===!0||t.length===0)return t;const{sortBy:s,descending:g}=h.value;return e.filter&&(t=x.value(t,e.filter,L.value,Q)),Ze.value!==null&&(t=et.value(e.rows===t?t.slice():t,s,g)),t}),X=u(()=>W.value.length),F=u(()=>{let t=W.value;if(B.value===!0)return t;const{rowsPerPage:s}=h.value;return s!==0&&(ee.value===0&&e.rows!==t?t.length>te.value&&(t=t.slice(0,te.value)):t=t.slice(ee.value,te.value)),t}),{hasSelectionMode:E,singleSelection:C,multipleSelection:p,allRowsSelected:Y,someRowsSelected:xe,rowsSelectedNumber:de,isRowSelected:ve,clearSelection:Xe,updateSelection:Z}=il(e,l,F,f),{colList:Ye,computedCols:L,computedColsMap:Re,computedColspan:Te}=vl(e,h,E),{columnToSort:Ze,computedSortMethod:et,sort:fe}=Yt(e,h,Ye,$),{firstRowIndex:ee,lastRowIndex:te,isFirstPage:ge,isLastPage:be,pagesNumber:le,computedRowsPerPageOptions:tt,computedRowsNumber:ae,firstPage:me,prevPage:Se,nextPage:he,lastPage:ye}=nl(c,y,h,B,$,X),lt=u(()=>F.value.length===0),at=u(()=>{const t={};return We.forEach(s=>{t[s]=e[s]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function nt(){b.value===!0&&n.value.reset()}function rt(){if(e.grid===!0)return St();const t=e.hideHeader!==!0?Fe:null;if(b.value===!0){const g=a["top-row"],S=a["bottom-row"],_={default:R=>Ve(R.item,a.body,R.index)};if(g!==void 0){const R=r("tbody",g({cols:L.value}));_.before=t===null?()=>R:()=>[t()].concat(R)}else t!==null&&(_.before=t);return S!==void 0&&(_.after=()=>r("tbody",S({cols:L.value}))),r(Et,{ref:n,class:e.tableClass,style:e.tableStyle,...at.value,scrollTarget:e.virtualScrollTarget,items:F.value,type:"__qtable",tableColspan:Te.value,onVirtualScroll:it},_)}const s=[ut()];return t!==null&&s.unshift(t()),Ge({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},s)}function ot(t,s){if(n.value!==null){n.value.scrollTo(t,s);return}t=parseInt(t,10);const g=m.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(g!==null){const S=m.value.querySelector(".q-table__middle.scroll"),_=g.offsetTop-e.virtualScrollStickySizeStart,R=_<S.scrollTop?"decrease":"increase";S.scrollTop=_,l("virtualScroll",{index:t,from:0,to:y.value.rowsPerPage-1,direction:R})}}function it(t){l("virtualScroll",t)}function Be(){return[r(At,{class:"q-table__linear-progress",color:e.color,dark:v.value,indeterminate:!0,trackColor:"transparent"})]}function Ve(t,s,g){const S=f.value(t),_=ve(S);if(s!==void 0)return s(Oe({key:S,row:t,pageIndex:g,__trClass:_?"selected":""}));const R=a["body-cell"],P=L.value.map(O=>{const re=a[`body-cell-${O.name}`],oe=re!==void 0?re:R;return oe!==void 0?oe(st({key:S,row:t,pageIndex:g,col:O})):r("td",{class:O.__tdClass(t),style:O.__tdStyle(t)},Q(O,t))});if(E.value===!0){const O=a["body-selection"],re=O!==void 0?O(ct({key:S,row:t,pageIndex:g})):[r(we,{modelValue:_,color:e.color,dark:v.value,dense:e.dense,"onUpdate:modelValue":(oe,ht)=>{Z([S],[t],oe,ht)}})];P.unshift(r("td",{class:"q-table--col-auto-width"},re))}const M={key:S,class:{selected:_}};return e.onRowClick!==void 0&&(M.class["cursor-pointer"]=!0,M.onClick=O=>{l("RowClick",O,t,g)}),e.onRowDblclick!==void 0&&(M.class["cursor-pointer"]=!0,M.onDblclick=O=>{l("RowDblclick",O,t,g)}),e.onRowContextmenu!==void 0&&(M.class["cursor-pointer"]=!0,M.onContextmenu=O=>{l("RowContextmenu",O,t,g)}),r("tr",M,P)}function ut(){const t=a.body,s=a["top-row"],g=a["bottom-row"];let S=F.value.map((_,R)=>Ve(_,t,R));return s!==void 0&&(S=s({cols:L.value}).concat(S)),g!==void 0&&(S=S.concat(g({cols:L.value}))),r("tbody",S)}function Oe(t){return _e(t),t.cols=t.cols.map(s=>G({...s},"value",()=>Q(s,t.row))),t}function st(t){return _e(t),G(t,"value",()=>Q(t.col,t.row)),t}function ct(t){return _e(t),t}function _e(t){Object.assign(t,{cols:L.value,colsMap:Re.value,sort:fe,rowIndex:ee.value+t.pageIndex,color:e.color,dark:v.value,dense:e.dense}),E.value===!0&&G(t,"selected",()=>ve(t.key),(s,g)=>{Z([t.key],[t.row],s,g)}),G(t,"expand",()=>T(t.key),s=>{K(t.key,s)})}function Q(t,s){const g=typeof t.field=="function"?t.field(s):s[t.field];return t.format!==void 0?t.format(g,s):g}const H=u(()=>({pagination:h.value,pagesNumber:le.value,isFirstPage:ge.value,isLastPage:be.value,firstPage:me,prevPage:Se,nextPage:he,lastPage:ye,inFullscreen:i.value,toggleFullscreen:d}));function dt(){const t=a.top,s=a["top-left"],g=a["top-right"],S=a["top-selection"],_=E.value===!0&&S!==void 0&&de.value>0,R="q-table__top relative-position row items-center";if(t!==void 0)return r("div",{class:R},[t(H.value)]);let P;if(_===!0?P=S(H.value).slice():(P=[],s!==void 0?P.push(r("div",{class:"q-table__control"},[s(H.value)])):e.title&&P.push(r("div",{class:"q-table__control"},[r("div",{class:["q-table__title",e.titleClass]},e.title)]))),g!==void 0&&(P.push(r("div",{class:"q-table__separator col"})),P.push(r("div",{class:"q-table__control"},[g(H.value)]))),P.length!==0)return r("div",{class:R},P)}const $e=u(()=>xe.value===!0?null:Y.value);function Fe(){const t=vt();return e.loading===!0&&a.loading===void 0&&t.push(r("tr",{class:"q-table__progress"},[r("th",{class:"relative-position",colspan:Te.value},Be())])),r("thead",t)}function vt(){const t=a.header,s=a["header-cell"];if(t!==void 0)return t(qe({header:!0})).slice();const g=L.value.map(S=>{const _=a[`header-cell-${S.name}`],R=_!==void 0?_:s,P=qe({col:S});return R!==void 0?R(P):r(Ft,{key:S.name,props:P},()=>S.label)});if(C.value===!0&&e.grid!==!0)g.unshift(r("th",{class:"q-table--col-auto-width"}," "));else if(p.value===!0){const S=a["header-selection"],_=S!==void 0?S(qe({})):[r(we,{color:e.color,modelValue:$e.value,dark:v.value,dense:e.dense,"onUpdate:modelValue":pe})];g.unshift(r("th",{class:"q-table--col-auto-width"},_))}return[r("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},g)]}function qe(t){return Object.assign(t,{cols:L.value,sort:fe,colsMap:Re.value,color:e.color,dark:v.value,dense:e.dense}),p.value===!0&&G(t,"selected",()=>$e.value,pe),t}function pe(t){xe.value===!0&&(t=!1),Z(F.value.map(f.value),F.value,t)}const ne=u(()=>{const t=[e.iconFirstPage||o.iconSet.table.firstPage,e.iconPrevPage||o.iconSet.table.prevPage,e.iconNextPage||o.iconSet.table.nextPage,e.iconLastPage||o.iconSet.table.lastPage];return o.lang.rtl===!0?t.reverse():t});function ft(){if(e.hideBottom===!0)return;if(lt.value===!0){if(e.hideNoData===!0)return;const g=e.loading===!0?e.loadingLabel||o.lang.table.loading:e.filter?e.noResultsLabel||o.lang.table.noResults:e.noDataLabel||o.lang.table.noData,S=a["no-data"],_=S!==void 0?[S({message:g,icon:o.iconSet.table.warning,filter:e.filter})]:[r(Pe,{class:"q-table__bottom-nodata-icon",name:o.iconSet.table.warning}),g];return r("div",{class:ue+" q-table__bottom--nodata"},_)}const t=a.bottom;if(t!==void 0)return r("div",{class:ue},[t(H.value)]);const s=e.hideSelectedBanner!==!0&&E.value===!0&&de.value>0?[r("div",{class:"q-table__control"},[r("div",[(e.selectedRowsLabel||o.lang.table.selectedRecords)(de.value)])])]:[];if(e.hidePagination!==!0)return r("div",{class:ue+" justify-end"},bt(s));if(s.length!==0)return r("div",{class:ue},s)}function gt(t){$({page:1,rowsPerPage:t.value})}function bt(t){let s;const{rowsPerPage:g}=h.value,S=e.paginationLabel||o.lang.table.pagination,_=a.pagination,R=e.rowsPerPageOptions.length>1;if(t.push(r("div",{class:"q-table__separator col"})),R===!0&&t.push(r("div",{class:"q-table__control"},[r("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||o.lang.table.recordsPerPage]),r(Vt,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:g,options:tt.value,displayValue:g===0?o.lang.table.allRows:g,dark:v.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":gt})])),_!==void 0)s=_(H.value);else if(s=[r("span",g!==0?{class:"q-table__bottom-item"}:{},[g?S(ee.value+1,Math.min(te.value,ae.value),ae.value):S(1,X.value,ae.value)])],g!==0&&le.value>1){const P={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(P.size="sm"),le.value>2&&s.push(r(ie,{key:"pgFirst",...P,icon:ne.value[0],disable:ge.value,onClick:me})),s.push(r(ie,{key:"pgPrev",...P,icon:ne.value[1],disable:ge.value,onClick:Se}),r(ie,{key:"pgNext",...P,icon:ne.value[2],disable:be.value,onClick:he})),le.value>2&&s.push(r(ie,{key:"pgLast",...P,icon:ne.value[3],disable:be.value,onClick:ye}))}return t.push(r("div",{class:"q-table__control"},s)),t}function mt(){const t=e.gridHeader===!0?[r("table",{class:"q-table"},[Fe()])]:e.loading===!0&&a.loading===void 0?Be():void 0;return r("div",{class:"q-table__middle"},t)}function St(){const t=a.item!==void 0?a.item:s=>{const g=s.cols.map(_=>r("div",{class:"q-table__grid-item-row"},[r("div",{class:"q-table__grid-item-title"},[_.label]),r("div",{class:"q-table__grid-item-value"},[_.value])]));if(E.value===!0){const _=a["body-selection"],R=_!==void 0?_(s):[r(we,{modelValue:s.selected,color:e.color,dark:v.value,dense:e.dense,"onUpdate:modelValue":(P,M)=>{Z([s.key],[s.row],P,M)}})];g.unshift(r("div",{class:"q-table__grid-item-row"},R),r(xt,{dark:v.value}))}const S={class:["q-table__grid-item-card"+w.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(S.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(S.onClick=_=>{l("RowClick",_,s.row,s.pageIndex)}),e.onRowDblclick!==void 0&&(S.onDblclick=_=>{l("RowDblclick",_,s.row,s.pageIndex)})),r("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(s.selected===!0?" q-table__grid-item--selected":"")},[r("div",S,g)])};return r("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},F.value.map((s,g)=>t(Oe({key:f.value(s),row:s,pageIndex:g}))))}return Object.assign(c.proxy,{requestServerInteraction:V,setPagination:$,firstPage:me,prevPage:Se,nextPage:he,lastPage:ye,isRowSelected:ve,clearSelection:Xe,isRowExpanded:T,setExpanded:N,sort:fe,resetVirtualScroll:nt,scrollTo:ot,getCellValue:Q}),kt(c.proxy,{filteredSortedRows:()=>W.value,computedRows:()=>F.value,computedRowsNumber:()=>ae.value}),()=>{const t=[dt()],s={ref:m,class:q.value};return e.grid===!0?t.push(mt()):Object.assign(s,{class:[s.class,e.cardClass],style:e.cardStyle}),t.push(rt(),ft()),e.loading===!0&&a.loading!==void 0&&t.push(a.loading()),r("div",s,t)}}});export{_l as Q,ql as a,Ft as b};
