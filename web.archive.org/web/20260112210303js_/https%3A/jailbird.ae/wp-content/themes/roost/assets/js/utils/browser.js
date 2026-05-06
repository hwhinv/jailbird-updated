var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
// Create cross browser requestAnimationFrame method:
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (f) {
    setTimeout(f, 1000 / 60)
};

//Page functions
var browser = {
    _csrf: null,
    _width: 0,
    _height: 0,
    _header_height: 0,
    _filter_position: 0,
    _position: 0,
    _isotope: null,
    _coords: [],
    _list: [],
    setup: function (init) {
        this._width = $(window).width();
        this._height = $(window).height();

        if (init === 1) {
            //Code that should be executed only once goes here

            if ($('.movinganimation').length) {
                browser.movinganimation();
            }
            if ($('.movinganimationrepeat').length) {
                browser.movinganimationrepeat();
            }
            if ($('.movinganimationloop').length) {
                browser.movinganimationloop();
            }
            //Parallax
            if ($(".parallax").length) {
                $(".parallax").each(function () {
                    browser._list.push($(this));
                });
            }

            if ($('.banner').length) {
                browser.bannercalculation();
            }

            if ($('.two_column_with_image_list').length) {
                browser.instasectionheight();
            }

            browser.header_burgeranimation();
            browser.header_menuanimation();
            //Smooth Scroll Different Page
            browser.scrollPage(window.location.href);
            //Smooth Scroll Same Page
            browser.samepageScroll(window.location.href);

            $('.banner').next().addClass('scrollsection');

            //Add target blank for external links           
            browser.targetBlank();
            //Match Height              
            adjustHeights.setHeightByRow(".equalContentHeight");
            /* WOW JS */
            if (!Modernizr.touchevents && browser._width > 1024) {
                WOW.prototype.addBox = function (element) {
                    this.boxes.push(element);
                };
                browser.initWow();
            }
            /* WOW JS */
        }

        //Code that should execute on window resize goes here

        if ($('.banner').length) {
            browser.bannercalculation()
        }

        if ($('.two_column_with_image_list').length) {
            browser.instasectionheight();
        }

        if (!Modernizr.touchevents) {
            $.each(this._list, function (item, v) {
                if (browser._width <= 1024) {
                    $(window).off("scroll", browser.parallaxMove);
                    v.removeClass("parallax");
                } else {
                    v.addClass("parallax");
                    $(window).on("scroll", browser.parallaxMove);
                }
            });
        }

        if ($(".parallax").length) {
            if (browser._width > 1024) {
                browser.parallaxMove();
            }
        }

        if ($('.twi_subtext').length) {
            if (browser._width > 420) {
                $('.twi_subtext').removeAttr('style');
            }
        }
    },
    initWow: function () {
        if (!Modernizr.touchevents && browser._width > 1024) {
            WOW.prototype.addBox = function (element) {
                this.boxes.push(element);
            };
            var wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 0,
                mobile: false,
                live: true,
                callback: function (box) { },
                scrollContainer: null,
                interstitialSection: ".footer"
            });
            wow.init();
        }
    },
    scrollEvent: function (init) {
        requestAnimationFrame(function () {
            //Pause or play Slideshows based on visibility
            browser.playVisibleEvents();
            browser.movinganimation();
            browser.movinganimationloop();
        });
    },
    pauseAllIntensiveEvents: function () {
        //All slideshow/videos that needs to be paused should be written here
        $('.cycle').each(function () {
            $(this).cycle('pause');
        });
    },
    playVisibleEvents: function () {
        //Slideshow/videos that needs to be paused when out of view should be written here
        $('.cycle').each(function () {
            var slider = $(this);
            if (slider.is(':in-viewport'))
                slider.cycle('resume');
            else
                slider.cycle('pause');
        });
    },
    get: function (key, default_) {
        //Function to get the value of url parameters
        if (default_ == null)
            default_ = "";
        key = key.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
        var qs = regex.exec(window.location.href);
        if (qs == null)
            return default_;
        else
            return qs[1];
    },
    getParams: function (key, default_, target) {
        if (default_ == null)
            default_ = "";
        key = key.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
        var qs = regex.exec(target);
        if (qs == null)
            return default_;
        else
            return qs[1];
    },
    bodymovinanimation: function (el, json, closes) {
        var logo = document.getElementById(el);
        var animation = bodymovin.loadAnimation({
            container: logo,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            rendererSettings: {
                progressiveLoad: false
            },
            path: json
        });
        animation.play();
    },
    movinganimation: function () {
        if ($('.movinganimation').length) {
            $('.movinganimation').each(function (key) {
                var el = $(this);
                var json = $(this).attr('data-src');
                if ($(this).closest('.middle-wrap-table').length)
                    var closes = $(this).closest('.middle-wrap-table');
                else
                    var closes = $(this).closest('.widget_sec');
                if ((closes.is(':in-viewport()')) && (!(el.hasClass('play')))) {
                    el.addClass('play');
                    browser.bodymovinanimation(this.id, json, closes);
                }
            });
        }
    },
    movinganimationrepeat: function () {
        if ($('.movinganimationrepeat').length) {
            $('.movinganimationrepeat').each(function (key) {
                var json = $(this).attr('data-src');
                var closes = $(this).closest('.widget_sec');
                var logo = document.getElementById(this.id);
                var animation = bodymovin.loadAnimation({
                    container: logo,
                    renderer: 'svg',
                    loop: true,
                    autoplay: true,
                    prerender: true,
                    path: json
                });
                animation.play();
            });
        }
    },
    header_burgeranimation: function () {
        $('.header_burgeranimation').each(function (key) {
            var json = $('#header_burgeranimation').attr('data-src');
            var logo = document.getElementById(this.id);
            var animation = bodymovin.loadAnimation({
                container: logo,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                prerender: true,
                path: json
            });
            animation.play();
        });
    },
    header_menuanimation: function () {
        $('.headermenu_aanimate').each(function (key) {
            var json = $(this).attr('data-src');
            var logo = document.getElementById(this.id);
            var close = $(this).closest('.headermenu_a').attr('id');
            var closes = document.getElementById(close);
            var animation = bodymovin.loadAnimation({
                container: logo,
                renderer: 'svg',
                loop: false,
                autoplay: false,
                prerender: true,
                path: json
            });
            closes.addEventListener("mouseenter", function () {
                animation.goToAndPlay(1, true);
            });
        });
    },
    scrollPage: function (target) {
        var offset = $('.sticky').outerHeight();
        var g = browser.getParams('g', '', target);
        if (g != "") {
            $('html, body').animate({
                scrollTop: $("#" + g).offset().top - offset
            }, 2500);
        }
    },
    samepageScroll: function (target) {
        $('a[href*="?g="]').each(function () {
            var link = $(this).attr('href').split('?');
            if ((link[0]) == target) {
                var scroll_id = link[1].split('=')[1];
                $(this).removeAttr('href', '').attr('data-scroll', '#' + scroll_id);
            }
        });
    },
    targetBlank: function () {
        //Add target blank for external links
        $("a[href^=http]").each(function () {
            if (this.href.indexOf(location.hostname) === -1 || $(this).attr("href").match(/\.(pdf|doc|docx|ppt|pptx|xls|slxs|epub|odp|ods|txt|rtf)$/i))
                $(this).attr('target', "_blank");
        });
    },
    parallaxMove: function () {
        var st = $(window).scrollTop(),
                factor,
                ypos;
        //Move middle parallax
        $('.parallax').each(function () {
            var half = false;
            if ($(this).attr("data-half") == "true") {
                half = true;
            }
            if ($(this).isOnScreen() && !$(this).hasClass("no-parallax")) {
                var gb = this.getBoundingClientRect();
                factor = -1.5 * gb.top / browser._height;
                ypos = -1 * (factor * 100) + 'px',
                        yper = -1 * (factor * 50) + "%",
                        elem = $(this).find(".bsz");
                if (half) {
                    elem.css({
                        'background-position': '50% ' + yper
                    });
                } else {
                    elem.css({
                        'background-position': '50% ' + ypos
                    });
                }
            }
        });
    },
    bannercalculation: function () {
        let winWid = $(window).width();
        let winHei = $(window).height();
        let width = winWid;
        let height = width * 800 / 1280;
        if (height > winHei) {
            height = winHei;
            width = height * 1280 / 800;
        }
        $(".banner_whole").css({
            width: width,
            height: height,
            marginTop: (winHei - height)
        });
        if (winWid <= 820)
            $(".banner_whole").removeAttr('style');
    },
    movinganimationloop: function () {
        if ($('.movinganimationloop').length) {
            $('.movinganimationloop').each(function (key) {
                var el = $(this);
                var elid = this.id;
                var json = $(this).attr('data-start');
                var closes = $(this).closest('.widget_sec');
                if ((closes.is(':in-viewport()')) && (!(el.hasClass('play')))) {
                    el.addClass('play');
                    var logo = document.getElementById(this.id);
                    var animation = bodymovin.loadAnimation({
                        container: logo,
                        renderer: 'svg',
                        loop: false,
                        autoplay: false,
                        rendererSettings: {
                            progressiveLoad: false
                        },
                        path: json
                    });
                    animation.play();
                    animation.addEventListener("complete", function () {
                        el.addClass('complete');
                        var jsonloop = el.next().attr('data-loop');
                        var animation = bodymovin.loadAnimation({
                            container: document.getElementById(el.next().attr('id')),
                            renderer: 'svg',
                            loop: true,
                            autoplay: true,
                            rendererSettings: {
                                progressiveLoad: false
                            },
                            path: jsonloop
                        });
                        animation.play();
                        setTimeout(function () {
                            el.remove();
                        }, 1000);
                    });
                }
            });
        }
    },
    instasectionheight: function () {
        if (browser._width > 820) {
            $sec_ht = $('.left_imageblocks').height() - 4;
            $('.left_imageblock').each(function () {
                $(this).css('height', ($sec_ht / 3) - 4);
            });
        } else {
            $('.left_imageblock').each(function () {
                $(this).removeAttr();
            });
        }
    },
};
}

/*
     FILE ARCHIVED ON 05:25:14 Feb 18, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:47:01 May 04, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.484
  load_resource: 595.94 (2)
  PetaboxLoader3.resolve: 354.356 (2)
  PetaboxLoader3.datanode: 238.25 (2)
*/