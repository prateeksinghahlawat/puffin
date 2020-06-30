(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(154)),i={id:"internalanalytics",title:"Analytics Features",sidebar_label:"Analytics Features"},s={id:"internalanalytics",isDocsHomePage:!1,title:"Analytics Features",description:"Here you can find statistics about the marketplace",source:"@site/docs/internalanalytics.md",permalink:"/docs/docs/internalanalytics",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/internalanalytics.md",sidebar_label:"Analytics Features",sidebar:"someSidebar",previous:{title:"superadminconfig",permalink:"/docs/docs/superadminconfig"},next:{title:"25+ features available in tradly apps",permalink:"/docs/docs/appfeatures"}},c=[],l={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Here you can find statistics about the marketplace"),Object(o.b)("p",null,"USER: How many users registered in the app?"),Object(o.b)("p",null,"STORES: How many stores have been created in the app? (For education marketplace: It can be institutions, it can be still users, It can be Tutor profiles) "),Object(o.b)("p",null,"STORE FOLLOWERS: This just gives an indication of how many followers are following the stores. (Example: If 25 people follow 50 stores, then it will give 25",Object(o.b)("em",{parentName:"p"},"50 = 1250 followers) "),"However this is not a good indication, we need to improve this or remove this (ankur to work on)"),Object(o.b)("p",null,"LISTINGS: This shows the total number of listings by all users (Example: if 10 users have posted 2 listings each. That means 10*2 listings = 20 Listings) "),Object(o.b)("p",null,"LISTINGS SOLD (or closed/Booked): If an listings is not available by multiple reasons (Example: sold out, booked, no space, etc). In a trading marketplace, SOLD status gives the indication of the success of marketplace.  "),Object(o.b)("p",null,"LISTING LIKES: This is same as Listings followers but just that this is LIKES of a listing "))}u.isMDXComponent=!0},154:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,d=p["".concat(i,".").concat(b)]||p[b]||f[b]||o;return n?a.a.createElement(d,s(s({ref:t},l),{},{components:n})):a.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);