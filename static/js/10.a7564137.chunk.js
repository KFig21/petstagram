(this.webpackJsonpinstagram_clone=this.webpackJsonpinstagram_clone||[]).push([[10],{54:function(e,t,r){e.exports=r(58)},55:function(e,t,r){"use strict";function n(e,t,r,n,a,o,c){try{var s=e[o](c),i=s.value}catch(u){return void r(u)}s.done?t(i):Promise.resolve(i).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,o){var c=e.apply(t,r);function s(e){n(c,a,o,s,i,"next",e)}function i(e){n(c,a,o,s,i,"throw",e)}s(void 0)}))}}r.d(t,"a",(function(){return a}))},56:function(e,t,r){"use strict";r.d(t,"d",(function(){return l})),r.d(t,"j",(function(){return d})),r.d(t,"i",(function(){return h})),r.d(t,"h",(function(){return b})),r.d(t,"p",(function(){return v})),r.d(t,"o",(function(){return x})),r.d(t,"f",(function(){return j})),r.d(t,"e",(function(){return k})),r.d(t,"k",(function(){return L})),r.d(t,"l",(function(){return N})),r.d(t,"n",(function(){return P})),r.d(t,"q",(function(){return C})),r.d(t,"m",(function(){return A})),r.d(t,"g",(function(){return F})),r.d(t,"b",(function(){return M})),r.d(t,"a",(function(){return D})),r.d(t,"c",(function(){return Y}));var n=r(30),a=r(59),o=r(16),c=r(54),s=r.n(c),i=r(55),u=r(25);function l(e){return f.apply(this,arguments)}function f(){return(f=Object(i.a)(s.a.mark((function e(t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.firestore().collection("users").where("username","==",t).get();case 2:return r=e.sent,e.abrupt("return",r.docs.length>0);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return p.apply(this,arguments)}function p(){return(p=Object(i.a)(s.a.mark((function e(t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.firestore().collection("users").where("username","==",t).get();case 2:return r=e.sent,e.abrupt("return",r.docs.map((function(e){return Object(o.a)(Object(o.a)({},e.data()),{},{docId:e.id})})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return m.apply(this,arguments)}function m(){return(m=Object(i.a)(s.a.mark((function e(t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.firestore().collection("users").where("userId","==",t).get();case 2:return r=e.sent,e.abrupt("return",r.docs.map((function(e){return Object(o.a)(Object(o.a)({},e.data()),{},{docId:e.id})})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e,t){return y.apply(this,arguments)}function y(){return(y=Object(i.a)(s.a.mark((function e(t,r){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.firestore().collection("users").limit(10).get();case 2:return n=e.sent,e.abrupt("return",n.docs.map((function(e){return Object(o.a)(Object(o.a)({},e.data()),{},{docId:e.id})})).filter((function(e){return e.userId!==t&&!r.includes(e.userId)})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,t,r){return g.apply(this,arguments)}function g(){return(g=Object(i.a)(s.a.mark((function e(t,r,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.b.firestore().collection("users").doc(t).update({following:n?u.a.arrayRemove(r):u.a.arrayUnion(r)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e,t,r){return w.apply(this,arguments)}function w(){return(w=Object(i.a)(s.a.mark((function e(t,r,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.b.firestore().collection("users").doc(t).update({followers:n?u.a.arrayRemove(r):u.a.arrayUnion(r)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e,t,r){return O.apply(this,arguments)}function O(){return(O=Object(i.a)(s.a.mark((function e(t,r,n){var c,l,f,d,p,m,b;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.firestore().collection("photos").where("userId","in",r).get();case 2:return c=e.sent,l=c.docs.map((function(e){return Object(o.a)(Object(o.a)({},e.data()),{},{docId:e.id})})),e.next=6,Promise.all(l.map(function(){var e=Object(i.a)(s.a.mark((function e(r){var n,a,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=!1,r.likes.includes(t)&&(n=!0),e.next=4,h(r.userId);case 4:return a=e.sent,c=a[0].username,e.abrupt("return",Object(o.a)(Object(o.a)({username:c},r),{},{userLikedPhoto:n}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:return f=e.sent,e.next=9,u.b.firestore().collection("photos").where("username","==",n).get();case 9:return d=e.sent,p=d.docs.map((function(e){return Object(o.a)(Object(o.a)({},e.data()),{},{docId:e.id})})),e.next=13,Promise.all(p.map(function(){var e=Object(i.a)(s.a.mark((function e(r){var n,a,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=!1,r.likes.includes(t)&&(n=!0),e.next=4,h(r.userId);case 4:return a=e.sent,c=a[0].username,e.abrupt("return",Object(o.a)(Object(o.a)({username:c},r),{},{userLikedPhoto:n}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 13:return m=e.sent,(b=[].concat(Object(a.a)(f),Object(a.a)(m))).sort((function(e,t){return t.dateCreated-e.dateCreated})),e.abrupt("return",b);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return I.apply(this,arguments)}function I(){return(I=Object(i.a)(s.a.mark((function e(t){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.firestore().collection("users").where("userId","in",t).get();case 2:return r=e.sent,n=r.docs.map((function(e){return Object(o.a)({},e.data())})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){return E.apply(this,arguments)}function E(){return(E=Object(i.a)(s.a.mark((function e(t){var r,a,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t);case 2:return r=e.sent,a=Object(n.a)(r,1),c=a[0],e.next=7,u.b.firestore().collection("photos").where("userId","==",c.userId).get();case 7:return i=e.sent,e.abrupt("return",i.docs.map((function(e){return Object(o.a)(Object(o.a)({},e.data()),{},{docId:e.id,username:t})})));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e,t){return S.apply(this,arguments)}function S(){return(S=Object(i.a)(s.a.mark((function e(t,r){var a,c,i,l,f;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.firestore().collection("users").where("username","==",t).where("following","array-contains",r).get();case 2:return a=e.sent,c=a.docs.map((function(e){return Object(o.a)(Object(o.a)({},e.data()),{},{docId:e.id})})),i=Object(n.a)(c,1),l=i[0],f=void 0===l?{}:l,e.abrupt("return",f.userId);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e,t,r,n,a){return _.apply(this,arguments)}function _(){return(_=Object(i.a)(s.a.mark((function e(t,r,n,a,o){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(r,a,t);case 2:return e.next=4,x(n,o,t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,t,r){return R.apply(this,arguments)}function R(){return(R=Object(i.a)(s.a.mark((function e(t,r,n){var a,o,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.avatarStorageName,o="".concat(Math.round(1e6*Math.random()),".").concat(n),u.b.firestore().collection("users").doc(t.docId).update({avatar:"https://firebasestorage.googleapis.com/v0/b/instagram-clone-fb42d.appspot.com/o/".concat(o,"?alt=media"),avatarStorageName:"".concat(o)}),c=u.b.storage().ref(),c.child(o).putString(r,"data_url"),i=c.child("".concat(a)),"no-img.png"!==a&&i.delete().then((function(){console.log("file successfully deleted")})).catch((function(e){console.log(e)}));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e,t,r,n){return z.apply(this,arguments)}function z(){return(z=Object(i.a)(s.a.mark((function e(t,r,n,a){var o,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o="".concat(Math.round(1e6*Math.random()),".").concat(a),c=u.b.firestore().collection("photos").doc(),console.log("fileName",a),c.set({caption:n,comments:[],likes:[],docId:c.id,userId:t.userId,username:t.username,dateCreated:Date.now(),imageSrc:"https://firebasestorage.googleapis.com/v0/b/instagram-clone-fb42d.appspot.com/o/".concat(o,"?alt=media"),photoStorageName:o}),i=u.b.storage().ref(),i.child(o).putString(r,"data_url");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e,t){return G.apply(this,arguments)}function G(){return(G=Object(i.a)(s.a.mark((function e(t,r){var n,a,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.firestore().collection("photos").where("docId","==",t).get();case 2:return n=e.sent,a=n.docs.map((function(e){return Object(o.a)(Object(o.a)({},e.data()),{},{docId:e.id})})),e.next=6,Promise.all(a.map(function(){var e=Object(i.a)(s.a.mark((function e(t){var n,a,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=!1,t.likes.includes(r)&&(n=!0),e.next=4,h(t.userId);case 4:return a=e.sent,c=a[0].username,e.abrupt("return",Object(o.a)(Object(o.a)({username:c},t),{},{userLikedPhoto:n}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e,t){return T.apply(this,arguments)}function T(){return(T=Object(i.a)(s.a.mark((function e(t,r){var n,a,o,c,i,l,f,d,p;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.firestore().collection("photos").doc(t).get();case 2:return n=e.sent,e.next=5,n.data().comments;case 5:return a=e.sent,e.next=8,n.data().likes;case 8:if(void 0===(o=e.sent)){e.next=20;break}c=0;case 11:if(!(c<o.length)){e.next=20;break}return e.next=14,h(o[c]);case 14:return i=e.sent,e.next=17,u.b.firestore().collection("users").doc(i[0].docId).update({likes:u.a.arrayRemove(t)});case 17:c++,e.next=11;break;case 20:if(void 0===a){e.next=28;break}l=s.a.mark((function e(t){var r,n,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a[t].commentId,e.next=3,u.b.firestore().collection("users").doc(a[t].userDocId).get();case 3:return n=(n=e.sent).data(),o=n.comments.filter((function(e){return e.commentId!==r})),e.next=8,u.b.firestore().collection("users").doc(a[t].userDocId).set({comments:o},{merge:!0});case 8:case"end":return e.stop()}}),e)})),f=0;case 23:if(!(f<a.length)){e.next=28;break}return e.delegateYield(l(f),"t0",25);case 25:f++,e.next=23;break;case 28:return e.next=30,u.b.firestore().collection("photos").doc(t).delete().then((function(){console.log("Document successfully deleted!")})).catch((function(e){console.error("Error removing document: ",e)}));case 30:d=u.b.storage().ref(),p=d.child("".concat(r)),"no-img.png"!==r&&p.delete().then((function(){console.log("file successfully deleted")})).catch((function(e){console.log(e)}));case 33:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e,t,r,n){return U.apply(this,arguments)}function U(){return(U=Object(i.a)(s.a.mark((function e(t,r,n,a){var o,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=r.filter((function(e){return e.commentId!==n})),u.b.firestore().collection("photos").doc(t).set({comments:o},{merge:!0}),c=a.comments.filter((function(e){return e.commentId!==n})),u.b.firestore().collection("users").doc(a.docId).set({comments:c},{merge:!0});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(e){return J.apply(this,arguments)}function J(){return(J=Object(i.a)(s.a.mark((function e(t){var r,n,a,c,i,l,f,d,p,h,m,b,y,v,g,x,w,j,O;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.userId,n=t.following,a=t.followers,c=t.docId,i=t.comments,l=t.likes,void 0===n){e.next=12;break}f=0;case 3:if(!(f<n.length)){e.next=12;break}return e.next=6,u.b.firestore().collection("users").where("userId","==",n[f]).get();case 6:d=(d=e.sent).docs.map((function(e){return Object(o.a)(Object(o.a)({},e.data()),{},{docId:e.id})})),u.b.firestore().collection("users").doc(d[0].docId).update({followers:u.a.arrayRemove(r)});case 9:f++,e.next=3;break;case 12:if(void 0===a){e.next=23;break}p=0;case 14:if(!(p<a.length)){e.next=23;break}return e.next=17,u.b.firestore().collection("users").where("userId","==",a[p]).get();case 17:h=(h=e.sent).docs.map((function(e){return Object(o.a)(Object(o.a)({},e.data()),{},{docId:e.id})})),u.b.firestore().collection("users").doc(h[0].docId).update({following:u.a.arrayRemove(r)});case 20:p++,e.next=14;break;case 23:if(void 0===i){e.next=36;break}m=0;case 25:if(!(m<i.length)){e.next=36;break}return b=i[m].photoDocId,y=i[m].commentId,e.next=30,F(b,r);case 30:v=e.sent,g=v[0].comments,D(b,g,y,t);case 33:m++,e.next=25;break;case 36:if(void 0===l){e.next=46;break}x=0;case 38:if(!(x<l.length)){e.next=46;break}return e.next=41,u.b.firestore().collection("photos").doc(l[x]).update({likes:u.a.arrayRemove(r)});case 41:return e.next=43,u.b.firestore().collection("users").doc(c).update({likes:u.a.arrayRemove(l[x])});case 43:x++,e.next=38;break;case 46:return e.next=48,u.b.firestore().collection("photos").where("userId","==",r).get();case 48:for(w=(w=e.sent).docs.map((function(e){return Object(o.a)(Object(o.a)({},e.data()),{},{docId:e.id})})),j=0;j<w.length;j++)O=w[j].photoStorageName,M(w[j].docId,O);return u.b.auth().currentUser.delete().then((function(){console.log("deleted from auth")})).catch((function(e){console.log(e)})),e.next=55,u.b.firestore().collection("users").doc(c).delete();case 55:u.b.auth().signOut();case 56:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},58:function(e,t,r){var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function i(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(_){i=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var a=t&&t.prototype instanceof b?t:b,o=Object.create(a.prototype),c=new N(n||[]);return o._invoke=function(e,t,r){var n=f;return function(a,o){if(n===p)throw new Error("Generator is already running");if(n===h){if("throw"===a)throw o;return P()}for(r.method=a,r.arg=o;;){var c=r.delegate;if(c){var s=I(c,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var i=l(e,t,r);if("normal"===i.type){if(n=r.done?h:d,i.arg===m)continue;return{value:i.arg,done:r.done}}"throw"===i.type&&(n=h,r.method="throw",r.arg=i.arg)}}}(e,r,c),o}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(_){return{type:"throw",arg:_}}}e.wrap=u;var f="suspendedStart",d="suspendedYield",p="executing",h="completed",m={};function b(){}function y(){}function v(){}var g={};g[o]=function(){return this};var x=Object.getPrototypeOf,w=x&&x(x(S([])));w&&w!==r&&n.call(w,o)&&(g=w);var j=v.prototype=b.prototype=Object.create(g);function O(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function r(a,o,c,s){var i=l(e[a],e,o);if("throw"!==i.type){var u=i.arg,f=u.value;return f&&"object"===typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,c,s)}),(function(e){r("throw",e,c,s)})):t.resolve(f).then((function(e){u.value=e,c(u)}),(function(e){return r("throw",e,c,s)}))}s(i.arg)}var a;this._invoke=function(e,n){function o(){return new t((function(t,a){r(e,n,t,a)}))}return a=a?a.then(o,o):o()}}function I(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,I(e,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=l(n,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var o=a.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function S(e){if(e){var r=e[o];if(r)return r.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var a=-1,c=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return c.next=c}}return{next:P}}function P(){return{value:t,done:!0}}return y.prototype=j.constructor=v,v.constructor=y,y.displayName=i(v,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,i(e,s,"GeneratorFunction")),e.prototype=Object.create(j),e},e.awrap=function(e){return{__await:e}},O(k.prototype),k.prototype[c]=function(){return this},e.AsyncIterator=k,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var c=new k(u(t,r,n,a),o);return e.isGeneratorFunction(r)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},O(j),i(j,s,"Generator"),j[o]=function(){return this},j.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=S,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(E),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return s.type="throw",s.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],s=c.completion;if("root"===c.tryLoc)return a("end");if(c.tryLoc<=this.prev){var i=n.call(c,"catchLoc"),u=n.call(c,"finallyLoc");if(i&&u){if(this.prev<c.catchLoc)return a(c.catchLoc,!0);if(this.prev<c.finallyLoc)return a(c.finallyLoc)}else if(i){if(this.prev<c.catchLoc)return a(c.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return a(c.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),E(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;E(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:S(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},59:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(22);var a=r(32);function o(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},67:function(e,t,r){"use strict";t.a=r.p+"static/media/iphone-with-pets.2d7e2155.png"},88:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return m}));var n=r(54),a=r.n(n),o=r(55),c=r(30),s=r(1),i=r(5),u=r(18),l=r(19),f=r(9),d=r(56),p=r(67),h=r(4);function m(){var e=Object(i.g)(),t=Object(s.useContext)(l.a).firebase,r=Object(s.useState)(""),n=Object(c.a)(r,2),m=n[0],b=n[1],y=Object(s.useState)(""),v=Object(c.a)(y,2),g=v[0],x=v[1],w=Object(s.useState)(""),j=Object(c.a)(w,2),O=j[0],k=j[1],I=Object(s.useState)(""),L=Object(c.a)(I,2),E=L[0],N=L[1],S=Object(s.useState)(""),P=Object(c.a)(S,2),_=P[0],C=P[1],R=""===E||""===O,A=function(){var r=Object(o.a)(a.a.mark((function r(n){var o,c;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.preventDefault(),r.next=3,Object(d.d)(m);case 3:if(r.sent){r.next=26;break}return r.prev=5,r.next=8,t.auth().createUserWithEmailAndPassword(O,E);case 8:return o=r.sent,r.next=11,o.user.updateProfile({displayName:m});case 11:return r.next=13,t.firestore().collection("users").doc();case 13:(c=r.sent).set({avatar:"https://firebasestorage.googleapis.com/v0/b/instagram-clone-fb42d.appspot.com/o/no-img.png?alt=media",userId:o.user.uid,username:m,fullName:g,emailAddress:O.toLowerCase(),following:[],dateCreated:Date.now(),docId:c.id}),e.push(f.a),r.next=24;break;case 18:r.prev=18,r.t0=r.catch(5),x(""),k(""),N(""),C(r.t0.message);case 24:r.next=27;break;case 26:C("That username is already taken");case 27:case"end":return r.stop()}}),r,null,[[5,18]])})));return function(e){return r.apply(this,arguments)}}();return Object(s.useEffect)((function(){document.title="Sign-up - Petstagram"}),[]),Object(h.jsxs)("div",{className:"container flex mx-auto max-w-screen-md items-center h-screen",children:[Object(h.jsx)("div",{className:"hidden lg:flex w-1/2 justify-end",children:Object(h.jsx)("img",{src:p.a,className:"max-h-96",alt:"iphone with ig app"})}),Object(h.jsxs)("div",{className:"flex flex-col p-3 lg:p-0 lg:w-1/2",children:[Object(h.jsxs)("div",{className:"flex flex-col items-center bg-white p-4 border border-gray-primary mb-4",children:[Object(h.jsx)("h1",{className:"flex justify-center w-full",children:Object(h.jsx)("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1250.000000 350.000000",preserveAspectRatio:"xMidYMid meet",className:"mt-2 w-6/12 mb-4",children:Object(h.jsxs)("g",{transform:"translate(0.000000,350.000000) scale(0.100000,-0.100000)",fill:"#231F20",stroke:"none",children:[Object(h.jsx)("path",{d:"M774 3359 c-303 -50 -550 -278 -660 -606 -35 -106 -45 -299 -19 -389\r\n25 -89 62 -149 130 -213 71 -65 143 -104 189 -99 46 4 46 41 2 120 -50 90 -66\r\n163 -67 299 0 139 13 218 53 320 36 93 85 158 163 221 61 49 80 57 86 36 2 -7\r\n1 -413 -2 -903 -6 -987 -3 -941 -74 -1090 -19 -39 -35 -86 -35 -104 0 -30 1\r\n-31 45 -31 65 0 130 37 202 114 132 141 172 292 173 646 l0 195 93 17 c183 34\r\n373 111 503 204 129 91 231 240 269 389 20 78 20 269 -1 355 -61 261 -288 454\r\n-604 514 -90 17 -356 20 -446 5z m431 -245 c155 -40 273 -167 314 -338 15 -63\r\n15 -205 0 -276 -29 -138 -123 -266 -238 -324 -110 -56 -275 -83 -302 -49 -11\r\n13 -15 109 -17 510 l-3 493 94 0 c52 0 119 -7 152 -16z"}),Object(h.jsx)("path",{d:"M2933 3313 c-15 -23 -19 -56 -21 -226 l-4 -199 -163 7 -163 7 -18\r\n-28 c-22 -33 -32 -151 -15 -183 11 -20 19 -21 178 -21 l166 0 -7 -392 c-8\r\n-435 -1 -390 -88 -536 -119 -198 -250 -311 -397 -343 -130 -28 -237 73 -277\r\n260 -18 88 -18 101 5 101 39 0 208 62 278 102 39 22 98 67 131 100 101 101\r\n142 199 142 343 0 98 -18 141 -87 212 -65 67 -143 93 -277 93 -152 0 -253 -46\r\n-365 -165 -141 -151 -211 -361 -211 -632 0 -165 18 -261 69 -368 65 -136 157\r\n-220 292 -265 55 -19 81 -21 179 -18 126 4 182 21 297 89 77 46 207 177 270\r\n273 l52 78 11 -43 c46 -184 112 -304 194 -354 42 -26 61 -30 131 -33 73 -4 88\r\n-1 136 23 73 37 188 156 271 280 66 100 278 477 278 495 0 21 19 6 125 -98\r\n134 -133 166 -186 173 -287 4 -58 0 -81 -16 -118 -48 -109 -153 -114 -291 -13\r\n-75 55 -94 56 -145 5 -52 -53 -84 -128 -70 -167 27 -76 255 -143 436 -128 244\r\n20 417 153 568 438 41 78 50 88 50 63 1 -64 41 -221 74 -291 38 -81 100 -149\r\n161 -179 61 -29 171 -33 223 -6 87 44 173 146 234 276 l32 69 16 -50 c45 -131\r\n123 -234 215 -282 47 -25 58 -27 175 -26 105 0 134 4 183 23 70 27 162 113\r\n195 181 14 29 22 38 22 24 0 -34 49 -121 88 -155 87 -76 216 -102 308 -60 58\r\n27 121 86 156 148 17 29 31 53 33 53 2 0 17 -23 35 -50 44 -69 111 -125 179\r\n-151 48 -18 70 -20 161 -16 141 7 202 30 281 107 l59 58 0 -47 -1 -46 -176\r\n-160 c-315 -286 -417 -424 -430 -584 -14 -171 74 -298 246 -351 132 -41 277\r\n-17 386 65 100 75 144 141 188 281 42 134 57 267 57 518 l0 227 91 111 c111\r\n136 169 222 240 353 114 212 219 463 219 528 l0 27 110 0 c61 0 110 -4 110 -8\r\n0 -5 -9 -51 -20 -103 -43 -209 -53 -458 -25 -605 60 -317 330 -470 541 -309\r\n18 14 50 51 72 84 l40 60 31 -50 c74 -113 167 -159 325 -159 175 0 298 56 365\r\n166 14 24 28 44 31 44 4 0 11 -15 18 -33 19 -54 78 -113 144 -146 50 -25 73\r\n-31 128 -31 113 0 189 51 251 170 l23 45 11 -85 c10 -81 11 -85 45 -104 27\r\n-16 57 -22 137 -24 97 -4 103 -3 126 20 23 23 24 32 31 194 9 221 21 315 56\r\n449 48 186 134 392 166 402 8 3 14 -39 18 -134 14 -289 44 -560 72 -664 18\r\n-63 60 -121 106 -145 40 -20 141 -21 171 -1 21 13 24 27 35 158 13 155 46 330\r\n87 474 28 95 111 313 126 330 5 5 9 -97 9 -248 0 -469 37 -639 166 -756 118\r\n-108 291 -110 384 -5 65 75 119 228 123 352 2 56 -1 66 -22 83 -41 33 -61 9\r\n-93 -110 -30 -109 -55 -166 -84 -192 -79 -69 -157 10 -191 192 -14 77 -17 361\r\n-9 826 1 66 -21 98 -101 140 -125 67 -221 73 -261 15 -56 -80 -185 -484 -223\r\n-697 l-13 -70 -7 41 c-10 57 -29 386 -29 509 0 87 -3 108 -23 145 -42 79 -192\r\n139 -269 107 -31 -13 -43 -28 -77 -99 -22 -46 -70 -173 -108 -283 l-68 -200\r\n-3 259 c-2 221 -5 262 -18 277 -19 21 -133 49 -198 49 -33 0 -48 -5 -54 -17\r\n-6 -10 -13 -216 -17 -458 -3 -242 -11 -458 -16 -480 -38 -159 -133 -295 -206\r\n-295 -34 0 -80 46 -98 98 -30 87 -39 316 -28 697 7 224 7 357 1 368 -16 31\r\n-96 60 -179 65 -71 4 -77 3 -93 -19 -9 -13 -16 -37 -16 -53 l0 -29 -51 51\r\nc-78 78 -124 97 -239 97 -101 0 -139 -13 -218 -73 -81 -62 -175 -233 -218\r\n-397 -24 -91 -27 -118 -28 -300 0 -110 1 -232 4 -271 5 -63 2 -76 -25 -129\r\n-34 -67 -65 -93 -118 -102 -35 -5 -41 -2 -80 38 -50 52 -73 118 -88 246 -17\r\n142 1 316 56 562 39 171 31 236 -34 274 -50 29 -93 30 -237 3 -77 -15 -151\r\n-29 -166 -31 l-28 -4 2 68 c3 108 -41 156 -141 155 -110 -2 -177 -66 -201\r\n-194 -12 -62 4 -120 48 -170 l35 -42 -13 -51 c-19 -77 -77 -230 -126 -332 -44\r\n-94 -149 -272 -184 -315 l-21 -25 3 495 3 495 -49 24 c-32 16 -72 26 -121 29\r\n-64 4 -75 2 -94 -17 -13 -13 -21 -34 -21 -56 l0 -34 -45 48 c-24 26 -68 61\r\n-97 77 -48 26 -62 29 -148 29 -79 0 -103 -4 -142 -23 -133 -66 -240 -229 -298\r\n-455 -32 -126 -46 -328 -32 -461 10 -94 10 -120 -2 -153 -25 -71 -54 -119 -92\r\n-153 -32 -27 -42 -31 -73 -26 -44 7 -85 49 -101 103 -28 100 -33 205 -27 625\r\nl6 427 -26 21 c-35 27 -116 50 -178 50 -63 0 -85 -19 -85 -74 l0 -38 -44 49\r\nc-24 27 -68 62 -98 78 -48 27 -61 30 -148 30 -112 0 -161 -18 -236 -87 -142\r\n-130 -222 -346 -243 -660 -6 -87 -17 -153 -30 -191 -65 -187 -190 -319 -269\r\n-284 -29 13 -68 95 -83 177 -20 106 -6 1057 16 1079 4 3 92 8 197 11 l191 5\r\n20 27 c26 35 35 129 15 146 -9 7 -90 16 -214 23 -109 6 -202 14 -205 17 -3 4\r\n-2 84 3 177 4 94 6 179 3 191 -6 26 -76 57 -185 80 -72 16 -81 16 -103 1 -31\r\n-20 -35 -42 -43 -260 l-7 -178 -156 2 c-148 1 -156 0 -173 -21 -35 -43 -51\r\n-163 -26 -188 8 -8 47 -12 108 -12 52 0 125 -3 163 -7 l67 -6 0 -352 c0 -331\r\n-1 -357 -21 -421 -36 -117 -113 -248 -187 -318 l-30 -28 5 59 c6 67 -15 155\r\n-50 213 -39 64 -110 131 -257 243 -80 61 -149 114 -154 118 -5 5 8 34 33 68\r\n57 82 103 184 109 241 9 94 -43 140 -156 140 -224 0 -389 -293 -263 -467 l27\r\n-37 -42 -77 c-24 -42 -75 -139 -114 -215 -141 -272 -233 -384 -317 -384 -43 0\r\n-68 26 -88 92 -19 61 -20 194 -9 766 l7 362 198 0 199 0 20 41 c15 29 20 55\r\n18 92 -3 50 -4 51 -38 58 -19 4 -115 11 -213 15 l-178 7 7 192 7 193 -24 15\r\nc-43 28 -176 67 -228 67 -44 0 -53 -4 -68 -27z m-480 -881 c15 -15 29 -42 33\r\n-59 24 -119 -202 -401 -351 -439 l-28 -7 5 89 c11 174 113 372 223 432 38 21\r\n89 14 118 -16z m3626 -57 c105 -54 155 -251 132 -523 -14 -159 -31 -225 -78\r\n-310 -50 -89 -84 -126 -145 -156 -65 -32 -89 -33 -126 -1 -75 63 -117 247\r\n-109 475 10 277 74 462 179 513 41 21 110 22 147 2z m1371 -7 c79 -54 116\r\n-204 107 -438 -7 -187 -28 -284 -80 -379 -53 -97 -86 -134 -149 -165 -68 -34\r\n-91 -33 -132 8 -79 80 -120 304 -97 532 24 242 91 394 196 448 45 24 115 20\r\n155 -6z m2337 3 c39 -24 79 -92 101 -168 22 -76 23 -386 3 -488 -39 -197 -112\r\n-318 -209 -345 -70 -19 -97 -13 -135 29 -74 82 -103 227 -94 475 10 284 60\r\n427 172 497 40 25 120 25 162 0z m-2200 -1538 c-9 -286 -31 -385 -102 -462\r\n-47 -51 -91 -71 -152 -71 -53 0 -88 18 -124 63 -50 65 2 231 121 389 50 66\r\n246 278 258 278 2 0 2 -89 -1 -197z"})]})})}),_&&Object(h.jsx)("p",{className:"mb-4 text-xs text-red-primary",children:_}),Object(h.jsxs)("form",{onSubmit:A,method:"POST",children:[Object(h.jsx)("input",{"aria-label":"Enter your username",type:"test",placeholder:"Username",className:"test-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2",onChange:function(e){var t=e.target;return b(t.value)},value:m}),Object(h.jsx)("input",{"aria-label":"Enter your full name",type:"test",placeholder:"Full name",className:"test-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2",onChange:function(e){var t=e.target;return x(t.value)},value:g}),Object(h.jsx)("input",{"aria-label":"Enter your email address",type:"test",placeholder:"Email address",className:"test-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2",onChange:function(e){var t=e.target;return k(t.value)},value:O}),Object(h.jsx)("input",{"aria-label":"Enter your password",type:"password",placeholder:"Password",className:"test-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2",onChange:function(e){var t=e.target;return N(t.value)},value:E}),Object(h.jsx)("button",{disabled:R,type:"submit",className:"bg-blue-primary text-white w-full rounded h-8 font-bold ".concat(R&&"opacity-50"),children:"Sign-up"})]})]}),Object(h.jsx)("div",{className:"flex justify-center items-center flex-col w-full bg-white p-4 border border-gray-primary",children:Object(h.jsxs)("p",{className:"text-sm",children:["Already have an account?"," ",Object(h.jsx)(u.b,{to:f.b,className:"font-bold text-blue-primary",children:"Login"})]})})]})]})}}}]);
//# sourceMappingURL=10.a7564137.chunk.js.map