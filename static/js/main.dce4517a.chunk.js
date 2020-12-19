(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={contactList:"ContactList_contactList__asz8h",contactList__item:"ContactList_contactList__item__3N7Ip",contactList__text:"ContactList_contactList__text__2e6Qz",contactList__name:"ContactList_contactList__name__dOVlc",contactList__number:"ContactList_contactList__number__3bGL5",contactList__deleteBtn:"ContactList_contactList__deleteBtn__14RV_"}},11:function(t,e,n){t.exports={filter:"Filter_filter__2gueb",filter__input:"Filter_filter__input__1Ql_L"}},2:function(t,e,n){t.exports={form:"ContactForm_form__1Eh9N",form__label:"ContactForm_form__label__5FxsN",form__input:"ContactForm_form__input__gahql",form__btn:"ContactForm_form__btn__2fMU_"}},21:function(t,e,n){},3:function(t,e,n){t.exports={contactList__text:"Contact_contactList__text__jhRFm",contactList__name:"Contact_contactList__name__2_q5F",contactList__number:"Contact_contactList__number__WP0Ze",contactList__deleteBtn:"Contact_contactList__deleteBtn__2Sm5i"}},30:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),o=n.n(c),s=n(12),r=n.n(s),i=(n(21),n(15)),_=n(5),l=n(6),u=n(8),m=n(7),b=n(13),h=n.n(b),f=(n(30),n(10)),d=n.n(f),j=n(3),p=n.n(j),x=function(t){var e=t.name,n=t.number,c=t.onDelete;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:p.a.contactList__text,children:[Object(a.jsx)("p",{className:p.a.contactList__name,children:e}),Object(a.jsxs)("p",{className:p.a.contactList__number,children:["Tel: ",n]})]}),Object(a.jsx)("button",{className:p.a.contactList__deleteBtn,onClick:c,children:"Delete"})]})},C=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsx)("ul",{className:d.a.contactList,children:e.map((function(t){var e=t.id,c=t.name,o=t.number;return Object(a.jsx)("li",{className:d.a.contactList__item,children:Object(a.jsx)(x,{name:c,number:o,onDelete:function(){n(e)}})},e)}))})},O=n(14),L=n(2),v=n.n(L),g=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(_.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(O.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onAdd(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.name,e=this.state.number;return Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:v.a.form,children:[Object(a.jsxs)("label",{className:v.a.form__label,children:["Name",Object(a.jsx)("input",{className:v.a.form__input,type:"text",name:"name",value:t,onChange:this.handleChange})]}),Object(a.jsxs)("label",{className:v.a.form__label,children:["Number",Object(a.jsx)("input",{className:v.a.form__input,type:"text",value:e,name:"number",onChange:this.handleChange})]}),Object(a.jsx)("button",{className:v.a.form__btn,type:"submit",children:"Add"})]})}}]),n}(c.Component),N=n(11),y=n.n(N),F=function(t){var e=t.value,n=t.onChange;return Object(a.jsxs)("label",{className:y.a.filter,children:["Find a contact",Object(a.jsx)("input",{type:"text",value:e,onChange:n,className:y.a.filter__input})]})},S=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(_.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.addContact=function(e){var n=e.name,a=e.number,c={id:h.a.generate(),name:n,number:a};t.state.contacts.find((function(t){return t.name===n}))?alert("".concat(n," is already in the list")):t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(i.a)(e))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getFilteredContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){console.log("Component updated!");var n=this.state.contacts;n!==e.contacts&&(console.log("\u041e\u0431\u043d\u043e\u0432\u0438\u043b\u0438\u0441\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"),localStorage.setItem("contacts",JSON.stringify(n)))}},{key:"render",value:function(){var t=this.state.filter,e=this.getFilteredContacts();return Object(a.jsxs)("div",{className:"main_container",children:[Object(a.jsx)("h1",{className:"main_heading",children:"Phonebook"}),Object(a.jsx)(g,{onAdd:this.addContact}),Object(a.jsx)("h2",{className:"contacts_heading",children:"Contacts"}),Object(a.jsx)(F,{value:t,onChange:this.changeFilter}),Object(a.jsx)(C,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(c.Component);r.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(S,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.dce4517a.chunk.js.map