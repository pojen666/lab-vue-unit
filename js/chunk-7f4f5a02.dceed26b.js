(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f4f5a02"],{"057f":function(t,e,r){var n=r("fc6a"),i=r("241c").f,o={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return i(t)}catch(e){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==o.call(t)?u(t):i(n(t))}},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("d3b7");function n(t,e,r,n,i,o,c){try{var u=t[o](c),a=u.value}catch(s){return void r(s)}u.done?e(a):Promise.resolve(a).then(n,i)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(i,o){var c=t.apply(e,r);function u(t){n(c,i,o,u,a,"next",t)}function a(t){n(c,i,o,u,a,"throw",t)}u(void 0)}))}}},"1dde":function(t,e,r){var n=r("d039"),i=r("b622"),o=r("2d00"),c=i("species");t.exports=function(t){return o>=51||!n((function(){var e=[],r=e.constructor={};return r[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2532:function(t,e,r){"use strict";var n=r("23e7"),i=r("5a34"),o=r("1d80"),c=r("ab13");n({target:"String",proto:!0,forced:!c("includes")},{includes:function(t){return!!~String(o(this)).indexOf(i(t),arguments.length>1?arguments[1]:void 0)}})},"2d16":function(t,e,r){},"44e7":function(t,e,r){var n=r("861d"),i=r("c6b6"),o=r("b622"),c=o("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[c])?!!e:"RegExp"==i(t))}},"4de4":function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").filter,o=r("1dde"),c=o("filter");n({target:"Array",proto:!0,forced:!c},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"5a34":function(t,e,r){var n=r("44e7");t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},"65f0":function(t,e,r){var n=r("861d"),i=r("e8b5"),o=r("b622"),c=o("species");t.exports=function(t,e){var r;return i(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?n(r)&&(r=r[c],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"746f":function(t,e,r){var n=r("428f"),i=r("5135"),o=r("e538"),c=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||c(e,t,{value:o.f(t)})}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),o=r("d066"),c=r("c430"),u=r("83ab"),a=r("4930"),s=r("fdbf"),f=r("d039"),l=r("5135"),d=r("e8b5"),p=r("861d"),v=r("825a"),h=r("7b0b"),y=r("fc6a"),b=r("c04e"),m=r("5c6c"),g=r("7c73"),w=r("df75"),S=r("241c"),x=r("057f"),O=r("7418"),k=r("06cf"),j=r("9bf2"),P=r("d1e7"),C=r("9112"),q=r("6eeb"),$=r("5692"),_=r("f772"),A=r("d012"),E=r("90e3"),F=r("b622"),I=r("e538"),L=r("746f"),N=r("d44e"),J=r("69f3"),R=r("b727").forEach,T=_("hidden"),D="Symbol",K="prototype",M=F("toPrimitive"),W=J.set,B=J.getterFor(D),H=Object[K],Q=i.Symbol,U=o("JSON","stringify"),V=k.f,z=j.f,G=x.f,X=P.f,Y=$("symbols"),Z=$("op-symbols"),tt=$("string-to-symbol-registry"),et=$("symbol-to-string-registry"),rt=$("wks"),nt=i.QObject,it=!nt||!nt[K]||!nt[K].findChild,ot=u&&f((function(){return 7!=g(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=V(H,e);n&&delete H[e],z(t,e,r),n&&t!==H&&z(H,e,n)}:z,ct=function(t,e){var r=Y[t]=g(Q[K]);return W(r,{type:D,tag:t,description:e}),u||(r.description=e),r},ut=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Q},at=function(t,e,r){t===H&&at(Z,e,r),v(t);var n=b(e,!0);return v(r),l(Y,n)?(r.enumerable?(l(t,T)&&t[T][n]&&(t[T][n]=!1),r=g(r,{enumerable:m(0,!1)})):(l(t,T)||z(t,T,m(1,{})),t[T][n]=!0),ot(t,n,r)):z(t,n,r)},st=function(t,e){v(t);var r=y(e),n=w(r).concat(vt(r));return R(n,(function(e){u&&!lt.call(r,e)||at(t,e,r[e])})),t},ft=function(t,e){return void 0===e?g(t):st(g(t),e)},lt=function(t){var e=b(t,!0),r=X.call(this,e);return!(this===H&&l(Y,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(Y,e)||l(this,T)&&this[T][e])||r)},dt=function(t,e){var r=y(t),n=b(e,!0);if(r!==H||!l(Y,n)||l(Z,n)){var i=V(r,n);return!i||!l(Y,n)||l(r,T)&&r[T][n]||(i.enumerable=!0),i}},pt=function(t){var e=G(y(t)),r=[];return R(e,(function(t){l(Y,t)||l(A,t)||r.push(t)})),r},vt=function(t){var e=t===H,r=G(e?Z:y(t)),n=[];return R(r,(function(t){!l(Y,t)||e&&!l(H,t)||n.push(Y[t])})),n};if(a||(Q=function(){if(this instanceof Q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=E(t),r=function(t){this===H&&r.call(Z,t),l(this,T)&&l(this[T],e)&&(this[T][e]=!1),ot(this,e,m(1,t))};return u&&it&&ot(H,e,{configurable:!0,set:r}),ct(e,t)},q(Q[K],"toString",(function(){return B(this).tag})),q(Q,"withoutSetter",(function(t){return ct(E(t),t)})),P.f=lt,j.f=at,k.f=dt,S.f=x.f=pt,O.f=vt,I.f=function(t){return ct(F(t),t)},u&&(z(Q[K],"description",{configurable:!0,get:function(){return B(this).description}}),c||q(H,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:Q}),R(w(rt),(function(t){L(t)})),n({target:D,stat:!0,forced:!a},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=Q(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ut(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!a,sham:!u},{create:ft,defineProperty:at,defineProperties:st,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:pt,getOwnPropertySymbols:vt}),n({target:"Object",stat:!0,forced:f((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(h(t))}}),U){var ht=!a||f((function(){var t=Q();return"[null]"!=U([t])||"{}"!=U({a:t})||"{}"!=U(Object(t))}));n({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,r){var n,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(n=e,(p(e)||void 0!==t)&&!ut(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ut(e))return e}),i[1]=e,U.apply(null,i)}})}Q[K][M]||C(Q[K],M,Q[K].valueOf),N(Q,D),A[T]=!0},ab13:function(t,e,r){var n=r("b622"),i=n("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[i]=!1,"/./"[t](e)}catch(n){}}return!1}},b727:function(t,e,r){var n=r("0366"),i=r("44ad"),o=r("7b0b"),c=r("50c4"),u=r("65f0"),a=[].push,s=function(t){var e=1==t,r=2==t,s=3==t,f=4==t,l=6==t,d=7==t,p=5==t||l;return function(v,h,y,b){for(var m,g,w=o(v),S=i(w),x=n(h,y,3),O=c(S.length),k=0,j=b||u,P=e?j(v,O):r||d?j(v,0):void 0;O>k;k++)if((p||k in S)&&(m=S[k],g=x(m,k,w),t))if(e)P[k]=g;else if(g)switch(t){case 3:return!0;case 5:return m;case 6:return k;case 2:a.call(P,m)}else switch(t){case 4:return!1;case 7:a.call(P,m)}return l?-1:s||f?f:P}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterOut:s(7)}},caad:function(t,e,r){"use strict";var n=r("23e7"),i=r("4d64").includes,o=r("44d2");n({target:"Array",proto:!0},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},e01a:function(t,e,r){"use strict";var n=r("23e7"),i=r("83ab"),o=r("da84"),c=r("5135"),u=r("861d"),a=r("9bf2").f,s=r("e893"),f=o.Symbol;if(i&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};s(d,f);var p=d.prototype=f.prototype;p.constructor=d;var v=p.toString,h="Symbol(test)"==String(f("test")),y=/^Symbol\((.*)\)[^)]+$/;a(p,"description",{configurable:!0,get:function(){var t=u(this)?this.valueOf():this,e=v.call(t);if(c(l,t))return"";var r=h?e.slice(7,-1):e.replace(y,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},f4d1:function(t,e,r){"use strict";r("2d16")},f9bf:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("br"),r("div",{staticClass:"col-12"},[r("div",{staticClass:"col-12"},[r("auto-complete",{attrs:{placeholder:"請輸入關鍵字出現下拉選單後選擇",service:t.queryService,"query-function":t.queryService.getSomeFeatureData},on:{selectedId:t.selectedId}})],1),r("div",{staticClass:"col-12 text-light"},[t._v("回傳結果為: "),r("span",[t._v(t._s(t.no))])])])])},i=[],o=r("d4ec");function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t,e,r){return e&&c(t.prototype,e),r&&c(t,r),t}r("d3b7"),r("4de4"),r("caad"),r("2532"),r("a4d3"),r("e01a");var a=function t(e,r){Object(o["a"])(this,t),this.id=e,this.description=r},s=function(){function t(){Object(o["a"])(this,t)}return u(t,[{key:"getSomeFeatureData",value:function(t){var e=[new a("10","測試10"),new a("12","測試12"),new a("13","測試13"),new a("14","測試14"),new a("15","測試15"),new a("26","測試26"),new a("27","測試27"),new a("28","測試28")];return Promise.resolve({data:e.filter((function(e){return e.description.includes(t)}))})}}]),t}(),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],ref:"keywordInput",staticClass:"form-control w-100",attrs:{type:"search",placeholder:t.placeholder,"aria-label":"Search"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),r("div",{ref:"autoComplete",staticClass:"position-absolute list-group m-0 pr-0"},t._l(t.featureList,(function(e){return r("button",{key:e.id+e.description,staticClass:"list-group-item list-group-item-action",on:{click:function(r){return t.selectFeature(e)}}},[t._v(" "+t._s(e.description)+" ")])})),0),r("confirm-modal",{ref:"modal"})],1)},l=[],d=r("1da1"),p=(r("96cf"),function(t,e,r){return t.then((function(t){return t})).catch((function(t){return e(t)})).finally((function(){return r}))}),v=p,h=r("da16"),y={name:"AutoComplete",props:{service:{type:Object,require:!0},queryFunction:{type:Function,require:!0},placeholder:{type:String}},components:{confirmModal:h["a"]},data:function(){return{pending:!1,keyword:"",queryResult:void 0,featureList:[],selected:!1}},watch:{keyword:function(t){this.selected?(this.selected=!1,0===t.length&&(this.featureList=[])):(this.$emit("selectedId",void 0),t.length>0?this.queryKeywordSearch(t):this.featureList=[])}},methods:{queryKeywordSearch:function(t){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){var n,i,o,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(0!==t.length){r.next=3;break}return e.featureList=[],r.abrupt("return");case 3:if(e.pending){r.next=24;break}return e.pending=!0,r.next=7,v(e.queryFunction.call(e.service,t),(function(t){return e.$refs.modal.openModal(t)}));case 7:if(n=r.sent,e.pending=!1,void 0!==n){r.next=11;break}return r.abrupt("return");case 11:if(e.keyword!==t){r.next=22;break}e.featureList=n.data,i=e.$refs.keywordInput,o=i.offsetHeight,c=e.$refs.autoComplete,c.style.top=o+"px",c.style.left=i.offsetLeft+"px",c.style.position="absolute",c.style.width=i.offsetWidth+"px",r.next=24;break;case 22:return r.next=24,e.queryKeywordSearch(e.keyword);case 24:case"end":return r.stop()}}),r)})))()},selectFeature:function(t){this.$emit("selectedId",t.id),this.selected=!0,this.keyword=t.description,this.featureList=[]}}},b=y,m=(r("f4d1"),r("2877")),g=Object(m["a"])(b,f,l,!1,null,"50780fba",null),w=g.exports,S={name:"AutoCompleteView",data:function(){return{no:void 0,queryService:new s}},components:{autoComplete:w},methods:{selectedId:function(t){this.no=t}},created:function(){this.$store.dispatch("changeCurrentUnit","展示自動完成組件")}},x=S,O=Object(m["a"])(x,n,i,!1,null,"44ff9c08",null);e["default"]=O.exports}}]);
//# sourceMappingURL=chunk-7f4f5a02.dceed26b.js.map