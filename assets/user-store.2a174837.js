import{W as s}from"./index.5079f055.js";function n(r){const e=localStorage.getItem(r);if(!e)return null;try{return JSON.parse(e)}catch(t){return console.error("Error parsing JSON from localStorage:",t),null}}const c=s("user",{state:()=>({currentUser:n("currentUser")}),getters:{getUserId:r=>{var e;return(e=r.currentUser)==null?void 0:e.id},getUserEmail:r=>{var e;return(e=r.currentUser)==null?void 0:e.email},getUserRole:r=>{var e;return(e=r.currentUser)==null?void 0:e.role},isAuthenticated:r=>!!r.currentUser},actions:{setUser(r){this.currentUser=r,localStorage.setItem("currentUser",JSON.stringify(r))},clearUser(){localStorage.removeItem("currentUser"),this.currentUser=null},updateUserRole(r){this.currentUser&&(this.currentUser.role=r)}}});export{c as u};
