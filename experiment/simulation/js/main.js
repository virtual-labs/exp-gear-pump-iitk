//Your JavaScript goes in here
var enableButton=document.getElementById("enable");
var purzeButton=document.getElementById("purze")
var valvePositioning = document.querySelector("#flow-rate-slider")
var svg=document.getElementById("Layer_1");
var valvePositioningText = document.getElementById("valve-positioning-text");
// var manometerText = document.getElementById("manometer-text")
var count=0
window.appData = window.appData || {};
window.appData.powerFlag = false;
var w1 = document.getElementById("Water_1") 
var w2 = document.getElementById("Water_1_00000136396046987390455760000007072309054103299726_")
var w3 = document.getElementById("motor-water")
var w4 = document.getElementById("Water_3")
var w5 = document.getElementById("Water_6")
var w6 = document.getElementById("Water_6_00000031895259565718519450000002633402985714315677_")
var w7 = document.getElementById("Water_7")
var waterTankFront = document.getElementById("Tank_Water_Front")
var waterTankBase = document.getElementById("Water_Tank_Base")
var waterTankBack = document.getElementById("Tank_Water_Back");
var waterTankLeft = document.getElementById("Tank_Water_Left");
// var w2 = document.getElementById("Water_1_00000136396046987390455760000007072309054103299726_")
var w8 = document.getElementById("Water_8")
var w9 = document.getElementById("Water_9")
var mw1 = document.getElementById("motor-wheel1")
var mw2 = document.getElementById("motor-wheel2")
let shouldStop=false;
var arrowRect = document.getElementById("arrow-rect")
var arrowPol = document.getElementById("arrow-pol")
// var w4 = document.getElementById("Water_5")
var timerSec1 = document.getElementById("timer-sec1")
var timerMS1 = document.getElementById("timer-ms1")
var timerSec2 = document.getElementById("timer-sec2")
var timerMS2 = document.getElementById("timer-ms2")
var guageReadingText = document.getElementById("guage-reading-text")
var pressureGuageReadingText = document.getElementById("pressure-guage-reading-text")
var electricMeter = document.getElementById("electric-meter")
var electricMeterRotation = document.getElementById("part3")
var electricMeterText = document.getElementById("electric-meter-text")
function power(){
    if(count==0){
        enableButton.style.backgroundColor="#4cae4c"
        document.getElementById("steps").innerHTML="Please wait until the water reaches the Flow Rate Valve."
        enableButton.textContent = "POWER OFF"
        count=1
        waterFlow1()
    }else{
        if(!window.appData.powerFlag){
            alert("Please complete the experiment to turn power off!");
            count=1
        }else{
            location.reload()
        }
    }
}
function waterFlow1(){
    w1.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "height");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "128.4");
    animateElement.setAttribute("dur", "1s");
    animateElement.setAttribute("begin", "0s");
    animateElement.setAttribute("fill","freeze");

    w1.appendChild(animateElement)
    animateElement.beginElement();

    setTimeout(function(){
        waterFlow2()
    },1000);
}


function waterFlow2(){
    w2.style.opacity="1"
    var currentwidth = parseFloat(w2.getAttribute("width"))
    setTimeout(function(){
        w3.setAttribute("opacity","1")
        rotateWheel1()
        rotateWheel2()
        },150)
    if (currentwidth < 140) {
        currentwidth += 3;
        w2.setAttribute("width", currentwidth);
        setTimeout(waterFlow2, 20); 
    }
      waterFlow3()  
}
function rotateWheel1() {
    mw1.style.transformOrigin = `1024px 455px`; 
    mw1.style.animation = "rotate 5s linear infinite";
    const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes rotate {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
`, styleSheet.cssRules.length);
}

function rotateWheel2() {
    mw2.style.transformOrigin = `1047px 434px`; 
    mw2.style.animation = "rotate 5s linear infinite";
    const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes rotate {
    from {
      transform: rotate(-360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
`, styleSheet.cssRules.length);

}
function waterFlow3(){
    w4.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "height");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "221.7");
    animateElement.setAttribute("dur", "1s");
    animateElement.setAttribute("begin", "0s");
    animateElement.setAttribute("fill","freeze");

    w4.appendChild(animateElement)
    animateElement.beginElement();

    setTimeout(function(){
        waterFlow4()
    },1000);
}

