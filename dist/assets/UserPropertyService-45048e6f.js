var p=Object.defineProperty;var u=(a,e,r)=>e in a?p(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r;var o=(a,e,r)=>(u(a,typeof e!="symbol"?e+"":e,r),r);import{Z as h}from"./index-55fff2b0.js";class c extends h.Model{baseURL(){return"http://localhost/api/v1"}request(e){return this.$http.request(e)}getPagination(){return new Promise((e,r)=>{super.get().then(i=>{e(i)}).catch(i=>{r(i)})})}}o(c,"state",Object.freeze({INITIAL:"INITIAL",LOADING:"LOADING",LOADED:"LOADED",ERROR:"ERROR"}));class l extends c{resource(){return"user-properties"}paginate(){return super.getPagination()}}class g{constructor(e){o(this,"error");this.error=e}hierarchicalGroupping(){var i;let e=((i=this.error)==null?void 0:i.errors)??{},r={};for(let t in e){let s=t.split(".");if(s.length===1)r[t]=e[t];else if(s.length>1){let n=s.slice(1).join(".");s[0]in r?r[s[0]]={...r[s[0]],[n]:e[t]}:r[s[0]]={[n]:e[t]}}}return r}}class R{static getAll(){return l.include(["propertyType","listingType","rentListing","sellListing"]).paginate()}static store(e){return new Promise((r,i)=>{new l(e).save().then(t=>{r(t)}).catch(t=>{const s=t.response;let n=new g(s.data);i(n.hierarchicalGroupping())})})}}export{c as M,R as U};
