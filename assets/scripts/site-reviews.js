/*! For license information please see site-reviews.js.LICENSE.txt */
!function(t){var i={};function n(s){if(i[s])return i[s].exports;var e=i[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=i,n.d=function(t,i,s){n.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,i){if(1&i&&(t=n(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var e in t)n.d(s,e,function(i){return t[i]}.bind(null,e));return s},n.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(i,"a",i),i},n.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},n.p="/",n(n.s=7)}({1:function(t,i){function n(i){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(i)}t.exports=n},100:function(t,i){},102:function(t,i){},104:function(t,i){},2:function(t,i,n){var s;!function(n,e,h){"use strict";var o=function(t,i){var n={}.toString.call(t);this.selects="[object String]"===n?e.querySelectorAll(t):"[object NodeList]"===n?t:[t],this.destroy=function(){this.widgets.forEach((function(t){t.h()}))},this.rebuild=function(){this.widgets.forEach((function(t){t.u()}))},this.widgets=[];for(var s=0;s<this.selects.length;s++)if("SELECT"===this.selects[s].tagName&&!this.selects[s]["star-rating"]){var h=new r(this.selects[s],i);void 0!==h.direction&&this.widgets.push(h)}},r=function(t,i){this.el=t,this.v=this._({},this.g,i||{},JSON.parse(t.getAttribute("data-options"))),this.S(),this.stars<1||this.stars>this.v.maxStars||this.u()};r.prototype={g:{classname:"gl-star-rating",clearable:!0,initialText:"Select a Rating",maxStars:10,showText:!0},L:function(){this.R(),this.current=this.selected=this.j(),this.F(),this.T(),this.O(),this.G(this.current),this.M("add"),this.el["star-rating"]=!0},k:function(){this.v.showText&&(this.textEl=this.C(this.widgetEl,{class:this.v.classname+"-text"},!0))},T:function(){var t=this.N(),i=this.C(this.el,{class:this.v.classname+"-stars"},!0);for(var n in t){var s=this.D({"data-value":n,"data-text":t[n]});i.innerHTML+=s.outerHTML}this.widgetEl=i,this.k()},I:function(t){(t<0||isNaN(t))&&(t=0),t>this.stars&&(t=this.stars),this.widgetEl.classList.remove("s"+10*this.current),this.widgetEl.classList.add("s"+10*t),this.v.showText&&(this.textEl.textContent=t<1?this.v.initialText:this.widgetEl.childNodes[t-1].dataset.text),this.current=t},D:function(t){var i=e.createElement("span");for(var n in t=t||{})i.setAttribute(n,t[n]);return i},h:function(){this.M("remove");var t=this.el.parentNode;t.parentNode.replaceChild(this.el,t),delete this.el["star-rating"]},q:function(t,i,n){n.forEach(function(n){this.events&&t[i+"EventListener"](n,this.events[n])}.bind(this))},_:function(){var t=[].slice.call(arguments),i=t[0],n=t.slice(1);return Object.keys(n).forEach((function(t){for(var s in n[t])n[t].hasOwnProperty(s)&&(i[s]=n[t][s])})),i},V:function(t){var i={},n=t.pageX||t.changedTouches[0].pageX,s=this.widgetEl.offsetWidth;return i.ltr=Math.max(n-this.offsetLeft,1),i.rtl=s-i.ltr,Math.min(Math.ceil(i[this.direction]/Math.round(s/this.stars)),this.stars)},N:function(){for(var t=this.el,i={},n={},s=0;s<t.length;s++)this.A(t[s])||(i[t[s].value]=t[s].text);return Object.keys(i).sort().forEach((function(t){n[t]=i[t]})),n},j:function(){return parseInt(this.el.options[Math.max(this.el.selectedIndex,0)].value)||0},M:function(t){var i=this.el.closest("form");i&&"FORM"===i.tagName&&this.q(i,t,["reset"]),"add"===t&&this.el.disabled||(this.q(this.el,t,["change","keydown"]),this.q(this.widgetEl,t,["mousedown","mouseleave","mousemove","mouseover","touchend","touchmove","touchstart"]))},R:function(){this.events={change:this.H.bind(this),keydown:this.P.bind(this),mousedown:this.B.bind(this),mouseleave:this.U.bind(this),mousemove:this.W.bind(this),mouseover:this.X.bind(this),reset:this.J.bind(this),touchend:this.B.bind(this),touchmove:this.W.bind(this),touchstart:this.X.bind(this)}},C:function(t,i,n){var s=this.D(i);return t.parentNode.insertBefore(s,!0===n?t.nextSibling:t),s},A:function(t){return null===t.getAttribute("value")||""===t.value},H:function(){this.I(this.j())},P:function(t){if(~["ArrowLeft","ArrowRight"].indexOf(t.key)){var i="ArrowLeft"===t.key?-1:1;"rtl"===this.direction&&(i*=-1),this.G(Math.min(Math.max(this.j()+i,0),this.stars)),this.Y()}},B:function(t){t.preventDefault();var i=this.V(t);0!==this.current&&parseFloat(this.selected)===i&&this.v.clearable&&(i=0),this.G(i),this.Y()},U:function(t){t.preventDefault(),this.I(this.selected)},W:function(t){t.preventDefault(),this.I(this.V(t))},X:function(t){t.preventDefault();var i=this.widgetEl.getBoundingClientRect();this.offsetLeft=i.left+e.body.scrollLeft},J:function(){var t=this.el.querySelector("[selected]"),i=t?t.value:"";this.el.value=i,this.selected=parseInt(i)||0,this.I(i)},u:function(){this.el.parentNode.classList.contains(this.v.classname)&&this.h(),this.L()},O:function(){var t=this.el.parentNode;this.direction=n.getComputedStyle(t,null).getPropertyValue("direction"),t.classList.add(this.v.classname+"-"+this.direction)},G:function(t){this.el.value=this.selected=t,this.I(t)},S:function(){var t=this.el;this.stars=0;for(var i=0;i<t.length;i++)if(!this.A(t[i])){if(isNaN(parseFloat(t[i].value))||!isFinite(t[i].value))return void(this.stars=0);this.stars++}},Y:function(){this.el.dispatchEvent(new Event("change"))},F:function(){this.C(this.el,{class:this.v.classname,"data-star-rating":""}).appendChild(this.el)}},void 0===(s=function(){return o}.apply(i,[]))||(t.exports=s)}(window,document)},28:function(t,i,n){"use strict";n.r(i);var s=function(t){this.L(t||document)};s.prototype={config:{hiddenClass:"glsr-hidden",hiddenTextSelector:".glsr-hidden-text",readMoreClass:"glsr-read-more",visibleClass:"glsr-visible"},K:function(t){var i=document.createElement("span"),n=document.createElement("a");n.setAttribute("href","#"),n.setAttribute("data-text",t.getAttribute("data-show-less")),n.innerHTML=t.getAttribute("data-show-more"),n.addEventListener("click",this.$.bind(this)),i.setAttribute("class",this.config.readMoreClass),i.appendChild(n),t.parentNode.insertBefore(i,t.nextSibling)},$:function(t){t.preventDefault();var i=t.currentTarget,n=i.parentNode.previousSibling,s=i.getAttribute("data-text");n.classList.toggle(this.config.hiddenClass),n.classList.toggle(this.config.visibleClass),i.setAttribute("data-text",i.innerText),i.innerText=s},L:function(t){for(var i=t.querySelectorAll(this.config.hiddenTextSelector),n=0;n<i.length;n++)this.K(i[n])}};var e=s,h=n(1),o=n.n(h),r=function(){};r.prototype={get:function(t,i,n){this.Z(i),this.xhr.open("GET",t,!0),this.xhr.responseType="text",this.tt(n),this.xhr.send()},it:function(t){return"json"===this.xhr.responseType||!0===this.xhr.json?t({message:this.xhr.statusText},!1):"text"===this.xhr.responseType?t(this.xhr.statusText):void 0},nt:function(t){if(0===this.xhr.status||this.xhr.status>=200&&this.xhr.status<300||304===this.xhr.status){if("json"===this.xhr.responseType)return t(this.xhr.response.data,this.xhr.response.success);if("text"===this.xhr.responseType)return t(this.xhr.responseText);if(!0===this.xhr.json){var i=JSON.parse(this.xhr.response);return t(i.data,i.success)}}else this.it(t)},isFileSupported:function(){var t=document.createElement("INPUT");return t.type="file","files"in t},isFormDataSupported:function(){return!!window.FormData},isUploadSupported:function(){var t=new XMLHttpRequest;return!!(t&&"upload"in t&&"onprogress"in t.upload)},post:function(t,i,n){this.Z(i),this.xhr.open("POST",GLSR.ajaxurl,!0),this.xhr.responseType="json",this.xhr.json=!0,this.tt(n),this.xhr.send(this.st(t))},Z:function(t){this.xhr=new XMLHttpRequest,this.xhr.onload=this.nt.bind(this,t),this.xhr.onerror=this.it.bind(this,t)},et:function(t,i,n){return"object"!==o()(i)||i instanceof Date||i instanceof File?t.append(n,i||""):Object.keys(i).forEach(function(s){i.hasOwnProperty(s)&&(t=this.et(t,i[s],n?n[s]:s))}.bind(this)),t},st:function(t){var i=new FormData,n=Object.prototype.toString.call(t);return"[object FormData]"===n&&(i=t),"[object HTMLFormElement]"===n&&(i=new FormData(t)),"[object Object]"===n&&Object.keys(t).forEach((function(n){i.append(n,t[n])})),i.append("action",GLSR.action),i.append("_ajax_request",!0),i},tt:function(t){for(var i in(t=t||{})["X-Requested-With"]="XMLHttpRequest",t)t.hasOwnProperty(i)&&this.xhr.setRequestHeader(i,t[i])}};var a=r,u=function(t){this.Form=t,this.counter=0,this.id=-1,this.is_submitting=!1,this.recaptchaEl=t.form.querySelector(".glsr-recaptcha-holder"),this.observer=new MutationObserver(function(t){var i=t.pop();i.target&&"visible"!==i.target.style.visibility&&(this.observer.disconnect(),setTimeout(function(){this.is_submitting||this.Form.ht()}.bind(this),250))}.bind(this))};u.prototype={h:function(){this.counter=0,this.id=-1,this.is_submitting=!1,this.recaptchaEl&&(this.recaptchaEl.innerHTML="")},ot:function(){if(-1!==this.id)return this.counter=0,this.rt(this.id),void grecaptcha.execute(this.id);setTimeout(function(){this.counter++,this.at.call(this.Form,this.counter)}.bind(this),1e3)},rt:function(t){var i=window.___grecaptcha_cfg.clients[t];for(var n in i)if(i.hasOwnProperty(n)&&"[object String]"===Object.prototype.toString.call(i[n])){var s=document.querySelector("iframe[name=c-"+i[n]+"]");if(s){this.observer.observe(s.parentElement.parentElement,{attributeFilter:["style"],attributes:!0});break}}},ut:function(){this.Form.form.onsubmit=null,this.h(),this.ct()},ct:function(){this.recaptchaEl&&setTimeout(function(){if("undefined"==typeof grecaptcha||void 0===grecaptcha.render)return this.ct();this.id=grecaptcha.render(this.recaptchaEl,{callback:this.at.bind(this.Form,this.counter),"expired-callback":this.ft.bind(this),isolated:!0},!0)}.bind(this),250)},ft:function(){this.counter=0,this.is_submitting=!1,-1!==this.id&&grecaptcha.reset(this.id)},at:function(t){if(this.recaptcha.is_submitting=!0,!this.useAjax)return this.lt(),void this.form.submit();this.at(t)}};var c=u,f=n(2),l=n.n(f),d=function(t){var i='input[name="'+t.getAttribute("name")+'"]:checked';return t.validation.form.querySelectorAll(i).length},v={email:{fn:function(t){return!t||/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)}},max:{fn:function(t,i){return!t||("checkbox"===this.type?d(this)<=parseInt(i):parseFloat(t)<=parseFloat(i))}},maxlength:{fn:function(t,i){return!t||t.length<=parseInt(i)}},min:{fn:function(t,i){return!t||("checkbox"===this.type?d(this)>=parseInt(i):parseFloat(t)>=parseFloat(i))}},minlength:{fn:function(t,i){return!t||t.length>=parseInt(i)}},number:{fn:function(t){return!t||!isNaN(parseFloat(t))},priority:2},required:{fn:function(t){return"radio"===this.type||"checkbox"===this.type?d(this):void 0!==t&&""!==t},priority:99,halt:!0}},m=function(t){this.config=GLSR.validationconfig,this.fields=[],this.form=t,this.form.setAttribute("novalidate",""),this.strings=GLSR.validationstrings,this.init()};m.prototype={dt:["required","max","maxlength","min","minlength","pattern"],vt:"input:not([type^=hidden]):not([type^=submit]), select, textarea, [data-glsr-validate]",destroy:function(){for(this.ft();this.fields.length;){var t=this.fields.shift();this._t(t.input),delete t.input.validation}},init:function(){[].forEach.call(this.form.querySelectorAll(this.vt),function(t){this.fields.find((function(i){return i.input.name===t.name}))||this.fields.push(this.pt(t))}.bind(this))},bt:function(t){t.addEventListener(this.wt(t),this.gt.bind(this,t))},St:function(t,i,n){[].forEach.call(t,function(t){~this.dt.indexOf(t.name)?this.yt(i,n,t.name,t.value):"type"===t.name&&this.yt(i,n,t.value)}.bind(this))},yt:function(t,i,n,s){if(v[n]&&(v[n].name=n,t.push(v[n]),s)){var e=s.split(",");e.unshift(null),i[n]=e}},_t:function(t){t.removeEventListener(this.wt(t),this.gt.bind(this,t))},ft:function(){for(var t in this.fields)this.fields.hasOwnProperty(t)&&(this.fields[t].errorElements=null,this.fields[t].input.classList.remove(this.config.input_error_class),this.fields[t].input.classList.remove(this.config.input_valid_class));[].map.call(this.form.querySelectorAll("."+this.config.error_tag_class),function(t){t.parentNode.classList.remove(this.config.field_error_class),t.parentNode.removeChild(t)}.bind(this))},_:function(){var t=[].slice.call(arguments),i=t[0],n=t.slice(1);return Object.keys(n).forEach((function(t){for(var s in n[t])n[t].hasOwnProperty(s)&&(i[s]=n[t][s])})),i},Lt:function(t){if(t.errorElements)return t.errorElements;var i,n=t.input.closest("."+this.config.field_class);return n&&null===(i=n.closest("."+this.config.error_tag_class))&&((i=document.createElement(this.config.error_tag)).className=this.config.error_tag_class,n.appendChild(i)),t.errorElements=[n,i]},wt:function(t){return~["radio","checkbox"].indexOf(t.getAttribute("type"))||"SELECT"===t.nodeName?"change":"input"},pt:function(t){var i={},n=[];return null!==t.offsetParent&&(this.St(t.attributes,n,i),this.Rt(n),this.bt(t)),t.validation={form:this.form,input:t,params:i,validators:n}},Et:function(t,i){var n=this.Lt(t),s="add"===i;t.input.classList[i](this.config.input_error_class),t.input.classList[s?"remove":"add"](this.config.input_valid_class),n[0]&&n[0].classList[i](this.config.field_error_class),n[1]&&(n[1].innerHTML=s?t.errors.join("<br>"):"",n[1].style.display=s?"":"none")},xt:function(t,i){t.hasOwnProperty("validation")&&this.pt(t),t.validation.errors=i},Rt:function(t){t.sort((function(t,i){return(i.priority||1)-(t.priority||1)}))},gt:function(t){var i=!0,n=this.fields;for(var s in t instanceof HTMLElement&&(n=[t.validation]),n)if(n.hasOwnProperty(s)){var e=n[s];this.jt(e)?this.Et(e,"remove"):(i=!1,this.Et(e,"add"))}return i},jt:function(t){var i=[],n=!0;for(var s in t.validators)if(t.validators.hasOwnProperty(s)){var e=t.validators[s],h=t.params[e.name]?t.params[e.name]:[];if(h[0]=t.input.value,!e.fn.apply(t.input,h)){n=!1;var o=this.strings[e.name];if(i.push(o.replace(/(\%s)/g,h[1])),!0===e.halt)break}}return t.errors=i,n}};var _=m,p=function(t,i){this.button=i,this.config=GLSR.validationconfig,this.events={submit:this.Ft.bind(this)},this.form=t,this.isActive=!1,this.recaptcha=new c(this),this.stars=null,this.strings=GLSR.validationstrings,this.useAjax=this.Tt(),this.validation=new _(t)};p.prototype={destroy:function(){this.destroyForm(),this.destroyRecaptcha(),this.destroyStarRatings(),this.isActive=!1},destroyForm:function(){this.form.removeEventListener("submit",this.events.submit),this.Ot()},destroyRecaptcha:function(){this.recaptcha.h()},destroyStarRatings:function(){this.stars&&(this.stars.destroy(),delete this.stars)},init:function(){this.isActive||(this.initForm(),this.initStarRatings(),this.initRecaptcha(),this.isActive=!0)},initForm:function(){this.destroyForm(),this.form.addEventListener("submit",this.events.submit)},initRecaptcha:function(){this.recaptcha.ut()},initStarRatings:function(){this.destroyStarRatings(),this.stars=new l.a(this.form.querySelectorAll("select.glsr-star-rating"),{clearable:!1,showText:!1})},Gt:function(t,i,n){t.classList[n?"add":"remove"](i)},lt:function(){this.button.setAttribute("disabled","")},ht:function(){this.button.removeAttribute("disabled")},Mt:function(t,i){var n=!0===i;"unset"!==t.recaptcha?("reset"===t.recaptcha&&this.recaptcha.ft(),n&&(this.recaptcha.ft(),this.form.reset()),this.kt(t.errors),this.Ct(t.message,n),this.ht(),t.form=this.form,document.dispatchEvent(new CustomEvent("site-reviews/after/submission",{detail:t})),n&&""!==t.redirect&&(window.location=t.redirect)):this.recaptcha.ot()},Tt:function(){var t=!0;return[].forEach.call(this.form.elements,(function(i){"file"===i.type&&(t=a.isFileSupported()&&a.isUploadSupported())})),t&&!this.form.classList.contains("no-ajax")},Ft:function(t){if(!this.validation.gt())return t.preventDefault(),void this.Ct(this.strings.errors,!1);this.Ot(),(this.form["g-recaptcha-response"]&&""===this.form["g-recaptcha-response"].value||this.useAjax)&&(t.preventDefault(),this.at())},Ot:function(){this.Ct("",null),this.validation.ft()},kt:function(t){if(t)for(var i in t)if(t.hasOwnProperty(i)){var n=GLSR.nameprefix?GLSR.nameprefix+"["+i+"]":i,s=this.form.querySelector('[name="'+n+'"]');s&&(this.validation.xt(s,t[i]),this.validation.Et(s.validation,"add"))}},Ct:function(t,i){var n=this.form.querySelector("."+this.config.message_tag_class);null===n&&((n=document.createElement(this.config.message_tag)).className=this.config.message_tag_class,this.button.parentNode.insertBefore(n,this.button.nextSibling)),this.Gt(n,this.config.message_error_class,!1===i),this.Gt(n,this.config.message_success_class,!0===i),n.classList.remove(this.config.message_initial_class),n.innerHTML=t},at:function(t){a.isFormDataSupported()?(this.lt(),this.form[GLSR.nameprefix+"[_counter]"].value=t||0,(new a).post(this.form,this.Mt.bind(this))):this.Ct(this.strings.unsupported,!1)}};var b=function(){for(;GLSR.forms.length;){(t=GLSR.forms.shift()).destroy()}var t,i,n;i=document.querySelectorAll("form.glsr-form");for(var s=0;s<i.length;s++)(n=i[s].querySelector("[type=submit]"))&&((t=new p(i[s],n)).init(),GLSR.forms.push(t))},w=function(t,i){this.paginationEl=t,this.reviewsEl=i,this.R()};w.prototype={config:{hideClass:"glsr-hide",linkSelector:"a.page-numbers",scrollTime:468},Nt:function(){var t=document.getElementById(this.paginationEl.dataset.id);return t||this.reviewsEl},Mt:function(t,i,n){n?(this.paginationEl.innerHTML=i.pagination,this.reviewsEl.innerHTML=i.reviews,this.Dt(this.reviewsEl),this.paginationEl.classList.remove(this.config.hideClass),this.reviewsEl.classList.remove(this.config.hideClass),this.R(),GLSR.urlparameter&&window.history.pushState(null,"",t),new e(this.reviewsEl)):window.location=t},R:function(){for(var t=this.paginationEl.querySelectorAll(this.config.linkSelector),i=0;i<t.length;i++)t[i].addEventListener("click",this.$.bind(this))},$:function(t){var i=this.Nt();if(i){for(var n={},s=0,e=Object.keys(i.dataset);s<e.length;s++){var h=e[s];n[GLSR.nameprefix+"[atts]["+h+"]"]=i.dataset[h]}n[GLSR.nameprefix+"[_action]"]="fetch-paged-reviews",n[GLSR.nameprefix+"[page]"]=t.currentTarget.dataset.page||"",n[GLSR.nameprefix+"[url]"]=t.currentTarget.href||"",this.paginationEl.classList.add(this.config.hideClass),this.reviewsEl.classList.add(this.config.hideClass),t.preventDefault(),(new a).post(n,this.Mt.bind(this,t.currentTarget.href))}},Dt:function(t,i){var n;i=i||16;for(var s=0;s<GLSR.ajaxpagination.length;s++)(n=document.querySelector(GLSR.ajaxpagination[s]))&&"fixed"===window.getComputedStyle(n).getPropertyValue("position")&&(i+=n.clientHeight);var e=t.getBoundingClientRect().top-i;e>0||this.It({endY:e,offset:window.pageYOffset,startTime:window.performance.now(),startY:t.scrollTop})},It:function(t){var i=(window.performance.now()-t.startTime)/this.config.scrollTime;i=i>1?1:i;var n=.5*(1-Math.cos(Math.PI*i)),s=t.startY+(t.endY-t.startY)*n;window.scroll(0,t.offset+s),s!==t.endY&&window.requestAnimationFrame(this.It.bind(this,t))}};var g=function(){this.navs=[];var t=document.querySelectorAll(".glsr-ajax-pagination");t.length&&t.forEach(function(t){var i=document.querySelector("[data-reviews][data-id="+t.dataset.id);i&&this.navs.push(new w(t,i))}.bind(this))};window.hasOwnProperty("GLSR")||(window.GLSR={}),window.GLSR.forms=[],document.addEventListener("DOMContentLoaded",(function(){for(var t=document.querySelectorAll(".glsr"),i=0;i<t.length;i++){var n=window.getComputedStyle(t[i],null).getPropertyValue("direction");t[i].classList.add("glsr-"+n)}new b,new g,new e}))},59:function(t,i){},64:function(t,i){},66:function(t,i){},68:function(t,i){},7:function(t,i,n){n(28),n(59),n(64),n(66),n(68),n(70),n(72),n(74),n(76),n(78),n(80),n(82),n(84),n(86),n(88),n(90),n(92),n(94),n(96),n(98),n(100),n(102),t.exports=n(104)},70:function(t,i){},72:function(t,i){},74:function(t,i){},76:function(t,i){},78:function(t,i){},80:function(t,i){},82:function(t,i){},84:function(t,i){},86:function(t,i){},88:function(t,i){},90:function(t,i){},92:function(t,i){},94:function(t,i){},96:function(t,i){},98:function(t,i){}});