(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(9),a=(n(0),n(178)),i={id:"enums",title:"Enums",sidebar_label:"Enums"},c={id:"enums",title:"Enums",description:"A Scenario has the highest priority you can provide to Kimera and it represents a frugal description of the `Query` type response tree. Assuming a part of our schema looks like this:",source:"@site/docs/enums.md",permalink:"/graphql-kimera/docs/enums",editUrl:"https://github.com/lola-tech/graphql-kimera/edit/master/website/docs/enums.md",sidebar_label:"Enums"},s=[],l={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A Scenario has the highest priority you can provide to Kimera and it represents a frugal description of the ",Object(a.b)("inlineCode",{parentName:"p"},"Query")," type response tree. Assuming a part of our schema looks like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"type Query {\n  countries: [Country]\n}\n\ntype Country {\n  id: ID!\n  name: String\n  population: Int\n  isDemocratic: Boolean\n}\n")),Object(a.b)("p",null,"... by using the following scenario:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"{\n  countries: [\n    { name: 'China', isDemocratic: false },\n    ...times(4, () => ({ isDemocratic: true }),\n  ];\n}\n")),Object(a.b)("p",null,"With the help of ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://lodash.com/docs/4.17.11#times"}),"lodash's times")," we tell Kimera that we want to generate 5 countries. The first country will be the ",Object(a.b)("inlineCode",{parentName:"p"},"undemocratic")," ",Object(a.b)("inlineCode",{parentName:"p"},"China"),", and the remaining ",Object(a.b)("inlineCode",{parentName:"p"},"4")," countries will be ",Object(a.b)("inlineCode",{parentName:"p"},"democratic"),"."),Object(a.b)("p",null,"Notice how we didn't need to specify all the fields of ",Object(a.b)("inlineCode",{parentName:"p"},"Country")," type in order to have a valid scenario. The rest of the fields will be generated using other sources. First, Kimera looks for the fields in our next source, the builder for the Object Type ",Object(a.b)("inlineCode",{parentName:"p"},"Country"),"."))}p.isMDXComponent=!0},178:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||a;return n?o.a.createElement(d,c({ref:t},l,{components:n})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);