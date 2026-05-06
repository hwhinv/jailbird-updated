var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
//Scrollbar toggle
var scrollbar = {
    disable: function(classname, callback, duration) {
        //Disable all scroll events
        $(window).off("scroll", browser.scrollEvent);
        //Pause all visibility speciftc events on viewport
        browser.pauseAllIntensiveEvents();
        //Save scroll position
        browser._position = $(window).scrollTop();
        //Fake it using position:fixed on .viewport
        $('.viewport').css('top', (-1 * browser._position) + 'px').addClass('lock');
        //Set scroll postion to top of the window
        $(window).scrollTop(0);
        //Add classname
        $('html').addClass(classname);
        //Execute callback function
        if(typeof callback != "undefined") {
            if(typeof duration == "undefined") 
                duration = 500;
            setTimeout(function() {
                if ($.isFunction(callback)){
                    callback();
                }
            }, duration);
        }
    },
    enable: function(classname, callback, duration) {
        //Check undefined
        if(typeof duration == "undefined") 
            duration = 500;
        //Remove classname
        $('html').removeClass(classname);
        setTimeout(function() {
            //Remove faked position from .viewport
            $('.viewport').removeClass('lock').css('top', 'auto');
            //Set the previous scroll position of viewport to browser
            $(window).scrollTop(browser._position);
            //Execute callback function
            if ($.isFunction(callback)){
                callback();
            }
            //Resume all paused events
            browser.playVisibleEvents();
            //Set scroll postion index to zero
            browser._position = 0;
            //Enable all scroll events
            $(window).scroll(browser.scrollEvent);
        }, duration);
    },
    touchListen: function() {
        $(document).one('click touchstart', function closeOverlay (e) {
            if($('.overlay').has(e.target).length === 0)
                scrollbar.enable('has-overlay');
            else
                $(document).one('click touchstart', closeOverlay);
            return false;
        });
    }
};
}

/*
     FILE ARCHIVED ON 05:25:12 Feb 18, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:46:54 May 04, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 2.296
  load_resource: 343.486
  PetaboxLoader3.resolve: 34.478
  PetaboxLoader3.datanode: 297.914
*/