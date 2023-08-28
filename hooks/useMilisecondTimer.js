import React, { useState, useEffect }from "react";
import { Text } from "react-native";

export default function useMilisecondTimer (timeControl=0) {

    const [displayTime, setDisplayTime] = useState(timeControl)
    const [isStarted, setIsStarted] = useState(false)

    const startTime = Date.now()
    const endTime = startTime + timeControl
    const currentTime = endTime - Date.now()

    return (5)
}

/* 
    
    timeControl = (time in miliseconds)
    startTime = Date.now()
    endTime = startTime + timeControl

    displayTime = currTime converted to Hr:Mn:Sc:Tn <----this gets returned or return num miliseconds left and convert after.

    */
