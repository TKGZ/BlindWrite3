import { Vibration } from 'react-native';
import {Audio } from 'expo-av';

//feedback for initial area (1-9)
export function onStart(step = 0)
{
    Vibration.vibrate([0, 100, 50, 50]);
    console.log("call sound");
    areaSound(step);
}

//feedback for each step (piano sounds!)
// 6 7 8
// 5   1
// 4 3 2
export function onStep(step = 0)
{
    Vibration.vibrate(100);
    directionSound(step);

}

//preloads all the sounds

export async function previewStroke(stroke)
{
    console.log("previewing stroke");
    let count = stroke.length;
    let i = 0;
    let interval = setInterval(() => {
        directionSound(stroke[i]);
        i++;
        count--;
        if (count == 0)
        {
            clearInterval(interval);
            return;
        }
    }, 800);
}

export async function directionSound(a)
{
    console.log("area sound for " + a)
    const soundObject = new Audio.Sound();
    try {
        switch(a)
        {
            case 1:
                await soundObject.loadAsync(require('../assets/audio/feedback/guitar_g.mp3'));
                break;
            case 2:
                await soundObject.loadAsync(require('../assets/audio/feedback/drum_g.mp3'));
                break;
            case 3:
                await soundObject.loadAsync(require('../assets/audio/feedback/piano_g.mp3'));
                break;
            case 4:
                await soundObject.loadAsync(require('../assets/audio/feedback/guitar_e.mp3'));
                break;
            case 5:
                await soundObject.loadAsync(require('../assets/audio/feedback/5.mp3'));
                break;
            case 6:
                await soundObject.loadAsync(require('../assets/audio/feedback/piano_e.mp3'));
                break;
            case 7:
                await soundObject.loadAsync(require('../assets/audio/feedback/guitar_a.mp3'));
                break;
            case 8:
                await soundObject.loadAsync(require('../assets/audio/feedback/drum_a.mp3'));
                break;
            case 9:
                await soundObject.loadAsync(require('../assets/audio/feedback/piano_a.mp3'));
                break;
            case "a":
                await soundObject.loadAsync(require('../assets/audio/feedback/a.mp3'));
                break;
            case "b":
                await soundObject.loadAsync(require('../assets/audio/feedback/b.mp3'));
                break;
            case "c":
                await soundObject.loadAsync(require('../assets/audio/feedback/c.mp3'));
                break;
            case "d":
                await soundObject.loadAsync(require('../assets/audio/feedback/d.mp3'));
                break;
            default: await soundObject.loadAsync(require('../assets/audio/feedback/correct.mp3'));
        }
        await soundObject.playAsync();

        // console.log("correct sound")

    } catch (error) {
        // console.log("ERROR sound correct area");
        // reportSoundError();
        console.log("SOUND ERROR" + error.message);
        // throw error;
    }
}

export async function areaSound(a)
{
    console.log("area sound for " + a)
    const soundObject = new Audio.Sound();
    try {
        switch(a)
        {
            case 1:
                await soundObject.loadAsync(require('../assets/audio/feedback/1.mp3'));
                break;
            case 2:
                await soundObject.loadAsync(require('../assets/audio/feedback/2.mp3'));
                break;
            case 3:
                await soundObject.loadAsync(require('../assets/audio/feedback/3.mp3'));
                break;
            case 4:
                await soundObject.loadAsync(require('../assets/audio/feedback/4.mp3'));
                break;
            case 5:
                await soundObject.loadAsync(require('../assets/audio/feedback/5.mp3'));
                break;
            case 6:
                await soundObject.loadAsync(require('../assets/audio/feedback/6.mp3'));
                break;
            case 7:
                await soundObject.loadAsync(require('../assets/audio/feedback/7.mp3'));
                break;
            case 8:
                await soundObject.loadAsync(require('../assets/audio/feedback/8.mp3'));
                break;
            case 9:
                await soundObject.loadAsync(require('../assets/audio/feedback/9.mp3'));
                break;
            case "a":
                await soundObject.loadAsync(require('../assets/audio/feedback/a.mp3'));
                break;
            case "b":
                await soundObject.loadAsync(require('../assets/audio/feedback/b.mp3'));
                break;
            case "c":
                await soundObject.loadAsync(require('../assets/audio/feedback/c.mp3'));
                break;
            case "d":
                await soundObject.loadAsync(require('../assets/audio/feedback/d.mp3'));
                break;
            default: await soundObject.loadAsync(require('../assets/audio/feedback/correct.mp3'));
        }
        await soundObject.playAsync().then(console.log("correct sound"));

        // console.log("correct sound")

    } catch (error) {
        // console.log("ERROR sound correct area");
        // reportSoundError();
        console.log("SOUND ERROR" + error.message);
        // throw error;
    }
}

// export async function prepareSound() {
//   await Expo.Audio.setIsEnabledAsync(true);

//   await Expo.Audio.setAudioModeAsync({
//     // playsInSilentModeIOS: true,
//     // allowsRecordingIOS: false,
//     // interruptionModeIOS: Expo.Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
//     shouldDuckAndroid: false,
//     interruptionModeAndroid: Expo.Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
//   });
// }
