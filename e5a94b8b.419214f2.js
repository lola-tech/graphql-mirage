(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{166:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(9),i=(r(0),r(170)),c={id:"tutorial-getting-started",title:"Getting Started",sidebar_label:"1. Getting Started"},o={id:"tutorial-getting-started",title:"Getting Started",description:"Setting up a GraphQL server with an [executable schema](/graphql-kimera/docs/glossary#executable-schema) generated by GraphQL Kimera",source:"@site/docs/tutorial-getting-started.md",permalink:"/graphql-kimera/docs/tutorial-getting-started",editUrl:"https://github.com/lola-tech/graphql-kimera/edit/master/website/docs/tutorial-getting-started.md",sidebar_label:"1. Getting Started",sidebar:"someSidebar",previous:{title:"Mutations",permalink:"/graphql-kimera/docs/mutations"},next:{title:"First Builder",permalink:"/graphql-kimera/docs/tutorial-first-builder"}},l=[],p={rightToc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Setting up a GraphQL server with an ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/graphql-kimera/docs/glossary#executable-schema"}),"executable schema")," generated by GraphQL Kimera"),Object(i.b)("p",null,"We'll use ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/prisma/graphql-yoga"}),"graphql-yoga")," for the server, but Apollo Server could work just as well. In order to start the server, we first need to have Kimera build an executable schema."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const { GraphQLServer } = require('graphql-yoga');\nconst { getExecutableSchema } = require('graphql-kimera');\n\nconst typeDefs = `\ntype City {\n  id: ID!\n  name: String\n  population: Int\n}\n\ntype Query {\n  city: City\n}\n\nschema {\n  query: Query\n}\n`;\n\nconst executableSchema = getExecutableSchema(typeDefs);\n\nconst server = new GraphQLServer({ schema: executableSchema });\nserver.start(() => console.log('Server is running on localhost:4000'));\n")),Object(i.b)("p",null,"Running this code with ",Object(i.b)("inlineCode",{parentName:"p"},"node")," will start a server on ",Object(i.b)("inlineCode",{parentName:"p"},"localhost:4000"),". Visiting the URL will predictably take us to the GraphQL Playground."),Object(i.b)("p",null,"Running the ",Object(i.b)("inlineCode",{parentName:"p"},"city")," query..."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  city {\n    id\n    name\n    population\n  }\n}\n")),Object(i.b)("p",null,"...will yield data based on the defaults for Built-in Scalar Types described in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/graphql-kimera/docs/scalar-type-builders"}),"Scalar Type Builders"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "city": {\n      "id": "irg5btv90",\n      "name": "GENERATED_STRING",\n      "population": 695\n    }\n  }\n}\n')))}u.isMDXComponent=!0},170:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o({},t,{},e)),r},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),d=n,m=s["".concat(c,".").concat(d)]||s[d]||b[d]||i;return r?a.a.createElement(m,o({ref:t},p,{components:r})):a.a.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var p=2;p<i;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);