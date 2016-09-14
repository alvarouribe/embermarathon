"use strict";define("embermarathon/app",["exports","ember","embermarathon/resolver","ember-load-initializers","embermarathon/config/environment"],function(e,t,a,n,r){var i=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,i=t.default.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:a.default}),(0,n.default)(i,r.default.modulePrefix),e.default=i}),define("embermarathon/components/app-version",["exports","ember-cli-app-version/components/app-version","embermarathon/config/environment"],function(e,t,a){var n=a.default.APP.name,r=a.default.APP.version;e.default=t.default.extend({version:r,name:n})}),define("embermarathon/controllers/index",["exports","ember"],function(e,t){e.default=t.default.Controller.extend({})}),define("embermarathon/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("embermarathon/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("embermarathon/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","embermarathon/config/environment"],function(e,t,a){e.default={name:"App Version",initialize:(0,t.default)(a.default.APP.name,a.default.APP.version)}}),define("embermarathon/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("embermarathon/initializers/data-adapter",["exports","ember"],function(e,t){e.default={name:"data-adapter",before:"store",initialize:t.default.K}}),define("embermarathon/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,a){e.default={name:"ember-data",initialize:t.default}}),define("embermarathon/initializers/export-application-global",["exports","ember","embermarathon/config/environment"],function(e,t,a){function n(){var e=arguments[1]||arguments[0];if(a.default.exportApplicationGlobal!==!1){var n,r=a.default.exportApplicationGlobal;n="string"==typeof r?r:t.default.String.classify(a.default.modulePrefix),window[n]||(window[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[n]}}))}}e.initialize=n,e.default={name:"export-application-global",initialize:n}}),define("embermarathon/initializers/injectStore",["exports","ember"],function(e,t){e.default={name:"injectStore",before:"store",initialize:t.default.K}}),define("embermarathon/initializers/store",["exports","ember"],function(e,t){e.default={name:"store",after:"ember-data",initialize:t.default.K}}),define("embermarathon/initializers/transforms",["exports","ember"],function(e,t){e.default={name:"transforms",before:"store",initialize:t.default.K}}),define("embermarathon/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("embermarathon/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("embermarathon/router",["exports","ember","embermarathon/config/environment"],function(e,t,a){var n=t.default.Router.extend({location:a.default.locationType});n.map(function(){this.route("/",{path:"index"}),this.route("about")}),e.default=n}),define("embermarathon/routes/about",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("embermarathon/routes/application",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("embermarathon/routes/index",["exports","ember"],function(e,t){e.default=t.default.Route.extend({activate:function(){$(document).ready(function(){$(".playVideoButton").fancybox({padding:0,width:"100%",height:"100%",type:"iframe"})})}})}),define("embermarathon/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("embermarathon/templates/about",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"triple-curlies"},revision:"Ember@2.6.1",loc:{source:null,start:{line:1,column:0},end:{line:61,column:6}},moduleName:"embermarathon/templates/about.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","about");var n=e.createTextNode("\n  \n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","header-content");var r=e.createTextNode("\n      ");e.appendChild(n,r);var r=e.createElement("h1"),i=e.createTextNode("ABOUT");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","center-content");var r=e.createTextNode("\n  \n\t  ");e.appendChild(n,r);var r=e.createElement("h2"),i=e.createTextNode("SYNOPSIS:");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n\n    ");e.appendChild(n,r);var r=e.createElement("p"),i=e.createTextNode("\n      Marathon is a motivational drama that provides insight of the Maori culture through Phillip’s relationship with the Tuhoe people, through its culture, ceremonies and landscapes.\n    ");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),i=e.createTextNode("\n      The story is centered around Phillip, a music teacher, discovers his neurosis of being a 40 year old male that has been unable to find a partner. Phillip descends into existential conflict as his mother, whom he shares an exacerbated affection for, falls sickeningly ill. After her death, Phillip spirals into depression, and his loneliness leads to his despair and further uncertainty.\n    ");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),i=e.createTextNode("\n      Phillip’s newfound interest in running, along with the development of a musical performance by his students give Phillip the chance to heal and vent his neurosis. After meeting Athens, Phillip’s maternal desires are released and his artistic developments are triggered, allowing him to build upon new desires.\n    ");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n\n");e.appendChild(n,r);var r=e.createTextNode("    \n    ");e.appendChild(n,r);var r=e.createElement("p"),i=e.createTextNode("\n      This project is supported by:\n      ");e.appendChild(r,i);var i=e.createElement("ul"),d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("li"),l=e.createTextNode("Susie Newborn (Greenpeace Co-Founder)");e.appendChild(d,l),e.appendChild(i,d);var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("li"),l=e.createTextNode("Tame Iti (Maori Artist and Activist)");e.appendChild(d,l),e.appendChild(i,d);var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("li"),l=e.createTextNode("Corradino Ansalmi");e.appendChild(d,l),e.appendChild(i,d);var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("li"),l=e.createTextNode("ALAC Inc. (Auckland Latin American Community)");e.appendChild(d,l),e.appendChild(i,d);var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("li"),l=e.createTextNode("Te Huruhi Primary School");e.appendChild(d,l),e.appendChild(i,d);var d=e.createTextNode("\n      ");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n    ");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n    \n    ");e.appendChild(n,r);var r=e.createElement("p");e.setAttribute(r,"class","director");var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("b"),d=e.createTextNode("Director Sebastian Vidal");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n    ");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n    \n\t");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"id","cloud-scroll"),e.appendChild(a,n);var n=e.createTextNode("  \n\n  ");e.appendChild(a,n);var n=e.createElement("footer"),r=e.createTextNode("\n      ");e.appendChild(n,r);var r=e.createElement("a");e.setAttribute(r,"href","https://www.facebook.com/marathonfilmnz/"),e.setAttribute(r,"target","_blank");var i=e.createElement("i");e.setAttribute(i,"class","fa fa-facebook-square"),e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n      ");e.appendChild(n,r);var r=e.createElement("a");e.setAttribute(r,"href","https://vimeo.com/sonohd"),e.setAttribute(r,"target","_blank");var i=e.createElement("i");e.setAttribute(i,"class","fa fa-vimeo-square"),e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n      ");e.appendChild(n,r);var r=e.createElement("a");e.setAttribute(r,"href","https://www.instagram.com/marathon_the_shortfilm"),e.setAttribute(r,"target","_blank");var i=e.createElement("i");e.setAttribute(i,"class","fa fa-instagram"),e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n      ");e.appendChild(n,r);var r=e.createElement("br");e.appendChild(n,r);var r=e.createTextNode("\n      ");e.appendChild(n,r);var r=e.createElement("p"),i=e.createTextNode("Developed by ");e.appendChild(r,i);var i=e.createElement("a");e.setAttribute(i,"href","mailto:iam@alvarouribe.cl");var d=e.createTextNode("Alvaro Uribe");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode(" 2016");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n");return e.appendChild(a,n),e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("embermarathon/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type","multiple-nodes"]},revision:"Ember@2.6.1",loc:{source:null,start:{line:1,column:0},end:{line:3,column:0}},moduleName:"embermarathon/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(2);return n[0]=e.createMorphAt(t,0,0,a),n[1]=e.createMorphAt(t,2,2,a),e.insertBoundary(t,0),n},statements:[["inline","partial",["layout/menu"],[],["loc",[null,[1,0],[1,25]]]],["content","outlet",["loc",[null,[2,0],[2,10]]]]],locals:[],templates:[]}}())}),define("embermarathon/templates/index",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"triple-curlies"},revision:"Ember@2.6.1",loc:{source:null,start:{line:1,column:0},end:{line:16,column:6}},moduleName:"embermarathon/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","home-hero");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("video");e.setAttribute(n,"autoplay",""),e.setAttribute(n,"poster","images/marathon-back-596c91c38ebb9486610f87947be38bea.jpg"),e.setAttribute(n,"id","bgvid");var r=e.createTextNode("\n      ");e.appendChild(n,r);var r=e.createElement("source");e.setAttribute(r,"src","videos/marathon-back.mp4"),e.setAttribute(r,"type","video/mp4"),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","header-content");var r=e.createTextNode("\n      ");e.appendChild(n,r);var r=e.createElement("h1"),i=e.createTextNode("MARATHON");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n      ");e.appendChild(n,r);var r=e.createElement("h2"),i=e.createTextNode("A film by Sebastian Vidal Bustamante");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n      ");e.appendChild(n,r);var r=e.createElement("a");e.setAttribute(r,"target","_blank"),e.setAttribute(r,"href","http://givealittle.co.nz/cause/marathontheshortfilm");var i=e.createTextNode("Do you want to help?");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n  ");e.appendChild(a,n);var n=e.createElement("footer"),r=e.createTextNode("\n      ");e.appendChild(n,r);var r=e.createElement("a");e.setAttribute(r,"href","https://www.facebook.com/marathonfilmnz"),e.setAttribute(r,"target","_blank");var i=e.createElement("i");e.setAttribute(i,"class","fa fa-facebook-square"),e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n      ");e.appendChild(n,r);var r=e.createElement("a");e.setAttribute(r,"href","https://vimeo.com/sonohd"),e.setAttribute(r,"target","_blank");var i=e.createElement("i");e.setAttribute(i,"class","fa fa-vimeo-square"),e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n      ");e.appendChild(n,r);var r=e.createElement("a");e.setAttribute(r,"href","https://www.instagram.com/marathon_the_shortfilm"),e.setAttribute(r,"target","_blank");var i=e.createElement("i");e.setAttribute(i,"class","fa fa-instagram"),e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");return e.appendChild(a,n),e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("embermarathon/templates/layout/menu",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.6.1",loc:{source:null,start:{line:4,column:6},end:{line:4,column:26}},moduleName:"embermarathon/templates/layout/menu.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("Home");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.6.1",loc:{source:null,start:{line:7,column:6},end:{line:7,column:40}},moduleName:"embermarathon/templates/layout/menu.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("About the film");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{fragmentReason:{name:"triple-curlies"},revision:"Ember@2.6.1",loc:{source:null,start:{line:1,column:0},end:{line:18,column:6}},moduleName:"embermarathon/templates/layout/menu.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode(" ");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","menu");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("ul"),r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("li"),i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createComment("");e.appendChild(r,i);var i=e.createTextNode("\n    ");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("li"),i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createComment("");e.appendChild(r,i);var i=e.createTextNode("\n    ");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("li"),i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("a");e.setAttribute(i,"class","playVideoButton"),e.setAttribute(i,"href","https://player.vimeo.com/video/149969967?autoplay=1");var d=e.createTextNode("\n        ");e.appendChild(i,d);var d=e.createElement("i");e.setAttribute(d,"class","fa fa-play playVideoButton"),e.appendChild(i,d);var d=e.createTextNode("Play trailer\n      ");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n    ");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("li"),i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("a");e.setAttribute(i,"href","mailto:info@sono.co.nz?Subject=Marathon%20Question%20from%20web"),e.setAttribute(i,"target","_top");var d=e.createTextNode("Contact");e.appendChild(i,d),e.appendChild(r,i);var i=e.createTextNode("\n    ");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");return e.appendChild(a,n),e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=e.childAt(t,[1,1]),r=new Array(2);return r[0]=e.createMorphAt(e.childAt(n,[1]),1,1),r[1]=e.createMorphAt(e.childAt(n,[3]),1,1),r},statements:[["block","link-to",["/"],[],0,null,["loc",[null,[4,6],[4,38]]]],["block","link-to",["about"],[],1,null,["loc",[null,[7,6],[7,52]]]]],locals:[],templates:[e,t]}}())}),define("embermarathon/config/environment",["ember"],function(e){var t="embermarathon";try{var a=t+"/config/environment",n=e.default.$('meta[name="'+a+'"]').attr("content"),r=JSON.parse(unescape(n));return{default:r}}catch(e){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests||require("embermarathon/app").default.create({name:"embermarathon",version:"0.0.0+f6b9356f"});