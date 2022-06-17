// Coding Challenge #3
    // There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
    // 1. Calculate the average score for each team, using the test data below
    // 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
    // 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks �
    // 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
    // Test data:
    // § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
    // § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
    // § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106



    const scoreDolphins = ((97+112+101)/3).toFixed(2);
    const scoreKoalas = ((88+91+110)/3).toFixed(2);
    console.log(`Dolphins Score: ${scoreDolphins}\nKoalas Score: ${scoreKoalas}`);
    var minScore = 100

    // if(scoreDolphins > scoreKoalas){
    //     console.log(`Winner is Dolphins: ${scoreDolphins}`);
    // }else if(scoreDolphins === scoreKoalas){
    //     console.log('Draw')
    // }else{
    //     console.log(`Winner is Koalas : ${scoreKoalas}`);
    // }

    if(scoreDolphins > scoreKoalas && scoreDolphins >= minScore){
        console.log(`Winner is Dolphins : ${scoreDolphins}`);
    }else if(scoreKoalas > scoreDolphins && scoreKoalas >= minScore){
        console.log(`Winner is Koalas : ${scoreKoalas}`);
    }else if(scoreDolphins === scoreKoalas && scoreDolphins >= minScore && scoreKoalas >= minScore){
        console.log(`There is no winner\nDolpins: ${scoreDolphins}\nKoalas: ${scoreKoalas}\n ----Draw---`);
    }else{
        console.log('There is no winner');
    }



    // just note 


    // Conditional (Ternary) Operator

    const age = 18;

    age >=18 ? console.log('You can drink alchole') : console.log('You can drink water');