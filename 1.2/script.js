// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement �
// GOOD LUCK �
    var markInfo1={
        mass:78,
        height:1.69
    };

    var markInfo2={
        mass: 95,
        height:1.88
    };



    var johnInfo1={
        mass:92,
        height:1.95
    };

    var johnInfo2={
        mass:85,
        height:1.76
    }

    function BMI(info){
        let index = info.mass/info.height**2;
        return index;
    }

    var markHigherBMI = true;

    var markBMI= BMI(markInfo1).toFixed(2); 
    console.log(`Mark's BMI : ${markBMI}`); 

    var johnBMI= BMI(johnInfo1).toFixed(2);
    console.log(`John's BMI : ${johnBMI}`);

    if(markBMI > johnBMI){
        console.log(`Mark's BMI higher than John's : ${markHigherBMI}`);
    }else if(markBMI==johnBMI){
        console.log('Their BMI are equal');
    }  else{
        markHigherBMI=false;
        console.log(`Mark's BMI higher than John's:  ${markHigherBMI}`);
    } 