var counter = 0;


while(10 > counter){
    //Code to run per loop.
    counter = counter + 1;
    console.log(counter);
    // The ++ will add a 1 to the existing variable value;
    //counter++;
    
    // The -- will subtract a 1 to the existing variable value;
    //counter--
}


for (var counter= 0; 10> counter; counter=counter + 1){
    
    console.log(counter);
}



var special= 1
// Outer loop will run for 10 times, for each time we are executing another loop that will tself run 10 times.
for(var i =0; i < 10; i++){
//The inner loop that will run once(10 times).
for(var e=0; e < 10;e++){
    console.log("running !" + special);
    special++;    
}


}



for(var i=0; i<= 48; i=i+2){
    console.log(i);
}













