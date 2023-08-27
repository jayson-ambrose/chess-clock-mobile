import React, {useState} from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { useTimer, useDelay } from 'react-use-precision-timer';

export default function LandingScreen({ navigation }) {
    
    const [timeClock, setTimeClock] = useState(300000)
    const [start, setStartTime] = useState(Date.now())
    const [timeLeft, setTimeLeft] = useState(Date.now() - start)

    const startTime = Date.now()

    function startCountdown() {
        () => setStartTime(Date.now)
        
        while (timeLeft > 0)
    }

    
    
    console.log(Date.now())
    console.log(taco)
    console.log(taco - 60000)


    
    return (
        <View>
            <Text>{timeClock}</Text>
            <Text>{start}</Text>
            <Text>Minutes:  {timeLeft/60000}</Text>
            <Button title='Start Countdown'/>
        </View>
    )
}