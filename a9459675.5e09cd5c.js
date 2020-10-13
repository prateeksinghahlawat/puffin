(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(7),a=(n(0),n(162)),i={id:"revenuemodel",title:"Revenue Model",sidebar_label:"Revenue Model"},c={id:"revenuemodel",isDocsHomePage:!1,title:"Revenue Model",description:"Based on your company strategy, you can opt for different revenue models. Currently through Superadmin Panel, you can configure commission based model on supply side. However, we allow commission on buyer side as well.",source:"@site/docs/revenuemodel.md",permalink:"/docs/revenuemodel",editUrl:"https://github.com/TRADLY-PLATFORM/puffin/edit/master/puffin-v2/docs/revenuemodel.md",sidebar_label:"Revenue Model",sidebar:"someSidebar",previous:{title:"Support",permalink:"/docs/support"},next:{title:"Getting to know about SuperAdmin",permalink:"/docs/superadmin"}},u=[{value:"Understanding the fee in short",id:"understanding-the-fee-in-short",children:[]}],l={rightToc:u};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Based on your company strategy, you can opt for different revenue models. Currently through Superadmin Panel, you can configure commission based model on supply side. However, we allow commission on buyer side as well. "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Currently commission based revenue model is using Stripe technologies. So the transaction fee and payout fee is defined by stripe and might vary on your business region, refer from there. ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://stripe.com/au/connect/pricing"}),"Refer here"))),Object(a.b)("p",null,"For other revenue model and payment gateways, contact us to know about the roadmap and possibility."),Object(a.b)("h2",{id:"understanding-the-fee-in-short"},"Understanding the fee in short"),Object(a.b)("p",null,"Taking Australia as example. ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://stripe.com/au/pricing"}),"Refer pricing")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"When your customer buy an item for $100, Stripe charges a transaction fee of ",Object(a.b)("strong",{parentName:"li"},"1.75% + A$0.30.")," Hence 2.05 goes to Stripe"),Object(a.b)("li",{parentName:"ul"},"You are left with ",Object(a.b)("strong",{parentName:"li"},"97.95")),Object(a.b)("li",{parentName:"ul"},"Let's say you take 10% commission from the sales, you will deduct ",Object(a.b)("strong",{parentName:"li"},"A$9.79")," which goes to your Stripe account "),Object(a.b)("li",{parentName:"ul"},"The seller will supposed to get ",Object(a.b)("strong",{parentName:"li"},"88.16")," from your account"),Object(a.b)("li",{parentName:"ul"},"Now we are using stripe connect again to do auto payout to seller account and avoiding manual work of this transfer"),Object(a.b)("li",{parentName:"ul"},"Stripe connect payout charges are ",Object(a.b)("strong",{parentName:"li"},"0.25%+A$0.25 = A$0.47.")),Object(a.b)("li",{parentName:"ul"},"Seller get A$87.69 in his bank account")),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/superadmin-guide#supply-commission"}),"Read here on how to configure")))}s.isMDXComponent=!0},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return n?o.a.createElement(b,c(c({ref:t},l),{},{components:n})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);