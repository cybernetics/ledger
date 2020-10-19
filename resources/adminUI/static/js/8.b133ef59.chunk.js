webpackJsonp([8],{605:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e){var t=0;if(0===e.length)return t;for(var a=0;a<e.length;a++){t=(t<<5)-t+e.charCodeAt(a),t&=t}return t}Object.defineProperty(t,"__esModule",{value:!0}),t.hashCode=o;var c=a(0),l=a.n(c),u=a(92),i=a(52),m=a(268),d=a.n(m),A=a(152),p=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),f=function(e){function t(){var e,s,c,l;n(this,t);for(var u=arguments.length,i=Array(u),m=0;m<u;m++)i[m]=arguments[m];return s=c=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),c.state={username:"",password:"",showAccountModal:!1},c.getAccounts=function(){var e=c.state,t=e.username,n=e.password,r={endpoint:"accounts",body:{user:["_user/username",t.toLowerCase()],password:n},noRedirect:!0};return a.i(A.a)(r).then(function(e){if(e.status>=400){var t=d()(e,["json","message"],d()(e,["message"],"Unknown error"));return c.setState({loading:!1,error:t}),!1}return e.json||e}).catch(function(e){var t=d()(e,["json","message"],d()(e,["message"],"Unknown error"));return c.setState({loading:!1,error:t}),!1})},c.getToken=function(e){var t=c.state,n=t.username,r=t.password;c.setState({loading:!0});var s={endpoint:"signin",body:{user:["_user/username",n.toLowerCase()],password:r,account:e,expireSeconds:86400}};return a.i(A.a)(s).then(function(e){return(e.json||e).token}).then(function(t){localStorage.setItem("username",o(n)),localStorage.setItem("account",e),localStorage.setItem("token",t),c.props.authenticate(t,e)}).catch(function(e){var t=d()(e,["json","message"],d()(e,["message"],"Unknown error"));c.setState({loading:!1,error:t})})},c.submitLogin=function(e){c.setState({error:null,loading:!0}),c.getAccounts().then(function(e){if(!1===e);else if(1===e.length)c.getToken(e[0]["account/id"]);else if(0===e.length)c.setState({error:"There are no accounts associated with this user.",loading:!1});else{var t=[];e.map(function(e){return t.push(d()(e,"account/id"))}),c.setState({accounts:t,loading:!1})}}).catch(function(e){var t=d()(e,["json","message"],d()(e,["message"],"Unknown error"));c.setState({loading:!1,error:t})})},l=s,r(c,l)}return s(t,e),p(t,[{key:"componentDidMount",value:function(){var e=new URLSearchParams(window.location.search),t=e.get("username")||"";this.setState({username:t})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"background-gradient",style:{height:"100%"}},l.a.createElement(i.u,{collapseOnSelect:!0},l.a.createElement(i.u.Header,null,l.a.createElement(i.u.Brand,null,l.a.createElement(u.Link,{to:"/"},l.a.createElement("img",{src:a(697),height:"30",alt:"Fluree logo"}))),l.a.createElement(i.u.Toggle,null))),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row",style:{marginTop:"25vh"}},l.a.createElement("div",{className:"col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1"},l.a.createElement("div",{className:"well well-lg",style:{color:"#222"}},l.a.createElement("h1",{style:{marginBottom:30}},"Sign in"),this.props.message&&l.a.createElement(i.m,{bsStyle:"info"},this.props.message),l.a.createElement("form",{className:"form",onSubmit:function(t){t.preventDefault(),e.state.accounts||e.submitLogin(t)}},l.a.createElement(i.b,{controlId:"form-username"},l.a.createElement(i.r,null,"Email"),l.a.createElement(i.d,{type:"text",placeholder:"Email",value:this.state.username,autoFocus:!0,onChange:function(t){return e.setState({username:t.target.value})}})),l.a.createElement(i.b,{controlId:"form-password",style:{marginBottom:20}},l.a.createElement(i.r,null,"Password"),l.a.createElement(i.d,{type:"password",placeholder:"Password",value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})}})),this.state.error?l.a.createElement(i.m,{bsStyle:"danger",onDismiss:function(){return e.setState({error:null})}},l.a.createElement("h4",null,"Error"),l.a.createElement("p",null,this.state.error)):null,this.state.accounts?l.a.createElement("div",null,l.a.createElement("p",null,"Your email is associated with multiple accounts. Please select one below:"),this.state.accounts.map(function(t){return l.a.createElement(i.l,{onClick:function(){return e.getToken(t)}},t)})):l.a.createElement(i.l,{type:"submit",bsStyle:"primary",disabled:this.state.loading,style:{padding:"9px 20px"}},this.state.loading?"Signing in...":null,this.state.loading||this.state.accounts?null:"Sign In")),l.a.createElement("hr",null),l.a.createElement("div",{className:"text-muted small prose"},"Forgot password? ",l.a.createElement(u.Link,{to:"/reset"},"Reset Password ",l.a.createElement("i",{className:"fas fa-arrow-right","aria-hidden":"true"})),l.a.createElement("br",null)))))))}}]),t}(l.a.Component);t.default=f},697:function(e,t){e.exports="data:image/png;base64,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"}});
//# sourceMappingURL=8.b133ef59.chunk.js.map