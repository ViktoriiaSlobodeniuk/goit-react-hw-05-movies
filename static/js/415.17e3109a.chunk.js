"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{3908:function(n,e,t){t.d(e,{V:function(){return p},b:function(){return f}});var r=t(5861),i=t(7757),c=t.n(i),o=t(1243),a=t(2007),u=t.n(a),s="db4a3ae686a3cf9655de72dc5716eec8";function p(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.themoviedb.org/3/".concat(e,"?api_key=").concat(s),n.next=3,o.Z.get(t);case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.themoviedb.org/3/search/movie?api_key=".concat(s,"&query=").concat(e),n.next=3,o.Z.get(t);case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}p.propTypes={endPoint:u().string.isRequired},f.propTypes={query:u().string.isRequired}},5415:function(n,e,t){t.r(e);var r=t(9439),i=t(2791),c=t(7689),o=t(3908),a=t(8169),u=t(184);e.default=function(){var n=(0,i.useState)([]),e=(0,r.Z)(n,2),t=e[0],s=e[1],p=(0,c.TH)();return(0,i.useEffect)((function(){(0,o.V)("trending/movie/day").then((function(n){s(n.data.results)})).catch((function(n){console.log(n)}))}),[]),(0,u.jsxs)("div",{children:[(0,u.jsx)(a.Dx,{children:"Trending today"}),(0,u.jsx)(a.se,{children:t.map((function(n){var e=n.id,t=n.title,r=n.poster_path;return(0,u.jsx)("li",{children:(0,u.jsxs)(a.Fg,{to:"movies/".concat(e),state:{from:p},children:[(0,u.jsx)("img",{src:null!==r?"https://image.tmdb.org/t/p/original/"+r:"../../public/images/image.jpg",alt:"poster",width:350}),(0,u.jsxs)("h3",{children:[" ",t]})]})},e)}))})]})}},8169:function(n,e,t){t.d(e,{Dx:function(){return s},Fg:function(){return l},se:function(){return p}});var r,i,c,o=t(168),a=t(6444),u=t(1087),s=a.ZP.h1(r||(r=(0,o.Z)(["\n  text-align: center;\n  color: wheat;\n"]))),p=a.ZP.ul(i||(i=(0,o.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 25px;\n  margin-bottom: 50px;\n"]))),l=(0,a.ZP)(u.rU)(c||(c=(0,o.Z)(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  color: black;\n  font-weight: 500;\n  width: 350px;\n  height: 600px;\n  background-color: rgb(157, 162, 162, 0.25);\n  border-radius: 8px;\n  overflow: hidden;\n  text-align: center;\n\n  :hover {\n    box-shadow: 0px 10px 10px #072f13;\n  }\n"])))}}]);
//# sourceMappingURL=415.17e3109a.chunk.js.map