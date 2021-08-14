(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{21:function(t,e,n){t.exports={form:"Form_form__3Qb-D",input:"Form_input__1Hfvc",button:"Form_button__Rez1q"}},26:function(t,e,n){t.exports={stats:"PersoneEditor_stats__2X8tI",item:"PersoneEditor_item__WImEq",button:"PersoneEditor_button__1diWP"}},30:function(t,e,n){t.exports={label:"Filter_label__RnXeK"}},50:function(t,e,n){},80:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(22),o=n.n(r),s=n(13),i=(n(50),n(23)),l=function(t){return t.contacts.filter},u={getItems:function(t){return t.contacts.items},getFilter:l,getVisibleContacts:Object(i.a)([l,function(t){return t.contacts.items.entities}],(function(t,e){var n=t.toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))}))},b=n(33),d=n(81),j=n(21),h=n.n(j),f=n(12),O=n(29),m=n.n(O),p=n(43),C=n(5),x=Object(C.b)("todos/addContactRequest"),g=Object(C.b)("contacts/addContactSuccess"),v=Object(C.b)("todos/addContactError"),y=Object(C.b)("todos/deleteContactRequest"),S=Object(C.b)("todos/deleteContactSuccess"),k=Object(C.b)("todos/deleteContactError"),w=Object(C.b)("contacts/filter"),_=Object(C.b)("contacts/changeFilter"),E=Object(C.b)("contacts/fetchContactsRequest"),R=Object(C.b)("contacts/fetchContactsRequest"),q={fetchContactsError:Object(C.b)("contacts/fetchContactsRequest"),fetchContactsSuccess:R,fetchContactsRequest:E,changeFilterContacts:_,filterContacts:w,addContactRequest:x,addContactSuccess:g,addContactError:v,deleteContactRequest:y,deleteContactSuccess:S,deleteContactError:k},F=n(25),A=n.n(F),N="http://localhost:3002/contacts",L={fetchContacts:function(){return function(){var t=Object(p.a)(m.a.mark((function t(e){var n,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(q.fetchContactsRequest()),t.prev=1,t.next=4,A.a.get(N);case 4:n=t.sent,c=n.data,e(q.fetchContactsSuccess(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(q.fetchContactsError(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},addContact:function(t){var e=t.name,n=t.number;return function(t){var c={id:Object(d.a)(),name:e,number:n};t(q.addContactRequest()),A.a.post(N,c).then((function(e){var n=e.data;return t(q.addContactSuccess(n))})).catch((function(e){return t(q.addContactError(e))}))}},deleteContact:function(t){return function(e){e(q.deleteContactRequest()),A.a.delete("".concat(N,"/").concat(t)).then((function(){return e(q.deleteContactSuccess(t))})).catch((function(t){return e(q.deleteContactError(t))}))}}},D=n(1);var B=Object(f.b)((function(t){return{entities:u.getVisibleContacts(t)}}),(function(t){return{onSubmit:function(e){return t(L.addContact(e))}}}))((function(t){var e=t.onSubmit,n=t.entities,a=Object(c.useState)(""),r=Object(b.a)(a,2),o=r[0],s=r[1],i=Object(c.useState)(""),l=Object(b.a)(i,2),u=l[0],j=l[1],f=Object(d.a)(),O=Object(d.a)(),m=function(){s(""),j("")};return Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)("form",{className:h.a.form,onSubmit:function(t){t.preventDefault(),n.find((function(t){return t.name===o}))?alert("".concat(o," is already on contacts")):(e({name:o,number:u}),m()),m()},children:[Object(D.jsx)("label",{htmlFor:f,children:" Name "}),Object(D.jsx)("input",{className:h.a.input,id:f,onChange:function(t){var e=t.currentTarget.value;s(e)},value:o,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(D.jsx)("label",{htmlFor:O,children:" Number "}),Object(D.jsx)("input",{className:h.a.input,id:O,onChange:function(t){console.log(t);var e=t.currentTarget.value;j(e)},value:u,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(D.jsx)("button",{className:h.a.button,type:"submit",children:"Add contact"})]})})})),I=n(26),W=n.n(I);var z=Object(f.b)((function(t){return{persons:u.getVisibleContacts(t)}}),(function(t){return{onDeleteContacts:function(e){return t(L.deleteContact(e))}}}))((function(t){var e=t.persons,n=t.onDeleteContacts,a=Object(f.c)();return Object(c.useEffect)((function(){a(L.fetchContacts())}),[a]),Object(D.jsx)(D.Fragment,{children:Object(D.jsx)("div",{children:e.length?Object(D.jsx)("ul",{className:W.a.stats,children:e.map((function(t){return Object(D.jsxs)("li",{className:W.a.item,children:[t.name,":",t.number,Object(D.jsx)("button",{className:W.a.button,type:"button",onClick:function(){return n(t.id)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},t.id)}))}):Object(D.jsx)("p",{children:"No entries in the phone book"})})})})),P=n(30),V=n.n(P),H=Object(f.b)((function(t){return{value:u.getFilter(t)}}),(function(t){return{onChange:function(e){return t(q.changeFilterContacts(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(D.jsxs)("label",{className:V.a.label,children:[Object(D.jsx)("b",{children:"\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u0438\u043c\u0435\u043d\u0438"}),Object(D.jsx)("input",{className:V.a.input,type:"Text",value:e,onChange:n})]})})),J=n(4),T={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#2A363B"},activeLink:{color:"#E84A5F"}},Z=function(t){var e=t.isAuthenticated;return Object(D.jsx)("nav",{children:e&&Object(D.jsx)(s.b,{to:"/todos",exact:!0,style:T.link,activeStyle:T.activeLink,children:"\u0412\u0430\u0448\u0438 \u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})})},M={container:{display:"flex",alignItems:"center"},avatar:{marginRight:4},name:{fontWeight:700,marginRight:12}},X=function(t){var e=t.avatar,n=t.name,c=t.onLogout;return Object(D.jsxs)("div",{style:M.container,children:[Object(D.jsx)("img",{src:e,alt:"",width:"32",style:M.avatar}),Object(D.jsxs)("span",{style:M.name,children:["Welcome, ",n]}),Object(D.jsx)("button",{type:"button",onClick:c,children:"Logout"})]})},K={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#2A363B"},activeLink:{color:"#E84A5F"}},Q=function(){return Object(D.jsxs)("div",{children:[Object(D.jsx)(s.b,{to:"/register",exact:!0,style:K.link,activeStyle:K.activeLink,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(D.jsx)(s.b,{to:"/login",exact:!0,style:K.link,activeStyle:K.activeLink,children:"\u041b\u043e\u0433\u0438\u043d"})]})},$={header:{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #2A363B"}},G=function(t){t.isAuthenticated;return Object(D.jsxs)("header",{style:$.header,children:[Object(D.jsx)(Z,{}),Object(D.jsx)(X,{}),Object(D.jsx)(Q,{})]})},U=n(3),Y=n(15),tt=n(16),et=n(18),nt=n(17),ct={form:{width:320},label:{display:"flex",flexDirection:"column",marginBottom:15}},at=function(t){Object(et.a)(n,t);var e=Object(nt.a)(n);function n(){var t;Object(Y.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={email:"",password:""},t.handleChange=function(e){var n=e.target,c=n.name,a=n.value;t.setState(Object(U.a)({},c,a))},t.handleSubmit=function(e){e.preventDefault(),t.props.onLogin(t.state),t.setState({name:"",email:"",password:""})},t}return Object(tt.a)(n,[{key:"render",value:function(){var t=this.state,e=t.email,n=t.password;return Object(D.jsxs)("div",{children:[Object(D.jsx)("h1",{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043b\u043e\u0433\u0438\u043d\u0430"}),Object(D.jsxs)("form",{onSubmit:this.handleSubmit,style:ct.form,autoComplete:"off",children:[Object(D.jsxs)("label",{style:ct.label,children:["\u041f\u043e\u0447\u0442\u0430",Object(D.jsx)("input",{type:"email",name:"email",value:e,onChange:this.handleChange})]}),Object(D.jsxs)("label",{style:ct.label,children:["\u041f\u0430\u0440\u043e\u043b\u044c",Object(D.jsx)("input",{type:"password",name:"password",value:n,onChange:this.handleChange})]}),Object(D.jsx)("button",{type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})}}]),n}(c.Component),rt={form:{width:320},label:{display:"flex",flexDirection:"column",marginBottom:15}},ot=function(t){Object(et.a)(n,t);var e=Object(nt.a)(n);function n(){var t;Object(Y.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",email:"",password:""},t.handleChange=function(e){var n=e.target,c=n.name,a=n.value;t.setState(Object(U.a)({},c,a))},t.handleSubmit=function(e){e.preventDefault(),t.props.onRegister(t.state),t.setState({name:"",email:"",password:""})},t}return Object(tt.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.email,c=t.password;return Object(D.jsxs)("div",{children:[Object(D.jsx)("h1",{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"}),Object(D.jsxs)("form",{onSubmit:this.handleSubmit,style:rt.form,autoComplete:"off",children:[Object(D.jsxs)("label",{style:rt.label,children:["\u0418\u043c\u044f",Object(D.jsx)("input",{type:"text",name:"name",value:e,onChange:this.handleChange})]}),Object(D.jsxs)("label",{style:rt.label,children:["\u041f\u043e\u0447\u0442\u0430",Object(D.jsx)("input",{type:"email",name:"email",value:n,onChange:this.handleChange})]}),Object(D.jsxs)("label",{style:rt.label,children:["\u041f\u0430\u0440\u043e\u043b\u044c",Object(D.jsx)("input",{type:"password",name:"password",value:c,onChange:this.handleChange})]}),Object(D.jsx)("button",{type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})]})}}]),n}(c.Component),st=function(t){Object(et.a)(n,t);var e=Object(nt.a)(n);function n(){return Object(Y.a)(this,n),e.apply(this,arguments)}return Object(tt.a)(n,[{key:"render",value:function(){return Object(D.jsx)("div",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})}}]),n}(c.Component);var it,lt,ut,bt=Object(f.b)((function(t){return{items:u.getItems(t),filter:u.getFilter(t)}}),(function(t){return{formSubmitHandler:function(e){return t(q.addContacts(e))},getVisibleContacts:function(e){return t(q.filterContacts(e))},deleteContacts:function(e){return t(q.deleteContacts(e))}}}))((function(t){return t.formSubmitHandler,t.getVisibleContacts,t.deleteContacts,Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(G,{}),Object(D.jsxs)(J.c,{children:[Object(D.jsx)(J.a,{exact:!0,path:"/goit-react-hw-08-phonebook/register",component:ot}),Object(D.jsx)(J.a,{exact:!0,path:"/goit-react-hw-08-phonebook/login",component:at}),Object(D.jsx)(J.a,{exact:!0,path:"/goit-react-hw-08-phonebook/contacts",component:st}),Object(D.jsxs)(J.a,{path:"/goit-react-hw-08-phonebook",children:[Object(D.jsx)("h1",{children:"Phonebook"}),Object(D.jsx)(B,{}),Object(D.jsx)(H,{}),Object(D.jsx)("h2",{children:"Contacts"}),Object(D.jsx)(z,{})]})]})]})})),dt=n(44),jt=n(8),ht=Object(C.c)([],(it={},Object(U.a)(it,q.fetchContactsSuccess,(function(t,e){return e.payload})),Object(U.a)(it,q.addContactSuccess,(function(t,e){var n=e.payload;return[].concat(Object(dt.a)(t),[n])})),Object(U.a)(it,q.deleteContactSuccess,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),it)),ft=Object(C.c)(!1,(lt={},Object(U.a)(lt,q.fetchContactsRequest,(function(){return!0})),Object(U.a)(lt,q.fetchContactsSuccess,(function(){return!1})),Object(U.a)(lt,q.fetchContactsError,(function(){return!1})),Object(U.a)(lt,q.addContactRequest,(function(){return!0})),Object(U.a)(lt,q.addContactSuccess,(function(){return!1})),Object(U.a)(lt,q.addContactError,(function(){return!1})),Object(U.a)(lt,q.deleteContactRequest,(function(){return!0})),Object(U.a)(lt,q.deleteContactSuccess,(function(){return!1})),Object(U.a)(lt,q.deleteContactError,(function(){return!1})),lt)),Ot=Object(C.c)(null,(ut={},Object(U.a)(ut,q.fetchContactsRequest,(function(){return null})),Object(U.a)(ut,q.fetchContactsError,(function(){return null})),ut)),mt=Object(C.c)("",Object(U.a)({},q.changeFilterContacts,(function(t,e){return e.payload}))),pt=Object(jt.b)({items:Object(jt.b)({entities:ht,isLoading:ft,error:Ot}),filter:mt}),Ct=Object(C.a)({reducer:{contacts:pt}});console.log(Ct),console.log(Ct.getState()),o.a.render(Object(D.jsx)(a.a.StrictMode,{children:Object(D.jsx)(f.a,{store:Ct,children:Object(D.jsx)(s.a,{children:Object(D.jsx)(bt,{})})})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.e4d99a92.chunk.js.map