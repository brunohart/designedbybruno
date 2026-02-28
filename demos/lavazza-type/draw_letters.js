/* these are optional special variables which will change the system */
var systemBackgroundColor = "#163052"; //taken straight from the lavazza website brand color 
var systemLineColor = "#000090";
var systemBoxColor = "#C73869";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */


//yum yum latte art 
 

function drawLetter(letterData) {
  push(); //push1
  scale(letterData.pulse); //apply a global pulse
  let posx = 0; //This really is the only way I can figure out to get this code to work even with troubleshooting around it
  let posy = 0;

   // apply global pulse
  

  // Positioning – like how far the pour goes from origin
let pourDistance1x = posx + letterData["pourDistance1x"];
let pourDistance1y = posy + letterData["pourDistance1y"];
let pourDistance2x = posx + letterData["pourDistance2x"];
let pourDistance2y = posy + letterData["pourDistance2y"];
let pourDistance3x = posx + letterData["pourDistance3x"];
let pourDistance3y = posy + letterData["pourDistance3y"];

// Wave length – how the crema flows
let cremaFlow1 = letterData["cremaFlow1"];
let cremaFlow2 = letterData["cremaFlow2"];
let cremaFlow3 = letterData["cremaFlow3"];

// Rotation – tilt of the pitcher or portafilter
let tiltAngle1 = letterData["tiltAngle1"];
let tiltAngle2 = letterData["tiltAngle2"];
let tiltAngle3 = letterData["tiltAngle3"];

// Frequency – number of peaks in foam art
let foamPeaks1 = letterData["foamPeaks1"];
let foamPeaks2 = letterData["foamPeaks2"];
let foamPeaks3 = letterData["foamPeaks3"];

// Amplitude – how high the foam lifts
let foamHeight1 = letterData["foamHeight1"];
let foamHeight2 = letterData["foamHeight2"];
let foamHeight3 = letterData["foamHeight3"];

// Stroke weight – body/thickness of milk
let milkBody1 = letterData["milkBody1"];
let milkBody2 = letterData["milkBody2"];
let milkBody3 = letterData["milkBody3"];

// Letter identifier – like a brew order ticket
let brewDigit = letterData["brewDigit"];

// Coffee color palette
let espresso = color(52, 25, 14); // LerpColor 1 – deep base
let oatMilk = color(232, 222, 203); // LerpColor 2 – soft and light
let americano = color(0, 0, 0); // LerpColor 3 – dark like strong espresso diluted



  //maps for calculating pourSpeed (peakHeight)
  let FluffyFoamHeightMap1 = map(foamHeight1, 0, 100, 0, 1); //postive peak1 height
  let FlatFoamHeightMap1 = map(foamHeight1, 0, -100, 0, 1); //negative peak1 height
  let FluffyFoamHeightMap2 = map(foamHeight2, 0, 100, 0, 1); //postive peak2 height
  let FlatFoamHeightMap2 = map(foamHeight2, 0, -100, 0, 1); //negative peak2 height
  let FluffyFoamHeightMap3 = map(foamHeight3, 0, 100, 0, 1); //postive peak3 height
  let FlatFoamHeightMap3 = map(foamHeight3, 0, -100, 0, 1); //negative peak3 height

  //maps for lerp colour
  let DeliciousMixedBrew1 = lerpColor(espresso, oatMilk, FluffyFoamHeightMap1); //pos peak1 color
  let YuckyMixedBrew1 = lerpColor(espresso, oatMilk, FlatFoamHeightMap1); //neg peak1 color
  let DeliciousMixedBrew2 = lerpColor(espresso, oatMilk, FluffyFoamHeightMap2); //pos peak2 color
  let YuckyMixedBrew2 = lerpColor(espresso, oatMilk, FlatFoamHeightMap2); //neg peak2 color
  let DeliciousMixedBrew3 = lerpColor(espresso, oatMilk, FluffyFoamHeightMap3); //pos peak3 color
  let YuckyMixedBrew3 = lerpColor(espresso, oatMilk, FlatFoamHeightMap3); //neg peak3 color


  //maps for calculating peak amount
  let FluffyFoamPeaksMap1 = map(foamPeaks1, 0, 10, 0, 1); //postive peak1 amount
  let FlatFoamPeaksMap1 = map(foamPeaks1, 0, -10, 0, 1); //negative peak1 amount
  let FluffyFoamPeaksMap2 = map(foamPeaks2, 0, 10, 0, 1); //positive peak2 amount
  let FlatFoamPeaksMap2 = map(foamPeaks2, 0, -10, 0, 1); //negative peak2 amount
  let FluffyFoamPeaksMap3 = map(foamPeaks3, 0, 10, 0, 1); //positive peak3 amount
  let FlatFoamPeaksMap3 = map(foamPeaks3, 0, -10, 0, 1); //negative peak3 amount

  //number lerp colour
  let PosPAmountLerpColor1 = lerpColor(oatMilk, americano, FluffyFoamPeaksMap1); //pos peak1 amount color
  let NegPAmountLerpColor1 = lerpColor(oatMilk, americano, FlatFoamPeaksMap1); //neg peak1 amount color
  let PosPAmount2LerpColor1 = lerpColor(oatMilk, americano, FluffyFoamPeaksMap2); //pos peak2 amount color
  let NegPAmount2LerpColor1 = lerpColor(oatMilk, americano, FlatFoamPeaksMap2); //neg peak2 amount color
  let PosPAmount3LerpColor1 = lerpColor(oatMilk, americano, FluffyFoamPeaksMap3); //pos peak3 amount color
  let NegPAmount3LerpColor1 = lerpColor(oatMilk, americano, FlatFoamPeaksMap3); //neg peak3 amount color


  // strokeCap(SQUARE);
  strokeCap(ROUND);
  stroke(0);

//POUR 1 START
push(); //push2
strokeWeight(milkBody1);
translate(pourDistance1x, pourDistance1y); //set x and y of first pour
angleMode(DEGREES);
rotate(tiltAngle1); //rotation for first pour
angleMode(RADIANS); //changes back to radians for sinewave loop
noFill();
if (foamHeight1 >= 0) { //if peaks are positive
  stroke(DeliciousMixedBrew1); //set positive map
} else { //if peaks are negative
  stroke(YuckyMixedBrew1); //set negative map
}
if (brewDigit == 1 && foamPeaks1 >= 0) { //if its a number & wave 1 peaks are postive
  stroke(PosPAmountLerpColor1); //set number map colour
} else if(brewDigit == 1 && foamPeaks1 < 0){ //if its a number & wave 1 peaks are negative
  stroke(NegPAmountLerpColor1); //set number map colour
}

beginShape(); //main line wave 1
for (let i = 0; i < 100; i++) { //starts loop to make sine wave
  const x = i * cremaFlow1; //sets wave 1 length
  const y = sin(i * radians(foamPeaks1)) * foamHeight1; //sets peak amount and peak height
  vertex(x, y); //draws line
}
endShape();
pop(); //pop2


//WAVE 2 START
push(); //push5
strokeWeight(milkBody2);
translate(pourDistance2x, pourDistance2y); //set x and y of wave 2
angleMode(DEGREES);
rotate(tiltAngle2); //rotation for wave 2
angleMode(RADIANS); //changes back to radians for sinewave loop
noFill();
if (foamHeight2 >= 0) { //if peaks are positive
  stroke(DeliciousMixedBrew2); //set positive map
} else { //if peaks are negative
  stroke(YuckyMixedBrew2); //set negative map
}
if (brewDigit == 1 && foamHeight2 >= 0) { //if its a number & wave 2 peaks are postive
  stroke(PosPAmount2LerpColor1); //set number map colour
} else if(brewDigit == 1 && foamHeight2 < 0){ //if its a number & wave 2 peaks are negative
  stroke(NegPAmount2LerpColor1); //set number map colour
}

beginShape(); //main line wave 2
for (let i = 0; i < 100; i++) { //starts loop to make sine wave
  const x = i * cremaFlow2; //sets wave 2 length
  const y = -sin(i * radians(foamPeaks2)) * foamHeight2; //sets peak amount and peak height
  vertex(x, y); //draws line
}
endShape();

//COFFEE POUR -> Using the metaphor that its like the thick straight black pulled from the machine (but ironically we are using the americano color just for simplicity but you get the imagery)
push(); //push6
stroke(americano); //middle line colour
strokeWeight(milkBody2 * 0.45); //middle line weight
beginShape(); //middle line 2 create
for (let i = -1; i < 101; i++) { //starts loop to make sine wave
  const x = i * cremaFlow2; //sets wave 2 length
  const y = -sin(i * radians(foamPeaks2)) * foamHeight2; //sets peak amount and peak height
  vertex(x, y); //draws line
}
endShape();
pop(); //pop6
push(); //push7
if (foamHeight2 >= 0) { //if peaks are positive
  stroke(DeliciousMixedBrew2); //set positive map
} else { //if peaks are negative
  stroke(YuckyMixedBrew2); //set negative map
}
if (brewDigit == 1 && foamPeaks2 >= 0) { //if its a number & wave 2 peaks are postive
  stroke(PosPAmount2LerpColor1); //set number map colour
} else if(brewDigit == 1 && foamPeaks2 < 0){ //if its a number & wave 2 peaks are negative
  stroke(NegPAmount2LerpColor1); //set number map colour
}
strokeWeight(milkBody2 * 0.2); //middle colour line 2 weight
strokeCap(ROUND);
beginShape(); //middle colour line 2 create
for (let i = 1; i < 99; i++) { //starts loop to make sine wave
  const x = i * cremaFlow2; //sets wave 2 length
  const y = -sin(i * radians(foamPeaks2)) * foamHeight2; //sets peak amount and peak height
  vertex(x, y); //draws line
}
endShape();
pop(); //pop7
pop(); //pop5


//  WAVE 3 START
push(); //push8
strokeWeight(milkBody3);
translate(pourDistance3x, pourDistance3y); //set x and y of wave 3
angleMode(DEGREES);
rotate(tiltAngle3); //rotation for wave 3
angleMode(RADIANS); //changes back to radians for sinewave loop
noFill();
if (foamHeight3 >= 0) { //if peaks are positive
  stroke(DeliciousMixedBrew3); //set positive map
} else { //if peaks are negative
  stroke(YuckyMixedBrew3); //set negative map
}
if (brewDigit == 1 && foamPeaks3 >= 0) { //if its a number & wave 3 peaks are postive
  stroke(PosPAmount3LerpColor1); //set number map colour
} else if(brewDigit == 1 && foamPeaks3 < 0){ //if its a number & wave 3 peaks are negative
  stroke(NegPAmount3LerpColor1); //set number map colour
}

beginShape(); // main wave 3
for (let i = 0; i < 100; i++) { //starts loop to make sine wave
  const x = i * cremaFlow3; //sets wave 3 length
  const y = -sin(i * radians(foamPeaks3)) * foamHeight3; //sets peak amount and peak height
  vertex(x, y); //draws line
}
endShape();
pop(); //pop8

// drop #1: espresso
if (letterData.drop1 > 0) {
  push();
    translate(pourDistance2x, pourDistance2y + letterData.dropY1);
    noStroke();
    fill(espresso);
    let s = letterData.dropScale1 * 16;
    ellipse(0, 0, s, s*1.5);
  pop();
}
// drop #2: oat milk
if (letterData.drop2 > 0) {
  push();
    translate(pourDistance2x + 10, pourDistance2y + letterData.dropY2);
    noStroke();
    fill(oatMilk);
    let s = letterData.dropScale2 * 10;
    ellipse(0, 0, s, s*1.2);
  pop();
}
// drop #3: crema fleck
if (letterData.drop3 > 0) {
  push();
    translate(pourDistance2x - 6, pourDistance2y + letterData.dropY3);
    noStroke();
    fill(americano);
    let s = letterData.dropScale3 * 6;
    ellipse(0, 0, s, s);
  pop();
}

// color flash overlay
if (letterData.colorFlash > 0) {
  push();
    noFill();
    stroke(lerpColor(espresso, oatMilk, letterData.colorFlash));
    strokeWeight(8 * letterData.colorFlash);
    ellipse(0,0, 120, 240);
  pop();
}
pop(); //pop1

}
// Smoothstep easing: cubic Hermite interpolation for fluid transitions
function smoothstep(t) {
  t = constrain(t, 0, 1);
  return t * t * (3 - 2 * t);
}

