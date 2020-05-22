(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{155:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return b}));var a=t(2),r=t(9),c=(t(0),t(178)),o={id:"mocking-queries-scenario",title:"Mocking queries",sidebar_label:"Mocking queries"},i={id:"mocking-queries-scenario",title:"Mocking queries",description:"> _Customize mocks for queries by defining a Query scenario._",source:"@site/docs/mocking-queries-scenario.md",permalink:"/graphql-kimera/docs/mocking-queries-scenario",editUrl:"https://github.com/lola-tech/graphql-kimera/edit/master/website/docs/mocking-queries-scenario.md",sidebar_label:"Mocking queries",sidebar:"docs",previous:{title:"Setup",permalink:"/graphql-kimera/docs/setup"},next:{title:"Mocking types with builders",permalink:"/graphql-kimera/docs/mocking-types-builders"}},l=[{value:"Default mocks using no configuration",id:"default-mocks-using-no-configuration",children:[]},{value:"Customize mocks by defining the Query scenario",id:"customize-mocks-by-defining-the-query-scenario",children:[]},{value:"What is the Query scenario?",id:"what-is-the-query-scenario",children:[{value:"A scenario can mock fewer fields than what&#39;s in the schema",id:"a-scenario-can-mock-fewer-fields-than-whats-in-the-schema",children:[]},{value:"The scenario can go as deep as possible",id:"the-scenario-can-go-as-deep-as-possible",children:[]}]}],s={rightToc:l};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("em",{parentName:"p"},"Customize mocks for queries by defining a Query scenario."))),Object(c.b)("p",null,"Let's start with the following schema:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type Query {\n  launch: Launch\n}\n\ntype Launch {\n  id: ID!\n  site: String\n  rockets: [Rocket]\n  isBooked: Boolean!\n}\n\ntype Rocket {\n  id: ID!\n  name: String\n  type: String\n  fuel: Fuel\n}\n\nenum Fuel {\n  PLASMA\n  ION\n  DILITHIUM\n}\n")),Object(c.b)("p",null,"We have a single query: ",Object(c.b)("inlineCode",{parentName:"p"},"launch")," which will return information about the ongoing rocket launch."),Object(c.b)("h2",{id:"default-mocks-using-no-configuration"},"Default mocks using no configuration"),Object(c.b)("p",null,"To start mocking with Kimera, pass the schema definition to the ",Object(c.b)("inlineCode",{parentName:"p"},"getExecutableSchema")," function from Kimera as the ",Object(c.b)("inlineCode",{parentName:"p"},"typeDefs")," option. This will generate mocks for all queries in the schema, with zero configuration."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="server.js"',title:'"server.js"'}),'const { ApolloServer, gql } = require("apollo-server");\nconst { getExecutableSchema } = require("@lola-tech/graphql-kimera");\n\nconst schema = `\n  type Query {\n  ...\n`;\n\nconst executableSchema = getExecutableSchema({ typeDefs: schema });\n\nconst apollo = new ApolloServer({\n  schema: executableSchema,\n  introspection: true,\n});\n\napollo.listen({ port: 3337 }).then(({ url }) => {\n  console.log(`\ud83d\ude80 Server ready at ${url}`);\n});\n')),Object(c.b)("h2",{id:"customize-mocks-by-defining-the-query-scenario"},"Customize mocks by defining the Query scenario"),Object(c.b)("p",null,"In order to customize the mocks, we'll need to define our first mock provider: the Query scenario."),Object(c.b)("p",null,"In order to use our scenario we need to define a function that we will pass as the ",Object(c.b)("inlineCode",{parentName:"p"},"mockProvidersFn")," option to the ",Object(c.b)("inlineCode",{parentName:"p"},"getExecutableSchema")," API function."),Object(c.b)("p",null,"This ",Object(c.b)("inlineCode",{parentName:"p"},"mockProvidersFn")," function needs to return an object with our scenario."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const executableSchema = getExecutableSchema({\n  typeDefs,\n  mockProvidersFn: (context) => ({\n    scenario: {\n      launch: {\n        site: "Kennedy Space Station",\n        rockets: [{}, { type: "Exploration Vessel", fuel: "DILITHIUM" }],\n        isBooked: true,\n      },\n    },\n  }),\n});\n')),Object(c.b)("p",null,"This will make it so the ",Object(c.b)("inlineCode",{parentName:"p"},"launch")," query is mocked with its:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"site")," field set to ",Object(c.b)("inlineCode",{parentName:"li"},"Kennedy Space Station"),";"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"rockets"),' field containing two rockets, and the second rocket being of type "Exploration Vessel":')),Object(c.b)("p",null,"Running:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"query {\n  launch {\n    id\n    site\n    rockets {\n      name\n      type\n      fuel\n    }\n    isBooked\n  }\n}\n")),Object(c.b)("p",null,"will yield:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "launch": {\n      "id": "Mocked Id Scalar",\n      "site": "Kennedy Space Station",\n      "rockets": [\n        {\n          "name": "Mocked String Scalar",\n          "type": "Mocked String Scalar",\n          "fuel": "PLASMA"\n        },\n        {\n          "name": "Mocked String Scalar",\n          "type": "Exploration Vessel",\n          "fuel": "DILITHIUM"\n        }\n      ],\n      "isBooked": true\n    }\n  }\n}\n')),Object(c.b)("p",null,"All other fields that haven't been explicitly mocked will be mocked with default values."),Object(c.b)("h2",{id:"what-is-the-query-scenario"},"What is the Query scenario?"),Object(c.b)("p",null,"In order to build the correct intuition about what the Query scenario is, let's think about how the ",Object(c.b)("inlineCode",{parentName:"p"},"Query")," type would look in its object form."),Object(c.b)("p",null,"For example, take the following slightly modified schema:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type Query {\n  launch: Launch\n  rockets(type: String!): [Rockets]!\n}\n\ntype Launch {\n  id: ID!\n  site: String\n  rockets: [Rocket]\n  isBooked: Boolean!\n}\n\ntype Rocket {\n  id: ID!\n  name: String\n  type: String\n}\n")),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"Query")," ",Object(c.b)("em",{parentName:"p"},"object form")," (or in short the ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"Query")," object"),") would be:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n  launch: {\n    id: "...",\n    site: "...",\n    rockets: [\n      { id: "...", name: "...", type: "..."},\n      ...\n    ],\n    isBooked: "..."\n  },\n  rockets: [\n    { id: "...", name: "...", type: "..."},\n    ...\n  ],\n}\n')),Object(c.b)("p",null,"Keeping all of this in mind, the ",Object(c.b)("inlineCode",{parentName:"p"},"Query scenario"),' (or simply "the scenario") is an object that:'),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"contains mocks for ",Object(c.b)("inlineCode",{parentName:"li"},"Query")," type;"),Object(c.b)("li",{parentName:"ul"},"has the same structure as the ",Object(c.b)("inlineCode",{parentName:"li"},"Query")," object.")),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Kimera allows you to define scenarios for other types than ",Object(c.b)("inlineCode",{parentName:"p"},"Query")," in the context of builders (another type of mock provider) or in resolvers, but we'll talk more about that in other sections of the docs."))),Object(c.b)("h3",{id:"a-scenario-can-mock-fewer-fields-than-whats-in-the-schema"},"A scenario can mock fewer fields than what's in the schema"),Object(c.b)("p",null,"A scenario doesn't need to contain all of the fields of the type it mocks. In fact, ",Object(c.b)("strong",{parentName:"p"},"it can contain as few or as many fields we want to mock"),", as long as it matches the structure of - in this case - the ",Object(c.b)("inlineCode",{parentName:"p"},"Query")," object."),Object(c.b)("p",null,"These are all valid scenarios:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n  launch: {\n    site: "Kennedy Space Station",\n    rockets: [{}, { type: "Exploration Vessel" }],\n    isBooked: true,\n  },\n}\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n  launch: {\n    site: "Kennedy Space Station",\n  },\n  rockets: [{}, {}],\n}\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n  rockets: [{ type: "Starship", name: "Enterprise" }],\n}\n')),Object(c.b)("h3",{id:"the-scenario-can-go-as-deep-as-possible"},"The scenario can go as deep as possible"),Object(c.b)("p",null,"A scenario can be as deep or as shallow we want, type permitting. Take the following schema:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type Query {\n  me: User\n}\n\ntype User {\n  address: Address!\n  name: String!\n}\n\ntype Address {\n  city: String\n  country: Country!\n}\n\ntype Country {\n  language: String!\n}\n")),Object(c.b)("p",null,"These are all valid scenarios:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n  me: {\n    address: {\n      country: {\n        language: "Latin",\n      }\n    }\n  }\n}\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n  me: {\n    address: {\n      city: "Berlin",\n    }\n  }\n}\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n  me: {\n    name: "Dumitru Prunariu",\n  }\n}\n')),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/graphql-kimera/docs/mocking-types-builders"}),"Next"),", we'll learn how to mock individual types using another mock provider: builders."))}b.isMDXComponent=!0},178:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),b=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i({},n,{},e)),t},u=function(e){var n=b(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(t),m=a,d=u["".concat(o,".").concat(m)]||u[m]||p[m]||c;return t?r.a.createElement(d,i({ref:n},s,{components:t})):r.a.createElement(d,i({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);