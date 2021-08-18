(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{16:function(e,t,n){e.exports={input:"LoginView_input__1rP-7",container:"LoginView_container__3VLIR",row:"LoginView_row__JOQGZ",col25:"LoginView_col25__3MUvP","col-75":"LoginView_col-75__3__GG","col-25":"LoginView_col-25__1Sr_5",gradientButton:"LoginView_gradientButton__2yCIs",form:"LoginView_form__1zswJ"}},21:function(e,t,n){e.exports={input:"Form_input__1Hfvc",container:"Form_container__395f-",row:"Form_row__8AX5p",col25:"Form_col25__2hRNs","col-75":"Form_col-75__2On1R","col-25":"Form_col-25___YHKQ",label:"Form_label__2OhGT",gradientButton:"Form_gradientButton__2sOgT",form:"Form_form__3Qb-D"}},24:function(e,t,n){e.exports={input:"Filter_input__3Rlgc",container:"Filter_container__1BOqg",row:"Filter_row__AHvio",col25:"Filter_col25__22Yf_","col-75":"Filter_col-75__1iSOP","col-25":"Filter_col-25__3NZ9k",label:"Filter_label__RnXeK",gradientButton:"Filter_gradientButton__1bbuy",form:"Filter_form__2B-UA"}},25:function(e,t,n){e.exports={contacts:"PersoneEditor_contacts__3f3wa",span:"PersoneEditor_span__1lb5g",contactsLi:"PersoneEditor_contactsLi__31K-8",gradientButton:"PersoneEditor_gradientButton__3BSJA"}},35:function(e,t,n){e.exports={h2:"Navigation_h2__2wzoH",container:"Navigation_container__23cGA"}},38:function(e,t,n){e.exports={container:"UserMenu_container__3D097",gradientButton:"UserMenu_gradientButton__1GUOS"}},39:function(e,t,n){e.exports={navlinks:"AuthNav_navlinks__jBtpH",active:"AuthNav_active__3xtYr"}},50:function(e,t,n){e.exports={header:"AppBar_header__16l2q"}},57:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(28),s=n.n(r),o=n(18),i=n(48),u=(n(57),n(29)),l=function(e){return e.contacts.filter},j={getItems:function(e){return e.contacts.items},getFilter:l,getVisibleContacts:Object(u.a)([l,function(e){return e.contacts.items.entities}],(function(e,t){var n=e.toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))}))},d=n(2),b=n(4),O=Object(b.b)("todos/addContactRequest"),f=Object(b.b)("contacts/addContactSuccess"),h=Object(b.b)("todos/addContactError"),g=Object(b.b)("todos/deleteContactRequest"),p=Object(b.b)("todos/deleteContactSuccess"),_=Object(b.b)("todos/deleteContactError"),m=Object(b.b)("contacts/filter"),x=Object(b.b)("contacts/changeFilter"),v=Object(b.b)("contacts/fetchContactsRequest"),C=Object(b.b)("contacts/fetchContactsRequest"),w={fetchContactsError:Object(b.b)("contacts/fetchContactsRequest"),fetchContactsSuccess:C,fetchContactsRequest:v,changeFilterContacts:x,filterContacts:m,addContactRequest:O,addContactSuccess:f,addContactError:h,deleteContactRequest:g,deleteContactSuccess:p,deleteContactError:_},N=n(6),R={getIsLoggedIn:function(e){return e.auth.isLoggedIn},getIsAuthenticated:function(e){return e.auth.isAuthenticated},getUsername:function(e){return e.auth.user.name},getIsRefreshing:function(e){return e.auth.isRefreshing}},S=n(35),k=n.n(S),y=n(0);var F=function(){var e=Object(d.d)(R.getIsLoggedIn);return Object(y.jsx)("nav",{class:k.a.container,children:e&&Object(y.jsx)(o.b,{to:"/contacts",exact:!0,children:Object(y.jsx)("h2",{className:k.a.h2,children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0430\u044f \u043a\u043d\u0438\u0433\u0430 "})})})},L=n(14),I=n.n(L),V=n(22),B=n(13),E=n.n(B);E.a.defaults.baseURL="https://connections-api.herokuapp.com";var q=function(e){E.a.defaults.headers.common.Authorization="Bearer ".concat(e)},A=function(){E.a.defaults.headers.common.Authorization=""},U=Object(b.c)("auth/register",function(){var e=Object(V.a)(I.a.mark((function e(t){var n,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.post("/users/signup",t);case 3:return n=e.sent,c=n.data,q(c.token),e.abrupt("return",c);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),z=Object(b.c)("auth/login",function(){var e=Object(V.a)(I.a.mark((function e(t){var n,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.post("/users/login",t);case 3:return n=e.sent,c=n.data,q(c.token),e.abrupt("return",c);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),D={register:U,logOut:Object(b.c)("auth/logout",Object(V.a)(I.a.mark((function e(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.post("/users/logout");case 3:A(),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})))),logIn:z,getCurrentUser:Object(b.c)("users/current",function(){var e=Object(V.a)(I.a.mark((function e(t,n){var c,a,r,s;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=n.getState(),null!==(a=c.auth.token)){e.next=4;break}return e.abrupt("return",n.rejectWithValue());case 4:return q(a),e.prev=5,e.next=8,E.a.get("/users/current");case 8:return r=e.sent,s=r.data,console.log(s),e.abrupt("return",s);case 14:e.prev=14,e.t0=e.catch(5),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[5,14]])})));return function(t,n){return e.apply(this,arguments)}}())},J=n(38),P=n.n(J);var H=function(){var e=Object(d.c)(),t=Object(d.d)(R.getUsername);return Object(y.jsxs)("div",{className:P.a.container,children:[Object(y.jsxs)("span",{children:["\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c, ",t]}),Object(y.jsx)("button",{className:P.a.gradientButton,type:"button",onClick:function(){return e(D.logOut())},children:"\u0412\u044b\u0439\u0442\u0438"})]})},G=n(39),T=n.n(G);var Z=function(){return Object(y.jsxs)("div",{children:[Object(y.jsx)(o.b,{to:"/register",exact:!0,className:T.a.navlinks,children:" \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(y.jsx)(o.b,{to:"/login",className:T.a.navlinks,children:" \u041b\u043e\u0433\u0438\u043d "})]})},M=n(50),K=n.n(M),Q=function(){var e=Object(d.d)(R.getIsLoggedIn);return Object(y.jsxs)("header",{className:K.a.header,children:[Object(y.jsx)(F,{}),e?Object(y.jsx)(H,{}):Object(y.jsx)(Z,{})]})},Y=n(19),X=n(16),W=n.n(X);var $={onLogin:D.logIn},ee=Object(d.b)(null,$)((function(){var e=Object(d.c)(),t=Object(c.useState)(""),n=Object(Y.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(""),o=Object(Y.a)(s,2),i=o[0],u=o[1],l=function(e){var t=e.target,n=t.name,c=t.value;switch(n){case"email":return r(c);case"password":return u(c);default:return}};return Object(y.jsxs)("div",{className:W.a.container,children:[Object(y.jsx)("h3",{children:"\u0412\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0432\u043e\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"}),Object(y.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(D.logIn({email:a,password:i})),r(""),u("")},autoComplete:"off",className:W.a.form,children:[" ",Object(y.jsx)("div",{class:W.a.row,children:Object(y.jsx)("div",{class:W.a.col25,children:Object(y.jsxs)("label",{className:W.a.label,children:["\u041f\u043e\u0447\u0442\u0430",Object(y.jsx)("div",{class:"col-75",children:Object(y.jsx)("input",{className:W.a.input,type:"email",name:"email",value:a,onChange:l})})]})})}),Object(y.jsx)("div",{class:W.a.row,children:Object(y.jsx)("div",{class:W.a.col25,children:Object(y.jsxs)("label",{className:W.a.label,children:["\u041f\u0430\u0440\u043e\u043b\u044c",Object(y.jsx)("div",{class:"col-75",children:Object(y.jsx)("input",{className:W.a.input,type:"password",name:"password",value:i,onChange:l})})]})})}),Object(y.jsx)("button",{type:"submit",className:W.a.gradientButton,children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})),te=n(9),ne=n.n(te);var ce={onRegister:D.register},ae=Object(d.b)(null,ce)((function(){var e=Object(d.c)(),t=Object(c.useState)(""),n=Object(Y.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(""),o=Object(Y.a)(s,2),i=o[0],u=o[1],l=Object(c.useState)(""),j=Object(Y.a)(l,2),b=j[0],O=j[1],f=function(e){var t=e.target,n=t.name,c=t.value;switch(n){case"name":return r(c);case"email":return u(c);case"password":return O(c);default:return}};return Object(y.jsxs)("div",{className:ne.a.container,children:[Object(y.jsx)("h3",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0434\u043b\u044f \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"}),Object(y.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(D.register({name:a,email:i,password:b})),r(""),u(""),O("")},autoComplete:"off",className:ne.a.form,children:[Object(y.jsx)("div",{class:ne.a.row,children:Object(y.jsx)("div",{class:ne.a.col25,children:Object(y.jsxs)("label",{className:ne.a.label,children:["\u0418\u043c\u044f",Object(y.jsx)("div",{class:"col-75",children:Object(y.jsx)("input",{className:ne.a.input,type:"text",name:"name",value:a,onChange:f})})]})})}),Object(y.jsx)("div",{class:ne.a.row,children:Object(y.jsx)("div",{class:ne.a.col25,children:Object(y.jsxs)("label",{className:ne.a.label,children:["\u041f\u043e\u0447\u0442\u0430",Object(y.jsx)("div",{class:"col-75",children:Object(y.jsx)("input",{className:ne.a.input,type:"email",name:"email",value:i,onChange:f})})]})})}),Object(y.jsx)("div",{class:ne.a.row,children:Object(y.jsx)("div",{class:ne.a.col25,children:Object(y.jsxs)("label",{className:ne.a.label,children:["\u041f\u0430\u0440\u043e\u043b\u044c",Object(y.jsx)("div",{class:"col-75",children:Object(y.jsx)("input",{className:ne.a.input,type:"password",name:"password",value:b,onChange:f})})]})})}),Object(y.jsx)("button",{type:"submit",className:ne.a.gradientButton,children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})]})})),re=n(24),se=n.n(re),oe=Object(d.b)((function(e){return{value:j.getFilter(e)}}),(function(e){return{onChange:function(t){return e(w.changeFilterContacts(t.target.value))}}}))((function(e){var t=e.value,n=e.onChange;return Object(y.jsx)("div",{className:se.a.form,children:Object(y.jsx)("div",{class:se.a.row,children:Object(y.jsx)("div",{class:se.a.col25,children:Object(y.jsxs)("label",{className:se.a.label,children:[Object(y.jsx)("b",{children:"\u041f\u043e\u0438\u0441\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430 \u043f\u043e \u0438\u043c\u0435\u043d\u0438"}),Object(y.jsx)("div",{class:"col-75",children:Object(y.jsx)("input",{className:se.a.input,type:"Text",value:t,onChange:n})})]})})})})})),ie=n(90);E.a.defaults.baseURL="https://connections-api.herokuapp.com";var ue={fetchContacts:function(){return function(){var e=Object(V.a)(I.a.mark((function e(t){var n,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(w.fetchContactsRequest()),e.prev=1,e.next=4,E.a.get("/contacts");case 4:n=e.sent,c=n.data,t(w.fetchContactsSuccess(c)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(w.fetchContactsError(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},addContact:function(e){var t=e.name,n=e.number;return function(e){var c={id:Object(ie.a)(),name:t,number:n};e(w.addContactRequest()),E.a.post("/contacts",c).then((function(t){var n=t.data;return e(w.addContactSuccess(n))})).catch((function(t){return e(w.addContactError(t))}))}},deleteContact:function(e){return function(t){t(w.deleteContactRequest()),E.a.delete("/contacts/".concat(e)).then((function(){return t(w.deleteContactSuccess(e))})).catch((function(e){return t(w.deleteContactError(e))}))}}},le=n(21),je=n.n(le);var de=Object(d.b)((function(e){return{entities:j.getVisibleContacts(e)}}),(function(e){return{onSubmit:function(t){return e(ue.addContact(t))}}}))((function(e){var t=e.onSubmit,n=e.entities,a=Object(c.useState)(""),r=Object(Y.a)(a,2),s=r[0],o=r[1],i=Object(c.useState)(""),u=Object(Y.a)(i,2),l=u[0],j=u[1],d=Object(ie.a)(),b=Object(ie.a)(),O=function(){o(""),j("")};return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{className:je.a.container,children:[Object(y.jsx)("h3",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u043a \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0443\u044e \u043a\u043d\u0438\u0433\u0443"}),Object(y.jsxs)("form",{className:je.a.form,onSubmit:function(e){e.preventDefault(),n.find((function(e){return e.name===s}))?alert("".concat(s," is already on contacts")):(t({name:s,number:l}),O()),O()},children:[Object(y.jsx)("div",{class:je.a.row,children:Object(y.jsx)("div",{class:je.a.col25,children:Object(y.jsx)("label",{htmlFor:d,children:" \u0418\u043c\u044f "})})}),Object(y.jsx)("div",{class:"col-75",children:Object(y.jsx)("input",{className:je.a.input,id:d,onChange:function(e){var t=e.currentTarget.value;o(t)},value:s,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})}),Object(y.jsx)("label",{htmlFor:b,children:" \u041d\u043e\u043c\u0435\u0440 "}),Object(y.jsx)("input",{className:je.a.input,id:b,onChange:function(e){console.log(e);var t=e.currentTarget.value;j(t)},value:l,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(y.jsx)("button",{className:je.a.gradientButton,type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})})})),be=n(25),Oe=n.n(be);var fe=Object(d.b)((function(e){return{persons:j.getVisibleContacts(e)}}),(function(e){return{onDeleteContacts:function(t){return e(ue.deleteContact(t))}}}))((function(e){var t=e.persons,n=e.onDeleteContacts,a=Object(d.c)();return Object(c.useEffect)((function(){a(ue.fetchContacts())}),[a]),Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("div",{className:Oe.a.contacts,children:t.length?Object(y.jsx)("ul",{className:Oe.a.contacts,children:t.map((function(e){return Object(y.jsxs)("li",{className:Oe.a.contactsLi,children:[Object(y.jsxs)("span",{className:Oe.a.span,children:[e.name,":",e.number]}),Object(y.jsx)("button",{className:Oe.a.gradientButton,type:"button",onClick:function(){return n(e.id)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},e.id)}))}):Object(y.jsx)("p",{children:"\u0412 \u0432\u0430\u0448\u0435\u0439 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u043e\u0439 \u043a\u043d\u0438\u0433\u0435 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442 \u0437\u0430\u043f\u0438\u0441\u0435\u0439"})})})}));var he=function(){var e=Object(d.c)();return Object(c.useEffect)((function(){return e(ue.fetchContacts())}),[e]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(de,{}),Object(y.jsx)(oe,{}),Object(y.jsx)(fe,{})]})},ge=n(17),pe=n(31),_e=["children"];var me=function(e){var t=e.children,n=Object(pe.a)(e,_e),c=Object(d.d)(R.getIsLoggedIn);return Object(y.jsx)(N.b,Object(ge.a)(Object(ge.a)({},n),{},{children:c?t:Object(y.jsx)(N.a,{to:"/login"})}))},xe=["children","restricted"];var ve=function(e){var t=e.children,n=e.restricted,c=void 0!==n&&n,a=Object(pe.a)(e,xe),r=Object(d.d)(R.getIsLoggedIn)&&c;return Object(y.jsx)(N.b,Object(ge.a)(Object(ge.a)({},a),{},{children:r?Object(y.jsx)(N.a,{to:"/contacts"}):t}))};var Ce,we,Ne,Re,Se=Object(d.b)((function(e){return{items:j.getItems(e),filter:j.getFilter(e)}}),(function(e){return{formSubmitHandler:function(t){return e(w.addContacts(t))},getVisibleContacts:function(t){return e(w.filterContacts(t))},deleteContacts:function(t){return e(w.deleteContacts(t))}}}))((function(e){e.formSubmitHandler,e.getVisibleContacts,e.deleteContacts;var t=Object(d.c)(),n=Object(d.d)(R.getIsRefreshing);return Object(c.useEffect)((function(){t(D.getCurrentUser())}),[t]),!n&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(Q,{}),Object(y.jsxs)(N.d,{children:[Object(y.jsx)(ve,{exact:!0,path:"/register",restricted:!0,children:Object(y.jsx)(ae,{})}),Object(y.jsx)(ve,{path:"/login",restricted:!0,children:Object(y.jsx)(ee,{})}),Object(y.jsx)(me,{path:"/contacts",children:Object(y.jsx)(he,{})})]})]})})),ke=n(32),ye=n(20),Fe=n(51),Le=n.n(Fe),Ie=n(5),Ve=n(7),Be=Object(b.d)([],(Ce={},Object(Ie.a)(Ce,w.fetchContactsSuccess,(function(e,t){return t.payload})),Object(Ie.a)(Ce,w.addContactSuccess,(function(e,t){var n=t.payload;return[].concat(Object(ke.a)(e),[n])})),Object(Ie.a)(Ce,w.deleteContactSuccess,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),Ce)),Ee=Object(b.d)(!1,(we={},Object(Ie.a)(we,w.fetchContactsRequest,(function(){return!0})),Object(Ie.a)(we,w.fetchContactsSuccess,(function(){return!1})),Object(Ie.a)(we,w.fetchContactsError,(function(){return!1})),Object(Ie.a)(we,w.addContactRequest,(function(){return!0})),Object(Ie.a)(we,w.addContactSuccess,(function(){return!1})),Object(Ie.a)(we,w.addContactError,(function(){return!1})),Object(Ie.a)(we,w.deleteContactRequest,(function(){return!0})),Object(Ie.a)(we,w.deleteContactSuccess,(function(){return!1})),Object(Ie.a)(we,w.deleteContactError,(function(){return!1})),we)),qe=Object(b.d)(null,(Ne={},Object(Ie.a)(Ne,w.fetchContactsRequest,(function(){return null})),Object(Ie.a)(Ne,w.fetchContactsError,(function(){return null})),Ne)),Ae=Object(b.d)("",Object(Ie.a)({},w.changeFilterContacts,(function(e,t){return t.payload}))),Ue=Object(Ve.b)({items:Object(Ve.b)({entities:Be,isLoading:Ee,error:qe}),filter:Ae}),ze=Object(b.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,isRefreshing:!1},extraReducers:(Re={},Object(Ie.a)(Re,D.register.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(Ie.a)(Re,D.logIn.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(Ie.a)(Re,D.logOut.fulfilled,(function(e){e.user={name:null,email:null},e.token=null,e.isLoggedIn=!1})),Object(Ie.a)(Re,D.getCurrentUser.pending,(function(e,t){e.isRefreshing=!0})),Object(Ie.a)(Re,D.getCurrentUser.fulfilled,(function(e,t){e.user=Object(ge.a)({},t.payload),e.isLoggedIn=!0,e.isRefreshing=!1})),Object(Ie.a)(Re,D.getCurrentUser.rejected,(function(e,t){e.isRefreshing=!1})),Re)}).reducer,De=Object(ke.a)(Object(b.f)({serializableCheck:{ignoredActions:[ye.a,ye.f,ye.b,ye.c,ye.d,ye.e]}})),Je={key:"auth",storage:Le.a,whitelist:["token"]},Pe=Object(b.a)({reducer:{auth:Object(ye.g)(Je,ze),contacts:Ue},middleware:De,devTools:!1}),He={store:Pe,persistor:Object(ye.h)(Pe)};console.log(He.store),console.log(He.store.getState()),s.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(d.a,{store:He.store,children:Object(y.jsx)(i.a,{loading:null,persistor:He.persistor,children:Object(y.jsx)(o.a,{children:Object(y.jsx)(Se,{})})})})}),document.getElementById("root"))},9:function(e,t,n){e.exports={input:"RegisterView_input__2irEU",container:"RegisterView_container__1kug8",row:"RegisterView_row__2ojU6",col25:"RegisterView_col25__1jVBw","col-75":"RegisterView_col-75__1ZVAl","col-25":"RegisterView_col-25__1NV2D",label:"RegisterView_label__1NJpa",gradientButton:"RegisterView_gradientButton__1JcRr",form:"RegisterView_form__294VP"}}},[[89,1,2]]]);
//# sourceMappingURL=main.c2fbd1b1.chunk.js.map