function waterFlow4(){


    w5.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "width");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "609.7");
    animateElement.setAttribute("dur", "1.5s");
    animateElement.setAttribute("fill","freeze");

    w5.appendChild(animateElement)

    const animateX = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateX.setAttribute("attributeName", "x");
    animateX.setAttribute("from", "1108.8");
    animateX.setAttribute("to", "479.1");
    animateX.setAttribute("dur", "1.5s");
    animateX.setAttribute("fill","freeze");

    w5.appendChild(animateX)

    animateElement.beginElement();
    animateX.beginElement();

    setTimeout(function() {
        document.getElementById("steps").innerHTML = "Choose a value on the valve positioning slider to regulate the water flow."
        valvePositioning.disabled = false
      }, 3000);
    
}

function waterFlow5(){


    w6.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "width");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "160.4");
    animateElement.setAttribute("dur", "1s");
    animateElement.setAttribute("fill","freeze");

    w6.appendChild(animateElement)

    const animateX = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateX.setAttribute("attributeName", "x");
    animateX.setAttribute("from", "479.1");
    animateX.setAttribute("to", "296.6");
    animateX.setAttribute("dur", "1s");
    animateX.setAttribute("fill","freeze");

    w6.appendChild(animateX)

    animateElement.beginElement();
    animateX.beginElement();

    setTimeout(function() {
        waterFlow6()
      }, 1000);
    
}

function updateValvePositioning(){
    resetTimer2()
    reset()
    resetTimer()
    shouldStop=false

    var selectedValue = valvePositioning.value;
    if(selectedValue == 0){
        document.getElementById("steps").innerHTML = "Select the value of Valve Positioning greater than 0!"
    }else{
        valvePositioning.disabled = true;
        waterFlow5() 
    }
    
    valvePositioningText.textContent = selectedValue;
}

function reset(){
    w6.setAttribute("opacity","0")
    w7.setAttribute("height","0")
    w8.setAttribute("opacity","0")
    w9.setAttribute("height","0")
    arrowRect.setAttribute("y","577.7")
    arrowPol.setAttribute("points","143.5,573.3 151.6,579.3 143.5,585.3 ")
    waterTankBack.setAttribute("points","245.1,508.1 587.9,508.1 587.9,508.1 245.1,508.1")
    waterTankFront.setAttribute("opacity","0")
    waterTankLeft.setAttribute("points","245.2,506.9 187.2,577.5 187.2,577.5 244.8,506.9")
    waterTankBase.setAttribute("opacity","0")
    pressureGuageReadingText.textContent= "0.0 kg/cm^2"
    guageReadingText.textContent = "00 mm Hg"
    electricMeterText.textContent = "00"
}

function waterFlow6(){
    var currentHeight = parseFloat(w7.getAttribute("height"))
    if (currentHeight < 297.1) {
        currentHeight += 3;
        w7.setAttribute("height", currentHeight);
        setTimeout(waterFlow6, 10); 
    }
    setTimeout(function(){
        waterTankBase.setAttribute("opacity","1")
        waterFlow7()
    },1300)
}
function waterFlow7(){
    w8.style.opacity="1"
    var currentwidth = parseFloat(w8.getAttribute("width"))
    if(shouldStop){
        return;
    }else{
        if (currentwidth < 87.2) {
            currentwidth += 3;
            w8.setAttribute("width", currentwidth);
            setTimeout(waterFlow7, 100); 
        }
        setTimeout(function() {
            waterFlow8()
          }, 500);
    }
}

