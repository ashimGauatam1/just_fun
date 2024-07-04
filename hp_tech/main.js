let a = prompt("Enter a number");
let b = prompt("Enter another number");
let s = prompt("Enter a mathematical operation you want to perform\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division");

switch (parseInt(s)) {
    case 1:
        document.write("Addition of " + a + " and " + b + " is " + (parseInt(a) + parseInt(b)));
        break;
    case 2:
        document.write("Subtraction of " + a + " and " + b + " is " + (parseInt(a) - parseInt(b)));
        break;
    case 3:
        document.write("Multiplication of " + a + " and " + b + " is " + (parseInt(a) * parseInt(b)));
        break;
    case 4:
        document.write("Division of " + a + " and " + b + " is " + (parseInt(a) / parseInt(b)));
        break;
    default:
        document.write(s + " is an invalid choice. Please choose a number between 1 to 4.");
        break;
}

document.write("<br><br><br>Thank you for using our calculator. Visit again !!!!!");
