// JavaScript Fundamentals – Part 1
    // Coding Challenge #1
    // Mark and John are trying to compare their BMI (Body Mass Index), which is
    // calculated using the formula:
    // BMI = mass / height ** 2 = mass / (height * height) (mass in kg
    // and height in meter).
    // Your tasks:
    // 1. Store Mark's and John's mass and height in variables
    // 2. Calculate both their BMIs using the formula (you can even implement both
    // versions)
    // 3. Create a Boolean variable 'markHigherBMI' containing information about
    // whether Mark has a higher BMI than John.
    // Test data:
    // § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
    // m tall.
    // § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
    // m tall.


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

  
