import{_ as p,a as _}from"./btn_pageBanner-56f3fa4c.js";import{r as t,o as r,c as d,b as s,a as e,w as h,F as u,n as l}from"./index-7431ad3a.js";const m={class:"wrap"},b={class:"container phoenCaptcha"},f=e("div",{class:"pageTitle"},[e("h2",null,"會員登入"),e("p",null,"Member Login")],-1),v=e("p",null,"請輸入手機號碼完成帳號驗證。",-1),y={class:"inputArea"},F=e("label",{for:"phone"},"手機號碼",-1),g=e("button",{class:"captchaBtn",type:"button"},"發送驗證碼",-1),B={class:"inputArea"},C=e("label",{for:"captcha"},"驗證碼",-1),k=e("button",{class:"captchaBtn",type:"button"},"重發驗證碼(59)",-1),w=e("div",{class:"btnGroup"},[e("button",{class:"buttonStyle1",type:"submit"},[e("span",null,"送出")])],-1),S={__name:"PhoneCaptcha",setup(x){return(q,a)=>{const o=t("Field"),n=t("error-message"),i=t("Form");return r(),d(u,null,[s(p),e("div",m,[e("div",b,[s(_),f,s(i,{onSubmit:a[0]||(a[0]=()=>{})},{default:h(({errors:c})=>[v,e("div",y,[F,s(o,{id:"phone",name:"phone",type:"text",label:"手機號碼",class:l({"is-invalid":c.phone}),placeholder:"請輸入手機號碼",rules:"required"},null,8,["class"]),g,s(n,{name:"phone",class:"invalid-feedback"})]),e("div",B,[C,s(o,{id:"captcha",name:"captcha",type:"password",label:"驗證碼",class:l({"is-invalid":c.captcha}),placeholder:"請輸入簡訊驗證碼",rules:"required"},null,8,["class"]),k,s(n,{name:"captcha",class:"invalid-feedback"})]),w]),_:1})])])],64)}}};export{S as default};