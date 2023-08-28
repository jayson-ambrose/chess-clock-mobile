import React, {useEffect, useState} from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { useTimer, useDelay } from 'react-use-precision-timer';

export default function LandingScreen({ navigation }) {

    const [clock, setClock] = useState("stopped")

    const callback = () => {
        console.log('holy cow')        
    }

    const timer = useTimer({ delay: 10000, runOnce: true, startImmediately: false }, callback);

    
    useEffect(() => {
        const interval = setInterval(() => {
            //do the thing to check the timer -- update timer state
            
            setClock(timer.getRemainingTime)
            console.log(timer.getRemainingTime())

        }, 100)

        return ()=> clearInterval(interval)

    }, [])
    
    return (
        <View>
            <Text>{(clock / 1000).toFixed(2)}</Text>
            <Button title='Start' onPress={() => timer.start()}/>
            <Button title='Pause' onPress={() => timer.pause()}/>
            <Button title='Resume' onPress={() => timer.resume()}/>
            <Button title='Stop' onPress={() => timer.stop()}/>
        </View>
    )
}

//look into if setTimeout is faster than setInterval.
//how to have the setInterval only fire if the timer is on.