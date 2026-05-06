var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
/*
 jquery.hbaLoadImages.js v1.0
 @link https://github.com/handbuiltapps/loadimages
 @author Balaji Viswanath
 @organisation HandBuiltApps
 @license https://github.com/handbuiltapps/loadimages/blob/master/LICENSE
*/
(function(d){d.fn.hbaLoadImages=function(h){var a=d.extend({},{total:0,completed:0,selector:"img",attribute:"src",debug:!1,onSuccess:null,onError:null,onComplete:null,onQueueComplete:null},h),e={init:function(a,c){var b=d(a);"IMG"!==a.tagName&&(b=d(a).find(c.selector),c.total=b.length);c.completed=0;b.each(function(){var a=this,b=d(a).attr(c.attribute),f=new Image;if("IMG"!==this.tagName)e.trigger.onError("The element must be used only with a IMG tag.","",a);else if("undefined"==typeof b)e.trigger.onError("Source attribute was not found.","",a);else if(""==d.trim(b))e.trigger.onSuccess("",a);else if(f.src=b,f.complete||4===f.readystate)e.trigger.onSuccess(b,a);else f.onload=function(){e.trigger.onSuccess(b,a)},f.onerror=function(){e.trigger.onError("Unable to load the image.",b,a)}})},trigger:{onSuccess:function(b,c){if(d.isFunction(a.onSuccess))a.onSuccess(b,c);e.trigger.onComplete(b,c)},onError:function(b,c,g){!0===a.debug&&console.log(b);if(d.isFunction(a.onError))a.onError(b,c,g);e.trigger.onComplete(c,g)},onComplete:function(b,c){a.completed+=1;if(d.isFunction(a.onComplete))a.onComplete(b,c);if(a.completed===a.total)e.trigger.onQueueComplete()},onQueueComplete:function(){if(d.isFunction(a.onQueueComplete))a.onQueueComplete()}}};a.total=0;this.each(function(){a.total+=1});this.each(function(){e.init(this,a)});return this}})(jQuery);
}

/*
     FILE ARCHIVED ON 05:25:12 Feb 18, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:46:31 May 04, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 1.931
  load_resource: 267.033
  PetaboxLoader3.resolve: 225.052
  PetaboxLoader3.datanode: 25.02
*/