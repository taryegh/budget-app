(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(8),r=a.n(c),l=(a(16),a(9)),s=a(1),m=a(2),h=a(4),u=a(3),d=a(6),o=a(5),p=(a(17),function(e){function t(){return Object(s.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"header"},i.a.createElement("h1",null,"Budget Manager"),i.a.createElement("h2",null,"$ ",this.props.count))}}]),t}(i.a.Component)),b=function(e){function t(){return Object(s.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("form",{onSubmit:this.props.handleSubmitAndCalc,action:""},i.a.createElement("input",{className:"inp",type:"text",placeholder:"Add name",onChange:this.props.handleChangeName,value:this.props.itemName}),i.a.createElement("input",{className:"inp inp-price",type:"text",placeholder:"Add $",onChange:this.props.handleChangePrice,value:this.props.itemPrice}),i.a.createElement("button",{className:"btn"},"Add")))}}]),t}(i.a.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return this.props.name?i.a.createElement("li",{className:"budg-item"},i.a.createElement("h4",{className:"budg-inner"},i.a.createElement("span",{className:"item-name"},this.props.name),i.a.createElement("span",{className:"item-price"},this.props.price),i.a.createElement("button",{className:"btn btn-del",onClick:this.props.handleDelete},"X"))):i.a.createElement("div",null)}}]),t}(i.a.Component),N=function(e){function t(){return Object(s.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("ul",{className:"budg-list"},i.a.createElement("h3",{className:"list-head"},i.a.createElement("span",{className:"list-name"},"Name"),i.a.createElement("span",{className:"list-price"},"Price")),this.props.items.map(function(t){return i.a.createElement(f,{key:t.id,name:t.itemName,price:t.itemPrice,handleDelete:function(){return e.props.handleDelete(t.id)}})}),i.a.createElement(f,null))}}]),t}(i.a.Component),j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={items:[],id:1+Math.random(),itemName:"",itemPrice:"",count:0},a.handleChangeName=a.handleChangeName.bind(Object(d.a)(a)),a.handleChangePrice=a.handleChangePrice.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.handleDelete=a.handleDelete.bind(Object(d.a)(a)),a.handleSubmitAndCalc=a.handleSubmitAndCalc.bind(Object(d.a)(a)),a}return Object(o.a)(t,e),Object(m.a)(t,[{key:"handleChangeName",value:function(e){this.setState({itemName:e.target.value})}},{key:"handleChangePrice",value:function(e){this.setState({itemPrice:e.target.value})}},{key:"handleDelete",value:function(e){var t=this.state.items.filter(function(t){return t.id!==e});this.setState({items:t})}},{key:"handleSubmit",value:function(){if(this.state.itemName&&this.state.itemPrice&&!isNaN(this.state.itemPrice)){var e={id:this.state.id,itemName:this.state.itemName,itemPrice:this.state.itemPrice},t=[].concat(Object(l.a)(this.state.items),[e]);this.setState({items:t,id:1+Math.random(),itemName:"",itemPrice:""})}}},{key:"calcBudget",value:function(){for(var e=this.state.items.map(function(e){return+e.itemPrice}),t=0,a=0;a<e.length;a++)t+=e[a];this.setState({count:t})}},{key:"handleSubmitAndCalc",value:function(e){e.preventDefault(),this.handleSubmit(),this.calcBudget()}},{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement(p,{count:this.state.count}),i.a.createElement(b,{itemName:this.state.itemName,itemPrice:this.state.itemPrice,handleChangeName:this.handleChangeName,handleChangePrice:this.handleChangePrice,handleSubmitAndCalc:this.handleSubmitAndCalc}),i.a.createElement(N,{items:this.state.items,handleDelete:this.handleDelete}))}}]),t}(i.a.Component);r.a.render(i.a.createElement(j,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.6be20aac.chunk.js.map