import React, { useEffect, useState, useRef } from "react";
import mountains from "../../../assets/otherImgs/layered-peaks.svg";
import './Countdown.css';

function Countdown() {

    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    function startTimer() {

        const countdownDate = new Date('November 4, 2022 08:00:00').getTime();
        interval = setInterval(() => {
            const currentTime = new Date().getTime();
            const remainingDayTime = countdownDate - currentTime;

            const days = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
            const hours = Math.floor((remainingDayTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((remainingDayTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);

            if (remainingDayTime < 0) {
                // stop timer
                clearInterval(interval.current);
            } else {
                // update timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        }, 1000);
    };

    // componentDidMount
    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    });

    return (
        <div className="countdown-container">
            <img className="layer-img-countdown" src={mountains} width="100%" />
            <p className="fest-countdown">Lift-off in : </p>
            <div className="timer">
                <div>
                    <p className="calc-font">{timerDays}</p>
                    <p>Days</p>
                </div>
                <p className="time-colon">:</p>
                <div>
                    <p className="calc-font">{timerHours}</p>
                    <p>Hours</p>
                </div>
                <p className="time-colon">:</p>
                <div>
                    <p className="calc-font">{timerMinutes}</p>
                    <p>Minutes</p>
                </div>
                <p className="time-colon">:</p>
                <div>
                    <p className="calc-font">{timerSeconds}</p>
                    <p>Seconds</p>
                </div>
            </div>
        </div>
    );
}

export default Countdown;