function waterFlow8(){
    var currentHeight = parseFloat(w9.getAttribute("height"))
    if(shouldStop){
        return;
    }else{
        if (currentHeight < 56.8) {
            currentHeight += 3;
            w9.setAttribute("height", currentHeight);
            setTimeout(waterFlow8, 100); 
        }
        setTimeout(function() {
            guageReadingText.textContent = "160 mm Hg"
            if(valvePositioning.value==1){
                pressureGuageReadingText.textContent = "0.5 kg/cm^2"
            }if(valvePositioning.value==2){
                pressureGuageReadingText.textContent = "1.0 kg/cm^2"            
            }if(valvePositioning.value==3){
                pressureGuageReadingText.textContent = "1.5 kg/cm^2"
            }if(valvePositioning.value==4){
                pressureGuageReadingText.textContent = "2.0 kg/cm^2"
            }
            document.getElementById("steps").innerHTML = "Take note of the vacuum pressure guage reading and pressure gauge reading, and then close the discharge valve using the close  dischare valve button."
            purzeButton.disabled = false;
        }, 1000);
    // }
    }
}
function fillTankFront(){
    waterTankFront.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "height");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "110");
    animateElement.setAttribute("dur","3.5s")
    animateElement.setAttribute("begin", "0s");
    animateElement.setAttribute("fill","freeze");

    waterTankFront.appendChild(animateElement)
    animateElement.beginElement();
    setTimeout(function() {
        document.getElementById("steps").innerHTML = "Now, click on electric meter to get the time for 10 revolution of electric meter. "
        // if(valvePositioning.value == 4){
        //     document.getElementById("steps").innerHTML = "Take note of the current time on the timer 1 and use the provided data to calculate the efficiency."
        // }valvePositioning.disabled=false
        clickEnabled= true
      }, 3500);

}   
        
function waterTankBackFlow(y){
    if (y > 399) {
        y -= 1;
        waterTankBack.setAttribute("points", `245.1,${y} 587.9,${y} 587.9,508.1 245.1,508.1 `);
        setTimeout(() => waterTankBackFlow(y), 21.5);
    }
}

function waterTankSideFlow(y1,y2){

    if (y1 > 467.5) {
        y1 -= 1;
        y2-=1;
        waterTankLeft.setAttribute("points", `245.2,506.9 187.2,577.5 187.2,${y1} 244.8,${y2}`);
        setTimeout(() => waterTankSideFlow(y1, y2), 21.5);
    }

}

function purzeAction(){

    shouldStop=true
    
    w8.setAttribute("width","0")
    w9.setAttribute("height","0")

    if(valvePositioning.value==1){
        timer(19,"00")
    }if(valvePositioning.value==2){
        timer(20,"00")
    }if(valvePositioning.value==3){
        timer(20,"00")
    }if(valvePositioning.value==4){
        timer(21,"00")
    }
    fillTankFront()
    waterTankBackFlow(508.1)
    waterTankSideFlow(577.5,506.9)
    arrowMovement()
    arrowMovement2(573.3,579.3,585.3)

    purzeButton.disabled= true
}
function arrowMovement(){
    var currentY = parseFloat(arrowRect.getAttribute("y"))
    if (currentY > 467.7) {
        currentY -= 1;
        arrowRect.setAttribute("y", currentY);
        setTimeout(arrowMovement, 21.5); 
    }
}
function arrowMovement2(y1,y2,y3){
    if (y1 > 463.3) {
        y1 -= 1;
        y2-=1;
        y3-=1;
        arrowPol.setAttribute("points", `136.4,${y1} 144.5,${y2} 136.4,${y3} `);
        setTimeout(() => arrowMovement2(y1,y2,y3), 21.5);
    }
}


let [milliseconds,seconds] = [0,0];
let int = null;
let timerRunning = true;

function timer(targetsec,targetms){

    if(int!==null){
        clearInterval(int);
    }
    console.log("Timer started with targetsec:", targetsec, "and targetms:", targetms); // Add this line for debugging

    int = setInterval(function() {
        displayTimer(targetsec, targetms); 
    }, 10);
}


