import{b,d as V,r as n,o as y,c as k,a as s,w as v,e as a,n as c,f as C,g as I,h as p}from"./index-b0f77443.js";import{a as M}from"./client-78af8bbe.js";const E={class:"about"},L={for:"email",class:"form_input"},S=a("span",null," Email ",-1),x={for:"password",class:"form_input"},F=a("span",null," 密碼 ",-1),B=["disabled","onClick","onKeydown"],N={__name:"LoginItem",setup(K){const{apiPostLogin:u}=M,o=b({email:"",password:""}),r=async()=>{try{const t={email:o.email,password:o.password},e=await u({user:t});await localStorage.setItem("token",e.headers.authorization),await localStorage.setItem("nickname",e.data.nickname),w()}catch(t){console.log(t)}},_=()=>{localStorage.removeItem("nickname"),localStorage.removeItem("token")},w=()=>{p.push({path:"/todos"})},g=()=>{p.push({path:"/account/enroll"})};return V(()=>{_()}),(t,e)=>{const i=n("VField"),m=n("ErrorMessage"),f=n("VForm");return y(),k("div",E,[s(f,{class:"form"},{default:v(({errors:d,meta:h})=>[a("label",L,[S,s(i,{id:"email",modelValue:o.email,"onUpdate:modelValue":e[0]||(e[0]=l=>o.email=l),modelModifiers:{trim:!0},name:"email",type:"email",label:"信箱",rules:"required|email",class:c({error:d.email})},null,8,["modelValue","class"])]),s(m,{name:"email",class:"error-message"}),a("label",x,[F,s(i,{id:"password",label:"密碼",modelValue:o.password,"onUpdate:modelValue":e[1]||(e[1]=l=>o.password=l),modelModifiers:{trim:!0},name:"password",type:"password",rules:"required|min:6",class:c({error:d.password})},null,8,["modelValue","class"])]),s(m,{name:"password",class:"error-message"}),a("button",{type:"button",disabled:!h.valid,onClick:C(r,["prevent"]),onKeydown:I(r,["enter"])}," 登入 ",40,B),a("button",{type:"button",onClick:g},"註冊")]),_:1})])}}};export{N as default};