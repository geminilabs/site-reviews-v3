!function(i,e,t){"use strict";var n=function(t,i){this.selects="[object String]"==={}.toString.call(t)?e.querySelectorAll(t):[t],this.destroy=function(){this.widgets.forEach(function(t){t.t()})},this.rebuild=function(){this.widgets.forEach(function(t){t.i()})},this.widgets=[];for(var n=0;n<this.selects.length;n++)if("SELECT"===this.selects[n].tagName){var s=new h(this.selects[n],i);void 0!==s.direction&&this.widgets.push(s)}},h=function(t,i){this.el=t,this.n=this.s({},this.e,i||{},JSON.parse(t.getAttribute("data-options"))),this.h(),this.stars<1||this.stars>this.n.maxStars||this.o()};h.prototype={e:{classname:"gl-star-rating",clearable:!0,initialText:"Select a Rating",maxStars:10,showText:!0},o:function(){this.r(),this.current=this.selected=this.a(),this.u(),this.c(),this.f(),this.d(this.current),this.l("add")},v:function(){this.n.showText&&(this.textEl=this.m(this.widgetEl,{class:this.n.classname+"-text"},!0))},c:function(){var t=this._(),i=this.m(this.el,{class:this.n.classname+"-stars"},!0);for(var n in t){var s=this.p({"data-value":n,"data-text":t[n]});i.innerHTML+=s.outerHTML}this.widgetEl=i,this.v()},w:function(t){(t<0||isNaN(t))&&(t=0),t>this.stars&&(t=this.stars),this.widgetEl.classList.remove("s"+10*this.current),this.widgetEl.classList.add("s"+10*t),this.n.showText&&(this.textEl.textContent=t<1?this.n.initialText:this.widgetEl.childNodes[t-1].dataset.text),this.current=t},p:function(t){var i=e.createElement("span");for(var n in t=t||{})i.setAttribute(n,t[n]);return i},t:function(){this.l("remove");var t=this.el.parentNode;t.parentNode.replaceChild(this.el,t)},g:function(i,n,t){t.forEach(function(t){i[n+"EventListener"](t,this.events[t])}.bind(this))},s:function(){var t=[].slice.call(arguments),n=t[0],s=t.slice(1);return Object.keys(s).forEach(function(t){for(var i in s[t])s[t].hasOwnProperty(i)&&(n[i]=s[t][i])}),n},S:function(t){var i={},n=t.pageX||t.changedTouches[0].pageX,s=this.widgetEl.offsetWidth;return i.ltr=Math.max(n-this.offsetLeft,1),i.rtl=s-i.ltr,Math.min(Math.ceil(i[this.direction]/Math.round(s/this.stars)),this.stars)},_:function(){for(var t=this.el,i={},n={},s=0;s<t.length;s++)this.L(t[s])||(i[t[s].value]=t[s].text);return Object.keys(i).sort().forEach(function(t){n[t]=i[t]}),n},a:function(){return parseInt(this.el.options[Math.max(this.el.selectedIndex,0)].value)||0},l:function(t){var i=this.el.closest("form");"FORM"===i.tagName&&this.g(i,t,["reset"]),this.g(this.el,t,["change","keydown"]),this.g(this.widgetEl,t,["mousedown","mouseleave","mousemove","mouseover","touchend","touchmove","touchstart"])},r:function(){this.events={change:this.R.bind(this),keydown:this.b.bind(this),mousedown:this.x.bind(this),mouseleave:this.G.bind(this),mousemove:this.T.bind(this),mouseover:this.F.bind(this),reset:this.M.bind(this),touchend:this.x.bind(this),touchmove:this.T.bind(this),touchstart:this.F.bind(this)}},m:function(t,i,n){var s=this.p(i);return t.parentNode.insertBefore(s,!0===n?t.nextSibling:t),s},L:function(t){return null===t.getAttribute("value")||""===t.value},R:function(){this.w(this.a())},b:function(t){if(~["ArrowLeft","ArrowRight"].indexOf(t.key)){var i="ArrowLeft"===t.key?-1:1;"rtl"===this.direction&&(i*=-1),this.d(Math.min(Math.max(this.a()+i,0),this.stars)),this.k()}},x:function(t){t.preventDefault();var i=this.S(t);if(0!==this.current&&parseFloat(this.selected)===i&&this.n.clearable)return this.M(),void this.k();this.d(i),this.k()},G:function(t){t.preventDefault(),this.w(this.selected)},T:function(t){t.preventDefault(),this.w(this.S(t))},F:function(t){t.preventDefault();var i=this.widgetEl.getBoundingClientRect();this.offsetLeft=i.left+e.body.scrollLeft},M:function(){var t=this.el.querySelector("[selected]"),i=t?t.value:"";this.el.value=i,this.selected=parseInt(i)||0,this.w(i)},i:function(){this.el.parentNode.classList.contains(this.n.classname)&&this.t(),this.o()},f:function(){var t=this.el.parentNode;this.direction=i.getComputedStyle(t,null).getPropertyValue("direction"),t.classList.add(this.n.classname+"-"+this.direction)},d:function(t){this.el.value=this.selected=t,this.w(t)},h:function(){for(var t=this.el,i=this.stars=0;i<t.length;i++)if(!this.L(t[i])){if(isNaN(parseFloat(t[i].value))||!isFinite(t[i].value))return void(this.stars=0);this.stars++}},k:function(){this.el.dispatchEvent(new Event("change"))},u:function(){this.m(this.el,{class:this.n.classname,"data-star-rating":""}).appendChild(this.el)}},"function"==typeof define&&define.amd?define([],function(){return n}):"object"==typeof module&&module.exports?module.exports=n:i.StarRating=n}(window,document),function(){"use strict";GLSR.Ajax=function(){},GLSR.Ajax.prototype={y:function(t,i,n){this.xhr=new XMLHttpRequest,this.xhr.open("GET",t),this.xhr.onreadystatechange=function(){4===this.xhr.readyState&&200===this.xhr.status&&i(this.xhr.responseText)}.bind(this),this.C(n),this.xhr.send()},O:function(){var t=document.createElement("INPUT");return t.type="file","files"in t},j:function(){return!!window.FormData},I:function(){var t=new XMLHttpRequest;return!!(t&&"upload"in t&&"onprogress"in t.upload)},D:function(i,n,s){return"object"!=typeof n||n instanceof Date||n instanceof File?i.append(s,n||""):Object.keys(n).forEach(function(t){n.hasOwnProperty(t)&&(i=this.D(i,n[t],s?s[t]:t))}.bind(this)),i},N:function(t){var i=new FormData(t);return"[object HTMLFormElement]"!==Object.prototype.toString.call(t)&&(i=this.D(i,t)),i.append("action",GLSR.action),i.append("_ajax_request",!0),i},q:function(t,i,n){this.xhr=new XMLHttpRequest,this.xhr.open("POST",GLSR.ajaxurl),this.C(n),this.xhr.send(this.N(t)),this.xhr.onreadystatechange=function(){if(this.xhr.readyState===XMLHttpRequest.DONE){var t=JSON.parse(this.xhr.responseText);i(t.data,t.success)}}.bind(this)},C:function(t){for(var i in(t=t||{})["X-Requested-With"]="XMLHttpRequest",t)t.hasOwnProperty(i)&&this.xhr.setRequestHeader(i,t[i])}}}(),function(){"use strict";GLSR.Excerpts=function(t){this.o(t||document)},GLSR.Excerpts.prototype={config:{hiddenClass:"glsr-hidden",hiddenTextSelector:".glsr-hidden-text",readMoreClass:"glsr-read-more",visibleClass:"glsr-visible"},H:function(t){var i=document.createElement("span"),n=document.createElement("a");n.setAttribute("href","#"),n.setAttribute("data-text",t.getAttribute("data-show-less")),n.innerHTML=t.getAttribute("data-show-more"),n.addEventListener("click",this.P.bind(this)),i.setAttribute("class",this.config.readMoreClass),i.appendChild(n),t.parentNode.insertBefore(i,t.nextSibling)},P:function(t){t.preventDefault();var i=t.currentTarget,n=i.parentNode.previousSibling,s=i.getAttribute("data-text");n.classList.toggle(this.config.hiddenClass),n.classList.toggle(this.config.visibleClass),i.setAttribute("data-text",i.innerText),i.innerText=s},o:function(t){for(var i=t.querySelectorAll(this.config.hiddenTextSelector),n=0;n<i.length;n++)this.H(i[n])}}}(),function(){"use strict";var e=function(t,i){this.button=i,this.config=GLSR.validationconfig,this.form=t,this.recaptcha=new GLSR.Recaptcha(this),this.strings=GLSR.validationstrings,this.useAjax=this.V(),this.validation=new GLSR.Validation(t)};e.prototype={A:function(t,i,n){t.classList[n?"add":"remove"](i)},X:function(){this.button.setAttribute("disabled","")},B:function(){this.button.removeAttribute("disabled")},U:function(t,i){var n=!0===i;"unset"!==t.recaptcha?("reset"===t.recaptcha&&this.recaptcha.W(),n&&(this.recaptcha.W(),this.form.reset()),this.J(t.errors),this.Y(t.message,n),this.B(),t.form=this.form,document.dispatchEvent(new CustomEvent("site-reviews/after/submission",{detail:t})),n&&""!==t.redirect&&(window.location=t.redirect)):this.recaptcha.z()},o:function(){this.form.addEventListener("submit",this.K.bind(this)),this.$(),this.recaptcha.Q()},$:function(){var t=this.form.querySelector("select.glsr-star-rating");t&&new StarRating(t,{clearable:!1,showText:!1})},V:function(){var i=new GLSR.Ajax,n=!0;return[].forEach.call(this.form.elements,function(t){"file"===t.type&&(n=i.O()&&i.I())}),n&&!this.form.classList.contains("no-ajax")},K:function(t){if(!this.validation.Z())return t.preventDefault(),void this.Y(this.strings.errors,!1);this.tt(),(this.form["g-recaptcha-response"]&&""===this.form["g-recaptcha-response"].value||this.useAjax)&&(t.preventDefault(),this.it())},tt:function(){this.Y("",!0),this.validation.W()},J:function(t){if(t)for(var i in t){var n=GLSR.nameprefix?GLSR.nameprefix+"["+i+"]":i,s=this.form.querySelector('[name="'+n+'"]');this.validation.nt(s,t[i]),this.validation.st(s.validation,"add")}},Y:function(t,i){var n=this.form.querySelector("."+this.config.message_tag_class);null===n&&((n=document.createElement(this.config.message_tag)).className=this.config.message_tag_class,this.button.parentNode.insertBefore(n,this.button.nextSibling)),this.A(n,this.config.message_error_class,!i),this.A(n,this.config.message_success_class,i),n.classList.remove(this.config.message_initial_class),n.innerHTML=t},it:function(t){(new GLSR.Ajax).j()?(this.X(),this.form[GLSR.nameprefix+"[_counter]"].value=t||0,(new GLSR.Ajax).q(this.form,this.U.bind(this))):this.Y(this.strings.unsupported,!1)}},GLSR.Forms=function(t){var i,n;this.nodeList=document.querySelectorAll("form.glsr-form"),this.forms=[];for(var s=0;s<this.nodeList.length;s++)(n=this.nodeList[s].querySelector("[type=submit]"))&&(i=new e(this.nodeList[s],n),t&&i.o(),this.forms.push(i))}}(),function(){"use strict";var i=function(t){this.el=t,this.r()};i.prototype={config:{hideClass:"glsr-hide",linkSelector:".glsr-navigation a",scrollTime:468},et:function(t){for(var i=0;t=t.previousSibling;)1===t.nodeType&&i++;return i},ht:function(t){if(t.nodeName)return this.ot(this.rt(t))},ot:function(t){if(""!==t.id)return"#"+t.id;var i="";return t.parent&&(i=this.ot(t.parent)+" > "),i+t.name+":nth-child("+(t.index+1)+")"},rt:function(t){var i={id:t.id,index:this.et(t),name:t.nodeName.toLowerCase(),parent:null};return t.parentElement&&t.parentElement!==document.body&&(i.parent=this.rt(t.parentElement)),i},at:function(t){return t.className?"."+t.className.trim().replace(/\s+/g,"."):""},ut:function(t){return t.id?"#"+t.id.trim():""},U:function(t,i,n){var s=document.implementation.createHTMLDocument("x");s.documentElement.innerHTML=n;var e=i?s.querySelectorAll(i):"";if(1===e.length)return this.el.innerHTML=e[0].innerHTML,this.ct(this.el),this.el.classList.remove(this.config.hideClass),this.r(),window.history.pushState(null,"",t),void new GLSR.Excerpts(this.el);window.location=t},r:function(){for(var t=this.el.querySelectorAll(this.config.linkSelector),i=0;i<t.length;i++)t[i].addEventListener("click",this.P.bind(this))},P:function(t){t.preventDefault();var i=this.ht(this.el);this.el.classList.add(this.config.hideClass),(new GLSR.Ajax).y(t.currentTarget.href,this.U.bind(this,t.currentTarget.href,i))},ct:function(t,i){var n;i=i||16;for(var s=0;s<GLSR.ajaxpagination.length;s++)(n=document.querySelector(GLSR.ajaxpagination[s]))&&"fixed"===window.getComputedStyle(n).getPropertyValue("position")&&(i+=n.clientHeight);var e=t.getBoundingClientRect().top-i;0<e||this.ft({endY:e,offset:window.pageYOffset,startTime:window.performance.now(),startY:t.scrollTop})},ft:function(t){var i=(window.performance.now()-t.startTime)/this.config.scrollTime;i=1<i?1:i;var n=.5*(1-Math.cos(Math.PI*i)),s=t.startY+(t.endY-t.startY)*n;window.scroll(0,t.offset+s),s!==t.endY&&window.requestAnimationFrame(this.ft.bind(this,t))}},GLSR.Pagination=function(){this.navs=[],document.querySelectorAll(".glsr-ajax-pagination").forEach(function(t){this.navs.push(new i(t))}.bind(this))}}(),function(){"use strict";GLSR.Recaptcha=function(t){this.Form=t,this.counter=0,this.id=-1,this.is_submitting=!1,this.observer=new MutationObserver(function(t){var i=t.pop();i.target&&"visible"!==i.target.style.visibility&&(this.observer.disconnect(),setTimeout(function(){this.is_submitting||this.Form.B()}.bind(this),250))}.bind(this))},GLSR.Recaptcha.prototype={z:function(){if(-1!==this.id)return this.counter=0,this.dt(this.id),void grecaptcha.execute(this.id);setTimeout(function(){this.counter++,this.it.call(this.Form,this.counter)}.bind(this),1e3)},dt:function(t){var i=window.___grecaptcha_cfg.clients[t];for(var n in i)if("[object String]"===Object.prototype.toString.call(i[n])){var s=document.querySelector("iframe[name=c-"+i[n]+"]");if(s){this.observer.observe(s.parentElement.parentElement,{attributeFilter:["style"],attributes:!0});break}}},Q:function(){this.Form.form.onsubmit=null;var t=this.Form.form.querySelector(".glsr-recaptcha-holder");t&&(t.innerHTML="",this.lt(t))},lt:function(t){setTimeout(function(){if("undefined"==typeof grecaptcha||void 0===grecaptcha.render)return this.lt(t);this.id=grecaptcha.render(t,{callback:this.it.bind(this.Form,this.counter),"expired-callback":this.W.bind(this),isolated:!0},!0)}.bind(this),250)},W:function(){this.counter=0,this.is_submitting=!1,-1!==this.id&&grecaptcha.reset(this.id)},it:function(t){if(this.recaptcha.is_submitting=!0,!this.useAjax)return this.X(),void this.form.submit();this.it(t)}}}(),function(){"use strict";function n(t){var i='input[name="'+t.getAttribute("name")+'"]:checked';return t.validation.form.querySelectorAll(i).length}var h={email:{fn:function(t){return!t||/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)}},max:{fn:function(t,i){return!t||("checkbox"===this.type?n(this)<=parseInt(i):parseFloat(t)<=parseFloat(i))}},maxlength:{fn:function(t,i){return!t||t.length<=parseInt(i)}},min:{fn:function(t,i){return!t||("checkbox"===this.type?n(this)>=parseInt(i):parseFloat(t)>=parseFloat(i))}},minlength:{fn:function(t,i){return!t||t.length>=parseInt(i)}},number:{fn:function(t){return!t||!isNaN(parseFloat(t))},priority:2},required:{fn:function(t){return"radio"===this.type||"checkbox"===this.type?n(this):void 0!==t&&""!==t},priority:99,halt:!0}};GLSR.Validation=function(t){this.config=GLSR.validationconfig,this.form=t,this.form.setAttribute("novalidate",""),this.strings=GLSR.validationstrings,this.o()},GLSR.Validation.prototype={vt:["required","max","maxlength","min","minlength","pattern"],mt:"input:not([type^=hidden]):not([type^=submit]), select, textarea",_t:function(t){var i=~["radio","checkbox"].indexOf(t.getAttribute("type"))||"SELECT"===t.nodeName?"change":"input";t.addEventListener(i,function(t){this.Z(t.target)}.bind(this))},pt:function(t,i,n){[].forEach.call(t,function(t){~this.vt.indexOf(t.name)?this.wt(i,n,t.name,t.value):"type"===t.name&&this.wt(i,n,t.value)}.bind(this))},wt:function(t,i,n,s){if(h[n]&&(h[n].name=n,t.push(h[n]),s)){var e=s.split(",");e.unshift(null),i[n]=e}},W:function(){for(var t in this.fields)this.fields[t].errorElements=null,this.fields[t].input.classList.remove(this.config.input_error_class);[].map.call(this.form.querySelectorAll("."+this.config.error_tag_class),function(t){t.parentNode.classList.remove(this.config.field_error_class),t.parentNode.removeChild(t)}.bind(this))},s:function(){var t=[].slice.call(arguments),n=t[0],s=t.slice(1);return Object.keys(s).forEach(function(t){for(var i in s[t])s[t].hasOwnProperty(i)&&(n[i]=s[t][i])}),n},gt:function(t){if(t.errorElements)return t.errorElements;var i,n=t.input.closest("."+this.config.field_class);return n&&null===(i=n.closest("."+this.config.error_tag_class))&&((i=document.createElement(this.config.error_tag)).className=this.config.error_tag_class,n.appendChild(i)),t.errorElements=[n,i]},o:function(){this.fields=[].map.call(this.form.querySelectorAll(this.mt),function(t){return this.St(t)}.bind(this))},St:function(t){var i={},n=[];return this.pt(t.attributes,n,i),this.Lt(n),this._t(t),t.validation={form:this.form,input:t,params:i,validators:n}},st:function(t,i){var n=this.gt(t),s="add"===i;t.input.classList[i](this.config.input_error_class),n[0]&&n[0].classList[i](this.config.field_error_class),n[1]&&(n[1].innerHTML=s?t.errors.join("<br>"):"",n[1].style.display=s?"":"none")},nt:function(t,i){t.validation||this.St(t),t.validation.errors=i},Lt:function(t){t.sort(function(t,i){return(i.priority||1)-(t.priority||1)})},Z:function(t){var i=!0,n=this.fields;for(var s in t instanceof HTMLElement&&(n=[t.validation]),n){var e=n[s];this.Rt(e)?this.st(e,"remove"):(i=!1,this.st(e,"add"))}return i},Rt:function(t){var i=[],n=!0;for(var s in t.validators)if(t.validators.hasOwnProperty(s)){var e=t.validators[s],h=t.params[e.name]?t.params[e.name]:[];if(h[0]=t.input.value,!e.fn.apply(t.input,h)){n=!1;var o=this.strings[e.name];if(i.push(o.replace(/(\%s)/g,h[1])),!0===e.halt)break}}return t.errors=i,n}}}(),document.addEventListener("DOMContentLoaded",function(){for(var t=document.querySelectorAll(".glsr-widget, .glsr-shortcode"),i=0;i<t.length;i++){var n=window.getComputedStyle(t[i],null).getPropertyValue("direction");t[i].classList.add("glsr-"+n)}document.all&&!window.atob||(new GLSR.Forms(!0),new GLSR.Pagination,new GLSR.Excerpts)});