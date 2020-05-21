(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(9),i=(n(0),n(178)),c={id:"interfaces",title:"Interfaces",sidebar_label:"Interfaces"},o={id:"interfaces",title:"Interfaces",description:"Use \\_\\_typename to specify a concrete type for an abstract field",source:"@site/docs/interfaces.md",permalink:"/graphql-kimera/docs/interfaces",editUrl:"https://github.com/lola-tech/graphql-kimera/edit/master/website/docs/interfaces.md",sidebar_label:"Interfaces"},l=[],p={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Use ","_","_","typename to specify a concrete type for an abstract field"),Object(i.b)("p",null,"When Kimera walks the ",Object(i.b)("inlineCode",{parentName:"p"},"Query")," tree to generate data, and it encounters a field that's an Object Type, it automatically sets the ",Object(i.b)("inlineCode",{parentName:"p"},"__typename")," field to its type name."),Object(i.b)("p",null,"When the type of the field is an interface, absent any instruction, it selects the first type in the schema that implements that interface, and generates data for that field as if it were that selected type."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"interface MenuItem {\n  id: ID!\n  url: String\n}\n\ntype ExpandableMenuItem implements MenuItem {\n  id: ID!\n  url: String\n  expanded: Boolean\n}\n\ntype NavigationMenuItem implements MenuItem {\n  id: ID!\n  url: String\n  label: String\n}\n\ntype Query {\n  menu: [MenuItem]\n}\n")),Object(i.b)("p",null,"For the example above, if not instructed otherwise, the menu query will return an array composed of ",Object(i.b)("inlineCode",{parentName:"p"},"ExpandableMenuItem"),"s."),Object(i.b)("p",null,"We can tell Kimera what concrete types to build for our interface fields by setting the ",Object(i.b)("inlineCode",{parentName:"p"},"__typename")," in the field scenario."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"{\n  menu: [times(5, () => ({ __typename: 'NavigationMenuItem' }))];\n}\n")),Object(i.b)("p",null,"The scenario above will force Kimera to generate a menu with exactly five ",Object(i.b)("inlineCode",{parentName:"p"},"NavigationMenuItem"),"s and no ",Object(i.b)("inlineCode",{parentName:"p"},"ExpandableMenuItem"),"s."))}u.isMDXComponent=!0},178:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),f=r,m=s["".concat(c,".").concat(f)]||s[f]||b[f]||i;return n?a.a.createElement(m,o({ref:t},p,{components:n})):a.a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<i;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);