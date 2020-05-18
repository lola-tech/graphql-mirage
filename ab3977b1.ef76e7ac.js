(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{156:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return d}));var n=r(2),a=r(9),i=(r(0),r(170)),o={id:"tutorial-fields-repeating",title:"Fields that repeat across Object Types",sidebar_label:"5. Fields that repeat"},s={id:"tutorial-fields-repeating",title:"Fields that repeat across Object Types",description:"How we can avoid repeating when we have fields that repeat across types",source:"@site/docs/tutorial-fields-repeating.md",permalink:"/graphql-kimera/docs/tutorial-fields-repeating",editUrl:"https://github.com/lola-tech/graphql-kimera/edit/master/website/docs/tutorial-fields-repeating.md",sidebar_label:"5. Fields that repeat",sidebar:"someSidebar",previous:{title:"Fields with arguments",permalink:"/graphql-kimera/docs/tutorial-fields-with-args"},next:{title:"Scenarios",permalink:"/graphql-kimera/docs/tutorial-scenarios"}},l=[],c={rightToc:l};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"How we can avoid repeating when we have fields that repeat across types"),Object(i.b)("p",null,"Our schema now contains ",Object(i.b)("inlineCode",{parentName:"p"},"Persona"),"s and ",Object(i.b)("inlineCode",{parentName:"p"},"Airport"),"s. Lets add an ",Object(i.b)("inlineCode",{parentName:"p"},"address")," field to each of them."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),"# ...\n\ntype Airport {\n  id: ID!\n  name: String\n  address: String\n}\n\ntype Persona {\n  id: ID!\n  city: City\n  address: String\n}\n\n# ...\n")),Object(i.b)("p",null,"In order to generate something that looks like an address for those fields, we'd need to add them each both to their respective Object Type Builders like we did with ",Object(i.b)("inlineCode",{parentName:"p"},"name")," for ",Object(i.b)("inlineCode",{parentName:"p"},"City")," in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/graphql-kimera/docs/tutorial-first-builder"}),"second part of the tutorial"),", but that introduces what seems like needles repetition."),Object(i.b)("p",null,"Moreover, what if we grow our schema with more types that require and address field? This could be address with some indirection, ie. adding an ",Object(i.b)("inlineCode",{parentName:"p"},"Address")," type, but lets assume we want the field to be a built-in scalar."),Object(i.b)("p",null,"For these cases Kimera allows you to define ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/graphql-kimera/docs/field-name-builders"}),"Field Name Builders"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// ...\n\nconst nameBuilders = {\n  address: () => casual.address,\n};\n\nfunction getDefaultDataSources() {\n  return {\n    typeBuilders,\n    nameBuilders,\n  };\n}\n\n// ..\n")),Object(i.b)("p",null,"Notice how now we're adding a new data source: ",Object(i.b)("inlineCode",{parentName:"p"},"nameBuilders"),". The query now reveals all address fields have fake addresses."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),'query {\n  cities {\n    airports {\n      address\n    }\n  }\n  personas(city: "") {\n    address\n  }\n}\n')),Object(i.b)("p",null,"Links:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Read more on ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/graphql-kimera/docs/field-name-builders"}),"how Field Name Builders work"))))}d.isMDXComponent=!0},170:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s({},t,{},e)),r},p=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(r),b=n,m=p["".concat(o,".").concat(b)]||p[b]||u[b]||i;return r?a.a.createElement(m,s({ref:t},c,{components:r})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);