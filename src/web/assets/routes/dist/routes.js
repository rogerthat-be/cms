!function(){var t={100:function(){},486:function(t,e,i){var r=i(100);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals),(0,i(673).Z)("8602b10a",r,!0,{})},673:function(t,e,i){"use strict";function r(t,e){for(var i=[],r={},s=0;s<e.length;s++){var n=e[s],a=n[0],o={id:t+":"+s,css:n[1],media:n[2],sourceMap:n[3]};r[a]?r[a].parts.push(o):i.push(r[a]={id:a,parts:[o]})}return i}i.d(e,{Z:function(){return p}});var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var n={},a=s&&(document.head||document.getElementsByTagName("head")[0]),o=null,u=0,d=!1,l=function(){},h=null,f="data-vue-ssr-id",c="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(t,e,i,s){d=i,h=s||{};var a=r(t,e);return v(a),function(e){for(var i=[],s=0;s<a.length;s++){var o=a[s];(u=n[o.id]).refs--,i.push(u)}for(e?v(a=r(t,e)):a=[],s=0;s<i.length;s++){var u;if(0===(u=i[s]).refs){for(var d=0;d<u.parts.length;d++)u.parts[d]();delete n[u.id]}}}}function v(t){for(var e=0;e<t.length;e++){var i=t[e],r=n[i.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](i.parts[s]);for(;s<i.parts.length;s++)r.parts.push(C(i.parts[s]));r.parts.length>i.parts.length&&(r.parts.length=i.parts.length)}else{var a=[];for(s=0;s<i.parts.length;s++)a.push(C(i.parts[s]));n[i.id]={id:i.id,refs:1,parts:a}}}}function m(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function C(t){var e,i,r=document.querySelector("style["+f+'~="'+t.id+'"]');if(r){if(d)return l;r.parentNode.removeChild(r)}if(c){var s=u++;r=o||(o=m()),e=b.bind(null,r,s,!1),i=b.bind(null,r,s,!0)}else r=m(),e=I.bind(null,r),i=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else i()}}var g,$=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function b(t,e,i,r){var s=i?"":r.css;if(t.styleSheet)t.styleSheet.cssText=$(e,s);else{var n=document.createTextNode(s),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(n,a[e]):t.appendChild(n)}}function I(t,e){var i=e.css,r=e.media,s=e.sourceMap;if(r&&t.setAttribute("media",r),h.ssrId&&t.setAttribute(f,e.id),s&&(i+="\n/*# sourceURL="+s.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}}},e={};function i(r){var s=e[r];if(void 0!==s)return s.exports;var n=e[r]={id:r,exports:{}};return t[r](n,n.exports,i),n.exports}i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,{a:e}),e},i.d=function(t,e){for(var r in e)i.o(e,r)&&!i.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";var t,e,r,s;i(486),t=jQuery,e=Garnish.Base.extend({tokens:null,routes:null,$container:null,$addRouteBtn:null,sorter:null,init:function(){this.tokens={},this.routes=[],this.$container=t("#routes");for(var e=this.getRoutes(),i=0;i<e.length;i++){var s=new r(e[i]);this.routes.push(s)}this.sorter=new Garnish.DragSort(e,{axis:Garnish.Y_AXIS,onSortChange:this.updateRouteOrder.bind(this)}),this.$addRouteBtn=t("#add-route-btn"),this.addListener(this.$addRouteBtn,"click","addRoute")},getRoutes:function(){return this.$container.children()},updateRouteOrder:function(){for(var e=this.getRoutes(),i={routeUids:[]},r=0;r<e.length;r++)i.routeUids.push(t(e[r]).attr("data-uid"));Craft.sendActionRequest("POST","routes/update-route-order",{data:i}).then((function(){Craft.cp.displaySuccess(Craft.t("app","New route order saved."))})).catch((function(){Craft.cp.displayError(Craft.t("app","Couldn’t save new route order."))}))},addRoute:function(){new s}}),r=Garnish.Base.extend({$container:null,uid:null,siteUid:null,$siteLabel:null,$uri:null,$template:null,modal:null,init:function(e){this.$container=t(e),this.uid=this.$container.data("uid"),this.siteUid=this.$container.data("site-uid"),this.$siteLabel=this.$container.find(".site:first"),this.$uri=this.$container.find(".uri:first"),this.$template=this.$container.find(".template:first"),this.addListener(this.$container,"click","edit")},edit:function(){this.modal?this.modal.show():this.modal=new s(this)},updateHtmlFromModal:function(){var t;if(Craft.isMultiSite)if(this.siteUid){for(t=0;t<Craft.sites.length;t++)if(Craft.sites[t].uid==this.siteUid){this.$siteLabel.text(Craft.sites[t].name);break}}else this.$siteLabel.text(Craft.t("app","Global"));var e="";for(t=0;t<this.modal.uriInput.elements.length;t++){var i=this.modal.uriInput.elements[t];this.modal.uriInput.isText(i)?e+=Craft.escapeHtml(i.val()):e+=i.prop("outerHTML")}this.$uri.html(e),this.$template.text(this.modal.$templateInput.val())}}),s=Garnish.Modal.extend({route:null,$heading:null,$uriInput:null,$uriErrors:null,uriElements:null,$templateInput:null,$saveBtn:null,$cancelBtn:null,$spinner:null,$deleteBtn:null,loading:!1,init:function(e){this.route=e;var i="<h4>"+Craft.t("app","Add a token")+"</h4>";for(var r in Craft.routes.tokens)Craft.routes.tokens.hasOwnProperty(r)&&(i+='<div class="token" data-name="'+r+'" data-value="'+Craft.routes.tokens[r]+'"><span>'+r+"</span></div>");var s,n='<form class="modal fitted route-settings" accept-charset="UTF-8"><div class="header"><h1></h1></div><div class="body"><div class="uri-field field"><div class="heading"><label for="uri">'+Craft.t("app","If the URI looks like this")+':</label></div><div class="input">';if(Craft.isMultiSite&&(n+='<div class="flex"><div class="flex-grow">'),n+='<div id="uri" class="text uri ltr"></div>',Craft.isMultiSite){for(n+='</div><div class="select"><select class="site"><option value="">'+Craft.t("app","Global")+"</option>",s=0;s<Craft.sites.length;s++){var a=Craft.sites[s];n+='<option value="'+a.uid+'">'+Craft.escapeHtml(a.name)+"</option>"}n+="</select></div></div>"}n+='</div><div class="uri-tokens">'+i+'</div></div><div class="template-field field"><div class="heading"><label for="template">'+Craft.t("app","Load this template")+':</label></div><div class="input"><input id="template" type="text" class="text fullwidth template ltr"></div></div></div><div class="footer"><div class="buttons right last"><button type="button" class="btn cancel">'+Craft.t("app","Cancel")+'</button><button type="submit" class="btn submit">'+Craft.t("app","Save")+'</button><div class="spinner" style="display: none;"></div></div><a class="delete">'+Craft.t("app","Delete")+"</a></div></form>";var o=t(n).appendTo(Garnish.$bod);if(this.$heading=o.find("h1:first"),this.$siteInput=o.find(".site:first"),this.$uriInput=o.find(".uri:first"),this.$templateInput=o.find(".template:first"),this.$saveBtn=o.find(".submit:first"),this.$cancelBtn=o.find(".cancel:first"),this.$spinner=o.find(".spinner:first"),this.$deleteBtn=o.find(".delete:first"),this.route||this.$deleteBtn.hide(),this.uriInput=new Garnish.MixedInput(this.$uriInput,{dir:"ltr"}),this.route?this.$heading.html(Craft.t("app","Edit Route")):this.$heading.html(Craft.t("app","Create a new route")),this.route){this.$siteInput.val(this.route.siteUid);var u=this.route.$uri.prop("childNodes");for(s=0;s<u.length;s++){var d=u[s];Garnish.isTextNode(d)?this.uriInput.addTextElement().setVal(d.nodeValue):this.addUriVar(d)}var l=this.route.$template.text();this.$templateInput.val(l)}this.base(o);var h=this.$container.find(".uri-tokens").children("div");this.addListener(h,"mousedown",(function(t){this.addUriVar(t.currentTarget)})),this.addListener(this.$container,"submit","saveRoute"),this.addListener(this.$cancelBtn,"click","cancel"),this.addListener(this.$deleteBtn,"click","deleteRoute")},addUriVar:function(e){var i=t(e).clone().attr("tabindex","0");this.uriInput.addElement(i),this.addListener(i,"keydown",(function(t){var e=this;switch(t.keyCode){case Garnish.LEFT_KEY:setTimeout((function(){e.uriInput.focusPreviousElement(i)}),1);break;case Garnish.RIGHT_KEY:setTimeout((function(){e.uriInput.focusNextElement(i)}),1);break;case Garnish.BACKSPACE_KEY:case Garnish.DELETE_KEY:setTimeout((function(){e.uriInput.removeElement(i)}),1),t.preventDefault()}}))},show:function(){var t=this;this.route&&(this.$heading.html(Craft.t("app","Edit Route")),this.$deleteBtn.show()),setTimeout((function(){if(t.uriInput.elements.length){var e=t.uriInput.elements[0];t.uriInput.setFocus(e),t.uriInput.setCarotPos(e,0)}else t.$uriInput.trigger("focus")}),100),this.base()},saveRoute:function(e){var i=this;if(e.preventDefault(),!this.loading){this.$container.find(".uri-field .input").removeClass("errors"),this.$uriErrors&&(this.$uriErrors.remove(),this.$uriErrors=null);var s={siteUid:this.$siteInput.val(),uriParts:[]};this.route&&(s.routeUid=this.route.uid);for(var n=0;n<this.uriInput.elements.length;n++){var a=this.uriInput.elements[n];if(this.uriInput.isText(a)){var o=a.val();if(0===n){if(o=Craft.ltrim(o,"/"),Craft.startsWith(o,Craft.actionTrigger+"/"))return void this.addUriError(Craft.t("app","The URI can’t begin with the {setting} config setting.",{setting:"actionTrigger"}));if(Craft.cpTrigger&&Craft.startsWith(o,Craft.cpTrigger+"/"))return void this.addUriError(Craft.t("app","The URI can’t begin with the {setting} config setting.",{setting:"cpTrigger"}))}s.uriParts.push(o)}else s.uriParts.push([a.attr("data-name"),a.attr("data-value")])}s.template=this.$templateInput.val(),this.loading=!0,this.$saveBtn.addClass("active"),this.$spinner.show(),Craft.sendActionRequest("POST","routes/save-route",{data:s}).then((function(e){if(!i.route){var s='<div class="route" data-uid="'+e.data.routeUid+'"'+(e.data.siteUid?' data-site-uid="'+e.data.siteUid+'"':"")+'><div class="uri-container">';Craft.isMultiSite&&(s+='<span class="site"></span>');var n=t(s+='<span class="uri" dir="ltr"></span></div><div class="template" dir="ltr"></div></div>');n.appendTo("#routes"),i.route=new r(n),i.route.modal=i,Craft.routes.sorter.addItems(n),1===Craft.routes.sorter.$items.length&&t("#noroutes").addClass("hidden")}i.route.siteUid=e.data.siteUid,i.route.updateHtmlFromModal(),i.hide(),Craft.cp.displaySuccess(Craft.t("app","Route saved."))})).catch((function(){Craft.cp.displayError(Craft.t("app","Couldn’t save route."))})).finally((function(){i.$saveBtn.removeClass("active"),i.$spinner.hide(),i.loading=!1}))}},addUriError:function(t){this.$container.find(".uri-field .input").addClass("errors"),this.$uriErrors?Craft.ui.addErrorsToList(this.$uriErrors,[t]):(this.$uriErrors=Craft.ui.createErrorList([t]),this.$uriErrors.insertAfter(this.$container.find(".uri-field .input")))},cancel:function(){this.hide(),this.route&&(this.route.modal=null)},deleteRoute:function(){confirm(Craft.t("app","Are you sure you want to delete this route?"))&&(Craft.sendActionRequest("POST","routes/delete-route",{data:{routeUid:this.route.uid}}).then((function(t){Craft.cp.displaySuccess(Craft.t("app","Route deleted."))})),Craft.routes.sorter.removeItems(this.route.$container),this.route.$container.remove(),this.hide(),0===Craft.routes.sorter.$items.length&&t("#noroutes").removeClass("hidden"))}}),Craft.routes=new e}()}();
//# sourceMappingURL=routes.js.map