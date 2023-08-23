import{d as h,u as I,r as S,a as l,o as f,b as C,w as s,e as c,f as t,g as a,k as F,t as T,h as P,c as R,i,j as D,l as M}from"./index-102d67b4.js";import{F as j,c as _,u as z}from"./formValidator-99071270.js";import{u as G}from"./apiFormErrParser-907ea7ab.js";class H extends j{constructor(u){super({name:_().min(2).required(),email:_().email().required(),password:_().min(6).required(),password_confirmation:_().min(6).required()},u)}}const J=i("h6",null,"Pick a password",-1),K=i("p",{class:"mt-2"},"Suggestions",-1),O=i("ul",{class:"pl-2 ml-2 mt-0",style:{"line-height":"1.5"}},[i("li",null,"At least one lowercase"),i("li",null,"At least one uppercase"),i("li",null,"At least one numeric"),i("li",null,"Minimum 8 characters")],-1),Q={key:0,class:"text-center mt-2"},W=i("strong",null,"Login",-1),X=h({__name:"RegisterForm",props:{hideLoginLink:{type:Boolean,default:!1}},emits:["registered"],setup(g,{emit:u}){const{hideLoginLink:w}=g,V=I(),n=S({name:null,email:null,password:null,password_confirmation:null});let{errors:r,doValidate:d}=z(H);const{formErrParse:b}=G(),E=()=>{V.register(n.value).then(()=>{u("registered",!0)}).catch(p=>{var e,m;r.value=b((m=(e=p==null?void 0:p.response)==null?void 0:e.data)==null?void 0:m.error)})};return(p,e)=>{const m=l("TextInput"),L=l("Divider"),v=l("Password"),k=l("ErrorFeedback"),U=l("InlineMessage"),A=l("BasicForm"),N=l("Button"),$=l("router-link"),q=l("Card");return f(),C(q,{style:{width:"25em"}},{title:s(()=>[c(" Register ")]),content:s(()=>[t(A,{class:"mt-3"},{default:s(()=>{var x,y,B;return[t(m,{name:"Name",modelValue:n.value.name,"onUpdate:modelValue":e[0]||(e[0]=o=>n.value.name=o),error:(x=a(r))==null?void 0:x.name,onBlur:e[1]||(e[1]=o=>a(d)("name",o))},null,8,["modelValue","error"]),t(m,{name:"Email",modelValue:n.value.email,"onUpdate:modelValue":e[2]||(e[2]=o=>n.value.email=o),error:(y=a(r))==null?void 0:y.email,onBlur:e[3]||(e[3]=o=>a(d)("email",o))},null,8,["modelValue","error"]),t(k,{error:a(r).password},{default:s(()=>[t(F,null,{default:s(()=>[c("Password")]),_:1}),t(v,{modelValue:n.value.password,"onUpdate:modelValue":e[4]||(e[4]=o=>n.value.password=o),onUpdate:e[5]||(e[5]=o=>a(d)("password",o)),inputClass:"w-full",placeholder:"Please insert"},{header:s(()=>[J]),footer:s(()=>[t(L),K,O]),_:1},8,["modelValue"])]),_:1},8,["error"]),t(k,{error:a(r).password_confirmation},{default:s(()=>[t(F,null,{default:s(()=>[c("Password Confirmation")]),_:1}),t(v,{feedback:!1,onUpdate:e[6]||(e[6]=o=>a(d)("password_confirmation",o)),modelValue:n.value.password_confirmation,"onUpdate:modelValue":e[7]||(e[7]=o=>n.value.password_confirmation=o),inputClass:"w-full",placeholder:"Please insert"},null,8,["modelValue"])]),_:1},8,["error"]),(B=a(r))!=null&&B.general?(f(),C(U,{key:0,severity:"warn"},{default:s(()=>{var o;return[c(T((o=a(r))==null?void 0:o.general),1)]}),_:1})):P("",!0)]}),_:1})]),footer:s(()=>[t(N,{icon:"pi pi-user",onClick:E,class:"w-full",label:"Register"}),w?P("",!0):(f(),R("p",Q,[c(" Already having an account? "),t($,{class:"text-dark text-weight-bold",style:{"text-decoration":"none"},to:{name:"login"}},{default:s(()=>[W]),_:1})]))]),_:1})}}}),Y={class:"grow flex justify-center items-center"},te=h({__name:"Register",setup(g){const u=D(),w=M(),V=()=>{w.add({severity:"success",summary:"Successful registration",detail:"Please login",life:3e3}),u.push({name:"login"})};return(n,r)=>(f(),R("div",Y,[t(X,{onRegistered:r[0]||(r[0]=d=>V())})]))}});export{te as default};