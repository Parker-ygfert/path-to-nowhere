import{g as a}from"./get_image_url-31885b91.js";/* empty css                                                  */import{_ as r,o as c,c as d,a as s,u as o,n as i,t as _,p,f as g}from"./index-1e9bacdc.js";const m=n=>(p("data-v-846eba15"),n=n(),g(),n),b=["src"],u={class:"job-img position-absolute h-100 overflow-hidden"},h=["src"],v=m(()=>s("div",{class:"footer-bg position-absolute overflow-hidden"},null,-1)),f={class:"rank-img position-absolute"},w=["src"],k={class:"sinner-name position-absolute text-white font-18 fw-bold"},I={__name:"Img",props:{job:String,sinner:Object},setup(n){const t=n,e=t.sinner;return(l,j)=>(c(),d("div",null,[s("img",{src:o(a)(`${t.job}/${o(e).name}.png`),alt:"",loading:"lazy",class:"main-img w-100 h-100"},null,8,b),s("div",{class:i([`rank-bar-${o(e).rank}`,"rank-bar position-absolute overflow-hidden"])},null,2),s("div",{class:i(["job-bg position-absolute overflow-hidden",o(e).core?"core-bg":"normal-bg"])},[s("div",u,[s("img",{src:o(a)(`jobs/${n.job}.png`),alt:"",loading:"lazy",class:"w-100 h-100"},null,8,h)])],2),v,s("div",f,[s("img",{src:o(a)(`rank/${o(e).rank}.png`),alt:"",loading:"lazy",class:"w-100 h-100"},null,8,w)]),s("div",k,_(l.$t(`sinner.name.${o(e).name}`)),1)]))}},x=r(I,[["__scopeId","data-v-846eba15"]]);export{x as S};
