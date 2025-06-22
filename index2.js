
// #50 DIGITAL STOPWATCH PROGRAM

const display1 = document.getElementById("display");
    let timer = null;
    let startTime = 0;
    let elapsedTime = 0;
    let isRunning = false;

    function start() {
      if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
      }
    }

    function stop() {
      if (isRunning) {
        clearInterval(timer);
        isRunning = false;
      }
    }

    function reset() {
      clearInterval(timer);
      isRunning = false;
      elapsedTime = 0;
      display1.textContent = "00:00:00:00";
    }

    function update() {
      const currentTime = Date.now();
      elapsedTime = currentTime - startTime;

      let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
      let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
      let seconds = Math.floor((elapsedTime / 1000) % 60);
      let milliseconds = Math.floor((elapsedTime % 1000) / 10);

      hours = String(hours).padStart(2, "0");
      minutes = String(minutes).padStart(2, "0");
      seconds = String(seconds).padStart(2, "0");
      milliseconds = String(milliseconds).padStart(2, "0");

      display1.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
    }


    // #51 ES6 Module = An external file that contains reusable code that can be imported
    //                  into other Javascript files. (Contains variables, functions, classes, etc).
    // export and import
    // remember to use type="module" and learn more about it.



    //import {PI} from "./index.js";

    //console.log(PI);

   
    



