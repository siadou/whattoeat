(function(t){function e(e){for(var n,s,i=e[0],c=e[1],l=e[2],f=0,p=[];f<i.length;f++)s=i[f],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,i=1;i<r.length;i++){var c=r[i];0!==o[c]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},o={app:0},a=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("64a9"),o=r.n(n);o.a},"05b2":function(t,e,r){},"10c4":function(t,e,r){t.exports=r.p+"img/food-3.71060ad5.svg"},1733:function(t,e,r){t.exports=r.p+"img/decorate.d775af18.svg"},"19fd":function(t,e,r){t.exports=r.p+"img/food-1.d6166614.svg"},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("HelloWorld")],1)},a=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("h1",[t._v("今天吃什么")]),r("div",[r("div",{staticClass:"food"},[r("img",{attrs:{src:t.food1}}),r("img",{attrs:{src:t.food2}}),r("img",{attrs:{src:t.food3}})]),t.isStart?r("div",{staticClass:"food-list"},t._l(t.result,(function(e){return r("div",{key:e.key,staticClass:"item"},[r("div",{staticClass:"label"},[r("img",{attrs:{src:t.decorate}}),t._v(t._s(e.label)),r("img",{attrs:{src:t.decorate}})]),r("div",{staticClass:"content"},[t._v(t._s(e.value))])])})),0):t._e(),r("button",{on:{click:t.start}},[t.isStart?r("span",[t._v("再 来")]):r("span",[t._v("开 始")])])])])},i=[],c=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),l={vegetable:["油麦菜","白菜","娃娃菜","卷心菜","茄子","蒜苗","芸豆","豇豆","土豆","金针菇","黄瓜","芹菜","菠菜","番茄","秋葵","菜花","青椒"],staple:["米饭","面条","红薯","馒头"],seafood:["皮皮虾","大虾","小黄鱼","带鱼"]},u=r("19fd"),f=r.n(u),p=r("e249"),d=r.n(p),v=r("10c4"),b=r.n(v),g=r("1733"),y=r.n(g);function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function O(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(r,!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var m=[{label:"蔬菜",key:"vegetable"},{label:"海鲜",key:"seafood"},{label:"主食",key:"staple"}],j={name:"HelloWorld",props:{msg:String},data:function(){return{isStart:!1,result:[],food1:f.a,food2:d.a,food3:b.a,decorate:y.a}},methods:{start:function(){this.isStart=!0;var t=[];m.forEach((function(e,r){var n=l[e.key].length,o=l[e.key][Math.floor(Math.random()*n)];t.push(O({},e,{value:o}))})),this.result=t}}},_=j,w=(r("6865"),r("2877")),P=Object(w["a"])(_,s,i,!1,null,"08ce5114",null),k=P.exports,x=(r("b277"),{name:"app",components:{HelloWorld:k}}),S=x,C=(r("034f"),Object(w["a"])(S,o,a,!1,null,null,null)),M=C.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(M)}}).$mount("#app")},"64a9":function(t,e,r){},6865:function(t,e,r){"use strict";var n=r("05b2"),o=r.n(n);o.a},b277:function(t,e,r){},e249:function(t,e,r){t.exports=r.p+"img/food-2.d0761bae.svg"}});
//# sourceMappingURL=app.e2e4d99c.js.map