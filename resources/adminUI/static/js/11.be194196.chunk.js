webpackJsonp([11],{610:function(e,t,a){"use strict";function n(e){var t=e._db,n=t.networkData,s=n.index,m=n.leader,d=n.raft,u=(n.id,n.commit,n.term),p=n["svr-state"],f=(n["timeout-ms"],d.networks),g=(d.version,d["cmd-queue"]),v=f.map(function(e){return Object.keys(e)[0]}),E=v.length,b=d["new-db-queue"],w=t.db.split("/")[0],k=a.i(r.useState)(w),y=i(k,2),x=y[0],N=y[1],h=f.filter(function(e){return e[x]})[0][x].dbs,T=Object.keys(h),A=T.map(function(e){return{db:x+"/"+e,status:h[e].status,block:h[e].block}}),S=g.filter(function(e){return x===Object.keys(e)[0]}).map(function(e){return e[x]})[0],L=b.filter(function(e){return x===Object.keys(e)[0]}).map(function(e){return e[x]})[0],j=["Server","Status"],O=["Ledgers","Status","Block"],C=function(e){return e.map(function(e,t){return l.a.createElement("th",{style:{textAlign:"center"},key:t},e)})};return l.a.createElement("div",{className:"network-page-wrapper",style:{textAlign:"center"}},l.a.createElement(c.e,{style:{marginTop:"20px",textAlign:"left",paddingLeft:"2%"}},l.a.createElement(c.b,null,l.a.createElement(c.r,{style:{marginRight:"4px"}},"Network:"),l.a.createElement("select",{value:x,onChange:function(e){return N(e.target.value)},style:{marginLeft:"10px",borderRadius:"20px",border:"none",padding:"2px 4px",color:"#13C6FF",fontWeight:"bold"},placeholder:"Select Network"},l.a.createElement("option",null,"Select Network"),v.map(function(e){return l.a.createElement("option",{value:e},e)})))),l.a.createElement("div",{className:"network-page-main-content-wrapper"},l.a.createElement("div",{className:"network-page-general-info"},l.a.createElement("div",{className:"network-page-general-info-row"},l.a.createElement("div",{className:"network-page-general-info-row-item"},l.a.createElement(o.a,{value:E,name:"Networks",tooltipText:"Number of networks present"})),l.a.createElement("div",{className:"network-page-general-info-row-item"},l.a.createElement(o.a,{value:m,name:"Leader",tooltipText:"Server providing the status"}))),l.a.createElement("div",{className:"network-page-general-info-row"},l.a.createElement("div",{className:"network-page-general-info-row-item"},l.a.createElement(o.a,{value:s,name:"Index",tooltipText:"Latest index of Server providing status"})),l.a.createElement("div",{className:"network-page-general-info-row-item"},l.a.createElement(o.a,{value:u,name:"Term",tooltipText:"Latest term in cycle"}))),l.a.createElement("div",{className:"network-page-general-info-row"},l.a.createElement("div",{className:"network-page-general-info-row-item"},l.a.createElement(o.a,{value:S,name:"Pending Transactions",tooltipText:"Number of Transactions in queue"})),l.a.createElement("div",{className:"network-page-general-info-row-item"},l.a.createElement(o.a,{value:L,name:"Pending Ledgers",tooltipText:"Number of pending new databases"})))),l.a.createElement("div",{className:"network-page-table-wrapper"},l.a.createElement("div",{style:{paddingTop:"20px"}},l.a.createElement("div",null,l.a.createElement("h3",{style:{padding:"5px",textAlign:"left"}},"Server Status"),l.a.createElement("div",{id:"scroll-div-container",className:"network-page-table-container"},l.a.createElement("table",{className:"block-table block-table-stripes",striped:!0,bordered:!0,hover:!0,size:"sm"},l.a.createElement("thead",{style:{padding:"15px"}},C(j)),l.a.createElement("tbody",null,function(e){return e.map(function(e){return l.a.createElement("tr",null,l.a.createElement("td",{className:"table-content-centered Block"},e.id),l.a.createElement("td",{className:"table-content-centered "},e["active?"]?"Active":"Inactive"))})}(p)))))),l.a.createElement("div",{style:{paddingTop:"20px"}},l.a.createElement("div",null,l.a.createElement("h3",{style:{padding:"5px",textAlign:"left"}},"Ledgers In"," ",l.a.createElement("span",{style:{color:"#13c6ff"}},l.a.createElement("em",null,'"',x,'"'))," ","Network"),l.a.createElement("div",{className:"network-page-table-container"},l.a.createElement("table",{className:"block-table block-table-stripes",striped:!0,bordered:!0,hover:!0,size:"sm"},l.a.createElement("thead",{style:{padding:"15px"}},C(O)),l.a.createElement("tbody",null,function(e){return e.map(function(e){return l.a.createElement("tr",null,l.a.createElement("td",{className:"table-content-centered Block"},e.db),l.a.createElement("td",{className:"table-content-centered"},e.status.toUpperCase()),l.a.createElement("td",{className:"table-content-centered"},e.block))})}(A)))))))))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var r=a(0),l=a.n(r),o=a(863),c=a(52),i=function(){function e(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{!n&&c.return&&c.return()}finally{if(r)throw l}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},863:function(e,t,a){"use strict";function n(e){var t=e.value,a=e.name,n=e.tooltipText,r=void 0===n?"":n;return l.a.createElement("div",{id:"network-screen-card",style:{borderRadius:"10px",display:"flex",flexDirection:"column",justifyContent:"center",backgroundColor:"#fff",height:"100%"}},r?l.a.createElement(o.o,{placement:"top",overlay:l.a.createElement(o.n,{style:{maxWidth:"auto",textAlign:"left"}},r)},l.a.createElement("p",{style:{cursor:"pointer",color:"#091133",textAlign:"center"}},a)):l.a.createElement("p",{style:{color:"#091133",textAlign:"center"}},a),l.a.createElement("p",{style:{textAlign:"center",color:"#13c6ff",fontWeight:"bold",paddingTop:"10px"}},t))}t.a=n;var r=a(0),l=a.n(r),o=a(52)}});
//# sourceMappingURL=11.be194196.chunk.js.map