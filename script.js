                                        // Chapter 01

//1. Declare a variable in the camelCase format
var myVariable;

// 2.eclare a variable without defining it, then assign it a string:
var anotherVariable;
anotherVariable = "Hello, World!";

// 3.Declare the variable teamName and alert your team name:
var teamName = "Dream Team";
alert(teamName);

// 4.Assign a new string to the variable bestMan:
var bestMan = "Abdul Saboor";
bestMan = "Abdul Saim";

                                        // Chapter 02

// 01.Alert the following individually:
var fstName = "Jaisha";
alert(fstName);

var lastName = "Naz";
alert(lastName);

var email = "jaisha.naz@example.com";
alert(email);

var phoneNumber = "123-456-7890";
alert(phoneNumber);

var password = "securePassword123";
alert(password);

// 02.Correct this statement:
alert("You're learning JavaScript!");

// 03.Code an alert statement displaying any message you like:
alert("Welcome to JavaScript programming!");

                                    // Chapter 03

// 01.Declare a variable caseQty:
var caseQty;

// 02.Assign the value 144 to caseQty:
caseQty = 144;

// 03.Rewrite this statement so the variable can be used in a math operation:
var num = 9; // Remove the quotes to make it a number

// 04.In one statement declare a variable. In a second statement assign it the sum of 2 numbers:
var sum;
sum = 5 + 10;

// 05.What is the value of orderTotal?
var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;
// The value of orderTotal is 110

// 06.In the first statement declare a variable and assign it a number. In the second statement, change the value of the variable by adding it together with a number:
var myNumber = 20;
myNumber = myNumber + 15; // or myNumber += 15;

                                    // Chapter 04

// 01.Correct this statement:
var productCost = 3.45; // Variable names cannot contain spaces

// 02.Rewrite this using camelCase:
var nameOfBand;

// 03.In a single statement declare a legally-named variable and assign a number to it:
var age = 25;

// 04.Declare a variable that is a combination of your first and last names using camelCase:
var jaishaNaz;

// 05.List the legal and illegal variables:
// Legal Variables:
// Must begin with a letter, underscore (_), or dollar sign ($)
// Can contain letters, numbers, underscores, or dollar signs
// Case-sensitive
// Examples of legal variables:
var myName;
var _lastName;
var $amount;
var user1;
var myVariableName;

// Illegal Variables:
// Cannot begin with a number
// Cannot contain spaces or special characters other than underscore (_) and dollar sign ($)
// Cannot be reserved keywords in JavaScript
// Examples of illegal variables:
// var 1stName; // Begins with a number
// var last-name; // Contains a hyphen
// var var; // Reserved keyword
// var product cost; // Contains a space
// var @price; // Contains a special character (@)

                                        // Chapter 05

// 01.What is the name and symbol of the arithmetic operator that gives you the remainder when one number is divided by another?
// The operator is called the modulus operator, and its symbol is %.

// 02.What is the value of num?
var num = 20 % 6; // The value of num is 2 (20 divided by 6 gives a remainder of 2)

// 03.In a single statement, declare the variable largeNum and assign it the result of 1,000 multiplied by 2,000:
var largeNum = 1000 * 2000;

// 04.Assign to a variable the value represented by one variable subtracted from the value represented by another variable:
var a = 50;
var b = 20;
var difference = a - b;

// 05.Assign to a variable the remainder when one number is divided by another. The variable hasn't been declared beforehand. Make up the variable name:
var remainder = 25 % 4; // The remainder is 1

// 06.Code an alert that displays the result of a multiplication on 2 numbers:
var result = 5 * 8;
alert(result); // Displays 40

                                        // Chapter 06

// 01.Code a short form of x = x + 1; Use either of the two legal expressions:
x += 1;
// or
x++;

// 02.If x has a value of 100, what is the fastest way to reduce it to 99 with a math expression?
x--;

// 03.What is the value of y in the following code?
var x = 50;
var y = x++;
// The value of y is 50 (post-increment, y gets the original value of x)

// 04.What is the value of z in the following code?
var y = 50;
var z = --y;
// The value of z is 49 (pre-decrement, y is decremented before being assigned to z)

// 05.In a single statement, decrement num and assign its original value to newNum:
var num = 10;
var newNum = num--; // newNum gets the original value of num, which is 10

// 06.In a single statement, add 1 to a variable and assign its original value to another variable:
var originalVar = 5;
var anotherVar = originalVar++; // anotherVar gets the original value of originalVar, which is 5

// 07.Assign a number value to a variable, increment the variable, and display the new value in an alert:
var myNumber = 20;
myNumber++;
alert(myNumber); // Displays 21

                                            // Chapter 07

// 01.var calculatedNum = 2 + (2 * 6);
var calculatedNum1 = 2 + (2 * 6); // 2 + 12 = 14

