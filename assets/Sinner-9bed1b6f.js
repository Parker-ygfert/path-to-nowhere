import{_ as V,u as z,i as E,e as R,T as A,c as a,g as L,w as D,f as n,a as e,F as c,r as d,t,j as m,n as _,k as p,h as P,o,p as U,d as W}from"./index-b764cb87.js";import{s as G,C as J,g as F}from"./sinners-828314eb.js";const K=[{name:"corridor_echo",rank:"s",set_bonus:"套裝效果：<br>初始能量 + 8"},{name:"creation",rank:"s",set_bonus:"套裝效果：<br>召喚物造成的傷害提高 25%"},{name:"creed_of_bulwark",rank:"s",set_bonus:"套裝效果：<br>阻擋 + 1"},{name:"solo_dance",rank:"s",set_bonus:"套裝效果：<br>九宮格範圍內不存在敵人時，<br>普攻傷害提高 25%<br>反之，必殺傷害提高 25%"},{name:"depth_of_restricted_area",rank:"s",set_bonus:"套裝效果：<br>戰鬥開始後，自身 20 秒內不會受到普通攻擊的傷害"},{name:"depths_of_oblivion",rank:"s",set_bonus:"套裝效果：<br>必殺傷害每秒增加 1%，最多疊加 30 層<br>使用必殺後，該效果重置"},{name:"embrace_of_the_dead",rank:"s",set_bonus:"套裝效果：<br>對核心被擊破的敵人造成的傷害提高 40%"},{name:"ground_zero",rank:"s",set_bonus:"套裝效果：<br>自身每 3 秒增加 1% 攻擊，最多疊加 10 次<br>移動後該效果重置"},{name:"nightmare_revelation",rank:"s",set_bonus:"套裝效果：<br>戰鬥開始時，我方全體禁閉者攻擊力提高 6%，<br>攻擊速度提高 10%，持續 30 秒"},{name:"paradise_regained",rank:"s",set_bonus:"套裝效果：<br>每隔 15 秒生成可拾取的精靈，<br>佩戴該套裝的角色拾取後，<br>立即對戰場中核心最多的怪物造成 1 點核心傷害<br>精靈最多同時存在 2 個"},{name:"pioneer",rank:"s",set_bonus:"套裝效果：<br>若佩戴者的身高不高於 155cm，增加 6% 攻擊，<br>反之只增加 3% 攻擊"},{name:"premonition",rank:"s",set_bonus:"套裝效果：<br>造成核心傷害時，附加自身攻擊力 120% 的真實傷害"},{name:"scarlet_bewitchment",rank:"s",set_bonus:"套裝效果：<br>不攻擊時，攻擊力每秒+1%，最多疊加20次<br>攻擊後重置"},{name:"servant",rank:"s",set_bonus:"套裝效果：<br>召喚物造成傷害時，有 40% 機率為主人回復 2 能量<br>每 3 秒最多觸發 1 次"},{name:"singularity",rank:"s",set_bonus:"套裝效果：<br>移動後，自身攻速提高 12%，持續 10 秒"},{name:"soul_rift",rank:"s",set_bonus:"套裝效果：<br>每次普通攻擊降低目標4%防禦，持續5秒<br>最多疊加3次"},{name:"the_city_of_sins",rank:"s",set_bonus:"套裝效果：<br>自身每激活 1 個套裝，增加 3% 攻擊和 5% 生命<br>最多疊加 3 次"},{name:"the_pandora_cage",rank:"s",set_bonus:"套裝效果：<br>每進行 3 次普通攻擊，<br>即對第 3 次被攻擊的敵人造成 1 次額外物理傷害，<br>傷害量相當於自身攻擊力的 80%"},{name:"overthrown_tower",rank:"s",set_bonus:"套裝效果：<br>爆擊率 + 12%"},{name:"reunion_day",rank:"s",set_bonus:"套裝效果：<br>普通攻擊暴擊時，回复 3 能量，每 3 秒最多觸發 1 次"},{name:"white_sands_apostle",rank:"s",set_bonus:"套裝效果：<br>攻擊時，有機率使目標眩暈 2 秒<br>對有核心的怪物觸發率 100%<br>每 10 秒最多觸發 1 次"},{name:"year_one_perishing_star",rank:"s",set_bonus:"套裝效果：<br>自身生命提高 20%，攻擊提高 15%<br>但是無法移動"},{name:"blue_rain",rank:"a",set_bonus:"套裝效果：<br>移動次數 + 6<br>該套裝無法疊加，只有一套生效"},{name:"diverged_ends",rank:"a",set_bonus:"套裝效果：<br>擊殺敵人後，自身造成的傷害提高12%，<br>持續10秒"},{name:"final_prologue",rank:"a",set_bonus:"套裝效果：<br>造成治療效果 + 25%"},{name:"fury_cb",rank:"a",set_bonus:"套裝效果：<br>使用必殺後，立即回復自身 20% 生命，<br>每 8 秒最多觸發 1 次"},{name:"hope",rank:"a",set_bonus:"套裝效果：<br>初始能量 + 5"},{name:"in_hosts_name",rank:"a",set_bonus:"套裝效果：<br>每阻擋一個敵人，受到的傷害降低 8%"},{name:"obsession",rank:"a",set_bonus:"套裝效果：<br>每隔15秒，自動驅散 1 個負面效果"},{name:"shackles_of_life",rank:"a",set_bonus:"套裝效果：<br>爆擊傷害 + 50%"},{name:"shattered_battlefront",rank:"a",set_bonus:"套裝效果：<br>戰鬥開始時，攻擊 + 15%，持續 30 秒"},{name:"turning_zero",rank:"a",set_bonus:"套裝效果：<br>使用局長技能後，自身獲得 3 點能量，<br>每 10 秒最多觸發 1 次"},{name:"eastside_dream",rank:"b",set_bonus:"套裝效果：<br>普通攻擊造成的傷害提高 15％"},{name:"justice",rank:"b",set_bonus:"套裝效果：<br>使用必殺後，除自身所有禁閉者攻擊 + 5％，<br>持續 10 秒"},{name:"providence",rank:"b",set_bonus:"套裝效果：<br>攻擊 + 6％"},{name:"syndicate_glory",rank:"b",set_bonus:"套裝效果：<br>法術傷害 + 15%，自身受到傷害 + 25％"}];const k=b=>(U("data-v-348e2844"),b=b(),W(),b),O={class:"crime-brand-box d-flex"},Q=k(()=>e("i",{class:"bi bi-box-arrow-left float-start me-1 font-30"},null,-1)),X={class:"img-box w-fit me-1 me-lg-2"},Y={class:"sinner-img position-relative mx-auto"},Z={class:"wiki-link h-fit my-1 text-center"},ee=["href"],se=["innerHTML"],te={class:"info-box mt-1 me-1 me-lg-2 font-16"},ne={width:"100%",class:"table table-sm table-bordered mb-1"},re={align:"center"},ae={key:0},oe={scope:"row"},ie={scope:"row"},le={class:"text-nowrap"},ce={key:1},de={scope:"row",valign:"middle"},_e={scope:"row",valign:"middle",class:"text-nowrap"},be=["innerHTML"],me={width:"100%",class:"table table-sm table-bordered mb-1"},ue={align:"center"},he={scope:"col",colspan:"2"},pe={align:"center"},ke={width:"100%",class:"table table-sm table-bordered mb-1"},ge={align:"center"},fe={scope:"col"},ve={scope:"col"},we={scope:"col"},ye={align:"center"},xe={scope:"row",class:"px-2"},$e={class:"pt-0"},Ne=k(()=>e("br",null,null,-1)),Te={class:"cb-box"},Se={class:"text-center font-30"},Ce=k(()=>e("div",{class:"font-12 text-danger"},"紅色表示通用性較高",-1)),Me={class:"cb-set my-1 font-18"},je={class:"d-flex"},Ie=["set","data-bs-title"],Le=["src"],Fe=["src"],He={class:"crimebrands-name position-absolute font-14 fw-bold text-white"},qe={class:"text-secondary"},Be={__name:"Sinner",setup(b){const u=z(),g=u.params.job,i=G[g].find(({name:s})=>s===u.params.name);E(()=>{i||(location.href="/path-to-nowhere/homepage")}),R(()=>{window.scroll(0,0),document.querySelectorAll(".crimebrands-img").forEach(l=>{const h=f(l.dataset.bsTitle);new A(l,{title:h.set_bonus||""})})});const f=s=>K.find(({name:l})=>l===s),v=s=>f(s).rank,H=()=>location.pathname.split("/")[3],q=s=>{const l=document.createElement("div");return l.innerHTML=s,l.textContent},w=s=>s!=null;return(s,l)=>{var y,x,$,N,T,S,C,M,j,I;const h=P("router-link");return o(),a("div",O,[L(h,{to:{name:H(),query:{sinner:n(u).params.name}}},{default:D(()=>[Q]),_:1},8,["to"]),e("div",X,[e("div",Y,[L(n(J),{job:n(g),character:n(i)},null,8,["job","character"])]),e("div",Z,[e("a",{href:(y=n(i))==null?void 0:y.wiki,target:"_blank",class:"align-middle font-16"},"Wiki",8,ee)]),(o(!0),a(c,null,d((x=n(i))==null?void 0:x.tags,r=>(o(),a("div",{class:"tag w-fit mx-auto px-1 rounded-pill text-center text-nowrap font-14 text-bg-dark",innerHTML:r},null,8,se))),256))]),e("div",te,[e("table",ne,[e("tbody",re,[w(n(i).recommended_shackle)?(o(),a("tr",ae,[e("th",oe,t(s.$t("recommended_shackle")),1),e("td",null,t(n(i).recommended_shackle),1)])):m("",!0),e("tr",null,[e("th",ie,t(s.$t("qualitative_shackles")),1),e("td",le,t(($=n(i))==null?void 0:$.qualitative_shackles),1)]),w(n(i).supplement_shackles)?(o(),a("tr",ce,[e("th",de,t(s.$t("supplement_shackles")),1),e("td",null,[(o(!0),a(c,null,d(n(i).supplement_shackles,r=>(o(),a("div",{class:_({"text-danger":r.emphasis})},t(r.shackle),3))),256))])])):m("",!0),e("tr",null,[e("th",_e,t(s.$t("exclusive")),1),e("td",{class:_(["text-nowrap",(T=(N=n(i))==null?void 0:N.exclusive)==null?void 0:T.emphasis])},[e("span",{innerHTML:(C=(S=n(i))==null?void 0:S.exclusive)==null?void 0:C.text},null,8,be)],2)])])]),e("table",me,[e("thead",ue,[e("tr",null,[e("th",he,t(s.$t("overall_strength")),1)])]),e("tbody",pe,[(o(!0),a(c,null,d((M=n(i))==null?void 0:M.strength,r=>(o(),a("tr",null,[e("td",null,t(s.$t(r.map)),1),e("td",null,t(q(r.strength)),1)]))),256))])]),e("table",ke,[e("thead",ge,[e("tr",null,[e("th",fe,t(s.$t("skill")),1),e("th",ve,t(s.$t("upgrade_order")),1),e("th",we,t(s.$t("recommended_grade")),1)])]),e("tbody",ye,[(o(!0),a(c,null,d((j=n(i))==null?void 0:j.skills,r=>(o(),a("tr",null,[e("th",xe,t(r.skill),1),e("td",null,t(r.order),1),e("td",{class:_({"fw-bold text-danger":r.threshold})},t(r.level),3)]))),256))]),e("caption",$e,[p(" 不同攻略推薦順序略有差別"),Ne,p(" "+t(n(i).skill_des),1)])])]),e("div",Te,[e("div",Se,[p(" —— "+t(s.$t("crimebrands_recommends"))+" —— ",1),Ce]),(o(!0),a(c,null,d((I=n(i))==null?void 0:I.crimebrands,r=>(o(),a("div",Me,[e("header",{class:_(["font-20",{"text-danger":r.emphasis}])},"◎"+t(s.$t(r.name)),3),e("div",je,[(o(),a(c,null,d(["first","second","third"],B=>e("div",{set:s.cbName=r[B],class:"crimebrands-img position-relative flex-shrink-0 border border-dark","data-bs-toggle":"tooltip","data-bs-placement":"top","data-bs-title":s.cbName,"data-bs-html":"true"},[s.cbName?(o(),a("img",{key:0,src:n(F)(`crimebrands/${v(s.cbName)}.png`),alt:"",class:"position-absolute"},null,8,Le)):m("",!0),s.cbName?(o(),a("img",{key:1,src:n(F)(`crimebrands/${s.cbName}.png`),alt:"",class:"w-100 h-100"},null,8,Fe)):m("",!0),e("span",He,t(s.$t(s.cbName)),1),e("div",{class:_(["rank-deco","deco-"+v(s.cbName)])},null,2)],8,Ie)),64))]),e("div",qe,t(r.description),1)]))),256))])])}}},Ee=V(Be,[["__scopeId","data-v-348e2844"]]);export{Ee as default};
