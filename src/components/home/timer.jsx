import React, { useState } from "react";

function Timer() {
  // April 10, 2024 00:00:00
  let countDownDate = new Date("April 10, 2024 00:00:00").getTime();
  const [isTimeFinished, setIsTimeFinished] = useState(false);

  const [day, setDay] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  let x = setInterval(() => {
    let now = new Date().getTime();

    let distance = countDownDate - now;

    setDay(Math.floor(distance / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

    if (distance < 0) {
      clearInterval(x);
      setIsTimeFinished(true);
    }
  }, 1000);

  return (
    <div className="flex bg-footer-texture w-full bg-center bg-cover h-screen justify-end items-end">
      <div className="w-2/3 select-none h-96 flex flex-col text-center justify-evenly items-center">
        <div className="flex gap-10 flex-row-reverse text-4xl font-mono	text-slate-700">
          <div className="flex flex-col">
            <p className="rounded-full flex justify-center items-center border-2 w-20 h-20  border-[#6CBBB1]">
              <span>{day}</span>
            </p>
            <span className="text-2xl">روز</span>
          </div>
          <div className="flex flex-col">
            <p className="rounded-full flex justify-center items-center border-[#6CBBB1] border-2 w-20 h-20 ">
              <span>{hours}</span>
            </p>
            <span className="text-2xl">ساعت</span>
          </div>
          <div className="flex flex-col">
            <p className="rounded-full flex justify-center items-center border-[#6CBBB1] border-2  w-20 h-20">
              <span>{minutes}</span>
            </p>
            <span className="text-2xl">دقیقه</span>
          </div>
          <div className="flex flex-col">
            <p className="rounded-full flex justify-center items-center border-2 border-[#6CBBB1] w-20 h-20">
              <span>{seconds}</span>
            </p>
            <span className="text-2xl">ثانیه</span>
          </div>
        </div>
        <p className="text-5xl">شمارش معکوس تا عید فطر</p>
      </div>
    </div>
  );
}

export default Timer;
