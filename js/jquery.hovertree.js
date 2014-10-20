/*!
* HoverTree(jQuery Menu)
* version: 0.1.2
* Copyright (c) 2014 KeLeyi
* http://keleyi.com
* http://keleyi.com/jq/hovertree/
*/

(function ($) {
    $.fn.hovertree = function (options) {

        var settings = $.extend({
            width: 'keleyi',
            isCloseOther: false, //当点击展开一个一级菜单时，关闭其他已经展开的一级菜单项。
            initStatus: 'keleyi'//'keleyi'、'expand'或'close'。
        }, options);

        var keleyihovertree = $(this);

        if (settings.width != '' || settings.width == 'keleyi') {
            keleyihovertree.css({ "width": settings.width });
        }

        keleyihovertree.find(">div").each(function () {
            if ($(this).attr("class") == null || $(this).attr("class").indexOf("hovertreeitem") < 1)
                $(this).addClass("hovertreeitem");
        })

        keleyihovertree.find(">div:not(:has(ul))").addClass("hvtcurrent");

        if (settings.initStatus == 'close') {
            keleyihovertree.find(">div.hvtcurrent").has("ul").removeClass("hvtcurrent");
        }
        else if (settings.initStatus == 'expand') {
            keleyihovertree.find(">div.item").addClass("hvtcurrent");
        }
        keleyihovertree.find("h3").on("click", function () {
            var headParent = $(this).parent();

            if (headParent.attr("class").indexOf("hvtcurrent") > 0) {
                headParent.has("ul").removeClass("hvtcurrent")
            } else {
                if (settings.isCloseOther) {
                    keleyihovertree.find(">div.hvtcurrent").has("ul").removeClass("hvtcurrent");
                }
                headParent.addClass("hvtcurrent")
            }
        })

        var liSet = $(this).find("div.hovertreeitem>ul li");

        liSet.has("ul").find("a:first").append("<b></b>");

        liSet.on("mouseenter"
        , function () {
            $(this).css({ "background-color": "#eee" });
            var pleft = $(this).position().left, ptop = $(this).position().top;
            var pwidth = $(this).width(), ppaddingLeft = parseInt($(this).css('padding-left'));

            $(this).find(">ul").css({ "position": "absolute"
            , "left": (pleft + pwidth + ppaddingLeft).toString() + "px", "top": ptop.toString() + "px"
            , "border": "solid 1px #ccc", "z-index": "2014"
            }).show();

        })

        liSet.on("mouseleave", function () {
            $(this).css({ "background-color": "#fff" });
            $(this).find(">ul").hide();
        });

    }
} (jQuery));