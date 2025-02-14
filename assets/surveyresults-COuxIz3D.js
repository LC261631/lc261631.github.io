import{_ as p}from"./BaseChart-34SBGcT1.js";import{r as S,g as O,a as x,c as C}from"./index.esm2017-B4qNOYPQ.js";import{_ as f,o as l,f as _,c as y,a as s,w as a,V as v,aS as j,b as g,F as w,az as D,aT as P,aP as b,d as h,aU as u,e as $,aV as T,aW as d,aX as G}from"./index-BE6SOBVa.js";const I={data(){return{chartOptions:null,formSubmissions:null}},async mounted(){await this.loadSubmissions(),await this.setUpChart()},methods:{async loadSubmissions(){const t=S(O(this.$firebaseApp)),e=await x(C(t,"formResults"));this.formSubmissions=Object.values(await e.val())},async setUpChart(){const t={};for(const n of this.formSubmissions)for(const o of n.selectedExperienceTags)t[o]===void 0&&(t[o]=0),t[o]++;const e=Object.entries(t);e.sort((n,o)=>o[1]-n[1]),this.chartOptions={chart:{type:"bar",height:300},title:{text:"What sort of experience are you looking to have?"},series:[{name:"No. of Responses",data:e.map(n=>n[1])}],xaxis:{categories:e.map(n=>n[0])},yaxis:{title:{text:"No. of Responses"}}}}},components:{BaseChart:p}};function E(t,e,n,o,r,m){const i=p;return l(),_(i,{chartOptions:r.chartOptions},null,8,["chartOptions"])}const A=f(I,[["render",E]]),L={data(){return{chartOptions:null,formSubmissions:null}},async mounted(){await this.loadSubmissions(),await this.setUpChart()},methods:{async loadSubmissions(){const t=S(O(this.$firebaseApp)),e=await x(C(t,"formResults"));this.formSubmissions=Object.values(await e.val())},async setUpChart(){const t={};for(const n of this.formSubmissions)for(const o of n.selectedGenreTags)t[o]===void 0&&(t[o]=0),t[o]++;const e=Object.entries(t);e.sort((n,o)=>o[1]-n[1]),this.chartOptions={chart:{type:"bar",height:300},title:{text:"What genres of games are you interested in?"},series:[{name:"No. of Responses",data:e.map(n=>n[1])}],xaxis:{categories:e.map(n=>n[0])},yaxis:{title:{text:"No. of Responses"}}}}},components:{BaseChart:p}};function M(t,e,n,o,r,m){const i=p;return l(),_(i,{chartOptions:r.chartOptions},null,8,["chartOptions"])}const R=f(L,[["render",M]]),W={data(){return{chartOptions:null,formSubmissions:null}},async mounted(){await this.loadSubmissions(),await this.setUpChart()},methods:{async loadSubmissions(){const t=S(O(this.$firebaseApp)),e=await x(C(t,"formResults"));this.formSubmissions=Object.values(await e.val())},async setUpChart(){const t=["Singleplayer","Multiplayer","Both"],e=Array(t.length).fill(0);for(const n of this.formSubmissions){const o=t.indexOf(n.selectedPlayerOption);o>=0&&e[o]++}this.chartOptions={chart:{type:"pie",height:400},title:{text:"Do you prefer a multiplayer or singleplayer experience?"},series:e,labels:t}}},components:{BaseChart:p}};function F(t,e,n,o,r,m){const i=p;return l(),_(i,{chartOptions:r.chartOptions},null,8,["chartOptions"])}const B=f(W,[["render",F]]),Y={data(){return{chartOptions:null,formSubmissions:null}},async mounted(){await this.loadSubmissions(),await this.setUpChart()},methods:{async loadSubmissions(){const t=S(O(this.$firebaseApp)),e=await x(C(t,"formResults"));this.formSubmissions=Object.values(await e.val())},async setUpChart(){const t=["Only recent games","Some older games","Mostly classics"],e=Array(t.length).fill(0);for(const n of this.formSubmissions){const o=t.indexOf(n.selectedGameAgeOption);o>=0&&e[o]++}this.chartOptions={chart:{type:"pie",height:400},title:{text:"What sort of games do you mostly play?"},series:e,labels:t}}},components:{BaseChart:p}};function z(t,e,n,o,r,m){const i=p;return l(),_(i,{chartOptions:r.chartOptions},null,8,["chartOptions"])}const k=f(Y,[["render",z]]),J={data(){return{recommendedApps:[],loading:!1}},async mounted(){this.loadApps()},methods:{async loadApps(){this.loading=!0;const t=await JSON.parse(localStorage.getItem("recommendedApps"));t?this.recommendedApps=t:this.recommendedApps=[],this.loading=!1},htmlDecode(t){return new DOMParser().parseFromString(t,"text/html").documentElement.textContent}},components:{SurveyGameAgeChart:k,SurveyPlayerChart:B,SurveyGenreChart:R,SurveyExperienceChart:A}},X={key:0},q=["href"],H=["href"],K={key:1};function Q(t,e,n,o,r,m){const i=k,U=B,V=R,N=A;return l(),y(w,null,[s(v,null,{default:a(()=>e[0]||(e[0]=[h("Recommendations Survey")])),_:1}),s(j,{active:r.loading,indeterminate:""},null,8,["active"]),r.recommendedApps.length>0?(l(),y("div",X,[s(g,null,{default:a(()=>e[1]||(e[1]=[h(" Thank you for taking the survey! Below are some games that we think you might enjoy, based on your answers. You can click on them to visit their store page on Steam. ")])),_:1}),(l(!0),y(w,null,D(r.recommendedApps,c=>(l(),_(G,{class:"my-4"},{default:a(()=>[s(b,null,{default:a(()=>[s(u,{cols:"5"},{default:a(()=>[$("a",{href:c.storeURL,target:"_blank"},[s(T,{src:c.headerImageURL,height:"200",class:"headerImage"},null,8,["src"])],8,q)]),_:2},1024),s(u,{cols:"7"},{default:a(()=>[s(b,null,{default:a(()=>[s(u,{cols:"8"},{default:a(()=>[s(v,null,{default:a(()=>[$("a",{href:c.storeURL,target:"_blank"},d(c.name),9,H)]),_:2},1024)]),_:2},1024),s(u,{cols:"4"},{default:a(()=>[h(d(c.releaseDate),1)]),_:2},1024)]),_:2},1024),s(g,null,{default:a(()=>[h(" Relevancy score: "+d(Math.round(c.relevancyScore))+"           User ratings: "+d(Math.round(c.reviewScore))+"% positive ",1)]),_:2},1024),s(g,null,{default:a(()=>[h(d(m.htmlDecode(c.description)),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),256))])):r.loading?P("",!0):(l(),y("div",K,[s(g,null,{default:a(()=>e[2]||(e[2]=[h(" You have not taken the survey. ")])),_:1})])),s(v,null,{default:a(()=>e[3]||(e[3]=[h("Other Participants' Answers")])),_:1}),s(b,null,{default:a(()=>[s(u,{cols:"6"},{default:a(()=>[s(i)]),_:1}),s(u,{cols:"6"},{default:a(()=>[s(U)]),_:1})]),_:1}),s(b,null,{default:a(()=>[s(u,{cols:"6"},{default:a(()=>[s(V)]),_:1}),s(u,{cols:"6"},{default:a(()=>[s(N)]),_:1})]),_:1})],64)}const st=f(J,[["render",Q]]);export{st as default};
