"use strict";(self["webpackChunkadminback"]=self["webpackChunkadminback"]||[]).push([[369],{8869:function(e,l,o){o.d(l,{e:function(){return s},r:function(){return u}});var t=o(6581),a=o(1969),n=o(8935),r=o(1095),c=o(5918);const s=(0,r.defineStore)("user-permission-store",(()=>{const e=(0,c.ref)([]),l=(0,c.ref)(""),o=(0,c.ref)(""),r=(0,c.computed)((()=>l=>"super"==a.PD.userRole||-1!=e.value.indexOf(l))),s=l=>{e.value=l},u=e=>{l.value=e},d=e=>{o.value=e},i=async()=>{try{const l=await t.i.myPermissions();null!=l&&(e.value=l.map((e=>e.urlName))),(0,n.$Emit)("reload-permission")}catch(l){console.log(l)}};return a.PD.access&&i(),{isPermission:r,urlName:e,loadMyPermission:i,roleName:l,setUrlName:s,setRoleName:u,setAuthorization:d,authorization:o}})),u=(0,r.defineStore)("user-permission-list",(()=>{const e=(0,c.ref)([]),l=(0,c.ref)([]),o=async()=>{try{const l=await t.i.getAdminUrls(1,1e3);console.log(l),e.value=l["records"]}catch(l){console.log(l)}},a=async()=>{try{const e=await t.i.rolesAdminList(1,1e3);console.log(e),l.value=e["records"]}catch(e){console.log(e)}};return o(),a(),{urlList:e,roleList:l,loadPermission:o,loadAdminList:a}}))},3256:function(e,l,o){o.d(l,{Q:function(){return n},T:function(){return a}});var t=o(1219);const a=e=>{t.nk.success({message:e,zIndex:8e3,customClass:"tip-d"})},n=e=>{t.nk.error({message:e,zIndex:8e3,customClass:"tip-d"})}},1241:function(e,l){l.A=(e,l)=>{const o=e.__vccOpts||e;for(const[t,a]of l)o[t]=a;return o}},7369:function(e,l,o){o.r(l),o.d(l,{default:function(){return p}});o(4114);var t=o(5918),a=o(6581),n=o(1969),r=o(8979),c=o(3256),s=o(2472),u=o(8869);const d={class:"login-dt"},i={class:"flex-row height-1 flex-center"},m={class:"flex-row s-w-400 flex-center"},f={class:"flex-row s-w-400 flex-center"};var v=(0,t.defineComponent)({__name:"Login",setup(e){const l=(0,t.ref)("55555"),o=(0,t.ref)("123456"),v=(0,t.ref)(""),V=(0,r.useRouter)(),h=(0,t.ref)(!1),p=(0,t.ref)(!1),w=(0,t.ref)(""),g=(0,t.ref)(""),C=(0,u.e)(),N=(0,t.ref)(!1),x=async({raw:e})=>{try{const l=new FileReader;l.onload=function(){console.log(l.result),n.PD.privateKey=l.result},l.readAsText(e)}catch(l){}},y=async()=>{console.log(l),console.log(o);try{var e=await a.i.login(l.value,o.value);console.log(e),V.push("/")}catch(t){if(8324==t.code)return h.value=!0,void console.log("====");if(8321==t.code)return console.log(n.PD.decrypt(t.data)),w.value=n.PD.decrypt(t.data),void(p.value=!0);842===t.code&&(N.value=!0),843===t.code&&((0,c.Q)(t.message),n.PD.clear()),n.PD.clientKey="",console.log(t)}},_=async()=>{try{var e=await a.i.login(l.value,o.value,v.value);n.PD.addToken(e),await C.loadMyPermission(),console.log(n.PD.access),console.log(n.PD.refresh),console.log(e),V.push("/")}catch(t){console.log(t),(0,c.Q)(t.message)}},P=async()=>{try{console.log(l.value,g.value),await a.i.googleAuthBind(l.value,g.value),location.reload()}catch(e){}},b=async()=>{try{const e=await a.i.login(l.value,o.value);n.PD.addToken(e),await C.loadMyPermission(),console.log(n.PD.access),console.log(n.PD.refresh),console.log(e),V.push("/")}catch(e){n.PD.privateKey="",console.log(e),(0,c.Q)(e.message)}};return(e,a)=>{const n=(0,t.resolveComponent)("el-input"),r=(0,t.resolveComponent)("el-form-item"),c=(0,t.resolveComponent)("el-button"),u=(0,t.resolveComponent)("el-form"),V=(0,t.resolveComponent)("el-card"),C=(0,t.resolveComponent)("el-dialog"),k=(0,t.resolveComponent)("el-upload");return(0,t.openBlock)(),(0,t.createElementBlock)("div",d,[(0,t.createElementVNode)("div",i,[(0,t.createVNode)(V,{class:"s-w-400"},{default:(0,t.withCtx)((()=>[(0,t.createVNode)(u,null,{default:(0,t.withCtx)((()=>[(0,t.createVNode)(r,{label:"账号"},{default:(0,t.withCtx)((()=>[(0,t.createVNode)(n,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value=e)},null,8,["modelValue"])])),_:1}),(0,t.createVNode)(r,{label:"密码"},{default:(0,t.withCtx)((()=>[(0,t.createVNode)(n,{modelValue:o.value,"onUpdate:modelValue":a[1]||(a[1]=e=>o.value=e),type:"password"},null,8,["modelValue"])])),_:1}),(0,t.createVNode)(r,null,{default:(0,t.withCtx)((()=>[(0,t.createElementVNode)("div",m,[(0,t.createVNode)(c,{onClick:y},{default:(0,t.withCtx)((()=>[(0,t.createTextVNode)("登录")])),_:1})])])),_:1})])),_:1})])),_:1})]),(0,t.createVNode)(C,{modelValue:h.value,"onUpdate:modelValue":a[3]||(a[3]=e=>h.value=e),title:"Google Auth Code"},{default:(0,t.withCtx)((()=>[(0,t.createVNode)(u,null,{default:(0,t.withCtx)((()=>[(0,t.createVNode)(r,{label:"Google AuthCode"},{default:(0,t.withCtx)((()=>[(0,t.createVNode)(n,{modelValue:v.value,"onUpdate:modelValue":a[2]||(a[2]=e=>v.value=e)},null,8,["modelValue"])])),_:1}),(0,t.createVNode)(r,null,{default:(0,t.withCtx)((()=>[(0,t.createElementVNode)("div",f,[(0,t.createVNode)(c,{onClick:_},{default:(0,t.withCtx)((()=>[(0,t.createTextVNode)("登录")])),_:1})])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.createVNode)(C,{modelValue:p.value,"onUpdate:modelValue":a[5]||(a[5]=e=>p.value=e),title:"Google Auth Code"},{default:(0,t.withCtx)((()=>[(0,t.createVNode)(u,{"label-width":"130px"},{default:(0,t.withCtx)((()=>[(0,t.createVNode)(r,{label:"扫一扫"},{default:(0,t.withCtx)((()=>[(0,t.createVNode)((0,t.unref)(s.A),{value:w.value,width:200,height:200},null,8,["value"])])),_:1}),(0,t.createVNode)(r,{label:"Google Auth Code"},{default:(0,t.withCtx)((()=>[(0,t.createVNode)(n,{modelValue:g.value,"onUpdate:modelValue":a[4]||(a[4]=e=>g.value=e)},null,8,["modelValue"])])),_:1}),(0,t.createVNode)(r,null,{default:(0,t.withCtx)((()=>[(0,t.createVNode)(c,{onClick:P},{default:(0,t.withCtx)((()=>[(0,t.createTextVNode)("确定")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.createVNode)(C,{modelValue:N.value,"onUpdate:modelValue":a[6]||(a[6]=e=>N.value=e)},{default:(0,t.withCtx)((()=>[(0,t.createVNode)(u,{"label-width":"100px"},{default:(0,t.withCtx)((()=>[(0,t.createVNode)(r,{label:e.$t("permission.secret")},{default:(0,t.withCtx)((()=>[(0,t.createVNode)(k,{action:"","on-change":x,"auto-upload":!1,limit:1},{default:(0,t.withCtx)((()=>[(0,t.createVNode)(c,{size:"small",type:"primary"},{default:(0,t.withCtx)((()=>[(0,t.createTextVNode)((0,t.toDisplayString)(e.$t("permission.upload")),1)])),_:1})])),_:1})])),_:1},8,["label"]),(0,t.createVNode)(r,{label:""},{default:(0,t.withCtx)((()=>[(0,t.createVNode)(c,{onClick:b},{default:(0,t.withCtx)((()=>[(0,t.createTextVNode)((0,t.toDisplayString)(e.$t("permission.login")),1)])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])}}}),V=o(1241);const h=(0,V.A)(v,[["__scopeId","data-v-2f5b71a2"]]);var p=h}}]);