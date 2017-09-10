// Create a Sharpie constructor

// We should know about each sharpie their color (which should be a string), width (which will be a floating point number), 
// inkAmount (another floating point number)
// When creating one, we need to specify the color and the width
// Every sharpie is created with a default 100 as inkAmount
// We can use() the sharpie objects
// which decreases inkAmount by the width
'use strict';

function Sharpie(color, width, inkAmount) {
  this.color = color;
  this.width = width;
  this.inkAmount = 100;
  this.use = function() {
    this.inkAmount -= width;
  }
}

var yelloSharpie = new Sharpie('yellow', 10);
console.log(yelloSharpie.inkAmount);
yelloSharpie.use();
console.log(yelloSharpie.inkAmount);