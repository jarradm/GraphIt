var giClient = {
    height : 600,
    width : 600,
    axisInterval : 40,
    yAxisText : "This text describes the y axis",
    xAxisText : "This text describes the x axis",
    yAxisLabel : "y",
    xAxisLabel : "x",
    init : function () {
        $('body').append("<div id='clientArea'></div>");
        $('#clientArea').css({height : this.height, width : this.width, "box-sizing" : "border-box", 
                       "border-left" : "1px solid", "border-bottom" : "1px solid", position : "absolute",
                       top : 100, left : 300});
        $('#clientArea').append("<div id='arrowTop'></div>");
        $('#clientArea').append("<div id='arrowBot'></div>");
        $('#clientArea').append("<div id='textLeft'>" + this.yAxisText + "</div>");
        $('#clientArea').append("<div id='textBot'>" + this.xAxisText + "</div>");
        $('#clientArea').append("<div id='yAxis'>" + this.yAxisLabel + "</div>");
        $('#clientArea').append("<div id='xAxis'>" + this.xAxisLabel + "</div>");
        
        $('#arrowTop').css({"background-image" : "url(axisarrow.png)", position : "absolute",
                            left : -7, width : 13, height : 7});
        $('#arrowBot').css({"background-image" : "url(axisarrow.png)", position : "absolute",
                            top : this.height-7, left : this.width, width : 13, height : 7, 
                            webkitTransform : "rotate(90deg)", webkitTransformOrigin : "0 0"});
        $('#textLeft').css({position : "absolute", top : this.height, left : -60, width : this.width, webkitTransformOrigin : "0 0",
                           height : 20, webkitTransform : "rotate(-90deg)", "text-align" : "center"});
        $('#textBot').css({position : "absolute", top : this.height + 40, width : this.width,
                           height : 20, "text-align" : "center"});
        $('#yAxis').css({position : "absolute", top : -25, left: -5, width : 10, "text-align" : "center"});
        $('#xAxis').css({position : "absolute", top : this.height - 10, left : this.width + 10, height : 20, "vertical-align" : "middle"});
    },
    addIntervals : function () {
        for(i=0; i<this.width - this.axisInterval; i += this.axisInterval)
        {
            $('#clientArea').append("<div id='interval" + i + "'></div>");
            $('#clientArea').append("<div id='intervalh" + i + "'></div>");
            $('#intervalh' + i).css({height : 9, width : this.axisInterval, "box-sizing" : "border-box",
                                    "border-right" : "1px solid", position : "absolute",
                                    top : this.height - 5, left : 0 + i});
            $('#interval' + i).css({height : this.axisInterval, width : 9, "box-sizing" : "border-box",
                                    "border-top" : "1px solid", position : "absolute",
                                    top : this.width - this.axisInterval - i, left : 0 - 5});
        }
    }
}

giClient.init();
giClient.addIntervals();