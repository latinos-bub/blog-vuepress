(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{177:function(t,s,e){"use strict";var i=e(0);s.a=new i.default},178:function(t,s,e){},217:function(t,s,e){"use strict";var i=e(178);e.n(i).a},298:function(t,s,e){"use strict";e.r(s);var i=e(177),n={name:"FixedHeader",data:function(){return{description:"",isPosts:!1,tagName:""}},props:{content:{type:Array,default:function(){return[]}}},computed:{title:function(){var t,s=this;switch(this.$route.path.slice(1,6)){case"posts":t=this.$page.title,this.isPosts=!0,this.description=this.$page.lastUpdated?"最后更新时间："+this.$page.lastUpdated:"";break;case"all/":if(t=this.$themeConfig.menus.all||"时间归档",this.isPosts=!1,0===this.content.length)return this.description="";setTimeout((function(){s.description="2019-10~"+s.content[0].lastUpdated.slice(0,7)+" ===>>> 共"+s.content.length+"篇"}),20);break;case"tags/":t=this.tagName||"",this.isPosts=!1,this.description="";break;case"about":t=this.$themeConfig.menus.about||"自我介绍",this.isPosts=!1,this.description="";break;default:t=this.$site.title||"欢迎光临",this.isPosts=!1,this.description=this.$site.description||"期待与你的交流"}return t}},mounted:function(){var t=this;i.a.$on("changeContentHeader",(function(s){t.tagName=s}))}},a=(e(217),e(9)),o=Object(a.a)(n,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content-header index-header"},[e("div",{staticClass:"container fade-scale in"},[e("h1",{staticClass:"title",class:{"post-content-header":t.isPosts},attrs:{id:"conentHeader"}},[t._v(t._s(t.title))]),t._v(" "),e("h5",{staticClass:"subtitle"},[t._v(t._s(t.description))])])])}),[],!1,null,"52572bf9",null);s.default=o.exports}}]);