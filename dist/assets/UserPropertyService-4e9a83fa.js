var p=Object.defineProperty;var u=(o,e,r)=>e in o?p(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r;var i=(o,e,r)=>(u(o,typeof e!="symbol"?e+"":e,r),r);import{Z as g}from"./index-bf000827.js";class c extends g.Model{baseURL(){return"http://localhost/api/v1"}request(e){return this.$http.request(e)}getPagination(){return new Promise((e,r)=>{super.get().then(s=>{let t=s;t&&typeof t=="object"&&"data"in t&&e(t),r("Wrong format data from server")}).catch(s=>{r(s)})})}getCollection(){return new Promise((e,r)=>{super.get().then(s=>{let t=s;t&&typeof t=="object"&&"data"in t&&e(t.data),r("Wrong format data from server")}).catch(s=>{r(s)})})}}i(c,"state",Object.freeze({INITIAL:"INITIAL",LOADING:"LOADING",LOADED:"LOADED",ERROR:"ERROR"}));class l extends c{resource(){return"user-properties"}paginate(){return super.getPagination()}}class h{constructor(e){i(this,"error");this.error=e}hierarchicalGroupping(){var s;let e=((s=this.error)==null?void 0:s.errors)??{},r={};for(let t in e){let a=t.split(".");if(a.length===1)r[t]=e[t];else if(a.length>1){let n=a.slice(1).join(".");a[0]in r?r[a[0]]={...r[a[0]],[n]:e[t]}:r[a[0]]={[n]:e[t]}}}return r}}class m{static getAll(){return l.include(["propertyType","listingType","rentListing","sellListing"]).paginate()}static store(e){return new Promise((r,s)=>{new l(e).save().then(t=>{r(t)}).catch(t=>{const a=t.response;let n=new h(a.data);s(n.hierarchicalGroupping())})})}}export{c as M,m as U};