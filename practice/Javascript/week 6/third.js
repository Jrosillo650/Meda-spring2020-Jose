var myFirstVar = 1000;

var yearsleft = 1000;

// Units in meters
var buildingHeightMeters = 100;

var humanAge = 16;

var humanAgeDays = 5840;

// Bad Name
var x = "Super Important";

// Equal sign, everything on the right side always happens first.
var sum = 1000 + 50;

var product = 50 * 50;

var dividend = 20 / 10;

var difference = 100 - 10;

// When using variable names on the right side of the equal sign, you are calling for value and then you are running the operators, and finally you are storing the final value into the valueable total/
var total = product + sum;

console.log(total);


// Look at built-in Math Libarary of Javascript.
var radius = 40;

var diameterofCircle = 2 * radius;
// MATH.PI
var perimeterofCircle = Math.PI * diameterofCircle;


console.log("The diameter of the circle with a radius of " + radius + " is " + diameterofCircle + " The perimeter of the circle is " + perimeterofCircle);

// Rounds to the nearest whole number.
var rounded = Math.round(3.14);
console.log(rounded);

// Round up
var roundedUp = Math.ceil(45.1);

// Round down
var roundedDown = Math.floor(45.9);