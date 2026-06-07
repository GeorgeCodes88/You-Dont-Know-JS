// statements are a group of words numbers and operators that preform a spefic task the task is called a statement
// a = b + 5;   a and b are variables variables store values inside them 5 is a literal value + is an operator = is an assignment operator
// the above is an example of a statement
// most statements end with a semicolon

// expressions are a referance to a value a set of variables and operators

//c = a + 2;

// 2 is a literal value expression
// a is a variable expression
// a + 2 is a arithmetic expression
// c = a + 2 is an assignment expression

// Statements like a = b * 2 are helpful for developers when reading and writing but are not actually in a form the computer can directlyunderstand
// So a special utility on the computer (either an interpreter or a compiler) is used to translate the code you write into commands a computer can understand

// the process of translating source code into machine code is called compilation
// the program that does this is called a compiler
// the output of the compiler is called object code
// the process of converting object code into machine code is called linking
// the program that does this is called a linker
// the final output is an executable file

// an interpreter is a program that directly executes the instructions in the source code without compiling it into machine code first
// the process of executing source code with an interpreter is called interpretation
// the advantage of using an interpreter is that it allows for faster development and testing as you can run your code immediately without waiting for a compilation step
// the disadvantage is that interpreted code can be slower than compiled code as the interpreter has to translate the code on the fly each time it is executed

// the translation of commands done from top to bottom line by line everytime the program is run is called interpreting the code
// the translation done ahead of time before the program runs is called compiling the code

// a = 21;

// b = a * 2;

// consolelog(b);  outputs the value of b to the console
// alert(b); displays a pop up box with the value of b

// age = prompt("What is your age?");  prompt is a function that displays a dialog box that prompts the user for input
// // prompt() returns a string
// consolelog(age);

// Operators in JS

// assignment operator = assigns a value to a variable

// arithmetic operators + (addition) - (subtraction) * (multiplication) / (division)

// increment decrement operators ++ (increment) -- (decrement) ie a++ same as a = a + 1

// comparison operators == (equal to) != (not equal to) > (greater than) < (less than) >= (greater than or equal to) <= (less than or equal to)

// logical operators && (AND) || (OR) ! (NOT)

// equality operators == (loose equality) !== (loose inequality) checks values only  == (strict equality) !== (strict inequality) checks for both value and type

// Data Types in JS

// primitive data types: string number boolean null undefined symbol bigint

// string is a sequence of characters enclosed in single ('') or double("") quotes

// number is a numeric value can be an integer(1, 5, 21, 0, -12) or a floating point number(314, -05) but unlike other programming languages JS does not have a separate data type for integers and floating point numbers they are all considered as number data type

// boolean is a logical data type that can only have two values: true or false

// null is a special value that represents the absence of any object value it is often used to indicate that a variable has no value or that an object property does not exist

// undefined is a special value that represents the absence of a value it is often used to indicate that a variable has been declared but has not been assigned a value

// symbol is a unique and immutable data type that can be used as an identifier for object properties it is often used to create private properties in objects

// bigint is a numeric data type that can represent integers with arbitrary precision it is used to represent numbers that are too large to be represented as a number data type

// non-primitive data types: object array function

// object is a collection of key-value pairs where the keys are strings and the values can be any data type including other objects

// array is used to store a list of values the values can be of any data type and are accessed using an index

// function is a block of code that can be defined once and executed multiple times it can take parameters and return a value

// to convert data types in JS you can use the following functions:

// String() converts a value to a string
// Number() converts a value to a number
// Boolean() converts a value to a boolean
// Symbol() converts a value to a symbol
// BigInt() converts a value to a bigint

// commenting ettiquette
// comments should explain why not how, what or when
// comments should be made for the sake of other developers and your future self
// comments should not be written every line of code
