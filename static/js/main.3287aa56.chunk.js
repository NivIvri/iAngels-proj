(this["webpackJsonpmy-first-cli-proj"]=this["webpackJsonpmy-first-cli-proj"]||[]).push([[0],{70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(31),c=n.n(o),s=n(16),i=n(10),p=n(11),u=n(13),l=n(12),h=n(3),m=n(2),d=n.n(m),j=n(5),b=n.p+"static/media/businessman.0c4b33ee.png",f=n.p+"static/media/remove.75637132.png",g=n(0),v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){console.log(this.props.companie.name),console.log(this.props.companie.symbol),console.log(this.props.companie.country),console.log(this.props.companie.employees)}},{key:"render",value:function(){var e=this,t=this.props,n=t.companie;t.idx;return n?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("td",{children:Object(g.jsx)("img",{src:n.logo?n.logo:"no logo found"})}),Object(g.jsx)("td",{children:n.name}),Object(g.jsx)("td",{children:n.symbol}),Object(g.jsx)("td",{children:Object(g.jsxs)("span",{className:"employees",children:[Object(g.jsx)("span",{children:n.employees?n.employees:"-"}),Object(g.jsx)("img",{src:b})]})}),Object(g.jsx)("td",{children:n.country}),Object(g.jsx)("td",{onClick:function(){e.props.onRemoveCompanie(n._id)},children:Object(g.jsx)("img",{className:"remove-img",src:f})})]}):Object(g.jsx)("div",{})}}]),n}(a.Component);function y(e){var t=e.companies,n=e.onRemoveCompanie;return Object(g.jsx)(g.Fragment,{children:t.map((function(e,t){return Object(g.jsx)("tr",{children:Object(g.jsx)(v,{onRemoveCompanie:n,companie:e,idx:t},e._id)},e._id)}))})}var O=function(e){var t=e.children;return Object(g.jsx)("div",{className:"main-container",children:t})},x=n(32);var w={loadFromStorage:function(e){var t=localStorage.getItem(e);return t?JSON.parse(t):null},saveToStorage:function(e,t){localStorage[e]=JSON.stringify(t)},removeFromStorage:function(e){localStorage.removeItem(e)}},C={makeId:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<e;a++)t+=n.charAt(Math.floor(Math.random()*n.length));return t},makeLorem:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=["The sky","above","the port","was","the color of television","tuned","to","a dead channel",".","All","this happened","more or less",".","I","had","the story","bit by bit","from various people","and","as generally","happens","in such cases","each time","it","was","a different story",".","It","was","a pleasure","to","burn"],n="";for(;e>0;)e--,n+=t[Math.floor(Math.random()*t.length)]+" ";return n},getRandomIntInclusive:function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},storeToStorage:function(e,t){localStorage.setItem(e,JSON.stringify(t)||null)},loadFromStorage:function(e){var t=localStorage.getItem(e);return t?JSON.parse(t):void 0}};var k=n(20),S=n.n(k),D=[],I={getCompanieData:function(e){return N.apply(this,arguments)},getCompanieDateSearch:function(e){return _.apply(this,arguments)}};function N(){return(N=Object(j.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=3;break}return e.abrupt("return",[]);case 3:if(!(D=w.loadFromStorage([t]))){e.next=8;break}return D.length&&(D=D[0]),console.log("No need to fetch, retrieving from Cache"),e.abrupt("return",D);case 8:return e.prev=8,e.next=11,S.a.get("https://api.polygon.io/v1/meta/symbols/".concat(t,"/company?apiKey=pv_VVp9rQJ7d8X4aU0wI8Fw2W_GHWVOD"));case 11:return(n=e.sent).data._id=C.makeId(),e.next=15,w.saveToStorage([t],n.data);case 15:return e.abrupt("return",n.data);case 18:e.prev=18,e.t0=e.catch(8),console.log("Cannwot reach server:",e.t0);case 21:case"end":return e.stop()}}),e,null,[[8,18]])})))).apply(this,arguments)}function _(){return(_=Object(j.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",[]);case 2:if(!(D=w.loadFromStorage([t+"SERCH"]))){e.next=6;break}return console.log("No need to fetch, retrieving from Cache"),e.abrupt("return",D);case 6:return e.prev=6,e.next=9,S.a.get("https://api.polygon.io/v3/reference/tickers?search=".concat(t,"&active=true&sort=ticker&order=asc&limit=5&apiKey=pv_VVp9rQJ7d8X4aU0wI8Fw2W_GHWVOD"));case 9:return n=e.sent,e.next=12,w.saveToStorage([t+"SERCH"],n.data.results);case 12:return n.data.results.map((function(e){e._id=C.makeId()})),e.abrupt("return",n.data.results);case 16:e.prev=16,e.t0=e.catch(6),console.log("Cannwot reach server:",e.t0);case 19:case"end":return e.stop()}}),e,null,[[6,16]])})))).apply(this,arguments)}var A=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props,t=e.companie,n=e.addNewCompanie;return Object(g.jsxs)("div",{className:"result-preview",children:[Object(g.jsx)("span",{children:t.name.length<25?t.name:t.name.slice(0,50)+"..."}),Object(g.jsx)("button",{onClick:function(){n(t)},children:"add"})]})}}]),n}(a.Component);function M(e){var t=e.addNewCompanie,n=e.companies;return Object(g.jsx)("div",{className:"list-results",children:n.map((function(e,n){return Object(g.jsx)(A,{addNewCompanie:t,companie:e,idx:n},n)}))})}var T=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={companiesData:null},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.companiesData;this.setState({companiesData:e})}},{key:"componentDidUpdate",value:function(e){if(this.props.companiesData!==e.companiesData){var t=this.props.companiesData;this.setState({companiesData:t})}}},{key:"render",value:function(){var e=this.state.companiesData;return e&&e.length?Object(g.jsx)("section",{className:"search-result-container",children:e.length&&Object(g.jsx)(M,{addNewCompanie:this.props.addNewCompanie,companies:e.slice(0,5)})}):Object(g.jsx)("div",{children:"No results found"})}}]),n}(a.Component),R=n(61),F=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={keySearch:null,isOnSearch:!1,companiesData:null},e.delayedHandleChange=R.debounce(Object(j.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.state.keySearch){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,I.getCompanieDateSearch(e.state.keySearch.toUpperCase());case 4:(n=t.sent)||Object(x.a)("result"),e.setState({companiesData:n},(function(){e.setState({isOnSearch:!0})}));case 7:case"end":return t.stop()}}),t)}))),700),e.handleChange=function(){var t=Object(j.a)(d.a.mark((function t(n){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=n.target,e.setState({keySearch:a.value},(function(){""!==e.state.keySearch&&" "!==e.state.keySearch?e.delayedHandleChange(e.state.keySearch):e.setState({isOnSearch:!1})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(p.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isOnSearch,n=e.companiesData;return Object(g.jsxs)("section",{className:"search-container",children:[Object(g.jsx)("input",{type:"text",placeholder:"Search companie",onChange:this.handleChange}),t&&Object(g.jsx)(T,{addNewCompanie:this.props.addNewCompanie,companiesData:n})]})}}]),n}(a.Component),P=n(35),V={query:E,get:function(e,t){return J.apply(this,arguments)},remove:function(e,t){return H.apply(this,arguments)},post:function(e,t){return U.apply(this,arguments)},put:function(e,t){return W.apply(this,arguments)},insert:function(e,t){return G.apply(this,arguments)}};function E(e){var t=C.loadFromStorage(e);return t&&t.length||(t=[{name:"Apple Inc.",symbol:"AAPL",country:"usa",employees:"123000",logo:"https://s3.polygon.io/logos/aapl/logo.png",_id:"101a"},{name:"Analog Devices Inc",symbol:"ADI",country:"usa",employees:"15300",logo:"https://s3.polygon.io/logos/adi/logo.png",_id:"102a"},{name:"Automatic Data Processing Inc.",symbol:"ADP",country:"usa",employees:"57000",logo:"https://s3.polygon.io/logos/adp/logo.png",_id:"103a"},{name:"Amyris Inc.",symbol:"AMRS",country:"usa",employees:"414",logo:"https://s3.polygon.io/logos/amrs/logo.png",_id:"104a"},{country:"usa",logo:"https://s3.polygon.io/logos/cmct/logo.png",name:"CIM Commercial Trust Corporation",symbol:"CMCT",_id:"QV23p5"},{country:"usa",employees:"820",logo:"https://s3.polygon.io/logos/kequ/logo.png",name:"Kewaunee Scientific Corporation",symbol:"KEQU",_id:"Z5AYPI"},{country:"usa",employees:"1176",logo:"https://s3.polygon.io/logos/cwt/logo.png",name:"California Water Service Group",symbol:"CWT",_id:"guSDQG"},{country:"usa",employees:"37205",logo:"https://s3.polygon.io/logos/casy/logo.png",name:"Caseys General Stores Inc.",symbol:"CASY",_id:"5EVRDV"},{country:"usa",employees:"945",logo:"https://s3.polygon.io/logos/cpk/logo.png",name:"Chesapeake Utilities Corporation",symbol:"CPK",_id:"T8Md9c"}],C.storeToStorage(e,t)),Promise.resolve(t)}function J(){return(J=Object(j.a)(d.a.mark((function e(t,n){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t);case 2:return a=e.sent,e.abrupt("return",a.find((function(e){return e._id===n})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(){return(H=Object(j.a)(d.a.mark((function e(t,n){var a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t);case 2:if(a=e.sent,-1!==(r=a.findIndex((function(e){return e._id===n})))){e.next=6;break}throw new Error("something went wrong");case 6:return a.splice(r,1),C.storeToStorage(t,a),e.abrupt("return",Promise.resolve());case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(){return(U=Object(j.a)(d.a.mark((function e(t,n){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t);case 2:return a=e.sent,n._id=C.makeId(),a.push(n),C.storeToStorage(t,a),e.abrupt("return",Promise.resolve(n));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(){return(W=Object(j.a)(d.a.mark((function e(t,n){var a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t);case 2:if(a=e.sent,-1!==(r=a.findIndex((function(e){return e._id===n._id})))){e.next=6;break}throw new Error("something went wrong");case 6:return a[r]=n,C.storeToStorage(t,a),e.abrupt("return",Promise.resolve(n));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(){return(G=Object(j.a)(d.a.mark((function e(t,n){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t);case 2:return a=e.sent,n.forEach((function(e){return e._id=C.makeId()})),a.push.apply(a,Object(P.a)(n)),C.storeToStorage(t,a),e.abrupt("return",Promise.resolve());case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var K=[{path:"/",component:function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={companiesData:null},e.addNewCompanie=function(){var t=Object(j.a)(d.a.mark((function t(n){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.getCompanieData(n.ticker);case 2:if(a=t.sent){t.next=5;break}return t.abrupt("return");case 5:return a={name:a.name,symbol:a.symbol,country:a.country,logo:a.logo,employees:a.employees},t.next=8,V.post("companie",a);case 8:e.loadCompaniesData();case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onRemoveCompanie=function(){var t=Object(j.a)(d.a.mark((function t(n){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,V.remove("companie",n);case 2:a=e.state.companiesData.filter((function(e){return e._id!==n})),e.setState({companiesData:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.loadCompaniesData=Object(j.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,V.query("companie");case 2:n=t.sent,e.setState({companiesData:n});case 4:case"end":return t.stop()}}),t)}))),e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.loadCompaniesData()}},{key:"render",value:function(){var e=this.state.companiesData;return e?Object(g.jsx)(O,{children:Object(g.jsxs)("section",{className:"home",children:[Object(g.jsx)("h1",{children:"traded companies in Nasdaq"}),Object(g.jsx)(F,{addNewCompanie:this.addNewCompanie}),Object(g.jsxs)("table",{children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:Object(g.jsx)("h1",{children:"logo"})}),Object(g.jsx)("th",{children:Object(g.jsx)("h1",{children:"name"})}),Object(g.jsx)("th",{children:Object(g.jsx)("h1",{children:"ticker"})}),Object(g.jsx)("th",{children:Object(g.jsx)("h1",{children:"employees"})}),Object(g.jsx)("th",{children:Object(g.jsx)("h1",{children:"country"})}),Object(g.jsx)("th",{children:Object(g.jsx)("h1",{})})]},"1")}),Object(g.jsx)("tbody",{children:Object(g.jsx)(y,{onRemoveCompanie:this.onRemoveCompanie,companies:e})})]})]})}):Object(g.jsx)("div",{children:"loading...."})}}]),n}(a.Component),label:"Home \ud83c\udfe0"}],Q=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return Object(g.jsx)(s.b,{basename:"/",children:Object(g.jsx)("div",{children:Object(g.jsx)("main",{children:Object(g.jsx)(h.c,{children:K.map((function(e){return Object(g.jsx)(h.a,{exact:!0,component:e.component,path:e.path},e.path)}))})})})})}}]),n}(r.a.Component);n(70);c.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(s.a,{children:Object(g.jsx)(Q,{})})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.3287aa56.chunk.js.map