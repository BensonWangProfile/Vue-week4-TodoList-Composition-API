import{b as V,r as d,o as b,c as N,a as o,w as P,e as s,n as i,f as h,h as u}from"./index-568eab90.js";import{a as g}from"./client-78af8bbe.js";const y={for:"enrollEmail",class:"form_input"},E=s("span",null," Email ",-1),M={for:"userName",class:"form_input"},k=s("span",null," userName ",-1),C={for:"enrollPassword",class:"form_input"},v=s("span",null," 密碼 ",-1),q={for:"confirmPassword",class:"form_input"},x=s("span",null," 確認密碼 ",-1),F=["disabled","onClick"],D={__name:"EnrollItem",setup(U){const{apiPostEnroll:c}=g,e=V({userName:"",email:"",password:"",confirmPassword:""}),p=async()=>{try{const l={email:e.email,nickname:e.userName,password:e.password};await c({user:l}),u.push({path:"/account"})}catch(l){console.log(l)}},f=()=>{u.push({path:"/account"})};return(l,a)=>{const n=d("VField"),t=d("ErrorMessage"),_=d("VForm");return b(),N("div",null,[o(_,{class:"form"},{default:P(({errors:m,meta:w})=>[s("label",y,[E,o(n,{id:"enrollEmail",modelValue:e.email,"onUpdate:modelValue":a[0]||(a[0]=r=>e.email=r),modelModifiers:{trim:!0},name:"email",type:"email",label:"信箱",rules:"required|email",class:i({error:m.email})},null,8,["modelValue","class"])]),o(t,{name:"email",class:"error-message"}),s("label",M,[k,o(n,{id:"userName",modelValue:e.userName,"onUpdate:modelValue":a[1]||(a[1]=r=>e.userName=r),modelModifiers:{trim:!0},name:"userName",type:"text",label:"信箱",rules:"required",class:i({error:m.userName})},null,8,["modelValue","class"])]),o(t,{name:"userName",class:"error-message"}),s("label",C,[v,o(n,{id:"enrollPassword",modelValue:e.password,"onUpdate:modelValue":a[2]||(a[2]=r=>e.password=r),modelModifiers:{trim:!0},name:"password",type:"password",rules:"required|min:6",class:i({error:m.password})},null,8,["modelValue","class"])]),o(t,{name:"password",class:"error-message"}),s("label",q,[x,o(n,{id:"confirmPassword",label:"確認密碼",modelValue:e.confirmPassword,"onUpdate:modelValue":a[3]||(a[3]=r=>e.confirmPassword=r),modelModifiers:{trim:!0},name:"confirmPassword",type:"password",rules:"required|confirmed:@password",class:i({error:m.confirmPassword})},null,8,["modelValue","class"])]),o(t,{name:"confirmPassword",class:"error-message"}),s("button",{type:"submit",disabled:!w.valid,onClick:h(p,["prevent"])},"註冊",8,F),s("button",{type:"button",onClick:f},"登入頁面")]),_:1})])}}};export{D as default};
