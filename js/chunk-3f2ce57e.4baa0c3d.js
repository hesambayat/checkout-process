(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f2ce57e"],{"00b4":function(e,t,n){"use strict";n("ac1f");var r=n("23e7"),i=n("da84"),a=n("c65b"),o=n("e330"),s=n("1626"),u=n("861d"),c=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),f=i.Error,l=o(/./.test);r({target:"RegExp",proto:!0,forced:!c},{test:function(e){var t=this.exec;if(!s(t))return l(this,e);var n=a(t,this,e);if(null!==n&&!u(n))throw new f("RegExp exec method returned something other than an Object or null");return!!n}})},"07ac":function(e,t,n){var r=n("23e7"),i=n("6f53").values;r({target:"Object",stat:!0},{values:function(e){return i(e)}})},"0b42":function(e,t,n){var r=n("da84"),i=n("e8b5"),a=n("68ee"),o=n("861d"),s=n("b622"),u=s("species"),c=r.Array;e.exports=function(e){var t;return i(e)&&(t=e.constructor,a(t)&&(t===c||i(t.prototype))?t=void 0:o(t)&&(t=t[u],null===t&&(t=void 0))),void 0===t?c:t}},"1d3e":function(e,t,n){"use strict";n("e9ac")},2469:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),i={class:"github__loader"},a={key:0,width:"50px",height:"50px",viewBox:"0 0 50 50"},o=Object(r["g"])("path",{d:"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"},[Object(r["g"])("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:"0.6s",repeatCount:"indefinite"})],-1),s=[o],u=["src"];function c(e,t,n,o,c,f){var l=Object(r["A"])("el-input"),m=Object(r["A"])("el-grid"),h=Object(r["A"])("layout-navigation");return Object(r["t"])(),Object(r["f"])(r["a"],null,[Object(r["i"])(m,{columns:"2"},{default:Object(r["F"])((function(){return[Object(r["i"])(l,{modelValue:f.givenName,"onUpdate:modelValue":t[0]||(t[0]=function(e){return f.givenName=e}),label:"First name",errorMessage:e.errors.givenName,onfocus:f.onfocus("givenName"),onblur:f.onfocus(),type:"text",autocomplete:"given-name"},null,8,["modelValue","errorMessage","onfocus","onblur"]),Object(r["i"])(l,{modelValue:f.familyName,"onUpdate:modelValue":t[1]||(t[1]=function(e){return f.familyName=e}),label:"Last name",errorMessage:e.errors.familyName,onfocus:f.onfocus("familyName"),onblur:f.onfocus(),type:"text",autocomplete:"family-name"},null,8,["modelValue","errorMessage","onfocus","onblur"]),Object(r["i"])(l,{modelValue:f.githubUsername,"onUpdate:modelValue":t[2]||(t[2]=function(e){return f.githubUsername=e}),label:"Github username",errorMessage:e.errors.githubUsername,onfocus:f.onfocus("githubUsername"),onblur:f.onfocus(),type:"text",class:Object(r["o"])(["github",{focus:"githubUsername"===e.focused}])},{default:Object(r["F"])((function(){var t;return[Object(r["g"])("div",i,[e.loading?(Object(r["t"])(),Object(r["f"])("svg",a,s)):Object(r["e"])("",!0),!e.loading&&null!==(t=f.github)&&void 0!==t&&t.avatar_url?(Object(r["t"])(),Object(r["f"])("img",{key:1,src:f.github.avatar_url,class:"github__thumb"},null,8,u)):Object(r["e"])("",!0)])]})),_:1},8,["modelValue","errorMessage","onfocus","onblur","class"])]})),_:1}),Object(r["i"])(h,{back:{to:"/"},next:{to:"/consent",disabled:!e.$store.state.slides.info,hint:f.hint,callback:f.validate}},null,8,["next"])],64)}n("7db0"),n("d3b7"),n("07ac");var f=n("a00a"),l={name:"Info",data:function(){return{errors:{},loading:!1,focused:""}},methods:{validate:function(){var e;this.givenName=this.$store.state.userInfo.givenName,this.familyName=this.$store.state.userInfo.familyName,this.githubUsername=this.$store.state.userInfo.githubUsername,null!==(e=this.github)&&void 0!==e&&e.message&&(this.errors.githubUsername=this.github.message||this.errors.githubUsername)},onfocus:function(e){var t=this;return function(){t.focused=e}}},computed:{givenName:{get:function(){return this.$store.state.userInfo.givenName},set:function(e){this.errors.givenName=Object(f["c"])(e)?"":"First name is required",this.$store.commit("setGivenName",e)}},familyName:{get:function(){return this.$store.state.userInfo.familyName},set:function(e){this.errors.familyName=Object(f["c"])(e)?"":"Last name is required",this.$store.commit("setFamilyName",e)}},githubUsername:{get:function(){return this.$store.state.userInfo.githubUsername},set:function(e){this.errors.githubUsername=Object(f["c"])(e)?Object(f["b"])(e)?"":"Invalid Github username":"Github username is required",this.$store.commit("setGithubUsername",e)}},github:function(){return this.$store.getters.github},hint:function(){var e;return!this.$store.state.slides.info&&!this.loading&&this.givenName&&this.familyName&&this.githubUsername&&(!this.github||(null===(e=this.github)||void 0===e?void 0:e.message))&&void 0===Object.values(this.errors).find((function(e){return e}))}},created:function(){var e=this;this.$watch((function(){return e.githubUsername}),(function(t){clearTimeout(e.timeout),e.$store.commit("setGithubPayload",""),t.length>0&&!e.errors.githubUsername?(e.loading=!0,e.timeout=setTimeout((function(){e.$store.dispatch("getGithubPayload",t)}),1e3)):e.loading=!1})),this.$watch((function(){return e.github}),(function(t){t&&(e.loading=!1,e.errors.githubUsername=(null===t||void 0===t?void 0:t.message)||"")}),{deep:!0}),this.$watch((function(){return e.$store.state.userInfo}),(function(){e.$store.commit("updateSlide",{id:"info",validity:!(void 0!==Object.values(e.errors).find((function(e){return e}))||!e.givenName||!e.familyName||!e.githubUsername||!e.github||e.github.message)})}),{deep:!0})},mounted:function(){this.hint&&this.validate()}},m=(n("1d3e"),n("6b0d")),h=n.n(m);const b=h()(l,[["render",c]]);t["default"]=b},"65f0":function(e,t,n){var r=n("0b42");e.exports=function(e,t){return new(r(e))(0===t?0:t)}},"7db0":function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").find,a=n("44d2"),o="find",s=!0;o in[]&&Array(1)[o]((function(){s=!1})),r({target:"Array",proto:!0,forced:s},{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a(o)},a00a:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a}));n("ac1f"),n("00b4"),n("498a");var r=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(e||"")},i=function(e){return/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i.test(e||"")},a=function(e){return!("string"!==typeof e||""===e.trim())}},b727:function(e,t,n){var r=n("0366"),i=n("e330"),a=n("44ad"),o=n("7b0b"),s=n("07fa"),u=n("65f0"),c=i([].push),f=function(e){var t=1==e,n=2==e,i=3==e,f=4==e,l=6==e,m=7==e,h=5==e||l;return function(b,d,g,v){for(var p,y,j=o(b),O=a(j),N=r(d,g),U=s(O),$=0,x=v||u,w=t?x(b,U):n||m?x(b,0):void 0;U>$;$++)if((h||$ in O)&&(p=O[$],y=N(p,$,j),e))if(t)w[$]=y;else if(y)switch(e){case 3:return!0;case 5:return p;case 6:return $;case 2:c(w,p)}else switch(e){case 4:return!1;case 7:c(w,p)}return l?-1:i||f?f:w}};e.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterReject:f(7)}},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},e9ac:function(e,t,n){}}]);
//# sourceMappingURL=chunk-3f2ce57e.4baa0c3d.js.map