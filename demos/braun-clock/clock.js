  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off

  function draw_clock(obj) {
    angleMode(DEGREES);

    let hr = obj.hours % 12;
    let min = obj.minutes;
    let sec = obj.seconds;
    let millis = obj.millis;
    let exactSeconds = sec + millis / 1000.0;
    let alarm = obj.seconds_until_alarm;
    let isAM = obj.hours < 12; // Determine AM/PM status

    // Set background color based on AM/PM
    let bgColor = isAM ? color("#E15E3E") : color("#315B7B");
    background(245);

    //  second bars
    let barX = width * 0.8;
    let barY = height * 0.02;
    for (let i = 0; i < 5; i++) {
        drawSecondBars(barX + i * (width * 0.04), barY, 60, sec);
    }

    
    drawMillisecondGlow(width * 0.036, height * 0.2, 230, millis);
    drawMillisecondGlow(width * 0.036, height * 0.24, 230, millis);
    drawMillisecondGlow(width * 0.036, height * 0.28, 230, millis);
    drawMillisecondGlow(width * 0.036, height * 0.32, 230, millis);
    drawMillisecondGlow(width * 0.036, height * 0.36, 230, millis);
    drawMillisecondGlow(width * 0.036, height * 0.4, 230, millis);
    drawMillisecondGlow(width * 0.036, height * 0.44, 230, millis);
    drawMillisecondGlow(width * 0.036, height * 0.48, 230, millis);
    drawMillisecondGlow(width * 0.036, height * 0.52, 230, millis);

    drawMinuteDots(width * 0.02, height * 0.54, 10, 6, min);

    let cx = width / 2;
    let cy = height / 2;
    let radius = 180;

    noFill();
    stroke(30);
    strokeWeight(2);
    ellipse(cx, cy, radius * 2); // Draw clock circle

    // Convert time to angles
    let hourAngle = map(hr, 0, 12, 0, 360);
    let minAngle = map(min, 0, 60, 0, 360);
    let secAngle = map(sec, 0, 60, 0, 360);

    // Draw hour hand
    push();
    translate(cx, cy);
    rotate(hourAngle - 90);
    strokeWeight(4);
    line(0, 0, radius * 0.5, 0);
    pop();

    // Draw minute hand
    push();
    translate(cx, cy);
    rotate(minAngle - 90);
    strokeWeight(2);
    line(0, 0, radius * 0.7, 0);
    pop();

    // Draw second hand (Braun-style red)
    push();
    translate(cx, cy);
    rotate(secAngle - 90);
    stroke(220, 50, 50);
    line(0, 0, radius * 0.9, 0);
    pop();

    // Minimal numbers
    textAlign(CENTER, CENTER);
    textSize(14);
    fill(100);
    noStroke();
    text("12", cx, cy - radius + 15);
    text("3", cx + radius - 15, cy);
    text("6", cx, cy + radius - 15);
    text("9", cx - radius + 15, cy);

    // Alarm Indicator Logic
    let offState = color("#0D703F");
    let setState = color("#F1B73A");
    let alarmState = color("#E6423A");

    if (alarm < 0 || alarm === undefined) {
        fill(offState);
    } else if (alarm > 0) {
        fill(setState);
    } else {
        // Flashing Effect: Only show red every 30 frames (about 0.5s interval)
        if (frameCount % 30 < 15) { 
            fill(alarmState);
        } else {
            fill(245); // Match background to create "off" effect
        }
    }

    // Alarm indicator positions
    ellipse(700, 87, 20);
    ellipse(700, 140, 20);
    ellipse(700, 250, 20);
    ellipse(700, 361, 20);
    ellipse(700, 414, 20);

    // **AM/PM Indicator**
    let amPmX = cx; // Center it horizontally
    let amPmY = cy + radius + 30; // Position just below the clock

    fill(bgColor);
    noStroke();
    ellipse(amPmX, amPmY, 18); // Small circle for AM/PM

    // AM/PM Label
    fill(50); // Darker gray for contrast
    textSize(12);
    text(isAM ? "AM" : "PM", amPmX + 25, amPmY); // Position text to the right of the indicator
}

// Second Bars
function drawSecondBars(x, y, totalBars, sec) {
    let barHeight = 8;
    let inactiveColor = color(80);
    let activeColor = color(255);

    for (let i = 0; i < totalBars; i++) {
        let progress = (sec - i + totalBars) % totalBars / totalBars; // Creates a smooth looping effect
        let bright = lerpColor(inactiveColor, activeColor, constrain(progress * 2, 0, 1));
        
        fill(bright);
        noStroke();
        rect(x, y + (totalBars - i - 1) * barHeight, 10, barHeight - 2);
    }
}

// Minute Dots
function drawMinuteDots(x, y, cols, rows, min) {
  let spacing = 24; // Increased to pull the dots inward for better balance
  let dotSize = 20; // Matches AM/PM indicator size
  let count = 0;
  let activeColor = color("#AAB7BF");
  let inactiveColor = color(220);

  let startX = x + spacing; // Move inward for symmetry
  let startY = y + spacing; // Adjusted for visual balance

  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          let dotColor = count < min ? activeColor : inactiveColor;
          
          fill(dotColor);
          noStroke();
          ellipse(startX + j * spacing, startY + i * spacing, dotSize);
          
          count++;
          if (count >= 60) return;
      }
  }
}

// MillieSeconds
function drawMillisecondGlow(x, y, width, millis) {
  let progress = map(millis, 0, 1000, 0, width);

  for (let i = 0; i < 5; i++) { // Creates a soft gradient effect
      let alpha = map(i, 0, 4, 20, 100); // Increasing opacity towards the center
      fill(100, 100, 100, alpha);
      noStroke();
      rect(x, y, progress - (i * 3), 2); // Subtle layered glow effect
  }
}











