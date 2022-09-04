(this["webpackJsonpui-products"]=this["webpackJsonpui-products"]||[]).push([[0],{41:function(e,t,n){e.exports=n(99)},46:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(4),c=n.n(l),u=(n(46),n(47),n(48),n(49),n(39)),i=n(7),o=n(30),d=n(31),s=n(11),m=n.n(s),f=function(){function e(){Object(o.a)(this,e),this.baseUrl="https://apijuanmatute.herokuapp.com/api/products/"}return Object(d.a)(e,[{key:"create",value:function(e){return m.a.post(this.baseUrl+"product/",e).then((function(e){return e.data}))}},{key:"readAll",value:function(){return m.a.get(this.baseUrl).then((function(e){return e.data}))}},{key:"update",value:function(e){return m.a.put(this.baseUrl+"product/"+e._id,e).then((function(e){return e.data}))}},{key:"delete",value:function(e){return m.a.delete(this.baseUrl+"product/"+e).then((function(e){return e.data}))}}]),e}(),p=Object(a.createContext)(),b=function(e){var t=new f,n=Object(a.useState)([]),l=Object(i.a)(n,2),c=l[0],o=l[1],d=Object(a.useState)(null),s=Object(i.a)(d,2),m=s[0],b=s[1];Object(a.useEffect)((function(){t.readAll().then((function(e){return o(e)}))}),[]);return r.a.createElement(p.Provider,{value:{createProduct:function(e){t.create(e).then((function(e){return o([].concat(Object(u.a)(c),[e]))}))},deleteProduct:function(e){t.delete(e).then((function(){return o(c.filter((function(t){return t._id!==e})))}))},findProduct:function(e){var t=c.find((function(t){return t._id===e}));b(t)},updateProduct:function(e){t.update(e).then((function(t){return o(c.map((function(n){return n._id===e._id?t:e})))})),b(null)},editProduct:m,products:c}},e.children)},h=n(32),v=n(33),E=n(12),g=n(10),O=n(15),y=n(34),j=n(35),P=n(36),C=n(37),x=n(38),_=function(e){var t=e.isVisible,n=e.setIsVisible,l=Object(a.useContext)(p),c=l.createProduct,u=l.deleteProduct,o=l.editProduct,d=l.updateProduct,s={_id:null,name:"",price:0,expiry_date:null},m=Object(a.useState)(s),f=Object(i.a)(m,2),b=f[0],h=f[1];Object(a.useEffect)((function(){o&&h(o)}),[o]);var v=function(e,t){h(Object(y.a)({},b,Object(O.a)({},t,e))),console.log(b)},E=r.a.createElement("div",{className:"ui-dialog-buttonpane p-clearfix"},r.a.createElement(g.Button,{label:"Regresar",icon:"pi pi-trash",className:"p-button-danger",onClick:function(){o&&(u(b._id),h(s)),n(!1)}}),r.a.createElement(g.Button,{label:"Guardar",icon:"pi pi-save",onClick:function(){o?d(b):c(b),h(s),n(!1)}}));return r.a.createElement("div",null,r.a.createElement(j.Dialog,{visible:t,modal:!0,style:{width:"420px"},contentStyle:{overflow:"visible"},header:"Detalles del Producto",onHide:function(){return n(!1),void h(s)},footer:E},r.a.createElement("div",{className:"p-grid p-fluid"},r.a.createElement("br",null),r.a.createElement("div",{className:"p-float-label"},r.a.createElement(P.InputText,{value:b.name,onChange:function(e){return v(e.target.value.trim(),"name")}}),r.a.createElement("label",null,"Nombre:")),r.a.createElement("br",null),r.a.createElement("div",{className:"p-float-label"},r.a.createElement(C.InputNumber,{value:b.price,onChange:function(e){return v(e.target.value,"price")},mode:"currency",currency:"USD"}),r.a.createElement("label",null,"Precio:")),r.a.createElement("br",null),r.a.createElement("div",{className:"p-float-label"},r.a.createElement(x.Calendar,{value:b.expiry_date&&new Date(b.expiry_date+" "),onChange:function(e){return v(e.target.value.toISOString().substring(0,10),"expiry_date")},dateFormat:"yy-mm-dd"}),r.a.createElement("label",null,"Fecha de caducidad:")),r.a.createElement("br",null))))},w=function(){var e=Object(a.useContext)(p),t=e.products,n=e.findProduct,l=Object(a.useState)(!1),c=Object(i.a)(l,2),u=c[0],o=c[1],d=r.a.createElement("div",{className:"p-clearfix",style:{width:"100%"}},r.a.createElement(g.Button,{className:"p-button-success",style:{float:"left"},icon:"pi pi-plus",label:"Agregar Producto",onClick:function(){return o(!0)}}));return r.a.createElement("div",null,r.a.createElement(h.Panel,{header:"LISTA DE PRODUCTOS",style:{textAlign:"center"}},r.a.createElement(v.DataTable,{value:t,selectionMode:"single",onSelectionChange:function(e){return t=e.value._id,n(t),void o(!0);var t},footer:d},r.a.createElement(E.Column,{field:"_id",header:"ID"}),r.a.createElement(E.Column,{field:"name",header:"Nombre del Producto"}),r.a.createElement(E.Column,{field:"price",header:"Precio"}),r.a.createElement(E.Column,{field:"expiry_date",header:"Fecha de Caducidad"}))),r.a.createElement(_,{isVisible:u,setIsVisible:o}))};var k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null,r.a.createElement(w,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.7809aa20.chunk.js.map