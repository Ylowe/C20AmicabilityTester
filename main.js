function amicableTest()
{
    var input1 = document.getElementById('input1');
    var input2 = document.getElementById('input2');
        console.log("i1 : " + input1.value + " i2: " + input2.value);

    var input1Factors = getFactors(input1);
    var input2Factors = getFactors(input2);
        console.log("INPUT1 FACTORS:")
        consolePrint_array(input1Factors);
        console.log("INPUT2 FACTORS:")
        consolePrint_array(input2Factors);

    var input1FactorsSum = sumArray(input1Factors);
    var input2FactorsSum = sumArray(input2Factors);
        console.log("inut1FactorsSum: " + input1FactorsSum);
        console.log("inut2FactorsSum: " + input2FactorsSum);

    if(input1FactorsSum == input2FactorsSum)
        alert(input1.value + " and " + input2.value + " are amicable");
    else
        alert(input1.value + " and " + input2.value + " are not amicable");
    
    
}

function getFactors(input)
{
    var factorsArray = new Array();
    for(i = 1; i < Math.sqrt(input.value); i++)
    {
        if(input.value % i == 0)
        {
            if(input.value/i == i)
            {
                factorsArray.push(i);
            } 
            else
            {
                factorsArray.push(i);
                factorsArray.push(input.value/i);
            }
        }
    }

    return factorsArray;
}

function sumArray(input)
{
    var sum = 0;
    for(i = 0; i < input.length; i++)
    {
        console.log("Adding " + input[i] + " to sum")
        sum += input[i];
    }

    return sum;
}

function consolePrint_array(array)
{
    for(i = 0; i < array.length; i++)
        console.log("DEBUG: Array at " + i + " = " + array[i]);
}