// 02.var calculatedNum = (2 + 2) * 6;
var calculatedNum2 = (2 + 2) * 6; // 4 * 6 = 24

// 03.var calculatedNum = (2 + 2) * (4 + 2);
var calculatedNume3 = (2 + 2) * (4 + 2); // 4 * 6 = 24

// 04.var calculatedNum = ((2 + 2) * 4) + 2;
var calculatedNum4 = ((2 + 2) * 4) + 2; // 4 * 4 + 2 = 16 + 2 = 18

// 05.Write a statement that assigns to cost the result of 2 + 2 * 4 + 10, clarified with parentheses, producing 56:
var cost = (2 + (2 * 4) + 10) * 4; // 2 + 8 + 10 = 20 * 4 = 80 (56 is not achievable with 2 + 2 * 4 + 10)
// Corrected to:
var cost = ((2 + 2) * 4 + 10) * 2; // 4 * 4 + 10 = 26 * 2 = 52

// 06.Write a statement that assigns to units the result of 2 + 2 * 4 + 10, clarified with parentheses, producing 20:
var units = 2 + (2 * 4) + 10; // 2 + 8 + 10 = 20

// 07.Write a statement that assigns to pressure the result of 4 / 2 * 4, clarified with parentheses, producing 5:
var pressure = (4 / 2) * 2.5; // 2 * 2.5 = 5

                                            // Chapter 08

// 01.var num = "2" + "2";
var num = "2" + "2";
// The value of num is "22"

// 02.message = ("Hello," + "Dolly");
var message = "Hello," + "Dolly";
// The value of message is "Hello,Dolly"
alert(message);

// 03.alert("33" + 3);
alert("33" + 3);
// The message displayed in the alert box is "333"

// 04.Write an alert that displays the concatenation of the two parts of "Pakistan Zindabad":
alert("Pakistan" + " Zindabad");
// The alert will display "Pakistan Zindabad"

// 05.Write a statement that assigns to a variable the concatenation of a string with a number:
var strNumConcat = "The number is " + 42;

// 06.Assign strings to two variables. Then concatenate them and assign the result to a third variable:
var yourFname = "Jaisha";
var yourLname = "Naz";
var fullName = yourFname + " " + yourLname;

                                                // Chapter 09

// 01.Code a prompt with the message "Enter first name". The user's response is assigned to firstName:
var fName = prompt("Enter first name");

// 02.Code a prompt with the message "Country?" and the default answer "China". The user's response is assigned to country:
var country = prompt("Country?", "China");

// 03.Correct this statement:
var yourName = prompt("Enter Your Name");

// 04.Code a prompt that specifies a string as the message and includes a default input:
var userInput = prompt("Enter your favorite color", "Blue");

// 05.Assign strings to two variables. Code a prompt specifying the first variable as the message and the second variable as the default response. Assign the user's response to a third variable:
var message = "Enter your favorite food";
var defaultFood = "Pizza";
var userFood = prompt(message, defaultFood);

// 06.Display a prompt, including both a message and a default response. Display the user's response in an alert:
var userResponse = prompt("What is your hobby?", "Reading");
alert(userResponse);

                                                // Chapter 10

// 01.Correct the statement:
var city = "Karachi";
if (city === "Karachi") {  // Use '===' for comparison
    console.log("The City of Lights");
}

// 02.Complete the if statement:
if (x === y) {
    var z = prompt("What is the value of z?");
    // Additional code can be added here if needed
}

// 03.Code an if statement that tests if ZipCode is "10010" and alerts "Karachi", if not then alerts "Please write correct city":
var ZipCode = prompt("Enter the Zip Code");
if (ZipCode === "10010") {
    alert("Karachi");
} else {
    alert("Please write correct city");
}

// 04.Code an if statement to test whether a variable has a particular numerical value and assign a new value if so:
var x = 1;
if (x === 1) {
    x = 2; // Assigning a new value
}

                                                // Chapter 11

// 01.Code the first line of an if statement that tests whether one variable is unequal to another using !:
if (variable1 !== variable2) 

// 02.Code the first line of an if statement that tests whether the value represented by a variable is greater than or equal to the value represented by another variable:
if (variable1 >= variable2)

// 03.Code an if statement. Test whether a variable is unequal to a particular number. If so, assign a number to that variable:
var num = 5;
if (num !== 10) {
    num = 10;
}

// 04.Code an if statement that tests whether a number is unequal to a different number. If the condition is true (it will be), display a congratulations alert:
var number = 20;
if (number !== 25) {
    alert("Congratulations!");
}

