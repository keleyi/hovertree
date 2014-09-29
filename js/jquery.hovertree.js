/*!
* HoverTree(jQuery Menu)
* version: 0.1.0
* Copyright (c) 2014 KeLeyi
* http://keleyi.com
* http://keleyi.com/jq/hovertree/
*/

(function ($) {
    $.fn.hovertree = function (options) {

        var settings = $.extend({
            width: '',
            isCloseOther: false//当要展开一个一级菜单时，关闭其他已经展开的一级菜单项。
        }, options);

        var keleyihovertree = $(this);

        if (settings.width != '') {
            keleyihovertree.css({ "width": settings.width });
        }

        keleyihovertree.find("h3").on("click", function () {
            var headParent = $(this).parent();
            
            if (headParent.attr("class").indexOf("current") > 0) {
                headParent.removeClass("current")
            } else {
                if (settings.isCloseOther) {
                    keleyihovertree.find(">div.current").removeClass("current");
                }
                headParent.addClass("current")
            }
        })

    }
} (jQuery));