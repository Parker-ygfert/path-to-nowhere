import{_ as V,u as z,i as E,e as q,T as R,c as a,g as j,w as A,f as n,a as e,F as b,r as c,t,n as d,j as h,h as D,o,k as I,p as U,d as W}from"./index-71f337e0.js";import{s as G,C as J,g as L}from"./sinners-a9cd03d3.js";const K=[{name:"corridor_echo",rank:"s",set_bonus:"套裝效果：<br>初始能量 + 8"},{name:"creation",rank:"s",set_bonus:"套裝效果：<br>召喚物造成的傷害提高 25%"},{name:"creed_of_bulwark",rank:"s",set_bonus:"套裝效果：<br>阻擋 + 1"},{name:"solo_dance",rank:"s",set_bonus:"套裝效果：<br>九宮格範圍內不存在敵人時，<br>普攻傷害提高 25%<br>反之，必殺傷害提高 25%"},{name:"depth_of_restricted_area",rank:"s",set_bonus:"套裝效果：<br>戰鬥開始後，自身 20 秒內不會受到普通攻擊的傷害"},{name:"depths_of_oblivion",rank:"s",set_bonus:"套裝效果：<br>必殺傷害每秒增加 1%，最多疊加 30 層<br>使用必殺後，該效果重置"},{name:"embrace_of_the_dead",rank:"s",set_bonus:"套裝效果：<br>對核心被擊破的敵人造成的傷害提高 40%"},{name:"ground_zero",rank:"s",set_bonus:"套裝效果：<br>自身每 3 秒增加 1% 攻擊，最多疊加 10 次<br>移動後該效果重置"},{name:"nightmare_revelation",rank:"s",set_bonus:"套裝效果：<br>戰鬥開始時，我方全體禁閉者攻擊力提高 6%，<br>攻擊速度提高 10%，持續 30 秒"},{name:"paradise_regained",rank:"s",set_bonus:"套裝效果：<br>每隔 15 秒生成可拾取的精靈，<br>佩戴該套裝的角色拾取後，<br>立即對戰場中核心最多的怪物造成 1 點核心傷害<br>精靈最多同時存在 2 個"},{name:"pioneer",rank:"s",set_bonus:"套裝效果：<br>若佩戴者的身高不高於 155cm，增加 6% 攻擊，<br>反之只增加 3% 攻擊"},{name:"premonition",rank:"s",set_bonus:"套裝效果：<br>造成核心傷害時，附加自身攻擊力 120% 的真實傷害"},{name:"scarlet_bewitchment",rank:"s",set_bonus:"套裝效果：<br>不攻擊時，攻擊力每秒+1%，最多疊加20次<br>攻擊後重置"},{name:"servant",rank:"s",set_bonus:"套裝效果：<br>召喚物造成傷害時，有 40% 機率為主人回復 2 能量<br>每 3 秒最多觸發 1 次"},{name:"singularity",rank:"s",set_bonus:"套裝效果：<br>移動後，自身攻速提高 12%，持續 10 秒"},{name:"soul_rift",rank:"s",set_bonus:"套裝效果：<br>每次普通攻擊降低目標4%防禦，持續5秒<br>最多疊加3次"},{name:"the_city_of_sins",rank:"s",set_bonus:"套裝效果：<br>自身每激活 1 個套裝，增加 3% 攻擊和 5% 生命<br>最多疊加 3 次"},{name:"the_pandora_cage",rank:"s",set_bonus:"套裝效果：<br>每進行 3 次普通攻擊，<br>即對第 3 次被攻擊的敵人造成 1 次額外物理傷害，<br>傷害量相當於自身攻擊力的 80%"},{name:"overthrown_tower",rank:"s",set_bonus:"套裝效果：<br>爆擊率 + 12%"},{name:"reunion_day",rank:"s",set_bonus:"套裝效果：<br>普通攻擊暴擊時，回复 3 能量，每 3 秒最多觸發 1 次"},{name:"white_sands_apostle",rank:"s",set_bonus:"套裝效果：<br>攻擊時，有機率使目標眩暈 2 秒<br>對有核心的怪物觸發率 100%<br>每 10 秒最多觸發 1 次"},{name:"year_one_perishing_star",rank:"s",set_bonus:"套裝效果：<br>自身生命提高 20%，攻擊提高 15%<br>但是無法移動"},{name:"blue_rain",rank:"a",set_bonus:"套裝效果：<br>移動次數 + 6<br>該套裝無法疊加，只有一套生效"},{name:"diverged_ends",rank:"a",set_bonus:"套裝效果：<br>擊殺敵人後，自身造成的傷害提高12%，<br>持續10秒"},{name:"final_prologue",rank:"a",set_bonus:"套裝效果：<br>造成治療效果 + 25%"},{name:"fury_cb",rank:"a",set_bonus:"套裝效果：<br>使用必殺後，立即回復自身 20% 生命，<br>每 8 秒最多觸發 1 次"},{name:"hope",rank:"a",set_bonus:"套裝效果：<br>初始能量 + 5"},{name:"in_hosts_name",rank:"a",set_bonus:"套裝效果：<br>每阻擋一個敵人，受到的傷害降低 8%"},{name:"obsession",rank:"a",set_bonus:"套裝效果：<br>每隔15秒，自動驅散 1 個負面效果"},{name:"shackles_of_life",rank:"a",set_bonus:"套裝效果：<br>爆擊傷害 + 50%"},{name:"shattered_battlefront",rank:"a",set_bonus:"套裝效果：<br>戰鬥開始時，攻擊 + 15%，持續 30 秒"},{name:"turning_zero",rank:"a",set_bonus:"套裝效果：<br>使用局長技能後，自身獲得 3 點能量，<br>每 10 秒最多觸發 1 次"},{name:"eastside_dream",rank:"b",set_bonus:"套裝效果：<br>普通攻擊造成的傷害提高 15％"},{name:"justice",rank:"b",set_bonus:"套裝效果：<br>使用必殺後，除自身所有禁閉者攻擊 + 5％，<br>持續 10 秒"},{name:"providence",rank:"b",set_bonus:"套裝效果：<br>攻擊 + 6％"},{name:"syndicate_glory",rank:"b",set_bonus:"套裝效果：<br>法術傷害 + 15%，自身受到傷害 + 25％"}];const p=_=>(U("data-v-617f62c8"),_=_(),W(),_),O={class:"crime-brand-box d-flex"},P=p(()=>e("i",{class:"bi bi-box-arrow-left float-start me-1 font-30"},null,-1)),Q={class:"img-box w-fit me-1 me-lg-2"},X={class:"sinner-img position-relative mx-auto"},Y={class:"wiki-link h-fit my-1 text-center"},Z=["href"],ee=["innerHTML"],se={class:"info-box mt-1 me-1 me-lg-2 font-16"},te={width:"100%",class:"table table-sm table-bordered mb-1"},ne={align:"center"},re={scope:"row"},ae={scope:"row",valign:"middle",class:"text-nowrap"},oe=["innerHTML"],ie={width:"100%",class:"table table-sm table-bordered mb-1"},le={align:"center"},be={scope:"col",colspan:"2"},ce={align:"center"},_e={width:"100%",class:"table table-sm table-bordered mb-1"},de={align:"center"},me={scope:"col"},ue={scope:"col"},he={scope:"col"},pe={align:"center"},ke={scope:"row",class:"px-2"},fe={class:"pt-0"},ge=p(()=>e("br",null,null,-1)),ve={class:"cb-box"},we={class:"text-center font-30"},ye=p(()=>e("div",{class:"font-12 text-danger"},"紅色表示通用性較高",-1)),xe={class:"cb-set my-1 font-18"},Ne={class:"d-flex"},$e=["set","data-bs-title"],Te=["src"],Se=["src"],Ce={class:"crimebrands-name position-absolute font-14 fw-bold text-white"},Me={class:"text-secondary"},je={__name:"Sinner",setup(_){const m=z(),k=m.params.job,i=G[k].find(({name:s})=>s===m.params.name);E(()=>{i||(location.href="/path-to-nowhere/homepage")}),q(()=>{window.scroll(0,0),document.querySelectorAll(".crimebrands-img").forEach(l=>{const u=f(l.dataset.bsTitle);new R(l,{title:u.set_bonus||""})})});const f=s=>K.find(({name:l})=>l===s),g=s=>f(s).rank,F=()=>location.pathname.split("/")[3],H=s=>{const l=document.createElement("div");return l.innerHTML=s,l.textContent};return(s,l)=>{var v,w,y,x,N,$,T,S,C,M;const u=D("router-link");return o(),a("div",O,[j(u,{to:{name:F(),query:{sinner:n(m).params.name}}},{default:A(()=>[P]),_:1},8,["to"]),e("div",Q,[e("div",X,[j(n(J),{job:n(k),character:n(i)},null,8,["job","character"])]),e("div",Y,[e("a",{href:(v=n(i))==null?void 0:v.wiki,target:"_blank",class:"align-middle font-16"},"Wiki",8,Z)]),(o(!0),a(b,null,c((w=n(i))==null?void 0:w.tags,r=>(o(),a("div",{class:"tag w-fit mx-auto px-1 rounded-pill text-center text-nowrap font-14 text-bg-dark",innerHTML:r},null,8,ee))),256))]),e("div",se,[e("table",te,[e("tbody",ne,[e("tr",null,[e("th",re,t(s.$t("shackle")),1),e("td",null,t((y=n(i))==null?void 0:y.shackle),1)]),e("tr",null,[e("th",ae,t(s.$t("exclusive")),1),e("td",{class:d((N=(x=n(i))==null?void 0:x.exclusive)==null?void 0:N.emphasis)},[e("span",{innerHTML:(T=($=n(i))==null?void 0:$.exclusive)==null?void 0:T.text},null,8,oe)],2)])])]),e("table",ie,[e("thead",le,[e("tr",null,[e("th",be,t(s.$t("overall_strength")),1)])]),e("tbody",ce,[(o(!0),a(b,null,c((S=n(i))==null?void 0:S.strength,r=>(o(),a("tr",null,[e("td",null,t(s.$t(r.map)),1),e("td",null,t(H(r.strength)),1)]))),256))])]),e("table",_e,[e("thead",de,[e("tr",null,[e("th",me,t(s.$t("skill")),1),e("th",ue,t(s.$t("upgrade_order")),1),e("th",he,t(s.$t("recommended_grade")),1)])]),e("tbody",pe,[(o(!0),a(b,null,c((C=n(i))==null?void 0:C.skills,r=>(o(),a("tr",null,[e("th",ke,t(r.skill),1),e("td",null,t(r.order),1),e("td",{class:d({"fw-bold text-danger":r.threshold})},t(r.level),3)]))),256))]),e("caption",fe,[h(" 不同攻略推薦順序略有差別"),ge,h(" "+t(n(i).skill_des),1)])])]),e("div",ve,[e("div",we,[h(" —— "+t(s.$t("crimebrands_recommends"))+" —— ",1),ye]),(o(!0),a(b,null,c((M=n(i))==null?void 0:M.crimebrands,r=>(o(),a("div",xe,[e("header",{class:d(["font-20",{"text-danger":r.emphasis}])},"◎"+t(s.$t(r.name)),3),e("div",Ne,[(o(),a(b,null,c(["first","second","third"],B=>e("div",{set:s.cbName=r[B],class:"crimebrands-img position-relative flex-shrink-0 border border-dark","data-bs-toggle":"tooltip","data-bs-placement":"top","data-bs-title":s.cbName,"data-bs-html":"true"},[s.cbName?(o(),a("img",{key:0,src:n(L)(`crimebrands/${g(s.cbName)}.png`),alt:"",class:"position-absolute"},null,8,Te)):I("",!0),s.cbName?(o(),a("img",{key:1,src:n(L)(`crimebrands/${s.cbName}.png`),alt:"",class:"w-100 h-100"},null,8,Se)):I("",!0),e("span",Ce,t(s.$t(s.cbName)),1),e("div",{class:d(["rank-deco","deco-"+g(s.cbName)])},null,2)],8,$e)),64))]),e("div",Me,t(r.description),1)]))),256))])])}}},Fe=V(je,[["__scopeId","data-v-617f62c8"]]);export{Fe as default};
