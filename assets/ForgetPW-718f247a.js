import{f as p,r as t,o,c as n,b as s,a as e,g as f,w as r,h,F as v,n as b,e as l}from"./index-6add71c1.js";import{_ as g,a as k}from"./btn_pageBanner-e09996f1.js";const F={class:"wrap"},w={class:"container forgetPW"},x=e("div",{class:"pageTitle"},[e("h2",null,"忘記密碼"),e("p",null,"Forgot Password")],-1),y={class:"inputArea"},D=e("label",{for:"userID"},[e("i",{class:"fa-solid fa-envelope"}),l("帳號")],-1),I=e("div",null,[e("button",{type:"reset"},"清除"),e("button",{type:"submit"},"送出")],-1),B={key:1,class:"success"},C=e("h3",null,"您的新密碼已經發送到您的手機，請查看訊息",-1),R={__name:"ForgetPW",setup(N){const c=p(!1);return(P,a)=>{const i=t("Field"),_=t("error-message"),d=t("Form"),u=t("RouterLink");return o(),n(v,null,[s(g),e("div",F,[e("div",w,[s(k),x,c.value?(o(),n("div",B,[C,s(u,{to:""},{default:r(()=>[l("返回登入頁")]),_:1})])):(o(),f(d,{key:0,onSubmit:a[0]||(a[0]=h(()=>{},["prevent"]))},{default:r(({errors:m})=>[e("div",y,[D,s(i,{id:"userID",name:"userID",type:"text",label:"帳號",class:b({"is-invalid":m.userID}),placeholder:"請輸入手機號碼或電子信箱 ",rules:"required"},null,8,["class"]),s(_,{name:"userID",class:"invalid-feedback"})]),I]),_:1}))])])],64)}}};export{R as default};
