(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{162:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(9),i=(t(0),t(178)),o={id:"tutorial-scenarios",title:"Scenarios",sidebar_label:"6. Scenarios"},c={id:"tutorial-scenarios",title:"Scenarios",description:"Alternate between different shapes of data with [Scenarios](/graphql-kimera/docs/scenarios)",source:"@site/docs/tutorial-scenarios.md",permalink:"/graphql-kimera/docs/tutorial-scenarios",editUrl:"https://github.com/lola-tech/graphql-kimera/edit/master/website/docs/tutorial-scenarios.md",sidebar_label:"6. Scenarios"},s=[],l={rightToc:s};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Alternate between different shapes of data with ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/graphql-kimera/docs/scenarios"}),"Scenarios")),Object(i.b)("p",null,"Lets take a look at our current schema."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"type City {\n  id: ID!\n  name: String\n  population: Int\n  airports: [Airport]\n}\n\ntype Airport {\n  id: ID!\n  name: String\n  address: String\n}\n\ntype Persona {\n  id: ID!\n  city: City\n  address: String\n}\n\ntype Query {\n  cities: [City]\n  personas(city: String): [Persona]\n}\n\nschema {\n  query: Query\n}\n")),Object(i.b)("p",null,"Now lets say we to be able to switch between different versions of our server with different data for our testing. Say we want:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A version with ",Object(i.b)("inlineCode",{parentName:"li"},"5")," ",Object(i.b)("inlineCode",{parentName:"li"},"cities")," with no ",Object(i.b)("inlineCode",{parentName:"li"},"airports")," and no personas"),Object(i.b)("li",{parentName:"ul"},"A version with ",Object(i.b)("inlineCode",{parentName:"li"},"5")," personas, all from ",Object(i.b)("inlineCode",{parentName:"li"},"Cluj-Napoca"),", and no cities")),Object(i.b)("p",null,"Enter Scenarios:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// ...\nconst scenarioCities = {\n  cities: times(5, () => ({ airports: null })),\n  personas: null,\n};\n\nconst scenarioPersonas = {\n  cities: null,\n  personas: times(5, () => ({ city: { name: 'Cluj-Napoca' } })),\n};\n\nfunction getDefaultDataSources() {\n  return {\n    scenario:\n      process.argv[2] === 'personas' ? scenarioPersonas : scenarioCities,\n    typeBuilders,\n    nameBuilders,\n  };\n}\n// ...\n")),Object(i.b)("p",null,"Now running ",Object(i.b)("inlineCode",{parentName:"p"},"node index.js personas")," will run scenario 2, and omitting the argument will run the 1st scenario."),Object(i.b)("p",null,"Links:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Read more on ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/graphql-kimera/docs/scenarios"}),"how Scenarios work"))))}p.isMDXComponent=!0},178:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},u=function(e){var n=p(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return t?a.a.createElement(m,c({ref:n},l,{components:t})):a.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);