var tooltip = {
    ttPointWidth : 20,
    ttPointHeight : 21,
    ttPointMid : 11,
    ResetToolTip : function(txt) {
            // sets this back to initial default width each time we change text
            // otherwise width will stay as the greatest width is has been, ie.
            // won't snap back to a smaller width.
            $('.ttRight').css({width: 'initial'});
            $('.ttText').html(txt);
            $('.ttContainer').show();

            var ttWidth =  Math.ceil($('.ttText').width());
            var ttHeight = Math.ceil($('.ttText').height());
            $('.ttContainer').hide();
            $('.ttRight').css({width: ttWidth, height: ttHeight});
            // ttBorderLeft.height = ttHeight + ttRight.padding(10px) + ttRight.border(2px) - ttPoint.height(21px) = ttHeight - 9
            $('.ttBorderLeft').css({height: ttHeight - 9});
            $('.ttPoint').html("<img src='tooltippoint.png'>");
            $('.ttContainer').css({top: '500px', left: '500px'}); 
        },
    InitToolTip : function(txt) {
            // tooltip div elements
            $('body').append("<div class='ttContainer'>" + 
                "<div class='ttleft'>" +
                "<div class='ttPoint'></div>" +
                "<div class='ttBorderLeft'></div>" +
                "</div>" +
                "<div class='ttRight'>" +
                "<div class='ttText'></div>" +
                "</div>" +
                "</div>");
            // make sure tooltip is hidden before adding text
            $('.ttContainer').hide();
            this.ResetToolTip(txt);
        },
    // evt functions gets passed to an event handler
    // 'this' keyword will refer to the element the event handler is attached to
    evtMouseEnter : function () {
            var position = $(this).position();
            var mid = $(this).height() / 2;
            $('.ttContainer').css({top: position.top + mid - ttPointMid, left: position.left + $(this).width() });
            $('.ttContainer').show();
        },
    evtMouseOut : function () {
            $('.ttContainer').hide();
            text = "This is <br>A change<br>in the tooltip";
            tooltip.ResetToolTip(text);
        }
};