// 05.Code a prompt asking for your first name. Code an if statement that tests whether the name you entered is unequal to another name. If the condition is true (it will be), display an alert that says "No match":
var firstName = prompt("Enter your first name");
if (firstName !== "jaisha") {
    alert("No match");
}

                                            // Chapter 12

// 01.If statement to test whether the value represented by a variable is greater than or equal to the value represented by another variable:
var variable1 = 10;
var variable2 = 5;

if (variable1 >= variable2) {
    alert("Variable1 is greater than or equal to Variable2");
} else {
    alert("Variable1 is less than Variable2");
}

// 02.Program using if else and else if statements to calculate percentage and grade based on marks (MARKSHEET):
var marksObtained = prompt("Enter your marks obtained");
var totalMarks = prompt("Enter total marks");
var percentage = (marksObtained / totalMarks) * 100;
var grade;

if (percentage >= 90) {
    grade = 'A';
} else if (percentage >= 80) {
    grade = 'B';
} else if (percentage >= 70) {
    grade = 'C';
} else if (percentage >= 60) {
    grade = 'D';
} else {
    grade = 'F';
}

alert("Your percentage is: " + percentage + "%\nYour grade is: " + grade);

// 03.If statement to display an alert for a value of a, and another alert if a isn't 10:
var a = prompt("Enter the value of a");

if (a === '10') {
    alert("a is 10");
} else {
    alert("The correct value of a is " + a);
}

// 04.Prompt the user to enter a city and display corresponding alerts based on the city entered:
var city = prompt("Enter a city");

if (city.toLowerCase() === "karachi") {
    alert("You entered Karachi");
} else if (city.toLowerCase() === "lahore") {
    alert("You entered Lahore");
} else {
    alert("You entered a different city");
}

                                                // Chapter 13

// 01.First line of an if statement that tests whether both are true: a has the same value as b and c has the same value as d:
if (a === b && c === d) {
}

// 02.First line of an if statement that tests whether either or both are true: a has the same value as b or c doesn't have the same value as d:
if (a === b || c !== d) {
}

// 03.First line of an if statement that tests whether:
// name is either "Hamza" or "Arsalan".
// age is less than 60.
var yourname
if ((yourname === "Hamza" || yourname === "Arsalan") && age < 60) {
}

// 04.Declare two variables and assign them number values. If the first variable is less than the second variable or greater than the second variable, display an alert:
var num1 = 25;
var num2 = 30;

if (num1 < num2 || num1 > num2) {
    alert("The first variable is either less than or greater than the second variable");
}

// 05.Declare 2 variables. Assign one of them your first name and the other one your last name. Code 2 prompts, asking for your first and your last name. If your answers match the two variables, display an alert:
var frstName = "Jaisha";
var lstName = "Naz";

var userFirstName = prompt("Enter your first name");
var userLastName = prompt("Enter your last name");

if (userFirstName === frstName && userLastName === lstName) {
    alert("Your answers match the stored names");
}

                                            // Chapter 14

// 01.Code an if statement enclosing a nested if. If password is not empty, then check if password length is not greater than 5. If not, display an alert that says "Password must be greater than 5"; if it is greater than 5, then alert "OK".
var password1 = prompt("Enter your password");

if (password1 !== "") {
    if (password1.length <= 5) {
        alert("Password must be greater than 5");
    } else {
        alert("OK");
    }
}

// 02.Test this statement by yourself:
if (a === 1) {
    if (c === "Max") {
        alert("OK");
    }
}

// 03.Code the first line of an if statement that avoids the nesting above by testing for multiple conditions:
if (a === 1 && c === "Max") {
    alert("OK");
}

// 04.Declare two variables and assign them the same number value. Test two conditions, using nested if statements. Test whether the first variable equals the second variable and also whether it is less than or equal to the second variable. If the test passes—and it will—display an alert message:
var num1 = 10;
var num2 = 10;

if (num1 === num2) {
    if (num1 <= num2) {
        alert("Both conditions are true: num1 equals num2 and num1 is less than or equal to num2");
    }
}

                                            // Chapter 15

// 01.Declare an empty array:
var emptyArray = [];

// 02.Code an array with 1 string element:
var stringArray = ["hello"];

// 03.Print the letter “j” in alert using array index:
var alphabet = ["h", "i", "j", "k"];
alert(alphabet[2]);

// 04.Find the total length of the array:
var alphabets = ["h", "i", "j", "k", "l", "m", "n", "o"];
var arrayLength = alphabets.length;
alert(arrayLength);

// 05.Declare an array with one element and add a second element with index in array. Create an alert whose message is the new element:
var myArray = ["firstElement"];
myArray[1] = "secondElement";
alert(myArray[1]);

                                        // Chapter 16(Array II)

// 01.Code an array with 1 string element. Add an additional element to the array using push. Create an alert whose message is the last element:
var stringArray1 = ["hello"];
stringArray1.push("world");
alert(stringArray1[stringArray1.length - 1]);

