import React from './node_modules/react';
import { StyleSheet, Text, View, useState, useEffect, PanResponder } from 'react-native';
import * as logic from '../helpers/logic';
import * as feedback from '../helpers/feedback';

//touch area and its relevant logic here
const STEP_THRESHHOLD = 100;

export default function TouchArea(props)
{
  const initial_phase = new logic.Phase(0,0, false, false);

  const [character, setCharacter] = useState("A");
  const [phase, setPhase] = useState(initial_phase);

  //for current "step"
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);

  //live updates!
  const [locX, setLocX] = useState(0);
  const [locY, setLocY] = useState(0);

  //stroke detected by the input system
  const [currentStroke, setCurrentStroke] = useState([]);
  const [previousStroke, setPreviousStroke] = useState([]]);

  function onStart(e, g)
  {

  }

  function onMove(e, g)
  {

  }

  function onEnd(e, g)
  {

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

      onMove(event, gestureState);
    },
    onPanResponderTerminationRequest: (evt, gestureState) => true,
    onPanResponderRelease: (evt, gestureState) => {
      // The user has released all touches while this view is the
      // responder. This typically means a gesture has succeeded
      onEnd(event, gestureState);
    },
    onPanResponderTerminate: (evt, gestureState) => {
      // Another component has become the responder, so this gesture
      // should be cancelled
      onEnd(event, gestureState);

    },
    onShouldBlockNativeResponder: (evt, gestureState) => {
      // Returns whether this component should block native components from becoming the JS
      // responder. Returns true by default. Is currently only supported on android.
      return true;
    },

    return (
        <View {..._panResponder.panHandlers}>
        </View>
    );   
}