import { Vibration } from 'react-native';

//feedback for initial area (1-9)
export function onStart(step = 0)
{
    Vibration.vibrate([0, 100, 50, 50]);
}

//feedback for each step (piano sounds!)
// 6 7 8
// 5   1
// 4 3 2
export function onStep(id = 0)
{
    Vibration.vibrate(100);

}