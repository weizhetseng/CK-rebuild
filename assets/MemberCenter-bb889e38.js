import{_ as r,a as c}from"./btn_pageBanner-e09996f1.js";import{r as a,o as _,c as i,b as t,a as e,w as s,F as d,e as n}from"./index-6add71c1.js";const m={class:"wrap"},u={class:"container"},p=e("div",{class:"pageTitle"},[e("h2",null,"會員專區"),e("p",null,"Members Only")],-1),h={class:"row"},f={class:"col-3"},b={class:"col-9"},x={__name:"MemberCenter",setup(v){return(C,w)=>{const o=a("RouterLink"),l=a("RouterView");return _(),i(d,null,[t(r),e("div",m,[e("div",u,[t(c),p,e("div",h,[e("div",f,[e("ul",null,[e("li",null,[t(o,{to:"/memberCenter/orderSearch"},{default:s(()=>[n("查詢訂單")]),_:1})]),e("li",null,[t(o,{to:"/memberCenter/updateUser"},{default:s(()=>[n("修改會員資料")]),_:1})]),e("li",null,[t(o,{to:"/memberCenter/changePW"},{default:s(()=>[n("變更會員密碼")]),_:1})]),e("li",null,[t(o,{to:"/memberCenter/bindOther"},{default:s(()=>[n("綁定其他帳號")]),_:1})])])]),e("div",b,[t(l)])])])])],64)}}};export{x as default};