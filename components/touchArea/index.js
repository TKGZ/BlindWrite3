import * as logic from '../logic';
import * as feedback from '../feedback';

import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, PanResponder,  Dimensions } from 'react-native';

//touch area and its relevant logic here
//how much distance to travel before detecting a new step!

export default function TouchArea(props)
{
  const initial_phase = new logic.Phase(0, 0, false, false);
  const initial_letter = new logic.Letter("A", [[]]);

  const initial_point = new Point(0,0); 

  const [phase, setPhase] = useState(initial_phase);
  const [letter, setLetter] = useState(initial_letter);

  const [startPoint, setStartPoint] = useState(initial_point);
  const [currentPoint, setCurrentPoint] = useState(initial_point);

  //stroke detected by the input system
  //literally just arrays of numbers
  const [currentStroke, setCurrentStroke] = useState([]);
  const [previousStroke, setPreviousStroke] = useState([]);

  //are we in failiure mode during a touch?
  const [failed, setFailed] = useState(false);

  //verification system
  useEffect(() => {
    console.log('verify on stroke update to ' + currentStroke[currentStroke.length - 1]);
    //IF FAILED
      //do nothing
    //ELSE check if last step correct
      //ELSE IF correct
        //do nothing
      //ELSE
        //setFailed(true)
  }, [currentStroke]);

  //update the current stroke according to the locatios of start and current points

  //is last step of current stroke the same as the one in the phase?
  function isLastStepCorrect(){
    //
  }

  //stroke updating system
  useEffect(() => {
    //IF getStep not 0
      //updateCurrentStroke();
    
  }, [currentPoint]);

  //using the coordinates from current point
  //updates current stroke from start to end positions IF changes sufficiently
  function updateCurrentStroke(newStep)
  {
    //update startPoint
    setStartPoint(currentPoint);

    //update current stroke
    var stroke = [...currentStroke];
    stroke.push(newStep);
    setCurrentStroke(stroke);
    console.log("updated stroke " + stroke);

    //update current phase
  }

  function nextStroke()
  {
    
  }

  function resetStroke()
  {

  }

  function newLetter()
  {
    //update to a random next letter
  }

  function onStart(e, g)
  {
    // console.log(currentPoint.x + " " + currentPoint.y)
    //get starting area and add it to currentStroke
    //update starting point 
    let point = new Point(e.nativeEvent.locationX, e.nativeEvent.locationY)
    setCurrentPoint(point);
    // console.log('start at ' + point.x + " " + point.y);

    let startArea = logic.getStartArea(point)

    console.log('area ' + startArea);

    // setCurrentStroke([startArea]);
    updateCurrentStroke(startArea);
  }

  function onMove(e, g)
  {
    //update currentPoint
    let point = new Point(e.nativeEvent.locationX, e.nativeEvent.locationY)
    setCurrentPoint(point);
  }

  function onEnd(e, g)
  {
    //IF failed
      //resetStroke()
    //ELSE correct
      //current stroke to previous stroke
      //IF phase at end of stroke
        //nextStroke
      //ELIF phase at end of character
        //nextLetter()
    //ELIF notCorrect
      //resetStroke()
    //reset current stroke
    setFailed(false);
  }
    
  _panResponder = PanResponder.create({
    // Ask to be the responder:
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
    onMoveShouldSetPanResponder: (evt, gestureState) => true,
    onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

    onPanResponderGrant: (evt, gestureState) => {
      // The gesture has started. Show visual feedback so the user knows
      // what is happening!
      // gestureState.d{x,y} will be set to zero now
      onStart(evt, gestureState);
    },
    onPanResponderMove: (evt, gestureState) => {
      // The most recent move distance is gestureState.move{X,Y}
      // The accumulated gesture distance since becoming responder is
      // gestureState.d{x,y}

      onMove(evt, gestureState);
    },
    onPanResponderTerminationRequest: (evt, gestureState) => true,
    onPanResponderRelease: (evt, gestureState) => {
      // The user has released all touches while this view is the
      // responder. This typically means a gesture has succeeded
      onEnd(evt, gestureState);
    },
    onPanResponderTerminate: (evt, gestureState) => {
      // Another component has become the responder, so this gesture
      // should be cancelled
      onEnd(evt, gestureState);

    },
    onShouldBlockNativeResponder: (evt, gestureState) => {
      // Returns whether this component should block native components from becoming the JS
      // responder. Returns true by default. Is currently only supported on android.

      return true;
    },
  })

  const mainStyle = {
    backgroundColor: '#f39c12',
    // height: "70%",
    flex: 8,
  }
  
  return (
      <View
        style = {mainStyle}
        {..._panResponder.panHandlers}>
        <Text>TouchArea</Text>
      </View>
  );
}

function Point(x, y)
{
  this.x = x;
  this.y = y;
}