import{Q as m}from"./QBtn.d6aa4958.js";import{Q as P}from"./QInput.b0df898b.js";import{Q as B,a as O}from"./QTable.9cab5d86.js";import{Q as A}from"./QPage.0e392090.js";import{S as p}from"./sweetalert2.all.9f9dcfd4.js";import{e as g,Q as E}from"./firebaseConfig.4f4498d5.js";import{Q as I}from"./QCardActions.8db9fe51.js";import{Q as F}from"./QDialog.6f613d3d.js";import{C as N}from"./ClosePopup.48f5ee19.js";import{u as w}from"./device-store.1ef5a44d.js";import{_ as b,ak as T,r as f,c as _,w as C,t as Q,v as h,x as c,f as o,A as k,a8 as U,p as q,o as L,s as M}from"./index.847c9bb9.js";import"./render.6364fbb8.js";import"./QList.57ede4a3.js";import"./QSelect.836893ec.js";import"./use-timeout.602f94f8.js";import"./format.3c3ea85b.js";const Y={props:{printer:Object,isOpen:Boolean},setup(n,{emit:r}){const{isOpen:l}=T(n),e=f(l.value),a=f({...n.printer}),u=_(()=>n.printer&&n.printer.id),i=w();return C(l,d=>{e.value=d}),C(()=>n.printer,d=>{a.value={...d}},{deep:!0}),{dialog:e,localPrinter:a,isEditMode:u,savePrinter:async()=>{try{await i.savePrinter(a.value),e.value=!1,r("save")}catch(d){console.error("Error saving Printer:",d)}}}}},j={class:"text-h6"};function R(n,r,l,e,a,u){return Q(),h(F,{modelValue:e.dialog,"onUpdate:modelValue":r[2]||(r[2]=i=>e.dialog=i)},{default:c(()=>[o(E,null,{default:c(()=>[o(g,null,{default:c(()=>[k("div",j,U(e.isEditMode?"Edit Printer":"Create Printer"),1)]),_:1}),o(g,null,{default:c(()=>[o(P,{modelValue:e.localPrinter.id,"onUpdate:modelValue":r[0]||(r[0]=i=>e.localPrinter.id=i),label:"Printer IP"},null,8,["modelValue"]),o(P,{modelValue:e.localPrinter.description,"onUpdate:modelValue":r[1]||(r[1]=i=>e.localPrinter.description=i),label:"Deskripsi"},null,8,["modelValue"])]),_:1}),o(I,{align:"right"},{default:c(()=>[q(o(m,{flat:"",label:"Cancel",color:"primary"},null,512),[[N]]),o(m,{flat:"",label:"Save",color:"primary",onClick:e.savePrinter},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])}var z=b(Y,[["render",R]]);const G={components:{PrinterForm:z},setup(){const n=f(!1),r=w(),l=f([]),e=f(),a=f({}),u=f(""),i=()=>{a.value={},n.value=!0},s=_(()=>u.value?l.value.filter(t=>t.description.toLowerCase().includes(u.value.toLowerCase())):l.value),d=[{name:"id",required:!0,label:"Printer IP",align:"left",field:t=>t.id,sortable:!0},{name:"description",label:"Deskripsi",field:"description",sortable:!0},{name:"edit",label:"Action",field:"editAction",align:"center",sortable:!1}],y=async()=>{await r.fetchPrinter(),l.value=r.printers},V=async t=>{try{console.log("testprint"),window.electronAPI.sendPrintTest(t)}catch(v){console.log(v)}},D=t=>{a.value=t,n.value=!0},S=async t=>{await r.updatePrinter(t)},x=async t=>{if(typeof t.id=="undefined"){p.fire("Error","Category ID is undefined.","error");return}p.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(async v=>{if(v.isConfirmed)if(typeof t.id=="undefined"){p.fire("Error","Category ID is undefined.","error");return}else await r.deletePrinter(t.id),await r.fetchPrinter(),l.value=r.printers,p.fire("Deleted!","Your Printer has been deleted.","success")})};return C(()=>{var t;return(t=e.value)==null?void 0:t.dialog},t=>{t===!1&&(n.value=!1)}),L(y),{printers:l,columns:d,printerForm:e,editablePrinter:a,isDialogOpen:n,searchQuery:u,filteredCategory:s,testPrinter:V,openNewCategoryForm:i,editCategory:D,updatePrinter:S,deletePrinter:x,fetchPrinter:y}}},H={class:"flex justify-between q-mb-md"};function J(n,r,l,e,a,u){const i=M("printer-form");return Q(),h(A,{padding:""},{default:c(()=>[k("div",H,[o(m,{label:"Create Printer",color:"primary",onClick:e.openNewCategoryForm,class:"q-mr-md"},null,8,["onClick"]),o(P,{modelValue:e.searchQuery,"onUpdate:modelValue":r[0]||(r[0]=s=>e.searchQuery=s),placeholder:"Search Printer"},null,8,["modelValue"])]),o(O,{title:"Printer List",rows:e.filteredCategory,columns:e.columns,"row-key":"id"},{"body-cell-edit":c(s=>[o(B,{props:s},{default:c(()=>[o(m,{flat:"",icon:"print",onClick:d=>e.testPrinter(s.row.id)},null,8,["onClick"]),o(m,{flat:"",icon:"delete",onClick:d=>e.deletePrinter(s.row)},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"]),o(i,{ref:"printerForm",category:e.editablePrinter,isOpen:e.isDialogOpen,onSave:r[1]||(r[1]=s=>e.fetchPrinter())},null,8,["category","isOpen"])]),_:1})}var ue=b(G,[["render",J]]);export{ue as default};
