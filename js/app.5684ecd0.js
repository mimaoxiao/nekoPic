(function(e){function t(t){for(var i,s,c=t[0],a=t[1],u=t[2],p=0,f=[];p<c.length;p++)s=c[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,c=1;c<n.length;c++){var a=n[c];0!==r[a]&&(i=!1)}i&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},r={app:0},o=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=a;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("85ec"),r=n.n(i);r.a},"0cca":function(e,t,n){},1:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.confirm?n("HelloWorld",{attrs:{sid:e.sid,skey:e.skey,password:e.password,prefix:e.prefix,region:e.region,bucket:e.bucket,meowbreak:e.meowbreak}}):n("div",{staticClass:"form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.key,expression:"key"}],domProps:{value:e.key},on:{input:function(t){t.target.composing||(e.key=t.target.value)}}}),n("button",{on:{click:e.meow}},[e._v("meow")])])],1)},o=[],s=(n("a15b"),n("a434"),n("d3b7"),n("ac1f"),n("25f0"),n("1276"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[e.big?[n("img",{staticClass:"big-img",attrs:{src:e.src},on:{click:function(t){e.big=!1}}})]:[n("img",{staticClass:"img",attrs:{src:e.src},on:{click:function(t){e.big=!0}}}),n("button",{staticStyle:{height:"50px",width:"50px"},on:{click:e.meow}},[e._v(e._s(e.load?"load:"+100*e.percent+"/100":"meow"))])]],2)}),c=[],a=(n("99af"),n("d81d"),n("3438")),u=n.n(a),l={name:"HelloWorld",props:["sid","skey","password","prefix","meowbreak","region","bucket"],data:function(){return{src:"",cos:null,big:!1,list:[],load:!1,percent:""}},mounted:function(){var e=this;this.cos=new u.a({SecretId:this.sid,SecretKey:this.skey}),this.cos.getBucket({Bucket:this.bucket,Region:this.region}).then((function(t){var n=t.Contents;e.list=n.map((function(e){return e.Key})),e.meow()}))},methods:{getOne:function(){var e=this.list.length,t=Math.floor(Math.random()*e);return this.list.splice(t,1)[0]},meow:function(){var e=this;this.load||(this.load=!0,this.cos.getObject({Bucket:this.bucket,Region:this.region,Key:this.getOne(),onProgress:function(t){var n=t.percent;e.percent=n}}).then((function(t){var n=t.Body;e.src="".concat(e.prefix).concat(e.meowbreak(n,e.password)),e.load=!1,e.precent=""})))}}},p=l,f=(n("fa24"),n("2877")),h=Object(f["a"])(p,s,c,!1,null,"2c38ac98",null),d=h.exports,m=n("3452"),b=n.n(m),k={name:"App",components:{HelloWorld:d},data:function(){return{confirm:!1,text:"",password:"",key:"",sid:"",skey:"",prefix:"",region:"",bucket:""}},methods:{meowbreak:function(e,t){return b.a.AES.decrypt(e,t).toString(b.a.enc.Utf8)},meow:function(){var e=this.text.split(""),t=e.splice(-this.key.length).join(""),n=e.join("").split(t);this.sid=n[0],this.skey=n[1],this.password=n[2],this.prefix=n[3],this.region=n[4],this.bucket=n[5],this.password=this.meowbreak(this.password,this.key),this.sid=this.meowbreak(this.sid,this.key),this.skey=this.meowbreak(this.skey,this.key),this.prefix=this.meowbreak(this.prefix,this.key),this.region=this.meowbreak(this.region,this.key),this.bucket=this.meowbreak(this.bucket,this.key),this.confirm=!0}}},g=k,v=(n("034f"),Object(f["a"])(g,r,o,!1,null,null,null)),y=v.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(y)}}).$mount("#app")},"85ec":function(e,t,n){},fa24:function(e,t,n){"use strict";var i=n("0cca"),r=n.n(i);r.a}});
//# sourceMappingURL=app.5684ecd0.js.map