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
    InitToolTip : function() {
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
        }
};