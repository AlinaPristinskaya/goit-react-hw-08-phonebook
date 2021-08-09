(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={form:"Form_form__3Opkj",input:"Form_input__3R10_",button:"Form_button__1n2_p"}},16:function(t,e,n){t.exports={stats:"PersoneEditor_stats__q4pP7",item:"PersoneEditor_item__1RBO7",button:"PersoneEditor_button__2lSCW"}},21:function(t,e,n){t.exports={label:"Filter_label__gdp9u"}},42:function(t,e,n){},72:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(14),o=n.n(a),s=n(35),i=(n(42),n(24)),u=n(73),l=n(13),b=n.n(l),d=n(8),j=n(3),f={addContacts:Object(j.b)("contacts/add",(function(t){return{payload:{id:Object(u.a)(),name:t.name,number:t.number}}})),deleteContacts:Object(j.b)("contacts/deleted"),filterContacts:Object(j.b)("contacts/filter"),changeFilterContacts:Object(j.b)("contacts/changeFilter"),fetchContactsRequest:Object(j.b)("contacts/fetchContactsRequest"),fetchContactsSuccess:Object(j.b)("contacts/fetchContactsSuccess"),fetchContactsError:Object(j.b)("contacts/fetchContactsError")},m=n(1);var h=Object(d.b)(null,(function(t){return{onSubmit:function(e){return t(f.addContacts(e))}}}))((function(t){var e=t.onSubmit,n=Object(c.useState)(""),r=Object(i.a)(n,2),a=r[0],o=r[1],s=Object(c.useState)(""),l=Object(i.a)(s,2),d=l[0],j=l[1],f=Object(u.a)(),h=Object(u.a)(),O=function(){o(""),j("")};return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("form",{className:b.a.form,onSubmit:function(t){t.preventDefault(),e({name:a,number:d}),O()},children:[Object(m.jsx)("label",{htmlFor:f,children:" Name "}),Object(m.jsx)("input",{className:b.a.input,id:f,onChange:function(t){var e=t.currentTarget.value;o(e)},value:a,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(m.jsx)("label",{htmlFor:h,children:" Number "}),Object(m.jsx)("input",{className:b.a.input,id:h,onChange:function(t){console.log(t);var e=t.currentTarget.value;j(e)},value:d,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(m.jsx)("button",{className:b.a.button,type:"submit",children:"Add contact"})]})})})),O=n(16),p=n.n(O),C=n(19),g=n.n(C),x=n(34),v=n(20),_=n.n(v);_.a.defaults.baseURL="http://localhost:3000/goit-react-hw-07-phonebook";var S=function(){return function(){var t=Object(x.a)(g.a.mark((function t(e){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:_.a.get("/contacts").then((function(t){var n=t.data;return e(f.fetchContactsSuccess(n))})).catch((function(t){return e(f.fetchContactsError(t))}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};var y=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))},F=Object(d.b)((function(t){var e=t.contacts,n=e.items.entities,c=e.filter;return{persons:y(n,c)}}),(function(t){return{onDeleteContacts:function(e){return t(f.deleteContacts(e))}}}))((function(t){var e=t.persons,n=t.onDeleteContacts,c=Object(d.c)();return console.log(c),console.log((function(){return c(S.fetchContacts())})),Object(m.jsx)("div",{children:e.length?Object(m.jsx)("ul",{className:p.a.stats,children:e.map((function(t){return Object(m.jsxs)("li",{className:p.a.item,children:[t.name,":",t.number,Object(m.jsx)("button",{className:p.a.button,type:"button",onClick:function(){return n(t.id)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},t.id)}))}):Object(m.jsx)("p",{children:"No entries in the phone book"})})})),N=n(21),k=n.n(N),E=Object(d.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onChange:function(e){return t(f.changeFilterContacts(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(m.jsxs)("label",{className:k.a.label,children:[Object(m.jsx)("b",{children:"\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u0438\u043c\u0435\u043d\u0438"}),Object(m.jsx)("input",{className:k.a.input,type:"Text",value:e,onChange:n})]})}));var w,R,q,A=Object(d.b)((function(t){return{items:t.contacts.items,filter:t.contacts.filter}}),(function(t){return{formSubmitHandler:function(e){return t(f.addContacts(e))},getVisibleContacts:function(e){return t(f.filterContacts(e))},deleteContacts:function(e){return t(f.deleteContacts(e))}}}))((function(t){return t.getVisibleContacts,t.formSubmitHandler,t.deleteContacts,Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsx)(h,{}),Object(m.jsx)(E,{}),Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsx)(F,{})]})})),P=n(9),z=n(36),L=n(6),B=Object(j.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(w={},Object(P.a)(w,f.fetchContactsSuccess,(function(t,e){return e.payload})),Object(P.a)(w,f.addContacts,(function(t,e){var n=e.payload;return t.find((function(t){return t.name===n.name}))?alert("".concat(n.name," is already on contacts")):[].concat(Object(z.a)(t),[n])})),Object(P.a)(w,f.deleteContacts,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),w)),D=Object(j.c)(!1,(R={},Object(P.a)(R,f.fetchContactsRequest,(function(){return!0})),Object(P.a)(R,f.fetchContactsError,(function(){return!0})),R)),H=Object(j.c)(null,(q={},Object(P.a)(q,f.fetchContactsRequest,(function(){return null})),Object(P.a)(q,f.fetchContactsError,(function(){return null})),q)),J=Object(j.c)("",Object(P.a)({},f.changeFilterContacts,(function(t,e){return e.payload}))),T=Object(L.b)({items:Object(L.b)({entities:B,isLoading:D,error:H}),filter:J}),Z=Object(j.a)({reducer:{contacts:T}});console.log(Z),console.log(Z.getState()),o.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(d.a,{store:Z,children:Object(m.jsx)(s.a,{children:Object(m.jsx)(A,{})})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.f0505247.chunk.js.map