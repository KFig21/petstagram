(this.webpackJsonpinstagram_clone=this.webpackJsonpinstagram_clone||[]).push([[10],{55:function(e,t,c){"use strict";c.d(t,"a",(function(){return b}));var n=c(53),s=c.n(n),r=c(54),a=c(30),l=c(1),i=c(31),o=c(56);function b(){var e=Object(l.useState)({}),t=Object(a.a)(e,2),c=t[0],n=t[1],b=Object(l.useContext)(i.a).user;return Object(l.useEffect)((function(){function e(){return(e=Object(r.a)(s.a.mark((function e(){var t,c,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.i)(b.uid);case 2:t=e.sent,c=Object(a.a)(t,1),r=c[0],n(r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(null===b||void 0===b?void 0:b.uid)&&function(){e.apply(this,arguments)}()}),[b]),{userInfo:c}}},57:function(e,t,c){"use strict";t.a=c.p+"static/media/newPost.84a497c2.png"},60:function(e,t,c){"use strict";c.d(t,"a",(function(){return d}));var n=c(1),s=c(18),r=c(19),a=c(31),l=c(9),i=c(55),o=c(57),b=c(5),u=c(58),j=c(4);function d(){var e=Object(n.useContext)(r.a).firebase,t=Object(n.useContext)(a.a).user,c=Object(i.a)().userInfo,d=Object(b.g)();return Object(j.jsx)("header",{className:"h-16 bg-white border-b border-gray-primary sticky top-0 z-50",children:Object(j.jsx)("div",{className:"container mx-auto max-w-screen-lg h-full",children:Object(j.jsxs)("div",{className:"flex justify-between h-full pr-5 pl-5",children:[Object(j.jsx)("div",{className:"text-gray-700 text-center flex  items-center align-items cursor-pointer",children:Object(j.jsx)("h1",{className:"flex justify-center w-full",children:Object(j.jsx)(s.b,{to:l.a,"aria-label":"instagram header",children:Object(j.jsx)("img",{src:u.a,alt:"instagram header",className:"mt-2 w-28"})})})}),Object(j.jsx)("div",{className:"text-gray-700 text-center flex flex-none items-center align-items",children:t?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(s.b,{to:{pathname:"".concat(l.g),state:{type:"post"}},"aria-label":"upload post",children:Object(j.jsx)("img",{src:o.a,alt:"add post",className:"w-8 mr-4 lg:mr-6 cursor-pointer"})}),Object(j.jsx)(s.b,{to:l.a,"aria-label":"timeline",children:Object(j.jsxs)("svg",{className:"w-8 mr-4 lg:mr-6 text-black-light cursor-pointer",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[Object(j.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"}),Object(j.jsx)("title",{children:"Timeline"})]})}),Object(j.jsx)("button",{type:"button",title:"Sign-out",onClick:function(){return e.auth().signOut()},onKeyDown:function(t){"enter"===t.key&&(d.push("/login"),e.auth().signOut())},children:Object(j.jsx)("svg",{className:"w-8 mr-4 lg:mr-6 text-black-light cursor-pointer",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(j.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})})}),Object(j.jsx)("div",{className:"flex items-center cursor-pointer",children:Object(j.jsx)(s.b,{to:"/p/".concat(c.username),children:Object(j.jsx)("img",{title:"".concat(c.username),className:"rounded-full h-8 w-8 flex object-cover",src:"".concat(c.avatar),alt:"".concat(c.username," profile")})})})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(s.b,{to:l.b,children:Object(j.jsx)("button",{type:"button",className:"bg-blue-primary font-bold text-sm rounded text-white w-20 h-8",children:"Login"})}),Object(j.jsx)(s.b,{to:l.f,children:Object(j.jsx)("button",{type:"button",className:"bg-white font-bold text-sm rounded text-blue-primary w-20 h-8",children:"Sign-up"})})]})})]})})})}},61:function(e,t,c){"use strict";c.d(t,"a",(function(){return u}));var n=c(1),s=c(18),r=c(19),a=c(31),l=c(9),i=c(5),o=c(58),b=c(4);function u(){var e=Object(n.useContext)(r.a).firebase,t=Object(n.useContext)(a.a).user,c=Object(i.g)();return Object(b.jsx)("header",{className:"h-12 bg-white border-b border-gray-primary sticky top-0 z-50 mobile-header relative",children:Object(b.jsx)("div",{className:"container mx-auto max-w-screen-lg h-full",children:Object(b.jsxs)("div",{className:"flex justify-end h-full pr-5 pl-5",children:[Object(b.jsx)("div",{className:"text-gray-700 text-center flex  items-center align-items cursor-pointer absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2",children:Object(b.jsx)("h1",{className:"flex justify-center w-full",children:Object(b.jsx)(s.b,{to:l.a,"aria-label":"instagram header",children:Object(b.jsx)("img",{src:o.a,alt:"instagram header",className:"mt-2 w-28"})})})}),Object(b.jsx)("div",{className:"text-gray-700 text-center flex flex-none items-center align-items",children:t?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("button",{type:"button",title:"Sign-out",onClick:function(){return e.auth().signOut()},onKeyDown:function(t){"enter"===t.key&&(c.push("/login"),e.auth().signOut())},children:Object(b.jsx)("svg",{className:"w-8  text-black-light cursor-pointer",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(b.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})})})}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(s.b,{to:l.b,children:Object(b.jsx)("button",{type:"button",className:"bg-blue-primary font-bold text-sm rounded text-white w-20 h-8",children:"Login"})}),Object(b.jsx)(s.b,{to:l.f,children:Object(b.jsx)("button",{type:"button",className:"bg-white font-bold text-sm rounded text-blue-primary w-20 h-8",children:"Sign-up"})})]})})]})})})}},62:function(e,t,c){"use strict";c.d(t,"a",(function(){return b}));var n=c(1),s=c(18),r=c(31),a=c(9),l=c(55),i=c(57),o=(c(63),c(4));function b(){var e=Object(n.useContext)(r.a).user,t=Object(l.a)().userInfo;return Object(o.jsx)("footer",{className:"h-12 bg-white border-b border-gray-primary fixed bottom-0 z-50 w-screen",children:Object(o.jsx)("div",{className:"container mx-auto max-w-screen-lg h-full",children:Object(o.jsx)("div",{className:"flex h-full px-8",children:Object(o.jsx)("div",{className:"text-gray-700 text-center flex justify-between w-screen items-center align-items",children:e?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(s.b,{to:{pathname:"".concat(a.g),state:{type:"post"}},"aria-label":"upload post",children:Object(o.jsx)("img",{src:i.a,alt:"add post",className:"w-8  lg:mr-6 cursor-pointer"})}),Object(o.jsx)(s.b,{to:a.a,"aria-label":"timeline",children:Object(o.jsxs)("svg",{className:"w-8  lg:mr-6 text-black-light cursor-pointer",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[Object(o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"}),Object(o.jsx)("title",{children:"Timeline"})]})}),Object(o.jsx)("div",{className:"flex items-center cursor-pointer",children:Object(o.jsx)(s.b,{to:"/p/".concat(t.username),children:Object(o.jsx)("img",{title:"".concat(t.username),className:"rounded-full h-8 w-8 flex object-cover",src:"".concat(t.avatar),alt:"".concat(t.username," profile")})})})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(s.b,{to:a.b,children:Object(o.jsx)("button",{type:"button",className:"bg-blue-primary font-bold text-sm rounded text-white w-20 h-8",children:"Login"})}),Object(o.jsx)(s.b,{to:a.f,children:Object(o.jsx)("button",{type:"button",className:"bg-white font-bold text-sm rounded text-blue-primary w-20 h-8",children:"Sign-up"})})]})})})})})}},63:function(e,t,c){},93:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return y}));var n=c(53),s=c.n(n),r=c(54),a=c(30),l=c(1),i=c(5),o=c(56),b=c(9),u=c(60),j=c(61),d=c(62),x=c(16),h=c(18),m=c(65),p=c.n(m),f=c(55),g=c(4);function w(e){var t=e.photosCount,c=e.followerCount,n=e.setFollowerCount,u=e.handleShowFollowers,j=e.handleShowFollowing,d=e.handleShowPhotos,x=e.profile,m=x.avatar,w=x.docId,O=x.userId,v=x.fullName,N=x.following,y=void 0===N?[]:N,A=x.followers,k=void 0===A?[]:A,W=x.username,M=Object(f.a)().userInfo,G=Object(i.g)(),S=Object(l.useState)(null),Y=Object(a.a)(S,2),I=Y[0],B=Y[1],D=Object(l.useState)(!1),F=Object(a.a)(D,2),V=F[0],L=F[1],R=(null===M||void 0===M?void 0:M.username)&&(null===M||void 0===M?void 0:M.username)!==W,J=(null===M||void 0===M?void 0:M.username)===W,C=function(){var e=Object(r.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return B((function(e){return!e})),n({followerCount:I?c-1:c+1}),e.next=4,Object(o.n)(I,M.docId,w,O,M.userId);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){var e=function(){var e=Object(r.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.l)(M.username,O);case 2:t=e.sent,B(!!t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(null===M||void 0===M?void 0:M.username)&&O&&e()}),[M.username,O]),Object(g.jsxs)("div",{className:"grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg mt-6 pb-6 border-b border-gray-primary relative",children:[Object(g.jsxs)("div",{className:"flex justify-center absolute h-16",style:{top:"-10px",right:"10px"},children:[V&&Object(g.jsx)("button",{onClick:function(){Object(o.c)(M),setTimeout((function(){G.push("/login")}),500)},className:"hover:bg-red-primary hover:text-white font-bold h-12 px-2 py-1 rounded mr-6 duration-150",title:"confirm delete",children:"delete?"}),J&&"i6isWMwVjqaouBIqqSERS7jCnyN2"!==M.userId&&Object(g.jsx)("div",{title:V?"cancel delete":"delete your profile",onClick:function(){L(!V)},children:Object(g.jsx)("button",{className:"relative font-bold text-4xl hover:text-red-primary mr-2 h-10 cursor-pointer duration-150 ".concat(V?"hover:text-green-primary":"hover:text-red-primary"),children:Object(g.jsx)("span",{className:"absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2",children:"\xd7"})})})]}),Object(g.jsxs)("div",{className:"container flex justify-center relative group h-28 w-28 lg:h-40 lg:w-40 m-auto ml-3 lg:ml-0",children:[Object(g.jsx)("img",{src:m,className:"rounded-full h-28 w-28 lg:h-40 lg:w-40 flex object-cover",alt:"".concat(W," avi")}),J&&Object(g.jsx)(h.b,{to:{pathname:"".concat(b.g),state:{type:"avatar"}},"aria-label":"upload post",className:"absolute justify-center",children:Object(g.jsx)("div",{className:" bottom-0 bg-gray-200 z-10 justify-evenly items-center h-28 w-28 lg:h-40 lg:w-40 bg-black-faded group-hover:flex hidden rounded-full",children:Object(g.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANYAAADWCAYAAACt43wuAAAACXBIWXMAAC4jAAAuIwF4pT92AAAGWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA3LTA1VDExOjI0OjQxLTA0OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wNy0wNVQxMTozOTowNS0wNDowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wNy0wNVQxMTozOTowNS0wNDowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNGFkMDdhYS1jYzBiLTM5NDItYjAzYy1hMTFmODFjN2ZkYTUiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoyNWNiZTk3ZC1hODIxLTViNGItYWExOC03NzBiYmYyZGU1NmYiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphYmIxZmUyZi1lNWFhLThlNDMtYjRlNi01OTI0MWNlNDVjZDMiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmFiYjFmZTJmLWU1YWEtOGU0My1iNGU2LTU5MjQxY2U0NWNkMyIgc3RFdnQ6d2hlbj0iMjAyMS0wNy0wNVQxMToyNDo0MS0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjM0YWQwN2FhLWNjMGItMzk0Mi1iMDNjLWExMWY4MWM3ZmRhNSIgc3RFdnQ6d2hlbj0iMjAyMS0wNy0wNVQxMTozOTowNS0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqD0V30AAAqISURBVHic7d3tcdvGGobhW2fyP3AHVAd0BaIriFxBqAoiVWC7AskViK7ASgWhKzA7EDswUoHOj6WOlROLInb3xYd5XzMezZDE7isLD3exBIGTh4cHJNX1n6ELkH5GBksKYLCkAAZLCmCw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",alt:"plus",className:"flex items-center h-16 w-16 lg:h-20 lg:w-20 opacity-60 cursor-pointer"})})})]}),Object(g.jsxs)("div",{className:"flex items-center justify-center flex-col col-span-2",children:[Object(g.jsxs)("div",{className:"container flex items-center",children:[Object(g.jsx)("p",{className:"text-2xl mr-4",children:W}),R&&Object(g.jsx)("button",{className:"bg-blue-primary font-bold text-sm rounded text-white w-20 h-8",type:"button",onClick:C,onKeyDown:function(e){"Enter"===e.key&&C()},children:I?"Unfollow":"Follow"})]}),Object(g.jsx)("div",{className:"container flex mt-2 lg:mt-4",children:void 0===k||void 0===y?Object(g.jsx)(p.a,{count:1,width:677,height:24}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("p",{className:"mr-5 lg:mr-10 cursor-pointer flex flex-col items-center lg:block text-sm lg:text-base text-gray-base lg:text-black-base leading-3",onClick:d,children:[Object(g.jsx)("span",{className:"font-bold text-black-base text-base",children:t})," "," ",1===t?"photo":"photos"]}),Object(g.jsxs)("p",{className:"mr-5 lg:mr-10 cursor-pointer flex flex-col items-center lg:block text-sm lg:text-base text-gray-base lg:text-black-base leading-3",onClick:u,children:[Object(g.jsx)("span",{className:"font-bold text-black-base text-base",children:c})," "," ",1===c?"follower":"followers"]}),Object(g.jsxs)("p",{className:"cursor-pointer flex flex-col items-center lg:block text-sm lg:text-base text-gray-base lg:text-black-base leading-3",onClick:j,children:[Object(g.jsx)("span",{className:"font-bold text-black-base text-base ",children:y.length})," ","following"]})]})}),Object(g.jsx)("div",{className:"container mt-3 lg:mt-4",children:Object(g.jsx)("p",{className:"text-sm lg:text-base font-medium",children:v||Object(g.jsx)(p.a,{count:1,height:24})})})]})]})}function O(e){var t=e.photos;return Object(g.jsxs)("div",{className:"h-16 pt-4",children:[Object(g.jsx)("div",{className:"grid grid-cols-3 gap-1 lg:gap-8 mt-0 lg:mt-4 mb-12",children:t?t.length>0?t.map((function(e){return Object(g.jsx)("div",{children:Object(g.jsx)(h.b,{to:"/post/".concat(e.docId),children:Object(g.jsxs)("div",{className:"relative group",children:[Object(g.jsx)("img",{src:e.imageSrc,alt:e.caption}),Object(g.jsxs)("div",{className:"absolute bottom-0 left-0 bg-gray-200 z-10 w-full justify-evenly items-center h-full bg-black-faded group-hover:flex hidden",children:[Object(g.jsxs)("p",{className:"flex items-center text-white font-bold",children:[Object(g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-8 mr-4",children:Object(g.jsx)("path",{fillRule:"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",clipRule:"evenodd"})}),e.likes.length]}),Object(g.jsxs)("p",{className:"flex items-center text-white font-bold",children:[Object(g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-8 mr-4",children:Object(g.jsx)("path",{fillRule:"evenodd",d:"M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",clipRule:"evenodd"})}),e.comments.length]})]})]})})},e.docId)})):null:Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(p.a,{count:1,width:"32vw",height:"32vw",style:{maxHeight:"320px",maxWidth:"320px",borderRadius:"0px"}}),Object(g.jsx)(p.a,{count:1,width:"32vw",height:"32vw",style:{maxHeight:"320px",maxWidth:"320px",borderRadius:"0px"}}),Object(g.jsx)(p.a,{count:1,width:"32vw",height:"32vw",style:{maxHeight:"320px",maxWidth:"320px",borderRadius:"0px"}}),Object(g.jsx)(p.a,{count:1,width:"32vw",height:"32vw",style:{maxHeight:"320px",maxWidth:"320px",borderRadius:"0px"}}),Object(g.jsx)(p.a,{count:1,width:"32vw",height:"32vw",style:{maxHeight:"320px",maxWidth:"320px",borderRadius:"0px"}}),Object(g.jsx)(p.a,{count:1,width:"32vw",height:"32vw",style:{maxHeight:"320px",maxWidth:"320px",borderRadius:"0px"}}),Object(g.jsx)(p.a,{count:1,width:"32vw",height:"32vw",style:{maxHeight:"320px",maxWidth:"320px",borderRadius:"0px"}}),Object(g.jsx)(p.a,{count:1,width:"32vw",height:"32vw",style:{maxHeight:"320px",maxWidth:"320px",borderRadius:"0px"}}),Object(g.jsx)(p.a,{count:1,width:"32vw",height:"32vw",style:{maxHeight:"320px",maxWidth:"320px",borderRadius:"0px"}}),Object(g.jsx)(p.a,{count:1,width:"32vw",height:"32vw",style:{maxHeight:"320px",maxWidth:"320px",borderRadius:"0px"}}),Object(g.jsx)(p.a,{count:1,width:"32vw",height:"32vw",style:{maxHeight:"320px",maxWidth:"320px",borderRadius:"0px"}}),Object(g.jsx)(p.a,{count:1,width:"32vw",height:"32vw",style:{maxHeight:"320px",maxWidth:"320px",borderRadius:"0px"}})]})}),!t||0===t.length&&Object(g.jsx)("p",{className:"text-center text-2xl",children:"No Posts Yet"}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{})]})}function v(e){var t=e.follows,c=e.title;return Object(g.jsxs)("div",{className:"flex flex-col justify-center m-auto items-center",children:[Object(g.jsx)("p",{className:"text-center text-2xl m-3",children:c}),t?t.length>0?t.map((function(e){return Object(g.jsx)("div",{children:Object(g.jsx)(h.b,{to:"/p/".concat(e.username),children:Object(g.jsxs)("div",{className:"flex items-center justify-start w-64 hover:bg-gray-primary bg-gray-light p-2 m-1 rounded",children:[Object(g.jsx)("img",{src:e.avatar,className:"rounded-full h-12 w-12 flex mr-3 object-cover",alt:"".concat(e.username," avi")}),Object(g.jsxs)("div",{className:"col-span-3",children:[Object(g.jsx)("p",{className:"text-sm font-bold",children:e.username}),Object(g.jsx)("p",{className:"text-sm text-gray-dark",children:e.fullName})]})]})})},e.userId)})):null:Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"flex items-center justify-start w-64",children:Object(g.jsx)(p.a,{count:12,width:256,height:64,className:"m-1"})})}),!t||0===t.length&&Object(g.jsx)("p",{className:"text-center text-2xl",children:"..."})]})}function N(e){var t=e.user,c=Object(l.useState)(!0),n=Object(a.a)(c,2),i=n[0],b=n[1],u=Object(l.useState)(!1),j=Object(a.a)(u,2),d=j[0],h=j[1],m=Object(l.useState)(!1),p=Object(a.a)(m,2),f=p[0],N=p[1],y=function(e){var t=Object(l.useState)(null),c=Object(a.a)(t,2),n=c[0],i=c[1];return Object(l.useEffect)((function(){function t(){return(t=Object(r.a)(s.a.mark((function t(){var c,n,r,l;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.i)(e.userId);case 2:if(c=t.sent,n=Object(a.a)(c,1),r=n[0].following,l=[],!(r.length>0)){t.next=10;break}return t.next=9,Object(o.e)(r);case 9:l=t.sent;case 10:i(l);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),{following:n}}(t).following,A=function(e){var t=Object(l.useState)(null),c=Object(a.a)(t,2),n=c[0],i=c[1];return Object(l.useEffect)((function(){function t(){return(t=Object(r.a)(s.a.mark((function t(){var c,n,r,l;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.i)(e.userId);case 2:if(c=t.sent,n=Object(a.a)(c,1),r=n[0].followers,l=[],void 0!==r){t.next=10;break}l=[],t.next=14;break;case 10:if(!(r.length>0)){t.next=14;break}return t.next=13,Object(o.e)(r);case 13:l=t.sent;case 14:i(l);case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),{followers:n}}(t).followers,k=function(){b(!0),h(!1),N(!1)};Object(l.useEffect)((function(){k()}),[t]);var W=Object(l.useReducer)((function(e,t){return Object(x.a)(Object(x.a)({},e),t)}),{profile:{},photosCollection:null,followerCount:0}),M=Object(a.a)(W,2),G=M[0],S=G.profile,Y=G.photosCollection,I=G.followerCount,B=M[1];return Object(l.useEffect)((function(){function e(){return(e=Object(r.a)(s.a.mark((function e(){var c,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.k)(t.username);case 2:c=e.sent,n=0,void 0===t.followers||(n=t.followers.length),B({profile:t,photosCollection:c.sort((function(e,t){return t.dateCreated-e.dateCreated})),followerCount:n});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.username&&function(){e.apply(this,arguments)}()}),[t]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(w,{photosCount:Y?Y.length:0,profile:S,followerCount:I,setFollowerCount:B,handleShowFollowers:function(){b(!1),h(!0),N(!1)},handleShowFollowing:function(){b(!1),h(!1),N(!0)},handleShowPhotos:k}),i&&Object(g.jsx)(O,{photos:Y}),d&&Object(g.jsx)(v,{follows:A,title:"Followers"}),f&&Object(g.jsx)(v,{follows:y,title:"Following"})]})}function y(){var e=Object(i.i)().username,t=Object(l.useState)(null),c=Object(a.a)(t,2),n=c[0],x=c[1],h=Object(i.g)();return Object(l.useEffect)((function(){function t(){return(t=Object(r.a)(s.a.mark((function t(){var c,n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.j)(e);case 2:c=t.sent,n=Object(a.a)(c,1),(r=n[0]).userId?x(r):h.push(b.c);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}document.title="".concat(e," - Instagram"),function(){t.apply(this,arguments)}()}),[e,h]),(null===n||void 0===n?void 0:n.username)?Object(g.jsxs)("div",{className:"bg-gray-background",children:[Object(g.jsx)(u.a,{}),Object(g.jsx)(j.a,{}),Object(g.jsx)("div",{className:"mx-auto max-w-screen-lg",children:Object(g.jsx)(N,{user:n})}),Object(g.jsx)(d.a,{})]}):null}}}]);
//# sourceMappingURL=10.c5d0f41f.chunk.js.map