function displayTimer(targetsec,targetms){
    if(valvePositioning.value==1){
        if(timerRunning){
            milliseconds+=(45*(5/28));
            if(milliseconds >= (100)){
                milliseconds -= 100;
                seconds++;
                if(seconds == 60){
                    seconds = 0;
                }
            }
        }
        let s = seconds < 10 ? "0" + seconds : seconds;
        let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds < 100 ? "" + milliseconds : milliseconds;
        timerSec1.textContent = s;
        timerMS1.textContent = parseInt(ms);
    }
    if(valvePositioning.value==2 || valvePositioning.value==3){
        if(timerRunning){
            milliseconds+=(45*(5/23));
            if(milliseconds >= (100)){
                milliseconds -= 100;
                seconds++;
                if(seconds == 60){
                    seconds = 0;
                }
            }
        }
        let s = seconds < 10 ? "0" + seconds : seconds;
        let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds < 100 ? "" + milliseconds : milliseconds;
        ms=parseInt(ms)
        timerSec1.textContent = s;
        timerMS1.textContent = ms;
    }

    if(valvePositioning.value==4){
        if(timerRunning){
            milliseconds+=(45*(5/23));
            if(milliseconds >= (100)){
                milliseconds -= 100;
                seconds++;
                if(seconds == 60){
                    seconds = 0;
                }
            }
        }
        let s = seconds < 10 ? "0" + seconds : seconds;
        let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds < 100 ? "" + milliseconds : milliseconds;
        ms=parseInt(ms)
        timerSec1.textContent = s;
        timerMS1.textContent = ms;
    }


    if(seconds==targetsec ){
        timerRunning = false;
        clearInterval(int);
        timerMS1.textContent = targetms;
    }

    
}

function resetTimer() {
    clearInterval(int); 
    [milliseconds, seconds] = [0, 0]; 
    timerRunning = true; 
    timerSec1.textContent = "00"; 
    timerMS1.textContent = "00";
}

let clickEnabled = false;

