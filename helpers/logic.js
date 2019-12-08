//logic related helpers

//returns angle between two points (0 - 360)
//follow standard geometric angle conventions
export function getAngle(a, b)
{
    var x = b.x - a.x;
    var y = a.y - b.y;

    return (Math.atan2(y, x) * 180 / Math.PI);
}


//returns distance between two points
export function getDistance(a, b)
{
    //distances
    var x = b.x - a.x;
    var y = a.y - b.y;

    return (Math.round(Math.sqrt((x * x) + (y * y))));
}

//returns current step from a to b based on threshhold
//returns 0 if still on neutral step
//else returns value 1-8 depending on angle/distance/minimum threshhold
//1 is right, moves counter-clockwise
export function getStep(a, b, threshhold)
{
    var angle = getAngle(a,b);
    var distance = getDistance(a,b);
}