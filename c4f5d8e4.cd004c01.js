(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{130:function(e,t,a){"use strict";a.r(t);var n=a(172),r=a(0),c=a.n(r),l=a(16),o=a.n(l),i=a(173),s=a(189),u=a(160);function m(){var e=Object(n.a)(["\n  height: 200px;\n  width: 200px;\n"]);return m=function(){return e},e}function d(){var e=Object(n.a)(["\n  display: Flex;\n  align-items: center;\n  flex-direction: column;\n"]);return d=function(){return e},e}function h(){var e=Object(n.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 1rem 0;\n\n  h3 {\n    /* font-family: var(--ifm-heading-font-family); */\n    font-weight: 400;\n    font-size: 1.5rem;\n    line-height: 1.5;\n  }\n  p {\n    line-height: 1.7;\n  }\n"]);return h=function(){return e},e}var f={imageUrl:o.a.string,title:o.a.node,description:o.a.node,code:o.a.string,metastring:o.a.string},v=i.a.div(h()),b=i.a.div(d()),g=i.a.img(m());function p(e){var t=e.imageUrl,a=e.title,n=e.description,r=e.code,l=e.metastring,o=void 0===l?"":l;return c.a.createElement(v,{classNames:"row"},c.a.createElement(b,{className:"col col--4"},t&&c.a.createElement(g,{src:Object(u.a)(t),alt:a}),c.a.createElement("h3",null,a),c.a.createElement("p",null,n)),r&&c.a.createElement("div",{className:"col col--8"},c.a.createElement(s.a,{metastring:o},r)))}p.propTypes=f,t.default=p},131:function(e,t,a){"use strict";a.r(t);var n=a(172),r=a(0),c=a.n(r),l=a(173),o=a(163),i=a(160),s=a(158);function u(){var e=Object(n.a)(["\n  font-size: 1.5rem;\n"]);return u=function(){return e},e}function m(){var e=Object(n.a)(["\n  img {\n    height: 150px;\n  }\n\n  > span {\n    position: absolute;\n    left: -9999px;\n  }\n"]);return m=function(){return e},e}function d(){var e=Object(n.a)(["\n  padding: 4rem 0;\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n\n  background-color: #eeeef6;\n\n  @media screen and (max-width: 966px) {\n    padding: 2rem;\n  }\n"]);return d=function(){return e},e}function h(){var e=Object(n.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  > .button {\n    color: white;\n    border: 0;\n    background-color: var(--ifm-heading-color);\n    &:hover {\n      background-color: var(--ifm-color-primary);\n    }\n  }\n"]);return h=function(){return e},e}var f=l.a.div(h()),v=l.a.div(d()),b=l.a.h1(m()),g=l.a.p(u());t.default=function(){var e=Object(s.a)().siteConfig,t=void 0===e?{}:e;return c.a.createElement(v,null,c.a.createElement("div",{className:"container"},c.a.createElement(b,{className:"hero__title"},c.a.createElement("img",{src:Object(i.a)("img/kimera-logo.svg"),alt:"Kimera logo"}),c.a.createElement("span",null,t.title)),c.a.createElement(g,null,t.tagline),c.a.createElement(f,null,c.a.createElement(o.a,{className:"button button--lg",to:Object(i.a)("/docs/getting-started")},"Get Started"))))}},151:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(172),c=a(0),l=a.n(c),o=a(178),i=a(158),s=a(173),u=a(130),m=a(131);function d(){var e=Object(r.a)(["\n  width: 100%;\n  border-color: var(--ifm-color-gray-200);\n"]);return d=function(){return e},e}var h=[{title:l.a.createElement(l.a.Fragment,null,"Start a mock GraphQL server with zero configuration"),description:l.a.createElement(l.a.Fragment,null,"All you need to get a mock server up and running is your schema, Kimera and a GraphQL Server."),code:'const { ApolloServer, gql } = require("apollo-server");\nconst { getExecutableSchema } = require("@lola-tech/graphql-kimera");\n\nconst schema = gql`\n  type Query {\n    ...\n`;\n\nconst executableSchema = getExecutableSchema({ typeDefs: schema });\n\nconst apollo = new ApolloServer({\n  schema: executableSchema,\n});\n\napollo.listen().then(({ url }) => {\n  console.log(`\ud83d\ude80 Server ready at ${url}`);\n});\n    '},{title:l.a.createElement(l.a.Fragment,null,"Customize mocks with scenarios and builders"),description:l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Kimera allows you to mock the response to any number of queries with a single ",l.a.createElement("code",null,"scenario")," object."),l.a.createElement("p",null,"Mock GraphQL types with ",l.a.createElement("code",null,"builders"),".")),code:'const executableSchema = getExecutableSchema({\n  typeDefs,\n  mockProvidersFn: (context) => ({\n    scenario: {\n      // Mock the `rockets` query to\n      // return three rockets, the first named "Saturn V":\n      rockets: [{ name: "Saturn V" }, {}, {}],\n      me: { name: "Homer" }\n    },\n    builders: {\n      // "Rocket" fields that aren\'t addressed in the scenario\n      // are mocked using the "Rocket" builder:\n      Rocket: () => ({\n        type: ["Orion", "Apollo"][_.random(0, 1)],\n        name: "Rocket name",\n      }),\n    },\n  }),\n});'},{title:l.a.createElement(l.a.Fragment,null,"Write resolvers only when you need to"),description:l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"You can write resolvers, but you don't need to."),l.a.createElement("p",null,"When you do, you'll get easy access to the mocks through the"," ",l.a.createElement("code",null,"store"),".")),code:' const executableSchema = getExecutableSchema({\n  typeDefs: schema,\n  mockProvidersFn: (context) => ({\n    scenario: {\n      rockets: mockResolver(\n        (store) => (_, { type }) => {\n          const rockets = store.get();\n          return rockets.filter((r) => r.type === type);\n        },\n        // You\'ll even be able to specify how the mocks are built.\n        [{ type: "Shuttle" }, {}, { type: "Shuttle" }]\n      ),\n    },\n  }),\n});'}],f=s.a.hr(d());t.default=function(){var e=Object(i.a)().siteConfig,t=void 0===e?{}:e;return l.a.createElement(o.a,{title:"TST "+t.title,description:"Description will go into a meta tag in <head />"},l.a.createElement(m.default,null),l.a.createElement("main",{className:"home--container container"},h&&h.length&&l.a.createElement("section",null,l.a.createElement("div",{className:"row"},h.map((function(e,t){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.default,Object(n.a)({key:t},e)),t!==h.length-1?l.a.createElement(f,null):null)}))))))}},175:function(e,t,a){"use strict";var n=a(39);a.d(t,"a",(function(){return n.d})),a.d(t,"b",(function(){return n.e}))},176:function(e,t,a){"use strict";var n=a(0);t.a=function(e){void 0===e&&(e=!0),Object(n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},177:function(e,t,a){"use strict";var n=a(158),r=a(168),c=a(160),l=a(164);t.a=function(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=e.themeConfig.navbar,o=(a=void 0===a?{}:a).logo,i=void 0===o?{}:o,s=Object(r.a)().isDarkTheme,u=i.href||t,m={};i.target?m={target:i.target}:Object(l.a)(u)||(m={rel:"noopener noreferrer",target:"_blank"});var d=i.srcDark&&s?i.srcDark:i.src;return{logoLink:u,logoLinkProps:m,logoImageUrl:Object(c.a)(d),logoAlt:i.alt}}},178:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(179),l=a(164),o=a(158),i=a(160),s="",u="dark",m=function(){var e=Object(o.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.disableDarkMode,a=Object(n.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):s),r=a[0],c=a[1],l=Object(n.useCallback)((function(e){try{localStorage.setItem("theme",e)}catch(t){console.error(t)}}),[c]),i=Object(n.useCallback)((function(){c(s),l(s)}),[]),m=Object(n.useCallback)((function(){c(u),l(u)}),[]);return Object(n.useEffect)((function(){document.documentElement.setAttribute("data-theme",r)}),[r]),Object(n.useEffect)((function(){if(!t)try{var e=localStorage.getItem("theme");null!==e&&c(e)}catch(a){console.error(a)}}),[c]),Object(n.useEffect)((function(){t||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;c(t?u:s)}))}),[]),{isDarkTheme:r===u,setLightTheme:i,setDarkTheme:m}},d=a(169);var h=function(e){var t=m(),a=t.isDarkTheme,n=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(d.a.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:c}},e.children)},f=(a(53),a(162),function(){var e=Object(n.useState)({}),t=e[0],a=e[1],r=Object(n.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}}),[]);return Object(n.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var n=localStorage.key(t);if(n.startsWith("docusaurus.tab."))e[n.substring("docusaurus.tab.".length)]=localStorage.getItem(n)}a(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){a((function(a){var n;return Object.assign(Object.assign({},a),{},((n={})[e]=t,n))})),r(e,t)}}}),v=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});var b=function(e){var t=f(),a=t.tabGroupChoices,n=t.setTabGroupChoices;return r.a.createElement(v.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:n}},e.children)},g=a(132),p=a.n(g);var k=function(){var e=Object(o.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.announcementBar,a=void 0===t?{}:t,c=a.id,l=a.content,i=a.backgroundColor,s=a.textColor,u=Object(n.useState)(!0),m=u[0],d=u[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("docusaurus.announcement.id"),t=c!==e;localStorage.setItem("docusaurus.announcement.id",c),t&&localStorage.setItem("docusaurus.announcement.dismiss",!1),(t||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&d(!1)}),[]),!l||m?null:r.a.createElement("div",{className:p.a.announcementBar,style:{backgroundColor:i,color:s},role:"banner"},r.a.createElement("div",{className:p.a.announcementBarContent,dangerouslySetInnerHTML:{__html:l}}),r.a.createElement("button",{type:"button",className:p.a.announcementBarClose,onClick:function(){localStorage.setItem("docusaurus.announcement.dismiss",!0),d(!0)},"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},E=a(2),y=a(9),O=a(161),_=a.n(O),j=a(163),w=function(){return null},N=a(185),C=a.n(N),S=a(133),T=a.n(S),x=function(){return r.a.createElement("span",{className:_()(T.a.toggle,T.a.moon)})},L=function(){return r.a.createElement("span",{className:_()(T.a.toggle,T.a.sun)})},M=function(e){var t=Object(o.a)().isClient;return r.a.createElement(C.a,Object(E.a)({disabled:!t,icons:{checked:r.a.createElement(x,null),unchecked:r.a.createElement(L,null)}},e))},D=a(168),F=a(175);var P=function(e){var t=Object(n.useState)(e),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=function(){return r(window.location.hash)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[a,r]},I=a(31),B=a.n(I),X=function(){return{scrollX:B.a.canUseDOM?window.pageXOffset:0,scrollY:B.a.canUseDOM?window.pageYOffset:0}},G=function(e,t){void 0===t&&(t=[]);var a=Object(n.useState)(X()),r=a[0],c=a[1],l=function(){var t=X();c(t),e&&e(t)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",l),function(){return window.removeEventListener("scroll",l,{passive:!0})}}),t),r},A=function(e){var t=Object(n.useState)(!0),a=t[0],r=t[1],c=Object(n.useState)(!1),l=c[0],o=c[1],i=Object(n.useState)(0),s=i[0],u=i[1],m=Object(n.useState)(0),d=m[0],h=m[1],f=Object(n.useCallback)((function(e){null!==e&&h(e.getBoundingClientRect().height)}),[]),v=Object(F.b)(),b=P(v.hash),g=b[0],p=b[1];return G((function(t){var a=t.scrollY;if(e&&(0===a&&r(!0),!(a<d))){if(l)return o(!1),r(!1),void u(a);var n=document.documentElement.scrollHeight-d,c=window.innerHeight;s&&a>=s?r(!1):a+c<n&&r(!0),u(a)}}),[s,d]),Object(n.useEffect)((function(){e&&(r(!0),p(v.hash))}),[v]),Object(n.useEffect)((function(){e&&g&&o(!0)}),[g]),{navbarRef:f,isNavbarVisible:a}},R=a(176),H=a(177),U=a(134),q=a.n(U);function Y(e){var t=e.activeBasePath,a=e.to,n=e.href,c=e.label,l=e.activeClassName,o=void 0===l?"navbar__link--active":l,s=Object(y.a)(e,["activeBasePath","to","href","label","activeClassName"]),u=Object(i.a)(a),m=Object(i.a)(t);return r.a.createElement(j.a,Object(E.a)({},n?{target:"_blank",rel:"noopener noreferrer",href:n}:Object.assign({isNavLink:!0,activeClassName:o,to:u},t?{isActive:function(e,t){return t.pathname.startsWith(m)}}:null),s),c)}function K(e){var t=e.items,a=e.position,n=e.className,c=Object(y.a)(e,["items","position","className"]),l=function(e,t){return void 0===t&&(t=!1),_()({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?r.a.createElement("div",{className:_()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===a,"dropdown--right":"right"===a})},r.a.createElement(Y,Object(E.a)({className:l(n)},c,{onClick:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&e.target.parentNode.classList.toggle("dropdown--show")}}),c.label),r.a.createElement("ul",{className:"dropdown__menu"},t.map((function(e,t){var a=e.className,n=Object(y.a)(e,["className"]);return r.a.createElement("li",{key:t},r.a.createElement(Y,Object(E.a)({activeClassName:"dropdown__link--active",className:l(a,!0)},n)))})))):r.a.createElement(Y,Object(E.a)({className:l(n)},c))}function V(e){var t=e.items,a=e.className,n=Object(y.a)(e,["items","className"]),c=function(e,t){return void 0===t&&(t=!1),_()("menu__link",{"menu__link--sublist":t},e)};return t?r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(Y,Object(E.a)({className:c(a,!0)},n),n.label),r.a.createElement("ul",{className:"menu__list"},t.map((function(e,t){var a=e.className,l=Object(y.a)(e,["className"]);return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(Y,Object(E.a)({activeClassName:"menu__link--active",className:c(a)},l,{onClick:n.onClick})))})))):r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(Y,Object(E.a)({className:c(a)},n)))}var W=function(){var e,t,a=Object(o.a)(),c=a.siteConfig.themeConfig,l=c.navbar,i=(l=void 0===l?{}:l).title,s=l.links,u=void 0===s?[]:s,m=l.hideOnScroll,d=void 0!==m&&m,h=c.disableDarkMode,f=void 0!==h&&h,v=a.isClient,b=Object(n.useState)(!1),g=b[0],p=b[1],k=Object(n.useState)(!1),y=k[0],O=k[1],N=Object(D.a)(),C=N.isDarkTheme,S=N.setLightTheme,T=N.setDarkTheme,x=A(d),L=x.navbarRef,F=x.isNavbarVisible,P=Object(H.a)(),I=P.logoLink,B=P.logoLinkProps,X=P.logoImageUrl,G=P.logoAlt;Object(R.a)(g);var U=Object(n.useCallback)((function(){p(!0)}),[p]),Y=Object(n.useCallback)((function(){p(!1)}),[p]),W=Object(n.useCallback)((function(e){return e.target.checked?T():S()}),[S,T]);return r.a.createElement("nav",{ref:L,className:_()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":g},e[q.a.navbarHideable]=d,e[q.a.navbarHidden]=!F,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=u&&0!==u.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:U,onKeyDown:U},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(j.a,Object(E.a)({className:"navbar__brand",to:I},B),null!=X&&r.a.createElement("img",{key:v,className:"navbar__logo",src:X,alt:G}),null!=i&&r.a.createElement("strong",{className:_()("navbar__title",(t={},t[q.a.hideLogoText]=y,t))},i)),u.filter((function(e){return"left"===e.position})).map((function(e,t){return r.a.createElement(K,Object(E.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},u.filter((function(e){return"right"===e.position})).map((function(e,t){return r.a.createElement(K,Object(E.a)({},e,{key:t}))})),!f&&r.a.createElement(M,{className:q.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:C,onChange:W}),r.a.createElement(w,{handleSearchBarToggle:O,isSearchBarExpanded:y}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:Y}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(j.a,Object(E.a)({className:"navbar__brand",onClick:Y,to:I},B),null!=X&&r.a.createElement("img",{key:v,className:"navbar__logo",src:X,alt:G}),null!=i&&r.a.createElement("strong",{className:"navbar__title"},i)),!f&&g&&r.a.createElement(M,{"aria-label":"Dark mode toggle in sidebar",checked:C,onChange:W})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},u.map((function(e,t){return r.a.createElement(V,Object(E.a)({},e,{onClick:Y,key:t}))})))))))},z=a(135),Q=a.n(z);function J(e){var t=e.to,a=e.href,n=e.label,c=Object(y.a)(e,["to","href","label"]),l=Object(i.a)(t);return r.a.createElement(j.a,Object(E.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:l},c),n)}var $=function(e){var t=e.url,a=e.alt;return r.a.createElement("img",{className:"footer__logo",alt:a,src:t})};var Z=function(){var e=Object(o.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},c=n.copyright,l=n.links,s=void 0===l?[]:l,u=n.logo,m=void 0===u?{}:u,d=Object(i.a)(m.src);return a?r.a.createElement("footer",{className:_()("footer",{"footer--dark":"dark"===a.style})},r.a.createElement("div",{className:"container"},s&&s.length>0&&r.a.createElement("div",{className:"row footer__links"},s.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(J,e))}))):null)}))),(m||c)&&r.a.createElement("div",{className:"text--center"},m&&m.src&&r.a.createElement("div",{className:"margin-bottom--sm"},m.href?r.a.createElement("a",{href:m.href,target:"_blank",rel:"noopener noreferrer",className:Q.a.footerLogoLink},r.a.createElement($,{alt:m.alt,url:d})):r.a.createElement($,{alt:m.alt,url:d})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:c}})))):null};a(136);t.a=function(e){var t=Object(o.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,s=a.title,u=a.themeConfig.image,m=a.url,d=e.children,f=e.title,v=e.noFooter,g=e.description,p=e.image,E=e.keywords,y=e.permalink,O=e.version,_=f?f+" | "+s:s,j=p||u,w=m+Object(i.a)(j);Object(l.a)(j)||(w=j);var N=Object(i.a)(n);return r.a.createElement(h,null,r.a.createElement(b,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),_&&r.a.createElement("title",null,_),_&&r.a.createElement("meta",{property:"og:title",content:_}),n&&r.a.createElement("link",{rel:"shortcut icon",href:N}),g&&r.a.createElement("meta",{name:"description",content:g}),g&&r.a.createElement("meta",{property:"og:description",content:g}),O&&r.a.createElement("meta",{name:"docsearch:version",content:O}),E&&E.length&&r.a.createElement("meta",{name:"keywords",content:E.join(",")}),j&&r.a.createElement("meta",{property:"og:image",content:w}),j&&r.a.createElement("meta",{property:"twitter:image",content:w}),j&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+_}),y&&r.a.createElement("meta",{property:"og:url",content:m+y}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(k,null),r.a.createElement(W,null),r.a.createElement("div",{className:"main-wrapper"},d),!v&&r.a.createElement(Z,null)))}},185:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),l=d(c),o=d(a(161)),i=d(a(16)),s=d(a(186)),u=d(a(187)),m=a(188);function d(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,m.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,m.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,m.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,o.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return l.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},l.default.createElement("div",{className:"react-toggle-track"},l.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),l.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),l.default.createElement("div",{className:"react-toggle-thumb"}),l.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:l.default.createElement(s.default,null),unchecked:l.default.createElement(u.default,null)}},h.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},186:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},187:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},188:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}}}]);