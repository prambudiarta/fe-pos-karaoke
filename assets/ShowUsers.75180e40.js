import{Q as y}from"./QInput.1ca74760.js";import{a as Q}from"./QSelect.d212bd95.js";import{Q as f}from"./QBtn.05bc70e0.js";import{Q as S}from"./QForm.afcd4044.js";import{Q as R,a as B}from"./QTable.1ce8efe8.js";import{g as U,c as b,a as C,d as c,b as _,p as D,o as E,Q as k,e as V}from"./firebaseConfig.3e9e2ba4.js";import{Q as M}from"./QCardActions.a72f9b7b.js";import{Q as A}from"./QDialog.8d4bab0f.js";import{Q as P}from"./QPage.48b772af.js";import{C as q}from"./ClosePopup.81bbfb03.js";import{_ as T,r as u,o as K,t as O,v as I,x as i,A as g,f as a,av as N,p as L}from"./index.5079f055.js";import{g as Y,c as F}from"./index-61e5ac61.f4d9550b.js";import{S as n}from"./sweetalert2.all.bbac4cee.js";import"./render.f2fea035.js";import"./use-timeout.b9f1f2b0.js";import"./format.c1433672.js";import"./QList.41e64a81.js";const G={setup(){const t=u([]),o=u({email:"",password:"",role:""}),h=u([{label:"Manager",value:"Manager"},{label:"Customer Service",value:"Customer Service"},{label:"Kasir",value:"Kasir"}]),e=u([{name:"email",label:"Email",field:"email",sortable:!0},{name:"role",label:"Role",field:"role",sortable:!0},{name:"actions",label:"Actions",field:"actions",sortable:!1}]),p=u(!1),m=u({}),l=u(""),v=r=>{m.value=r,p.value=!0},x=async()=>{try{if(m.value){const r=C(c,"users",m.value.id);await _(r,{role:l.value.value});const s=t.value.findIndex(d=>d.id===m.value.id);s!==-1&&(t.value[s].role=l.value),p.value=!1,n.fire("Updated!","User role has been updated.","success");const w=await U(b(c,"users"));t.value=[],w.forEach(d=>{t.value.push(d.data())})}}catch(r){console.error("Error updating user role:",r)}};return K(async()=>{(await U(b(c,"users"))).forEach(s=>{t.value.push(s.data())})}),{users:t,newUser:o,roles:h,createUser:async()=>{try{n.fire({title:"Processing...",text:"Please wait.",allowOutsideClick:!1,didOpen:()=>{n.showLoading()}});const r=Y(),s=await F(r,o.value.email,o.value.password);await D(C(c,"users",s.user.uid),{id:s.user.uid,email:o.value.email,role:o.value.role.value}),o.value={email:"",password:"",role:""},t.value=[],(await U(b(c,"users"))).forEach(d=>{t.value.push(d.data())}),n.close(),await n.fire({title:"User Created Successfully",icon:"success",confirmButtonColor:"#3085d6",confirmButtonText:"OK"})}catch(r){console.error("Error creating user:",r),n.close(),n.fire({title:"Mohon Maaf, Gagal Membuat User",text:r,icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",confirmButtonText:"OK"})}},deleteUser:async r=>{try{n.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(async s=>{if(s.isConfirmed){const w=C(c,"users",r.id);await E(w),t.value=t.value.filter(d=>d.id!==r.id),n.fire("Deleted!","User has been deleted.","success")}})}catch(s){console.error("Error deleting user:",s)}},columns:e,editRole:v,updateUserRole:x,editDialog:p,selectedRole:l}}},W={style:{"margin-top":"50px"}},j=g("div",{class:"text-h6"},"Edit User Role",-1);function z(t,o,h,e,p,m){return O(),I(P,{padding:""},{default:i(()=>[g("div",null,[a(S,{onSubmit:N(e.createUser,["prevent"])},{default:i(()=>[a(y,{modelValue:e.newUser.email,"onUpdate:modelValue":o[0]||(o[0]=l=>e.newUser.email=l),label:"Email"},null,8,["modelValue"]),a(y,{modelValue:e.newUser.password,"onUpdate:modelValue":o[1]||(o[1]=l=>e.newUser.password=l),type:"password",label:"Password"},null,8,["modelValue"]),a(Q,{modelValue:e.newUser.role,"onUpdate:modelValue":o[2]||(o[2]=l=>e.newUser.role=l),label:"Role",options:e.roles},null,8,["modelValue","options"]),a(f,{label:"Create User",type:"submit",color:"primary",style:{"margin-top":"20px"}})]),_:1},8,["onSubmit"])]),g("div",W,[a(B,{title:"Users List",rows:e.users,columns:e.columns,"row-key":"id"},{"body-cell-actions":i(l=>[a(R,{props:l},{default:i(()=>[a(f,{flat:"",icon:"edit",onClick:v=>e.editRole(l.row),label:"Edit Role"},null,8,["onClick"]),a(f,{flat:"",icon:"delete",onClick:v=>e.deleteUser(l.row),label:"Delete"},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"])]),a(A,{modelValue:e.editDialog,"onUpdate:modelValue":o[4]||(o[4]=l=>e.editDialog=l),persistent:""},{default:i(()=>[a(k,null,{default:i(()=>[a(V,null,{default:i(()=>[j]),_:1}),a(V,null,{default:i(()=>[a(Q,{modelValue:e.selectedRole,"onUpdate:modelValue":o[3]||(o[3]=l=>e.selectedRole=l),label:"Select New Role",options:e.roles},null,8,["modelValue","options"])]),_:1}),a(M,{align:"right"},{default:i(()=>[L(a(f,{flat:"",label:"Cancel",color:"primary"},null,512),[[q]]),a(f,{flat:"",label:"Update",color:"primary",onClick:e.updateUserRole},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}var pe=T(G,[["render",z]]);export{pe as default};
