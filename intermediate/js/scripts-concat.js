window.log=function(){log.history=log.history||[];log.history.push(arguments);arguments.callee=arguments.callee.caller;if(this.console){console.log(Array.prototype.slice.call(arguments))}};(function(e){function h(){}for(var g="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info, log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),f;f=g.pop();){e[f]=e[f]||h}})(window.console=window.console||{});
/*!
 * HTML5 Placeholder jQuery Plugin v1.8.2
 * @link http://github.com/mathiasbynens/Placeholder-jQuery-Plugin
 * @author Mathias Bynens <http://mathiasbynens.be/>
 */
(function(f){var e="placeholder" in document.createElement("input"),a="placeholder" in document.createElement("textarea");if(e&&a){f.fn.placeholder=function(){return this};f.fn.placeholder.input=f.fn.placeholder.textarea=true}else{f.fn.placeholder=function(){return this.filter((e?"textarea":":input")+"[placeholder]").bind("focus.placeholder",b).bind("blur.placeholder",d).trigger("blur.placeholder").end()};f.fn.placeholder.input=e;f.fn.placeholder.textarea=a}function c(h){var g={},i=/^jQuery\d+$/;f.each(h.attributes,function(k,j){if(j.specified&&!i.test(j.name)){g[j.name]=j.value}});return g}function b(){var g=f(this);if(g.val()===g.attr("placeholder")&&g.hasClass("placeholder")){if(g.data("placeholder-password")){g.hide().next().attr("id",g.removeAttr("id").data("placeholder-id")).show().focus()}else{g.val("").removeClass("placeholder")}}}function d(h){var l,k=f(this),g=k,j=this.id;if(k.val()===""){if(k.is(":password")){if(!k.data("placeholder-textinput")){try{l=k.clone().attr({type:"text"})}catch(i){l=f("<input>").attr(f.extend(c(this),{type:"text"}))}l.removeAttr("name").data("placeholder-password",true).data("placeholder-id",j).bind("focus.placeholder",b);k.data("placeholder-textinput",l).data("placeholder-id",j).before(l)}k=k.removeAttr("id").hide().prev().attr("id",j).show()}k.addClass("placeholder").val(k.attr("placeholder"))}else{k.removeClass("placeholder")}}f(function(){f("form").bind("submit.placeholder",function(){var g=f(".placeholder",this).each(b);setTimeout(function(){g.each(d)},10)})});f(window).bind("unload.placeholder",function(){f(".placeholder").val("")})}(jQuery));if(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)){var viewportmeta=document.querySelectorAll('meta[name="viewport"]')[0];if(viewportmeta){viewportmeta.content="width=device-width, minimum-scale=1.0, maximum-scale=1.0";document.body.addEventListener("gesturestart",function(){viewportmeta.content="width=device-width, minimum-scale=0.25, maximum-scale=1.6"},false)}};