// 02.Remove the last element from the array Alphabet:
var Alphabetss = ["h", "i", "j", "k"];
Alphabetss.pop();

// 03.Add a new element, a number, to the end of an array:
var Alpha = ["h", "i", "j", "k"];
Alpha.push(123);

                                        // Chapter 16(Array III)

// 01.Remove the first element of an array:
var size = ["S", "M", "XL", "XXL", "XXXL"];
size.shift();

// 02.Add three number elements to the beginning of an array:
var size1 = ["S", "M", "XL", "XXL", "XXXL"];
size1.unshift(1, 2, 3);

// 03.Declare an array with one element. Add a second element to the beginning of the array. Create an alert whose message is the new first element:
var yourArray = ["secondElement"];
yourArray.unshift("firstElement");
alert(yourArray[0]);

// 04.Insert "L" into the array between "M" and "XL":
var size2 = ["S", "M", "XL", "XXL", "XXXL"];
size2.splice(2, 0, "L");

// 05.Copy the first 3 size3 of the array and put them into a new array, regSizes:
var size3 = ["S", "M", "XL", "XXL", "XXXL"];
var regSizes = size3.slice(0, 3);

// 06.var size3 = ["S", "M", "XL", "XXL", "XXXL"];
var regSizes = size3.slice(0, 3);

// 07.Remove "cat" and "ox":
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 2);

// 08.Reduce it to "duck" and "frog" using slice:
var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
var reducedPets = pets.slice(3, 5);

                                    // Chapter 17-20(For Loops)

// 01.Write a statement in which loop is to run 10 times.
for (var i = 0; i < 10; i++) {
    // loop body
}

// 02.Code the first line of a for loop with the usual counter name, usual starting value, and usual increment. Run it 12 times using <= to specify how many loops.
for (var i = 0; i <= 12; i++) {
    // loop body
}

// 03.What are the 5 characters missing from this code, excluding any spaces that are missing? Type them in order, with no spaces or commas between them.
for (var i = 0; i <= 4; i++) {
    // loop body
}
// Missing characters: (;;)

// 04.Code the first line of a for loop with a counter name that's not i. Code the usual starting value and usual increment. Run it 100 times using < to specify how many loops.
for (var counter = 0; counter < 100; counter++) {
    // loop body
}

// 05.Code the first line of a for loop with the usual counter and the usual starting value. Run it 3 times using > to specify how many loops. Decrement it with each iteration.
for (var i = 3; i > 0; i--) {
    // loop body
}

// 06.The statement assigns the number of elements in the array to the variable.
var arrayLength1 = array.length;

// 07.Set a variable named “flag” with an initial Boolean value of your choice.
var flag = true;

// 08.Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing. Limit the number of loops by the number of elements in the array pets.
var pets = ["dog", "cat", "ox", "duck", "frog"];
for (var i = 0; i < pets.length; i++) {
    // loop body
}

// 09.Coding Exercise: Set a for loop to run 10 iterations. On the second iteration, display the counter in an alert. (It should be 1.) Break out of the loop.
for (var i = 0; i < 10; i++) {
    if (i === 1) {
        alert(i);
        break;
    }
}

// 10.Create an array which contains user names. Code a prompt with the message "Enter first name". The user's response is assigned to firstName. Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing. Limit the number of loops by the number of elements in the array user names. Code an if statement that tests the presence of (user name) in an array. If user name matches, alert "Enter". if not then alert "Please write correct user name".
var userNames = ["A.Saboor", "A.Saim", "A.Fashi"];
var fstName = prompt("Enter first name");
for (var i = 0; i < userNames.length; i++) {
    if (fstName === userNames[i]) {
        alert("Enter");
        break;
    } else if (i === userNames.length - 1) {
        alert("Please write correct user name");
    }
}

// 11.Complete this code to display an alert if a match isn't found.
var matchFound = false;
for (var i = 0; i < list.length; i++) {
    if (userInput === list[i]) {
        alert("Match found");
        matchFound = true;
        break;
    }
}
if (!matchFound) {
    alert("No match found");
}

// 12.var firstArr = ["a", "b", "c", "d", "e", "f"]; var secondArr = [1, 2, 3, 4, 5, 6]; Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing. Limit the number of loops by the number of elements in the array firstArr. In the scope of the main loop, code the nested loop. Limit the number of nested loops by the number of elements in the array secondArr. After that concatenate both loops. Expected Output: a1 a2 a3 a4 ... f6
var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];

for (var i = 0; i < firstArr.length; i++) {
    for (var j = 0; j < secondArr.length; j++) {
        console.log(firstArr[i] + secondArr[j]);
    }
}