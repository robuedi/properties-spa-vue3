import{u as T,c as V,a as B}from"./index.esm-b2b9f9ac.js";import{d as F,u as q,r as o,o as _,a as C,w as s,b as x,e as n,f as t,m as I,t as A,g as L,c as P,h as E,i as D}from"./index-55fff2b0.js";const M={key:0,class:"text-center mt-2"},j=E("strong",null,"Register",-1),z=F({__name:"LoginForm",props:{hideRegisterLink:{type:Boolean,default:!1}},emits:["loggedIn"],setup(y,{emit:g}){const{hideRegisterLink:f}=y,{defineComponentBinds:h,handleSubmit:l,errors:a}=T({validationSchema:V({email:B().email().required(),password:B().required()})}),S=h("email"),$=h("password"),N=q(),R=l((b,{setErrors:w,resetForm:k})=>{N.login(b).then(()=>{k(),g("loggedIn",!0)}).catch(e=>{var c,i,d,u,p,m,r;Array.isArray((i=(c=e==null?void 0:e.response)==null?void 0:c.data)==null?void 0:i.errors)&&((p=(u=(d=e==null?void 0:e.response)==null?void 0:d.data)==null?void 0:u.errors)==null?void 0:p.length)>0?w({general:e.response.data.errors.flat()}):w(((r=(m=e==null?void 0:e.response)==null?void 0:m.data)==null?void 0:r.errors)??{general:["There have been some error processing your request."]})})});return(b,w)=>{const k=o("InputText"),e=o("ErrorFeedback"),c=o("Password"),i=o("InlineMessage"),d=o("BasicForm"),u=o("Button"),p=o("router-link"),m=o("Card");return _(),C(m,null,{title:s(()=>[x(" Sign in ")]),content:s(()=>[n(d,{class:"mt-3"},{default:s(()=>{var r;return[n(e,{error:t(a).email},{default:s(()=>[n(k,I({placeholder:"Email",class:"w-full",id:"value"},t(S),{type:"text",class:{"p-invalid":!!t(a).email},"aria-describedby":"text-error"}),null,16,["class"])]),_:1},8,["error"]),n(e,{error:t(a).password},{default:s(()=>[n(c,I({feedback:!1},t($),{class:{"p-invalid":!!t(a).password},inputClass:"w-full",placeholder:"Password"}),null,16,["class"])]),_:1},8,["error"]),(r=t(a))!=null&&r.general?(_(),C(i,{key:0,severity:"warn"},{default:s(()=>{var v;return[x(A((v=t(a))==null?void 0:v.general),1)]}),_:1})):L("",!0)]}),_:1})]),footer:s(()=>[n(u,{icon:"pi pi-user",onClick:t(R),class:"w-full",label:"Login"},null,8,["onClick"]),f?L("",!0):(_(),P("p",M,[x(" Don't have an account yet? "),n(p,{class:"text-dark text-weight-bold",style:{"text-decoration":"none"},to:{name:"register"}},{default:s(()=>[j]),_:1})]))]),_:1})}}}),G={class:"grow flex justify-center items-center"},K=F({__name:"Login",setup(y){const g=D(),f=()=>{g.push({name:"user"})};return(h,l)=>(_(),P("div",G,[n(z,{onLoggedIn:l[0]||(l[0]=a=>f())})]))}});export{K as default};
