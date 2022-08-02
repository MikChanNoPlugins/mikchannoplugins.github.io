import{o as R,R as S,a as L}from"./RowLoading.8f987e73.js";import{g as F,h as V,i as B,_ as k,r as s,o as _,c as d,w as a,a as c,j as C,k as I,d as x,f as O,l as g,t as h,b as u,n as $,p as D,e as b,q as E,s as v,v as G,x as j,F as q}from"./index.effee02f.js";const J=async e=>({reposData:(await R.repos.listForOrg({org:e})).data.map(n=>{var l,i;return{...n,topics:(l=n.topics)!=null?l:[],stargazers_count:(i=n.stargazers_count)!=null?i:0}})}),T=()=>{const e=sessionStorage.getItem("github-repo-data");return e==null?{status:"loading"}:{...JSON.parse(e),status:"found"}},M=e=>{const t=F(T());return V(()=>{(async()=>{try{const n=await J(e);t.value={...n,status:"found"},sessionStorage.setItem("github-repo-data",JSON.stringify(n))}catch(n){t.value.status=="loading"&&(console.error(n),t.value={status:"notFound"})}})()}),{reposData:B(t)}},A={};function H(e,t){const o=s("v-card-text"),n=s("v-card"),l=s("v-col"),i=s("v-row");return _(),d(i,null,{default:a(()=>[c(l,{cols:"auto"},{default:a(()=>[c(n,null,{default:a(()=>[c(o,null,{default:a(()=>[C("h1",null,[I(e.$slots,"default")])]),_:3})]),_:3})]),_:3})]),_:3})}const K=k(A,[["render",H]]),Q={key:0},U=b(" Nothing here "),W=x({__name:"PluginListCard",props:{data:{type:Object,required:!0}},setup(e){const t=e,o=O(),n=g(()=>t.data),l=()=>o.push({name:"plugin",params:{name:n.value.name.toLowerCase()}}),i=()=>{var r;return(r=window.open(`https://github.com/${n.value.full_name}`,"_blank"))==null?void 0:r.focus()};return(r,p)=>{const z=s("v-toolbar-title"),m=s("v-icon"),w=s("v-btn"),f=s("v-toolbar"),N=s("v-card-text"),P=s("v-card");return _(),d(P,null,{default:a(()=>[c(f,{flat:""},{default:a(()=>[c(z,null,{default:a(()=>[C("span",{class:"hoverable",onClick:l},h(u(n).name),1)]),_:1}),c(w,{icon:"",onClick:i},{default:a(()=>[c(m,{icon:u($)},null,8,["icon"])]),_:1}),u(n).stargazers_count?(_(),D("span",Q,[b(h(u(n).stargazers_count)+" ",1),c(m,{icon:u(E)},null,8,["icon"])])):v("",!0)]),_:1}),c(N,null,{default:a(()=>[U]),_:1})]),_:1})}}});const X=k(W,[["__scopeId","data-v-58e30459"]]),Y=x({__name:"PluginsView",setup(e){const{t}=G(),{reposData:o}=M("MikChanNoPlugins"),n=g(()=>{var r;return(r=o.value.reposData)!=null?r:[]}),l=g(()=>o.value.status),i=g(()=>n.value.filter(r=>{var p;return(p=r.topics)==null?void 0:p.includes("spigot-plugin")}).sort((r,p)=>p.stargazers_count-r.stargazers_count));return(r,p)=>{const z=s("v-col"),m=s("v-row"),w=s("v-container");return _(),d(w,{class:"container"},{default:a(()=>[c(K,null,{default:a(()=>[b(h(u(t)("plugins")),1)]),_:1}),u(l)==="loading"?(_(),d(S,{key:0})):v("",!0),u(l)==="notFound"?(_(),d(L,{key:1},{default:a(()=>[b(h(u(t)("not-found")),1)]),_:1})):v("",!0),u(l)==="found"?(_(),d(m,{key:2},{default:a(()=>[(_(!0),D(q,null,j(u(i),f=>(_(),d(z,{key:f.id,cols:"12",sm:"6",md:"4"},{default:a(()=>[c(X,{data:f},null,8,["data"])]),_:2},1024))),128))]),_:1})):v("",!0)]),_:1})}}});function y(e){e.__i18n=e.__i18n||[],e.__i18n.push({locale:"",resource:{en:{plugins:t=>{const{normalize:o}=t;return o(["Plugins"])},"not-found":t=>{const{normalize:o}=t;return o(["Nothing was found."])}},ru:{plugins:t=>{const{normalize:o}=t;return o(["\u041F\u043B\u0430\u0433\u0438\u043D\u044B"])},"not-found":t=>{const{normalize:o}=t;return o(["\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E."])}},uk:{plugins:t=>{const{normalize:o}=t;return o(["\u041F\u043B\u0430\u0433\u0456\u043D\u0438"])},"not-found":t=>{const{normalize:o}=t;return o(["\u041D\u0456\u0447\u043E\u0433\u043E \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E."])}}}})}typeof y=="function"&&y(Y);export{Y as default};
