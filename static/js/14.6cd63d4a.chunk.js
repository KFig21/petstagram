(this.webpackJsonpinstagram_clone=this.webpackJsonpinstagram_clone||[]).push([[14],{91:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return U}));var s=c(1),n=c(59),a=c.n(n),r=c(67),o=c(64),l=c(4);function i(e){var t=e.src,c=e.caption;return Object(l.jsx)("img",{src:t,alt:c})}var d=c(68),j=c(69),u=c(72),b=c(18);function m(e){var t=e.content,c=Object(s.useRef)(null),n=t.docId;return Object(l.jsxs)("div",{className:"lg:rounded col-span-4 border-t border-b lg:border border-gray-primary bg-white mt-4 mb-2 relative",children:[Object(l.jsx)(o.a,{userId:t.userId,docId:t.docId,photoStorageName:t.photoStorageName,page:"post"}),Object(l.jsx)(b.b,{to:"/post/".concat(n),children:Object(l.jsx)(i,{src:t.imageSrc,caption:t.caption})}),Object(l.jsx)(d.a,{docId:t.docId,totalLikes:t.likes.length,likedPhoto:t.userLikedPhoto,handleFocus:function(){return c.current.focus()}}),Object(l.jsx)(j.a,{username:t.username,caption:t.caption}),Object(l.jsx)(u.a,{docId:t.docId,comments:t.comments,posted:t.dateCreated,commentInput:c,page:"timeline"})]})}function x(){var e=Object(r.a)().photos;return Object(l.jsx)("div",{className:"container col-span-2",style:{marginTop:"-17px"},children:e?(null===e||void 0===e?void 0:e.length)>0?e.map((function(e){return Object(l.jsx)(m,{content:e},e.docId)})):Object(l.jsx)("p",{className:"text-center text-2xl mt-5 lg:mt-10",children:"Follow users to see photos!"}):Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(a.a,{count:4,width:500,height:500,className:"mt-6"})})})}var f=c(62),p=c(60),O=c(61),g=c(56);function h(e){var t=e.username,c=e.fullName,s=e.avatar;return t&&c?Object(l.jsxs)(b.b,{to:"/p/".concat(t),className:"grid grid-cols-4 gap-4 mb-6 items-center",children:[Object(l.jsx)("div",{className:"flex items-center justify-between col-span-1",children:Object(l.jsx)("img",{src:s,className:"rounded-full h-12 w-12 flex mr-3 object-cover",alt:"avi"})}),Object(l.jsxs)("div",{className:"col-span-3",children:[Object(l.jsx)("p",{className:"text-sm font-bold",children:t}),Object(l.jsx)("p",{className:"text-sm",children:c})]})]}):Object(l.jsx)(a.a,{count:1,height:61})}var v=c(53),I=c.n(v),N=c(54),w=c(30),y=c(55);function k(e){var t=e.profileDocId,c=e.loggedInUserDocId,n=e.username,a=e.profileId,r=e.userId,o=e.avatar,i=Object(s.useState)(!1),d=Object(w.a)(i,2),j=d[0],u=d[1];function m(){return(m=Object(N.a)(I.a.mark((function e(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,Object(y.p)(c,a,!1);case 3:return e.next=5,Object(y.o)(t,r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return j?null:Object(l.jsxs)("div",{className:"flex flex-row items-center align-items justify-between",children:[Object(l.jsxs)("div",{className:"flex items-center justify-between",children:[Object(l.jsx)("img",{src:o,className:"rounded-full h-8 w-8 flex object-cover mr-3",alt:"avis"}),Object(l.jsx)(b.b,{to:"/p/".concat(n),children:Object(l.jsx)("p",{className:"font-bold text-sm",children:n})})]}),Object(l.jsx)("button",{className:"text-xs font-bold text-blue-primary",type:"button",onClick:function(){return m.apply(this,arguments)},children:"follow"})]})}function D(e){var t=e.userId,c=e.following,n=e.loggedInUserDocId,r=Object(s.useState)(null),o=Object(w.a)(r,2),i=o[0],d=o[1];return Object(s.useEffect)((function(){function e(){return(e=Object(N.a)(I.a.mark((function e(){var s;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.h)(t,c);case 2:s=e.sent,d(s);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t&&function(){e.apply(this,arguments)}()}),[t,c]),i?i.length>0?Object(l.jsxs)("div",{className:"rounded flex flex-col",children:[Object(l.jsx)("div",{className:"text-sm flex items-center align-items justify-between mb-2",children:Object(l.jsx)("p",{className:"font-bold text-gray-base",children:"Suggestions for you"})}),Object(l.jsx)("div",{className:"mt-4 grid gap-5",children:i.map((function(e){return Object(l.jsx)(k,{profileDocId:e.docId,username:e.username,profileId:e.userId,userId:t,avatar:e.avatar,loggedInUserDocId:n},e.docId)}))})]}):null:Object(l.jsx)(a.a,{count:10,height:150,className:"mt-5"})}function S(){var e=Object(g.a)().userInfo;return Object(l.jsx)("div",{className:"p-4 flex justify-center col-span-2 lg:block lg:col-span-1 lg:relative mb-24",children:Object(l.jsxs)("div",{className:"flex flex-col lg:fixed",children:[Object(l.jsx)(h,{username:e.username,fullName:e.fullName,avatar:e.avatar}),Object(l.jsx)(D,{userId:e.userId,following:e.following,loggedInUserDocId:e.docId})]})})}function U(){return Object(s.useEffect)((function(){document.title="instagram"}),[]),Object(l.jsxs)("div",{className:"bg-gray-background ",children:[Object(l.jsx)(f.a,{}),Object(l.jsx)(p.a,{}),Object(l.jsxs)("div",{className:"grid sm:grid-cols-2 2xl:grid-cols-3 gap-4 justify between mx-auto max-w-screen-md",children:[Object(l.jsx)(x,{}),Object(l.jsx)(S,{})]}),Object(l.jsx)(O.a,{})]})}}}]);
//# sourceMappingURL=14.6cd63d4a.chunk.js.map