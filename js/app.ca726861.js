(function(t){function e(e){for(var s,r,n=e[0],p=e[1],i=e[2],h=0,c=[];h<n.length;h++)r=n[h],o[r]&&c.push(o[r][0]),o[r]=0;for(s in p)Object.prototype.hasOwnProperty.call(p,s)&&(t[s]=p[s]);u&&u(e);while(c.length)c.shift()();return l.push.apply(l,i||[]),a()}function a(){for(var t,e=0;e<l.length;e++){for(var a=l[e],s=!0,n=1;n<a.length;n++){var p=a[n];0!==o[p]&&(s=!1)}s&&(l.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},o={app:0},l=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],p=n.push.bind(n);n.push=e,n=n.slice();for(var i=0;i<n.length;i++)e(n[i]);var u=p;l.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"pictures"},[t._l(t.letterPhotos,function(e,s){return[t.isLetterSelected(s)?a("div",{key:s,staticClass:"pictures--selected",style:t.backgroundImageStyle(e.url)}):t._e()]})],2),a("ul",{staticClass:"alphabet"},t._l(t.alphabet,function(e){return a("li",{key:e},[a("button",{staticClass:"alphabet__letter",class:{"alphabet__letter--selected":t.isLetterSelected(e)},on:{mousedown:function(a){t.select(e)}}},[t._v("\n        "+t._s(e.toUpperCase())+"\n      ")])])}),0),a("span",{staticClass:"alphabet__word"},[t._v(t._s(t.wordForLetter))])])},l=[],r=(a("6762"),a("28a5"),{0:{url:"https://images.unsplash.com/photo-1488039505046-4b0d8dd5d416",title:"Zero"},1:{url:"https://images.unsplash.com/photo-1528752539854-fbf68419b935",title:"One"},2:{url:"https://images.unsplash.com/photo-1535827503360-d0ff681564f0",title:"Two"},3:{url:"https://images.unsplash.com/photo-1530051528223-01d6a86a154c",title:"Three"},4:{url:"https://images.unsplash.com/photo-1523286877159-d9636545890c",title:"Four"},5:{url:"https://images.unsplash.com/photo-1471094114392-6a87b3e78ee0",title:"Five"},6:{url:"https://images.unsplash.com/photo-1475720295950-2444738862a4",title:"Six"},7:{url:"https://images.unsplash.com/photo-1543893490-4deb3431e479",title:"Seven"},8:{url:"https://images.unsplash.com/photo-1533477618151-b517c954ebaa",title:"Eight"},9:{url:"https://images.unsplash.com/photo-1522447984233-657d56c465d8",title:"Nine"},a:{url:"https://images.unsplash.com/photo-1541600708691-a6e4123f8baa",title:"Apple"},b:{url:"https://images.unsplash.com/photo-1541600708691-a6e4123f8baa",title:"B"},c:{url:"https://images.unsplash.com/photo-1541600708691-a6e4123f8baa",title:"C"},d:{url:"https://images.unsplash.com/photo-1541600708691-a6e4123f8baa",title:"D"},e:{url:"https://images.unsplash.com/photo-1541600708691-a6e4123f8baa",title:"E"},f:{url:"https://images.unsplash.com/photo-1541600708691-a6e4123f8baa",title:"F"},g:{url:"https://images.unsplash.com/photo-1541600708691-a6e4123f8baa",title:"G"},h:{url:"https://images.unsplash.com/photo-1541600708691-a6e4123f8baa",title:"H"},i:{url:"https://images.unsplash.com/photo-1541600708691-a6e4123f8baa",title:"I"},j:{url:"https://images.unsplash.com/photo-1541600708691-a6e4123f8baa",title:"J"},k:{url:"https://images.unsplash.com/photo-1541600708691-a6e4123f8baa",title:"K"},l:{url:"https://images.unsplash.com/photo-1541600708691-a6e4123f8baa",title:"L"},m:{url:"https://images.unsplash.com/photo-1522030299830-16b8d3d049fe",title:"Moon"},n:{url:"https://images.unsplash.com/photo-1541600708691-a6e4123f8baa",title:"N"},o:{url:"https://images.unsplash.com/photo-1541600708691-a6e4123f8baa",title:"O"},p:{url:"https://images.unsplash.com/photo-1541600708691-a6e4123f8baa",title:"p"},q:{url:"https://images.unsplash.com/photo-1541600708691-a6e4123f8baa",title:"Q"},r:{url:"https://images.unsplash.com/photo-1516849841032-87cbac4d88f7",title:"Rocket"},s:{url:"https://images.unsplash.com/photo-1541600708691-a6e4123f8baa",title:"S"},t:{url:"https://images.unsplash.com/photo-1541600708691-a6e4123f8baa",title:"T"},u:{url:"https://images.unsplash.com/photo-1541600708691-a6e4123f8baa",title:"U"},v:{url:"https://images.unsplash.com/photo-1541600708691-a6e4123f8baa",title:"V"},w:{url:"https://images.unsplash.com/photo-1541600708691-a6e4123f8baa",title:"w"},x:{url:"https://images.unsplash.com/photo-1541600708691-a6e4123f8baa",title:"X"},y:{url:"https://images.unsplash.com/photo-1541600708691-a6e4123f8baa",title:"Y"},z:{url:"https://images.unsplash.com/photo-1541600708691-a6e4123f8baa",title:"Z"}}),n="abcdefghijklmnopqrstuvwxyz0123456789".split(""),p={data:function(){return{letterPhotos:r,letterSelected:"a",alphabet:n}},created:function(){window.addEventListener("keydown",this.onKeyPress)},methods:{onKeyPress:function(t){var e=t.key;n.includes(e)&&this.select(e)},select:function(t){this.letterSelected=t},isLetterSelected:function(t){return t===this.letterSelected},backgroundImageStyle:function(t){return"background-image: url(".concat(t,")")}},computed:{letterImageUrl:function(){return r[this.letterSelected]?r[this.letterSelected].url:""},wordForLetter:function(){return r[this.letterSelected]?r[this.letterSelected].title:""}}},i=p,u=a("2877"),h=Object(u["a"])(i,o,l,!1,null,null,null),c=h.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(c)}}).$mount("#app")}});
//# sourceMappingURL=app.ca726861.js.map