import{g as N,h,i as D,d as k,v as R,c as u,w as s,y as w,r as c,o as l,b as r,s as i,e as S,t as x,a as d}from"./index.effee02f.js";import{o as m,R as z,a as C}from"./RowLoading.8f987e73.js";const F=async(n,t)=>{const a=await m.repos.get({owner:n,repo:t}),o=await m.repos.listReleases({owner:n,repo:t}),e=await m.repos.getReadme({owner:n,repo:t,mediaType:{format:"html"}});return{repoData:a,releaseData:o,readme:e.data.toString(),notFound:!1}},T=(n,t)=>{const a=sessionStorage.getItem(`repo-data[${n}/${t}]`);return a==null?{notFound:!1}:JSON.parse(a)},V=(n,t)=>{const a=N(T(n,t));return h(()=>{(async()=>{try{const e=await F(n,t);a.value=e,sessionStorage.setItem(`repo-data[${n}/${t}]`,JSON.stringify(e))}catch(e){console.error("Error:",e),a.value={notFound:!0}}})()}),{data:D(a)}},$=k({__name:"PluginView",setup(n){const{t}=R(),o=w().params.name.toString(),{data:e}=V("MikChanNoPlugins",o);return(b,E)=>{const p=c("v-card-text"),f=c("v-card"),g=c("v-col"),v=c("v-row"),y=c("v-container");return l(),u(y,null,{default:s(()=>[!r(e).notFound&&!r(e).readme?(l(),u(z,{key:0})):i("",!0),r(e).notFound?(l(),u(C,{key:1},{default:s(()=>[S(x(r(t)("not-found",{pluginName:r(o)})),1)]),_:1})):i("",!0),d(v,null,{default:s(()=>[d(g,null,{default:s(()=>[!r(e).notFound&&r(e).readme?(l(),u(f,{key:0},{default:s(()=>[d(p,{innerHTML:r(e).readme},null,8,["innerHTML"])]),_:1})):i("",!0)]),_:1})]),_:1})]),_:1})}}});function _(n){n.__i18n=n.__i18n||[],n.__i18n.push({locale:"",resource:{en:{"not-found":t=>{const{normalize:a,interpolate:o,named:e}=t;return a(['Plugin "',o(e("pluginName")),'" is not found!'])}},ru:{"not-found":t=>{const{normalize:a,interpolate:o,named:e}=t;return a(['\u041F\u043B\u0430\u0433\u0438\u043D "',o(e("pluginName")),'" \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D!'])}},uk:{"not-found":t=>{const{normalize:a,interpolate:o,named:e}=t;return a(['\u041F\u043B\u0430\u0433\u0456\u043D "',o(e("pluginName")),'" \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E!'])}}}})}typeof _=="function"&&_($);export{$ as default};
