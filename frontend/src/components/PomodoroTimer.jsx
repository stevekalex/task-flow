import { useState, useEffect } from "react"

function PomodoroTimer() {
    const [time, setTime] = useState(0) 
    const [isRunning, setRunning] = useState(true)

    useEffect(() => {
        let intervalId;
        if (isRunning) {
          intervalId = setInterval(() => setTime(time + 1), 10);
        }
        return () => clearInterval(intervalId);
      }, [isRunning, time]);
    


    const displayTime = () => {
        const hours = Math.floor(time / 360000);
        const minutes = Math.floor((time % 360000) / 6000);
        const seconds = Math.floor((time % 6000) / 100);

        if (hours >= 1) return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
        else return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
    }

    return (
        <div>
            {displayTime()}
        </div>
    )
}

export default PomodoroTimer