(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{131:function(t,n,e){"use strict";e.r(n);var r=e(173),o=e(0),i=e.n(o),c=e(174),a=e(164),u=e(161),f=e(159);function s(){var t=Object(r.a)(["\n  img {\n    height: 150px;\n  }\n\n  > span {\n    position: absolute;\n    left: -9999px;\n  }\n"]);return s=function(){return t},t}function l(){var t=Object(r.a)(["\n  padding: 4rem 0;\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n\n  background-color: #eeeef6;\n\n  @media screen and (max-width: 966px) {\n    padding: 2rem;\n  }\n"]);return l=function(){return t},t}function p(){var t=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  > .button {\n    color: white;\n    border: 0;\n    background-color: var(--ifm-heading-color);\n    &:hover {\n      background-color: #a50d33;\n    }\n  }\n"]);return p=function(){return t},t}var b=c.a.div(p()),h=c.a.div(l()),v=c.a.h1(s());n.default=function(){var t=Object(f.a)().siteConfig,n=void 0===t?{}:t;return i.a.createElement(h,null,i.a.createElement("div",{className:"container"},i.a.createElement(v,{className:"hero__title"},i.a.createElement("img",{src:Object(u.a)("img/kimera-logo.svg"),alt:"Kimera logo"}),i.a.createElement("span",null,n.title)),i.a.createElement("p",{className:"hero__subtitle"},n.tagline),i.a.createElement(b,null,i.a.createElement(a.a,{className:"button button--lg",to:Object(u.a)("/docs/getting-started")},"Get Started"))))}},159:function(t,n,e){"use strict";var r=e(0),o=e(56);n.a=function(){return Object(r.useContext)(o.a)}},161:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));e(163);var r=e(159);function o(t){var n=(Object(r.a)().siteConfig||{}).baseUrl,e=void 0===n?"/":n;if(!t)return t;return/^(https?:|\/\/)/.test(t)?t:t.startsWith("/")?e+t.slice(1):e+t}},163:function(t,n,e){"use strict";var r=e(12),o=e(27),i=e(167),c="".startsWith;r(r.P+r.F*e(168)("startsWith"),"String",{startsWith:function(t){var n=i(this,t,"startsWith"),e=o(Math.min(arguments.length>1?arguments[1]:void 0,n.length)),r=String(t);return c?c.call(n,r,e):n.slice(e,e+r.length)===r}})},164:function(t,n,e){"use strict";e(53),e(163),e(181);var r=e(0),o=e.n(r),i=e(39),c=e(165),a=e(31),u=e.n(a),f=function(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(e[r[o]]=t[r[o]])}return e};n.a=function(t){var n,e=t.isNavLink,a=f(t,["isNavLink"]),s=a.to,l=a.href,p=s||l,b=Object(c.a)(p),h=Object(r.useRef)(!1),v=e?i.c:i.b,y=u.a.canUseIntersectionObserver;return Object(r.useEffect)((function(){return!y&&b&&window.docusaurus.prefetch(p),function(){y&&n&&n.disconnect()}}),[p,y,b]),p&&b&&!p.startsWith("#")?o.a.createElement(v,Object.assign({},a,{onMouseEnter:function(){h.current||(window.docusaurus.preload(p),h.current=!0)},innerRef:function(t){var e,r;y&&t&&b&&(e=t,r=function(){window.docusaurus.prefetch(p)},(n=new window.IntersectionObserver((function(t){t.forEach((function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(n.unobserve(e),n.disconnect(),r())}))}))).observe(e))},to:p})):o.a.createElement("a",Object.assign({},a,{href:p}))}},165:function(t,n,e){"use strict";function r(t){return/^\/(?!\/)/.test(t)}e.d(n,"a",(function(){return r}))},166:function(t,n,e){var r=e(80),o=e(55).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},167:function(t,n,e){var r=e(78),o=e(28);t.exports=function(t,n,e){if(r(n))throw TypeError("String#"+e+" doesn't accept regex!");return String(o(t))}},168:function(t,n,e){var r=e(3)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[r]=!1,!"/./"[t](n)}catch(o){}}return!0}},171:function(t,n,e){n.f=e(3)},172:function(t,n,e){var r=e(52),o=e(54),i=e(26),c=e(76),a=e(25),u=e(79),f=Object.getOwnPropertyDescriptor;n.f=e(10)?f:function(t,n){if(t=i(t),n=c(n,!0),u)try{return f(t,n)}catch(e){}if(a(t,n))return o(!r.f.call(t,n),t[n])}},175:function(t,n,e){var r=e(20);t.exports=Array.isArray||function(t){return"Array"==r(t)}},181:function(t,n,e){"use strict";var r=e(6),o=e(25),i=e(10),c=e(12),a=e(15),u=e(182).KEY,f=e(14),s=e(42),l=e(43),p=e(40),b=e(3),h=e(171),v=e(183),y=e(184),g=e(175),m=e(8),d=e(13),O=e(29),w=e(26),S=e(76),j=e(54),E=e(82),x=e(185),P=e(172),N=e(77),k=e(24),F=e(19),W=P.f,_=k.f,I=x.f,J=r.Symbol,C=r.JSON,A=C&&C.stringify,D=b("_hidden"),K=b("toPrimitive"),M={}.propertyIsEnumerable,T=s("symbol-registry"),R=s("symbols"),G=s("op-symbols"),L=Object.prototype,U="function"==typeof J&&!!N.f,Y=r.QObject,z=!Y||!Y.prototype||!Y.prototype.findChild,Q=i&&f((function(){return 7!=E(_({},"a",{get:function(){return _(this,"a",{value:7}).a}})).a}))?function(t,n,e){var r=W(L,n);r&&delete L[n],_(t,n,e),r&&t!==L&&_(L,n,r)}:_,q=function(t){var n=R[t]=E(J.prototype);return n._k=t,n},B=U&&"symbol"==typeof J.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof J},H=function(t,n,e){return t===L&&H(G,n,e),m(t),n=S(n,!0),m(e),o(R,n)?(e.enumerable?(o(t,D)&&t[D][n]&&(t[D][n]=!1),e=E(e,{enumerable:j(0,!1)})):(o(t,D)||_(t,D,j(1,{})),t[D][n]=!0),Q(t,n,e)):_(t,n,e)},V=function(t,n){m(t);for(var e,r=y(n=w(n)),o=0,i=r.length;i>o;)H(t,e=r[o++],n[e]);return t},X=function(t){var n=M.call(this,t=S(t,!0));return!(this===L&&o(R,t)&&!o(G,t))&&(!(n||!o(this,t)||!o(R,t)||o(this,D)&&this[D][t])||n)},Z=function(t,n){if(t=w(t),n=S(n,!0),t!==L||!o(R,n)||o(G,n)){var e=W(t,n);return!e||!o(R,n)||o(t,D)&&t[D][n]||(e.enumerable=!0),e}},$=function(t){for(var n,e=I(w(t)),r=[],i=0;e.length>i;)o(R,n=e[i++])||n==D||n==u||r.push(n);return r},tt=function(t){for(var n,e=t===L,r=I(e?G:w(t)),i=[],c=0;r.length>c;)!o(R,n=r[c++])||e&&!o(L,n)||i.push(R[n]);return i};U||(a((J=function(){if(this instanceof J)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),n=function(e){this===L&&n.call(G,e),o(this,D)&&o(this[D],t)&&(this[D][t]=!1),Q(this,t,j(1,e))};return i&&z&&Q(L,t,{configurable:!0,set:n}),q(t)}).prototype,"toString",(function(){return this._k})),P.f=Z,k.f=H,e(166).f=x.f=$,e(52).f=X,N.f=tt,i&&!e(41)&&a(L,"propertyIsEnumerable",X,!0),h.f=function(t){return q(b(t))}),c(c.G+c.W+c.F*!U,{Symbol:J});for(var nt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;nt.length>et;)b(nt[et++]);for(var rt=F(b.store),ot=0;rt.length>ot;)v(rt[ot++]);c(c.S+c.F*!U,"Symbol",{for:function(t){return o(T,t+="")?T[t]:T[t]=J(t)},keyFor:function(t){if(!B(t))throw TypeError(t+" is not a symbol!");for(var n in T)if(T[n]===t)return n},useSetter:function(){z=!0},useSimple:function(){z=!1}}),c(c.S+c.F*!U,"Object",{create:function(t,n){return void 0===n?E(t):V(E(t),n)},defineProperty:H,defineProperties:V,getOwnPropertyDescriptor:Z,getOwnPropertyNames:$,getOwnPropertySymbols:tt});var it=f((function(){N.f(1)}));c(c.S+c.F*it,"Object",{getOwnPropertySymbols:function(t){return N.f(O(t))}}),C&&c(c.S+c.F*(!U||f((function(){var t=J();return"[null]"!=A([t])||"{}"!=A({a:t})||"{}"!=A(Object(t))}))),"JSON",{stringify:function(t){for(var n,e,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(e=n=r[1],(d(n)||void 0!==t)&&!B(t))return g(n)||(n=function(t,n){if("function"==typeof e&&(n=e.call(this,t,n)),!B(n))return n}),r[1]=n,A.apply(C,r)}}),J.prototype[K]||e(11)(J.prototype,K,J.prototype.valueOf),l(J,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},182:function(t,n,e){var r=e(40)("meta"),o=e(13),i=e(25),c=e(24).f,a=0,u=Object.isExtensible||function(){return!0},f=!e(14)((function(){return u(Object.preventExtensions({}))})),s=function(t){c(t,r,{value:{i:"O"+ ++a,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!u(t))return"F";if(!n)return"E";s(t)}return t[r].i},getWeak:function(t,n){if(!i(t,r)){if(!u(t))return!0;if(!n)return!1;s(t)}return t[r].w},onFreeze:function(t){return f&&l.NEED&&u(t)&&!i(t,r)&&s(t),t}}},183:function(t,n,e){var r=e(6),o=e(17),i=e(41),c=e(171),a=e(24).f;t.exports=function(t){var n=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||a(n,t,{value:c.f(t)})}},184:function(t,n,e){var r=e(19),o=e(77),i=e(52);t.exports=function(t){var n=r(t),e=o.f;if(e)for(var c,a=e(t),u=i.f,f=0;a.length>f;)u.call(t,c=a[f++])&&n.push(c);return n}},185:function(t,n,e){var r=e(26),o=e(166).f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(n){return c.slice()}}(t):o(r(t))}}}]);