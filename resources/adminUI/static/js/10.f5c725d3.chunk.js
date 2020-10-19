webpackJsonp([10],{611:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=a(0),s=a.n(o),l=a(92),u=a(52),i=a(268),m=a.n(i),d=a(152),A=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),p=function(e){function t(){var e,a,c,o;n(this,t);for(var s=arguments.length,l=Array(s),u=0;u<s;u++)l[u]=arguments[u];return a=c=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),c.state={account:"",confirmCode:"",password:"",response:null},o=a,r(c,o)}return c(t,e),A(t,[{key:"activateAccount",value:function(){var e=this;this.setState({loading:!0});var t=this.state,n=t.account,r=t.confirmCode,c=t.username,o=t.password,s=new URLSearchParams(window.location.search),l=s.get("activate-token"),u={endpoint:"activate-account",body:{timestamp:r,account:n,username:c,token:l,password:o}};a.i(d.a)(u).then(function(e){window.location.href="/login?username="+encodeURIComponent(c)}).catch(function(t){var a=m()(t,["json","message"],m()(t,["message"],"Unknown error"));/account.*duplicates/.test(a)?e.setState({loading:!1,error:"A network account with the name of '"+n+"' already exists. Please choose another name."}):/_user.*duplicates/.test(a)?e.setState({loading:!1,error:"A username (email address) with the name of '"+c+"' already exists. Please choose another name."}):e.setState({loading:!1,error:a})})}},{key:"componentDidMount",value:function(){var e=new URLSearchParams(window.location.search),t=e.get("email"),a=e.get("t");t=t?t.replace(" ","+"):"",this.setState({account:"",confirmCode:a,username:t,response:null,error:null})}},{key:"validPW",value:function(){var e=this.state.password.length;return e>7?"success":e>5?"warning":e>0?"error":void 0}},{key:"validAccount",value:function(){return/^[a-zA-Z0-9-]*$/.test(this.state.account)?"success":"error"}},{key:"validSubmission",value:function(){var e=this.validAccount(),t=this.validPW();return"success"!==e||"success"!==t}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"background-gradient",style:{height:"100vh"}},s.a.createElement(u.u,{collapseOnSelect:!0},s.a.createElement(u.u.Header,null,s.a.createElement(u.u.Brand,null,s.a.createElement(l.Link,{to:"/"},s.a.createElement("img",{src:a(697),height:"30",alt:"Fluree logo"}))),s.a.createElement(u.u.Toggle,null))),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row",style:{marginTop:"25vh"}},s.a.createElement("div",{className:"col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1"},s.a.createElement("div",{className:"well well-lg",style:{color:"#222"}},s.a.createElement("h1",{style:{marginBottom:30}},"Create an Account"),s.a.createElement("form",{className:"form",onSubmit:function(t){t.preventDefault(),e.activateAccount()}},s.a.createElement(u.b,{controlId:"form-username",style:{marginBottom:20}},s.a.createElement(u.r,null,"Username (Email Address)"),s.a.createElement(u.d,{type:"string",placeholder:"Username",value:this.state.username,disabled:!0})),s.a.createElement(u.b,{controlId:"form-password",validationState:this.validPW(),style:{marginBottom:20}},s.a.createElement(u.r,null,"Create Password"),s.a.createElement(u.d,{type:"password",placeholder:"Password",value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})}})),s.a.createElement(u.b,{controlId:"form-account",style:{marginBottom:20},validationState:this.validAccount()},s.a.createElement(u.r,null,"Create Account/Network name"),s.a.createElement(u.d,{type:"string",placeholder:"Your account/Fluree ledger network name (must be unique). It can only be comprised of letter, numbers, and -s.",value:this.state.account,onChange:function(t){return e.setState({account:t.target.value})}})),s.a.createElement(u.b,{controlId:"form-username",style:{marginBottom:20}},s.a.createElement(u.r,null,"Confirmation Code"),s.a.createElement(u.d,{type:"string",placeholder:"Confirmation Code",value:this.state.confirmCode,onChange:function(t){return e.setState({confirmCode:t.target.value})}})),this.state.error?s.a.createElement(u.m,{bsStyle:"danger",onDismiss:function(){return e.setState({error:null})}},s.a.createElement("h4",null,"Error"),s.a.createElement("p",null,this.state.error)):null,this.state.response?s.a.createElement(u.m,{bsStyle:"success",onDismiss:function(){return e.setState({response:null})}},s.a.createElement("h4",null,"Success!"),s.a.createElement("p",null,this.state.response)):s.a.createElement(u.l,{type:"submit",bsStyle:"primary",disabled:this.validSubmission(),style:{padding:"9px 20px"}},this.state.loading?"Creating Account...":"Create an Account")),s.a.createElement("hr",null))))))}}]),t}(s.a.Component);t.default=p},697:function(e,t){e.exports="data:image/png;base64,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"}});
//# sourceMappingURL=10.f5c725d3.chunk.js.map