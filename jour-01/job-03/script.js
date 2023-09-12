function myIsInString(inputString, stringInTheString){
    return inputString.includes(stringInTheString); // Using methode includes to check the combination of letters in the string
    }

    const text = "Hello, World!";
    const stringInTheString = "arl";
    const result = myIsInString(text, stringInTheString);

  console.log(result); //Output: False