function interpolate_letter(percent, oldBean, newBean) {
  // 1. Prepare our output pitcher and the default mid-brew profile
  const out   = {};
  const mid   = getObjFromChar("default");

  // 2. Define when our big crema blob ripples: from 15% → 85%
  const splashStart = 15;
  const splashEnd   = 85;
  // Normalize splash progress to [0→1→0] over that window
  let tSplash = constrain(map(percent, splashStart, splashEnd, 0, 1), 0, 1);
  let cremaBlob = sin(tSplash * PI);

  // 3. Schedule three little drops to leap in at staggered times
  const dropSpecs = [
    { center: 45, width: 30 },  // first drop
    { center: 55, width: 20 },  // second drop
    { center: 65, width: 15 }   // third drop
  ];
  dropSpecs.forEach((d, i) => {
    // Compute drop's own ease (0→1→0) with a sine bump
    let dt = map(percent, d.center - d.width/2, d.center + d.width/2, 0, 1);
    let dropEase = constrain(sin(dt * PI), 0, 1);

    // Save ease, vertical lift, and scale for drawLetter() later
    out[`drop${i+1}`]      = dropEase;
    out[`dropY${i+1}`]     = map(dropEase, 0, 1, 0, -20 - i*5);
    out[`dropScale${i+1}`] = map(dropEase, 0, 1, 0.2, 1 - i*0.2);
  });

  // 4. Add a soft pulse at 50% — like the latte art's gentle heartbeat
  out.pulse = 1 + sin(map(percent, 0, 100, 0, PI) * 2) * 0.05;

  // 5. Now blend our bean parameters in three stages with overlapping boundaries:
  const phase1End   = 22;
  const phase3Start = 78;

  if (percent < phase1End) {
    // → 0%→22%: Old bean → mid bean with smoothstep easing
    let t0 = smoothstep(percent / phase1End);
    for (let prop in mid) {
      out[prop] = lerp(oldBean[prop], mid[prop], t0);
    }

  } else if (percent <= phase3Start) {
    // → 15%→85%: Hold mid bean + splash blob on all three pours
    Object.assign(out, mid);

    ['foamHeight','milkBody'].forEach(group => {
      for (let i = 1; i <= 3; i++) {
        const boost = (group === 'foamHeight') ? 120 : 20;
        out[`${group}${i}`] = mid[`${group}${i}`] + cremaBlob * boost;
      }
    });

    // Subtle rotation drift during splash phase
    for (let i = 1; i <= 3; i++) {
      out[`tiltAngle${i}`] = mid[`tiltAngle${i}`] + cremaBlob * 3.5;
    }

    // Quick crema flash: signals the blob's apex
    out.colorFlash = map(cremaBlob, 0, 1, 0, 1);

  } else {
    // → 78%→100%: mid bean → new bean with smoothstep easing
    let t1 = smoothstep((percent - phase3Start) / (100 - phase3Start));
    for (let prop in mid) {
      out[prop] = lerp(mid[prop], newBean[prop], t1);
    }
  }

  return out;
}

//The words have been presnetd in an order that best displays the font family and aims at showcasing the lettering in a playful conversation with one another
var swapWords = [
  "ITALIANO",
  "CLASSICO",
  "ESPRESSO",
  "CAFFEINE",
  "EGUSTORA",
  "QUALIT0A",
  "LAVAZZA?",
]
