(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{174:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return b}));var r=a(2),o=a(9),n=(a(0),a(178)),c={id:"glossary",title:"Glossary",sidebar_label:"Glossary \u274c"},l={id:"glossary",title:"Glossary",description:"Definitions of terms you'll be encountering across the documentation",source:"@site/docs/glossary.md",permalink:"/graphql-kimera/docs/glossary",editUrl:"https://github.com/lola-tech/graphql-kimera/edit/master/website/docs/glossary.md",sidebar_label:"Glossary \u274c",sidebar:"docs",previous:{title:"Abstract Types",permalink:"/graphql-kimera/docs/abstract-types"},next:{title:"buildMocks \u274c",permalink:"/graphql-kimera/docs/api-build-mocks"}},s=[],i={rightToc:s};function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Definitions of terms you'll be encountering across the documentation"),Object(n.b)("h1",{id:"builder"},"Builder"),Object(n.b)("p",null,"Builders are functions that used to generate data for specific fields in Object Types. When Kimera walks the ",Object(n.b)("inlineCode",{parentName:"p"},"Query")," Object Type tree to generate data, it will use these functions to generate data for fields."),Object(n.b)("p",null,"Read more about the various builders in the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/graphql-kimera/docs/data-sources"}),"Data Sources section"),"."),Object(n.b)("h1",{id:"data-source"},"Data Source"),Object(n.b)("p",null,"Refer to ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/graphql-kimera/docs/scenarios"}),"scenarios"),", ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/graphql-kimera/docs/object-type-builders"}),"Object Type Builders"),", ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"field-name-builders"}),"Field Name Builders")," or ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/graphql-kimera/docs/scalar-type-builders"}),"Scalar Type Builders"),", which are all used to determine how to generate data."),Object(n.b)("p",null,"Read more about them in the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/graphql-kimera/docs/data-sources"}),"Data Sources section"),"."),Object(n.b)("h1",{id:"scenario"},"Scenario"),Object(n.b)("p",null,"Scenarios are objects that mirror the structure of the query response tree, and are used to specify values for specific fields."),Object(n.b)("p",null,"Read more about them in the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/graphql-kimera/docs/scenarios"}),"Scenario section"),"."),Object(n.b)("h1",{id:"context"},"Context"),Object(n.b)("p",null,"Context refers to a value meant to act as a global that get passed to resolvers."),Object(n.b)("p",null,"Read more:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Context in ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.apollographql.com/docs/apollo-server/essentials/data.html#context"}),"Apollo Server"))),Object(n.b)("h1",{id:"executable-schema"},"Executable Schema"),Object(n.b)("p",null,"A schema that has a schema definition as well as resolver functions, is an executable schema."),Object(n.b)("p",null,"Read more about ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.apollographql.com/docs/graphql-tools/generate-schema.html#makeExecutableSchema"}),"how an executable schema is created in Apollo"),"."),Object(n.b)("h1",{id:"resolver"},"Resolver"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Resolvers provide the instructions for turning a GraphQL operation (a query, mutation, or subscription) into data."),Object(n.b)("p",{parentName:"blockquote"},"-- ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.apollographql.com/docs/tutorial/resolvers.html#resolver-api"}),"Apollo Docs"))),Object(n.b)("p",null,"Read more about resolvers in the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.apollographql.com/docs/tutorial/resolvers.html#resolver-api"}),"Apollo Docs")),Object(n.b)("h1",{id:"schema-definition-language-sdl"},"Schema Definition Language (SDL)"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"To make it easy to understand the capabilities of a server, GraphQL implements a human-readable schema syntax known as its Schema Definition Language, or \u201cSDL\u201d. The SDL is used to express the types available within a schema and how those types relate to each other."),Object(n.b)("p",{parentName:"blockquote"},"-- ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.apollographql.com/docs/apollo-server/essentials/schema.html#sdl"}),"Apollo Server Docs"))),Object(n.b)("h1",{id:"kimera"},'"Kimera"'),Object(n.b)("p",null,"Kimera's name is inspired from greek mythology: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Chimera_(mythology)"}),"Chimera (mythology)"),"."),Object(n.b)("p",null,"Read more:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.prisma.io/blog/graphql-sdl-schema-definition-language-6755bcb9ce51"}),"What is GraphQL SDL - Prisma Blog")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.apollographql.com/docs/apollo-server/essentials/schema.html#sdl"}),"Understanding schema concepts - Apollo Server Docs"))))}b.isMDXComponent=!0},178:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var r=a(0),o=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=o.a.createContext({}),b=function(e){var t=o.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},p=function(e){var t=b(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=b(a),m=r,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||n;return a?o.a.createElement(h,l({ref:t},i,{components:a})):o.a.createElement(h,l({ref:t},i))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,c=new Array(n);c[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<n;i++)c[i]=a[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);