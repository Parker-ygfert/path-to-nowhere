import{g as a}from"./get_image_url-ba0a1f8f.js";import{_ as l,o as r,c as d,a as s,u as o,n as i,t as _,p,i as g}from"./index-62b3384f.js";const b=e=>(p("data-v-ca1ecebc"),e=e(),g(),e),m=["src"],u={class:"job-img position-absolute overflow-hidden"},h=["src"],v=b(()=>s("div",{class:"footer-bg position-absolute overflow-hidden"},null,-1)),f={class:"rank-img position-absolute"},w=["src"],k={class:"sinner-name position-absolute text-white font-18 fw-bold"},I={__name:"Img",props:{job:String,sinner:Object},setup(e){const t=e,n=t.sinner;return(c,j)=>(r(),d("div",null,[s("img",{src:o(a)(`${t.job}/${o(n).name}.png`),alt:"",loading:"lazy",class:"w-100 h-100"},null,8,m),s("div",{class:i([`rank-bar-${o(n).rank}`,"rank-bar position-absolute overflow-hidden"])},null,2),s("div",{class:i(["job-bg position-absolute overflow-hidden",o(n).core?"core-bg":"normal-bg"])},[s("div",u,[s("img",{src:o(a)(`jobs/${e.job}.png`),alt:"",loading:"lazy",class:"w-100 h-100"},null,8,h)])],2),v,s("div",f,[s("img",{src:o(a)(`rank/${o(n).rank}.png`),alt:"",loading:"lazy",class:"w-100 h-100"},null,8,w)]),s("div",k,_(c.$t(`sinner.${o(n).name}`)),1)]))}},y=l(I,[["__scopeId","data-v-ca1ecebc"]]);export{y as S};