function rotateElectricMeter() {
    const animationName = `rotate_${Date.now()}`;

    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
      @keyframes ${animationName} {
        from {
          transform: rotate(360deg);
        }
        to {
          transform: rotate(0deg);
        }
      }
    `, styleSheet.cssRules.length);
  
    // Apply the animation to the element
    electricMeterRotation.style.transformOrigin = `1415.6577px 371.4836px`;
    electricMeterRotation.style.animation = `${animationName} 2s linear 3`;
  
    // Add an event listener to remove the animation when it ends
    electricMeterRotation.addEventListener('animationend', function removeAnimation() {
      electricMeterRotation.style.animation = '';
      electricMeterRotation.removeEventListener('animationend', removeAnimation);
    });
    setTimeout(function(){
            electricMeterText.textContent = "01"
        },2000)
    setTimeout(function(){
            electricMeterText.textContent = "02"
        },4000)
    setTimeout(function(){
            electricMeterText.textContent = "03"
        },6000)
    setTimeout(function(){
        clickEnabled=false
        valvePositioning.disabled=false
        document.getElementById("steps").innerHTML = "Readust the value of gate valve to get further readings by using valve positioning slider."
        if(valvePositioning.value == 4){
            document.getElementById("steps").innerHTML = "Now, use all obeservations to calculate efficiency."
        }
    },6000)
  }
  
  electricMeter.addEventListener("click", function(){
    if(clickEnabled){
        rotateElectricMeter()
        if(valvePositioning.value==1){
            timer2(28,"00")
        }if(valvePositioning.value==2){
            timer2(27,"00")
        }if(valvePositioning.value==3){
            timer2(26,"00")
        }if(valvePositioning.value==4){
            timer2(21,"00")
        }
    }
  });
//   document.getElementById("part1").addEventListener('click', function(){
//     if(clickEnabled){
//         rotateElectricMeter()
//         if(valvePositioning.value==1){
//             timer2(28,"00")
//         }if(valvePositioning.value==2){
//             timer2(27,"00")
//         }if(valvePositioning.value==3){
//             timer2(26,"00")
//         }if(valvePositioning.value==4){
//             timer2(21,"00")
//         }        
//     }
//   });
//   document.getElementById("part2").addEventListener('click', function(){
//     if(clickEnabled){
//         rotateElectricMeter()
//         if(valvePositioning.value==1){
//             timer2(28,"00")
//         }if(valvePositioning.value==2){
//             timer2(27,"00")
//         }if(valvePositioning.value==3){
//             timer2(26,"00")
//         }if(valvePositioning.value==4){
//             timer2(21,"00")
//         }    }
//   });
  
  let [milliseconds2,seconds2] = [0,0];
  let int2 = null;
  let timerRunning2= true;
  
  function timer2(targetsec,targetms){
  
      if(int2!==null){
          clearInterval(int2);
      }
      console.log("Timer started with targetsec:", targetsec, "and targetms:", targetms); // Add this line for debugging
  
      int2 = setInterval(function() {
          displayTimer2(targetsec, targetms); 
      }, 10);
  }
  
  
  function displayTimer2(targetsec,targetms){
  
  
      if(valvePositioning.value==1){
          if(timerRunning2){
              milliseconds2+=(26*(5/28));
              if(milliseconds2 >= (100)){
                  milliseconds2 -= 100;
                  seconds2++;
                  if(seconds2 == 60){
                      seconds2 = 0;
                  }
              }
          }
          let s = seconds2 < 10 ? "0" + seconds2 : seconds2;
          let ms = milliseconds2 < 10 ? "0" + milliseconds2 : milliseconds2 < 100 ? "" + milliseconds2 : milliseconds2;
          // ms=int(ms*10)
          timerSec2.textContent = s;
          timerMS2.textContent = parseInt(ms);
      }
  
      if(valvePositioning.value==2){
        if(timerRunning2){
            milliseconds2+=(27*(5/28));
            if(milliseconds2 >= (100)){
                milliseconds2 -= 100;
                seconds2++;
                if(seconds2 == 60){
                    seconds2 = 0;
                }
            }
        }
        let s = seconds2 < 10 ? "0" + seconds2 : seconds2;
        let ms = milliseconds2 < 10 ? "0" + milliseconds2 : milliseconds2 < 100 ? "" + milliseconds2 : milliseconds2;
        ms=parseInt(ms)
        timerSec2.textContent = s;
        timerMS2.textContent = parseInt(ms);
    }if(valvePositioning.value==3){
        if(timerRunning2){
            milliseconds2+=(26*(5/28));
            if(milliseconds2 >= (100)){
                milliseconds2 -= 100;
                seconds2++;
                if(seconds2 == 60){
                    seconds2 = 0;
                }
            }
        }
        let s = seconds2 < 10 ? "0" + seconds2 : seconds2;
        let ms = milliseconds2 < 10 ? "0" + milliseconds2 : milliseconds2 < 100 ? "" + milliseconds2 : milliseconds2;
        ms=parseInt(ms)
        timerSec2.textContent = s;
        timerMS2.textContent = parseInt(ms);
    }
    if(valvePositioning.value==4){
        if(timerRunning2){
            milliseconds2+=(20*(5/28));
            if(milliseconds2 >= (100)){
                milliseconds2 -= 100;
                seconds2++;
                if(seconds2 == 60){
                    seconds2 = 0;
                }
            }
        }
        let s = seconds2 < 10 ? "0" + seconds2 : seconds2;
        let ms = milliseconds2 < 10 ? "0" + milliseconds2 : milliseconds2 < 100 ? "" + milliseconds2 : milliseconds2;
        ms=parseInt(ms)
        timerSec2.textContent = s;
        timerMS2.textContent = parseInt(ms);
    }
  
      if(seconds2==targetsec ){
          timerRunning2 = false;
          clearInterval(int2);
          timerMS2.textContent = targetms;
      }
  }
  
  function resetTimer2() {
      clearInterval(int2); 
      [milliseconds2, seconds2] = [0, 0]; 
      timerRunning2 = true; 
      timerSec2.textContent = "00"; 
      timerMS2.textContent = "00";
  }