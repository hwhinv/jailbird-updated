var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

$(function () {
    /*********************
     ALL CLICKS
     *********************/
    $('body').on('click', 'a[data-scroll]', function (e) {
        e.preventDefault();
        var el = $(this),
                sel = el.data('scroll');
        if ($(this).hasClass('headermenu_a')) {
            scrollbar.enable('open-menu', function () {
                $('html, body').animate({
                    'scrollTop': $(sel).offset().top
                }, 1000);
            });
        } else {
            $('html, body').animate({
                'scrollTop': $(sel).offset().top
            }, 1000);
        }
    });

    //All the click events must go here

    //Menu Trigger
    $('body').on('click', '.header_burgeranimation', function (e) {
        if ($('html').hasClass('open-menu')) {
            scrollbar.enable('open-menu');
        } else {
            scrollbar.disable('open-menu');
        }
    });

    let animating = 0;
    let interval = 0;
    $('body').on('click', '.banner_btn', function (e) {
        $('html').addClass('remove_banner');
        setTimeout(function () {
            browser.scrollEvent();
            browser.initWow();
            if ($('.home ').length && !Modernizr.touchevents && browser._width > 1024) {
                $('.widget_sec').on('mousewheel', function (e) {
                    e.preventDefault();
                    if (animating <= 0) {
                        animating = 2;
                        clearInterval(interval);
                        let $el = $(this);
                        if (e.originalEvent.wheelDelta < 0) {
                            if (!$el.is(':last-child')) {
                                $('html, body').animate({
                                    scrollTop: $el.next().offset().top
                                }, 700);
                            }
                            interval = setInterval(function () {
                                animating -= 1;
                            }, 1000);
                        } else {
                            if (!$el.is(':first-child')) {
                                $('html, body').animate({
                                    scrollTop: $el.prev().offset().top
                                }, 700);
                            }
                            interval = setInterval(function () {
                                animating -= 1;
                            }, 1000);
                        }
                    }
                });
            }
        }, 700);
    });

    $('body').on('click', '.menu_lista', function (e) {
        e.preventDefault();
        $highlight = $(this).next('.menu_listtext');
        if ($highlight.hasClass('show')) {
            $highlight.removeClass('show');
            $highlight.slideUp();
            $(this).closest('.menu_list').removeClass('active');
        } else {
            $('.menu_listtext').removeClass('show');
            $('.menu_listtext').slideUp();
            $('.menu_list').removeClass('active');
            $(this).closest('.menu_list').addClass('active');
            $highlight.addClass('show');
            $highlight.slideDown();
        }
    });

    /********************
     ONE TIME INIT
     *********************/
    browser.setup(1);

    $(window).resize(function () {
        browser.setup(0);
    });

    $(window).scroll(browser.scrollEvent);
    $(window).scrollTop(0);
});

$(window).on('load', function () {
    //browser.scrollEvent();
});

}

/*
     FILE ARCHIVED ON 05:25:12 Feb 18, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:47:04 May 04, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 1.289
  load_resource: 234.669 (2)
  PetaboxLoader3.resolve: 115.48 (2)
  PetaboxLoader3.datanode: 77.764 (2)
*/