var tooltip = {
    'ttPointWidth' : 20;
    'ttPointHeight' : 21;
    'ttPointMid' : 11;
    'ResetToolTip' : function(txt) {
            $('#ttText').html("This is the tooltip<br>It has 3 lines<br>To it");
            //$('#ttText').hide();
            $('#ttText').css({left: "left top", at: "left bottom", of: "#ttRight"});
            //alert($('#ttText').height());
            
            
            $('.ttText').html(txt);
            $('.ttContainer').show();
            var ttWidth =  Math.ceil($('.ttText').width());
            var ttHeight = Math.ceil($('.ttText').height());
            $('.ttContainer').hide();
            $('.ttRight').css({width: this.ttWidth, height: this.ttHeight});
            // ttBorderLeft.height = ttHeight + ttRight.padding(10px) + ttRight.border(2px) - ttPoint.height(21px) = ttHeight - 9
            $('.ttBorderLeft').css({height: this.ttHeight - 9});
            $('.ttPoint').html("<img src='tooltippoint.png'>");
            $('.ttContainer').css({top: '500px', left: '500px'}); 
        }
    'InitToolTip' : function() {
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