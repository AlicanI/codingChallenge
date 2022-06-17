// Coding Challenge #4
    // Steven wants to build a very simple tip calculator for whenever he goes eating in arestaurant. In his country, it's usual to tip 15% if the bill value is between 50 and300. If the value is different, the tip is 20%.
    //Your tasks:
        // 1. Calculate the tip, depending on the bill value.   Create a variable called 'tip' for this. It's not allowed to use an if/else statement � (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
         // 2. Print a string to the console containing the bill value, the tip, and the final value(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
    // Test data:
    // § Data 1: Test for bill values 275, 40 and 430
    // Hints:
    // § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
    // § Value X is between 50 and 300, if it's >= 50 && <= 300 �

    
    // var bill =20;
    
    // 50 <= bill >=300 ? console.log('Tip: '+ bill*0,15) : 
    // console.log('Tip : '+ bill*0.2);

    // console.log(`Bill was ${bill},`);


    const bill = 275;
    

    50 < bill < 300 ? console.log(`The bill was ${bill}, the tip is ${bill*0.15} and the total value ${bill + (bill*0.15)} `) : console.log(`The bill was ${bill}, the tip is ${bill*0.2} and the total value ${bill + (bill*0.2)}`);

    // Another version

    const bill2 = 275;
    const tip = bill2 <= 300 && bill2 >= 50 ? bill*0.15 : bill*0.2;
    console.log(`The bill was ${bill2}, the thip is ${tip} and the total value ${bill + tip}`);
    