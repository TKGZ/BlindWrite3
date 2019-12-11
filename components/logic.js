import {Dimensions} from 'react-native';

//logic related helpers
const STEP_THRESHHOLD = 100;

// const X_AREAS = 3;
// const Y_AREAS = 3;

const WIDTH_SCREEN = Math.round(Dimensions.get('screen').width);
const HEIGHT_SCREEN = Math.round(Dimensions.get('screen').height);


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

//create phase object
//"which part of the character are we currently at"


export function getNextPhase(currentPhase, letter)
{
    
    return new Phase(1, 1);
}

//returns the area depending on the point relative to element
//height should me element/window height (of element!), widht probably entire screen
//1 2 3
//4 5 6
//7 8 9
//assumes 3 x 3
export function getStartArea(point, height = 0.8*HEIGHT_SCREEN, width = WIDTH_SCREEN)
{
    var x_length = width / 3;
    var y_length = height / 3;

    x = Math.floor(point.x / x_length);
    y = Math.floor(point.y / y_length);

    return (3 * y + x + 1);
}

//CONSTRUCTOR FUNCTIONS

//which part of the letter are we at?
export function Phase(stroke, step, endOfStroke = false, endOfCharacter = false)
{
    this.stroke = stroke;
    this.step = step;
    this.endOfStroke = endOfStroke;
    this.endOfCharacter = endOfCharacter;
}

export function Letter(name, shape = [[]])
{
    this.name = name;
    this.shape = shape;
}