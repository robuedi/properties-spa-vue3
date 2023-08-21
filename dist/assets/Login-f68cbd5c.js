import{u as R,c as T,a as b}from"./index.esm-6a0f3a02.js";import{d as F,u as V,r as o,o as g,a as B,w as s,b as y,e as n,f as t,m as I,t as q,g as L,c as P,h as A,i as D}from"./index-bf000827.js";const M={key:0,class:"text-center mt-2"},j=A("strong",null,"Register",-1),W=F({__name:"LoginForm",props:{hideRegisterLink:{type:Boolean,default:!1}},emits:["loggedIn"],setup(v,{emit:f}){const{hideRegisterLink:h}=v,{defineComponentBinds:w,handleSubmit:i,errors:a}=R({validationSchema:T({email:b().email().required(),password:b().required()})}),S=w("email"),$=w("password"),E=V(),N=i((C,{setErrors:k,resetForm:x})=>{let r=C;if(!r)throw new Error("Wrong login fields sent");E.login(r).then(()=>{x(),f("loggedIn",!0)}).catch(e=>{var d,u,p,m,_,l,c;Array.isArray((u=(d=e==null?void 0:e.response)==null?void 0:d.data)==null?void 0:u.errors)&&((_=(m=(p=e==null?void 0:e.response)==null?void 0:p.data)==null?void 0:m.errors)==null?void 0:_.length)>0?k({general:e.response.data.errors.flat()}):k(((c=(l=e==null?void 0:e.response)==null?void 0:l.data)==null?void 0:c.errors)??{general:["There have been some error processing your request."]})})});return(C,k)=>{const x=o("InputText"),r=o("ErrorFeedback"),e=o("Password"),d=o("InlineMessage"),u=o("BasicForm"),p=o("Button"),m=o("router-link"),_=o("Card");return g(),B(_,null,{title:s(()=>[y(" Sign in ")]),content:s(()=>[n(u,{class:"mt-3"},{default:s(()=>{var l;return[n(r,{error:t(a).email},{default:s(()=>[n(x,I({placeholder:"Email",class:"w-full",id:"value"},t(S),{type:"text",class:{"p-invalid":!!t(a).email},"aria-describedby":"text-error"}),null,16,["class"])]),_:1},8,["error"]),n(r,{error:t(a).password},{default:s(()=>[n(e,I({feedback:!1},t($),{class:{"p-invalid":!!t(a).password},inputClass:"w-full",placeholder:"Password"}),null,16,["class"])]),_:1},8,["error"]),(l=t(a))!=null&&l.general?(g(),B(d,{key:0,severity:"warn"},{default:s(()=>{var c;return[y(q((c=t(a))==null?void 0:c.general),1)]}),_:1})):L("",!0)]}),_:1})]),footer:s(()=>[n(p,{icon:"pi pi-user",onClick:t(N),class:"w-full",label:"Login"},null,8,["onClick"]),h?L("",!0):(g(),P("p",M,[y(" Don't have an account yet? "),n(m,{class:"text-dark text-weight-bold",style:{"text-decoration":"none"},to:{name:"register"}},{default:s(()=>[j]),_:1})]))]),_:1})}}}),z={class:"grow flex justify-center items-center"},J=F({__name:"Login",setup(v){const f=D(),h=()=>{f.push({name:"user"})};return(w,i)=>(g(),P("div",z,[n(W,{onLoggedIn:i[0]||(i[0]=a=>h())})]))}});export{J as default};