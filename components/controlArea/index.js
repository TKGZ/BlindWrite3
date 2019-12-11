import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ControlArea(props)
{

    const controlStyle = {
        flex: 2,
        backgroundColor: '#3498db'
    }

    return (
    <View style={controlStyle}>
        <Text>Control Area</Text>
    </View>)
}
