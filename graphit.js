var count = 1;

// Returns angle between two points in radians
function GetAngleBetweenPoints(p1, p2)
{
    var length = p2.x - p1.x
    var height = p2.y - p1.y
    
    // vertical line
    if(length == 0)
    {
        return Math.PI / 2;
    }
    
    // horizontal line
    if(height == 0)
    {
        return 0;
    }
    
    return Math.atan(height / length);
}

// Returns disatance between two points
function GetDistanceBetweenPoints(p1, p2)
{
    var length = p2.x - p1.x;
    var height = p2.y - p1.y;
    
    return Math.sqrt(length*length + height*height);
}

// Draws a straight line between two points
function DrawLine(p1, p2, container)
{
    width = GetDistanceBetweenPoints(p1, p2);
    angle = GetAngleBetweenPoints(p1, p2);
    
    $(container).append("<div class='line' id='line" + (count++) + "'></div>");
    $('#line' + (count-1)).css({"webkitTransform":"rotate(" + angle + "rad)", "left":p1.x, "top":p1.y, "width":width, "height":1});
}

function DrawLinesBetweenPoints(p, container)
{
    for(i=0; i<p.length-1; i++)
    {
        DrawLine(p[i], p[i+1], container);
    }
}

/*
var p1 = {x:10, y:200};
var p2 = {x:100, y:250};
DrawLineBetweenPoints(p1, p2, ".container");

var p1 = {x:10, y:200};
var p2 = {x:10, y:250};
DrawLineBetweenPoints(p1, p2, ".container");

var p1 = {x:10, y:250};
var p2 = {x:100, y:250};
DrawLineBetweenPoints(p1, p2, ".container");
*/

var p1 = {x:10, y:200};
var p2 = {x:100, y:250};
var p3 = {x:190, y:250};
var p4 = {x:280, y:200};
var p5 = {x:370, y:250};
var p6 = {x:460, y:200};

p = [p1, p2, p3, p4, p5, p6];
DrawLinesBetweenPoints(p, ".container");