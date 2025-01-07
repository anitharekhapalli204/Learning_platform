const questions = {
    C: [
        { question: "What is the size of an int in C?", options: ["A. 2", "B. 4", "C. 8", "D. 16"], answer: "B. 4" },
        { question: "How do you declare a pointer in C?", options: ["A. int *p", "B. int p*", "C. p* int", "D. pointer p"], answer: "A. int *p" },
        { question: "What is the difference between malloc() and calloc() in C?", options: [
            "A. malloc() allocates memory with zeros, calloc() allocates uninitialized memory",
            "B. malloc() allocates uninitialized memory, calloc() allocates memory with zeros",
            "C. malloc() and calloc() are the same",
            "D. malloc() allocates memory, calloc() allocates memory and initializes it"
        ], answer: "B. malloc() allocates uninitialized memory, calloc() allocates memory with zeros" },
        { question: "Which function is used to close a file in C?", options: ["A. close()", "B. fclose()", "C. file_close()", "D. closefile()"], answer: "B. fclose()" },
        { question: "Which of the following is a correct way to initialize an array in C?", options: ["A. int arr[] = {1, 2, 3}", "B. int arr[3] = {1, 2, 3}", "C. int arr(3) = {1, 2, 3}", "D. Both A and B"], answer: "D. Both A and B" },
        { question: "What is the default value of a static variable in C?", options: ["A. 0", "B. NULL", "C. Undefined", "D. Random"], answer: "A. 0" },
        { question: "What does the 'sizeof' operator do in C?", options: ["A. Returns the size of a data type", "B. Returns the address of a variable", "C. Returns the length of a string", "D. Returns the size of an array"], answer: "A. Returns the size of a data type" },
        { question: "Which of the following is the correct way to define a constant in C?", options: ["A. #define CONSTANT 10", "B. const int CONSTANT = 10", "C. int CONSTANT = 10;", "D. Both A and B"], answer: "D. Both A and B" },
        { question: "What is the correct syntax for a while loop in C?", options: ["A. while(condition) { statements; }", "B. while (condition): { statements; }", "C. while condition do { statements; }", "D. while condition { statements; }"], answer: "A. while(condition) { statements; }" },
        { question: "What is the purpose of 'break' statement in C?", options: ["A. To exit from a loop", "B. To stop the execution of a program", "C. To exit from a function", "D. To exit from an if statement"], answer: "A. To exit from a loop" }
    ],
    "C++": [
        { question: "What is the use of 'new' keyword in C++?", options: ["A. Allocates memory", "B. Deallocates memory", "C. Creates an object", "D. Both Allocates and Deallocates memory"], answer: "A. Allocates memory" },
        { question: "What is the difference between 'public' and 'private' access modifiers?", options: [
            "A. Public members are accessible anywhere, private members are accessible within the class", 
            "B. Public members are only accessible within the class, private members are accessible anywhere",
            "C. Both public and private members are accessible anywhere",
            "D. None of the above"
        ], answer: "A. Public members are accessible anywhere, private members are accessible within the class" },
        { question: "What is a constructor in C++?", options: ["A. Constructor initializes an object", "B. Constructor is used to destroy objects", "C. Constructor is used to allocate memory", "D. Constructor is used to print objects"], answer: "A. Constructor initializes an object" },
        { question: "Which operator is used for dynamic memory allocation in C++?", options: ["A. malloc", "B. new", "C. calloc", "D. free"], answer: "B. new" },
        { question: "What is the difference between 'class' and 'struct' in C++?", options: ["A. Class members are private by default, struct members are public by default", "B. Class members are public by default, struct members are private by default", "C. There is no difference", "D. Class can have only functions, struct can have only data"], answer: "A. Class members are private by default, struct members are public by default" },
        { question: "Which of the following is the correct way to create an object of a class in C++?", options: ["A. MyClass object;", "B. object MyClass;", "C. MyClass newObject;", "D. object newObject;"], answer: "A. MyClass object;" },
        { question: "Which function is used to dynamically allocate memory in C++?", options: ["A. malloc()", "B. alloc()", "C. new()", "D. calloc()"], answer: "C. new()" },
        { question: "Which method is used to deallocate memory in C++?", options: ["A. delete", "B. free", "C. dealloc", "D. delete[]"], answer: "A. delete" },
        { question: "What is the correct way to initialize an object in C++?", options: ["A. MyClass object();", "B. MyClass object;", "C. MyClass object = {}; ", "D. MyClass object{};"], answer: "D. MyClass object{};" },
        { question: "What is the use of 'virtual' keyword in C++?", options: ["A. Used to declare a virtual function", "B. Used for declaring classes", "C. Used for dynamic memory allocation", "D. Used to define pointers"], answer: "A. Used to declare a virtual function" }
    ],
    Java: [
        { question: "What is the size of an int in Java?", options: ["A. 2", "B. 4", "C. 8", "D. 16"], answer: "B. 4" },
        { question: "How do you declare a class in Java?", options: ["A. class MyClass", "B. class: MyClass", "C. class(MyClass)", "D. MyClass class"], answer: "A. class MyClass" },
        { question: "What is the purpose of the 'final' keyword in Java?", options: ["A. Makes a class immutable", "B. Prevents a method from being overridden", "C. Makes a variable constant", "D. All of the above"], answer: "D. All of the above" },
        { question: "What is the difference between '==' and 'equals()' in Java?", options: ["A. '==' compares memory address, 'equals()' compares object values", "B. Both are the same", "C. '==' compares values, 'equals()' compares memory address", "D. Neither is used for comparison"], answer: "A. '==' compares memory address, 'equals()' compares object values" },
        { question: "How do you define an array in Java?", options: ["A. int[] arr", "B. int arr[]", "C. array int[]", "D. arr int[]"], answer: "B. int arr[]" },
        { question: "What does 'super' keyword do in Java?", options: ["A. Refers to parent class", "B. Refers to current class", "C. Refers to child class", "D. Used to access methods in current class"], answer: "A. Refers to parent class" },
        { question: "Which method is used to start a thread in Java?", options: ["A. run()", "B. start()", "C. execute()", "D. invoke()"], answer: "B. start()" },
        { question: "What is the default value of an instance variable in Java?", options: ["A. 0", "B. null", "C. undefined", "D. Depends on the type"], answer: "D. Depends on the type" },
        { question: "Which of the following is the correct way to import a package in Java?", options: ["A. import java.util.*;", "B. package java.util;", "C. use java.util;", "D. import java.util"], answer: "A. import java.util.*;" },
        { question: "Which of the following is the correct syntax for a for-each loop in Java?", options: ["A. for (type var : array) { }", "B. for (var : array) { }", "C. foreach (var : array) { }", "D. for (type var in array) { }"], answer: "A. for (type var : array) { }" }
    ],
    HTML: [
        { question: "What does HTML stand for?", options: ["A. Hyperlinks and Text Markup Language", "B. Hyper Text Markup Language", "C. Home Tool Markup Language", "D. Hyper Tool Markup Language"], answer: "B. Hyper Text Markup Language" },
        { question: "Which HTML tag is used to define an internal style sheet?", options: ["A. <css>", "B. <script>", "C. <style>", "D. <stylesheet>"], answer: "C. <style>" },
        { question: "What is the correct HTML element for the largest heading?", options: ["A. <head>", "B. <h1>", "C. <header>", "D. <h6>"], answer: "B. <h1>" },
        { question: "Which HTML element is used to create a hyperlink?", options: ["A. <a>", "B. <link>", "C. <href>", "D. <hyperlink>"], answer: "A. <a>" },
        { question: "What is the correct way to add an image in HTML?", options: ["A. <img src='image.jpg'>", "B. <image src='image.jpg'>", "C. <img link='image.jpg'>", "D. <picture src='image.jpg'>"], answer: "A. <img src='image.jpg'>" },
        { question: "How can you create an unordered list in HTML?", options: ["A. <ul>", "B. <ol>", "C. <li>", "D. <list>"], answer: "A. <ul>" },
        { question: "Which tag is used to create a checkbox in HTML?", options: ["A. <checkbox>", "B. <check>", "C. <input type='checkbox'>", "D. <box>"], answer: "C. <input type='checkbox'>" },
        { question: "What is the purpose of the <br> tag in HTML?", options: ["A. To add a line break", "B. To make text bold", "C. To create a border", "D. To insert a blank space"], answer: "A. To add a line break" },
        { question: "Which attribute is used to specify the destination of a hyperlink?", options: ["A. href", "B. src", "C. link", "D. url"], answer: "A. href" },
        { question: "How do you insert a comment in HTML?", options: ["A. <!-- This is a comment -->", "B. // This is a comment", "C. /* This is a comment */", "D. <comment> This is a comment </comment>"], answer: "A. <!-- This is a comment -->" }
    ],
    CSS: [
        { question: "What does the 'float' property do in CSS?", options: ["A. It floats the element to the left or right", "B. It floats the background color", "C. It aligns text to the left", "D. It moves the element up or down"], answer: "A. It floats the element to the left or right" },
        { question: "How do you change the background color of an element in CSS?", options: ["A. background-color: red;", "B. color: red;", "C. background: red;", "D. Both A and C"], answer: "D. Both A and C" },
        { question: "What does 'position: absolute' do in CSS?", options: ["A. Positions an element relative to its nearest positioned ancestor", "B. Positions an element in the top-left corner", "C. Positions an element relative to the screen", "D. Positions an element at the bottom"], answer: "A. Positions an element relative to its nearest positioned ancestor" },
        { question: "How do you select an element with a class in CSS?", options: ["A. #class", "B. .class", "C. *class", "D. class"], answer: "B. .class" },
        { question: "Which property is used to change the font of an element in CSS?", options: ["A. font-family", "B. font-size", "C. font-style", "D. font"], answer: "A. font-family" }
    ],
    JavaScript: [
        { question: "Which type of JavaScript language is JavaScript?", options: ["A. Object-Oriented", "B. Object-Based", "C. Assembly-language", "D. High-level"], answer: "B. Object-Based" },
        { question: "Which method is used to print messages in the browser’s console?", options: ["A. console.print()", "B. console.output()", "C. console.log()", "D. console.write()"], answer: "C. console.log()" },
        { question: "Which of the following keywords is used to define a variable in JavaScript?", options: ["A. var", "B. let", "C. const", "D. All of the above"], answer: "D. All of the above" },
        { question: "What is the correct way to write an array in JavaScript?", options: [
            "A. var colors = 'red', 'green', 'blue';", 
            "B. var colors = ['red', 'green', 'blue'];", 
            "C. var colors = (1:'red', 2:'green', 3:'blue');", 
            "D. var colors = '1=red, 2=green, 3=blue';"
        ], answer: "B. var colors = ['red', 'green', 'blue'];" },
        { question: "What will `typeof null` return in JavaScript?", options: ["A. 'null'", "B. 'undefined'", "C. 'object'", "D. 'number'"], answer: "C. 'object'" },
        { question: "What does the `isNaN()` function do in JavaScript?", options: [
            "A. Checks if a value is not a number", 
            "B. Checks if a value is null", 
            "C. Checks if a value is undefined", 
            "D. Checks if a value is NaN"
        ], answer: "A. Checks if a value is not a number" },
        { question: "Which of the following methods can be used to convert JSON data to a JavaScript object?", options: ["A. JSON.stringify()", "B. JSON.parse()", "C. JSON.objectify()", "D. JSON.convert()"], answer: "B. JSON.parse()" },
        { question: "Which symbol is used to add comments in JavaScript?", options: ["A. //", "B. <!-- -->", "C. #", "D. /* */"], answer: "A. //" },
        { question: "What does the `===` operator do in JavaScript?", options: [
            "A. Compares only values", 
            "B. Compares values and types", 
            "C. Assigns a value", 
            "D. Compares strings"
        ], answer: "B. Compares values and types" },
        { question: "What will `console.log(1 + '2');` output in JavaScript?", options: ["A. 12", "B. 3", "C. Error", "D. Undefined"], answer: "A. 12" }
    ],
};
       



// Function to start quiz based on selected language
function startQuiz(language) {
    selectedLanguage = language;
    userAnswers = [];
    correctAnswers = questions[language].map(q => q.answer);

    document.querySelector('.language-selection').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('result-container').style.display = 'none';

    const quizTitle = document.getElementById('quiz-title');
    quizTitle.innerText = `Quiz on ${language}`;
    
    const quizForm = document.getElementById('quiz-form');
    quizForm.innerHTML = '';  // Clear previous questions

    questions[language].forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `
            <p><strong>Question ${index + 1}:</strong> ${q.question}</p>
            <div class="options">
                ${q.options.map((option, i) => `
                    <input type="radio" id="q${index}-${i}" name="q${index}" value="${option}" />
                    <label for="q${index}-${i}">${option}</label><br />
                `).join('')}
            </div>
        `;
        quizForm.appendChild(questionElement);
    });
}

// Function to submit quiz and show result
function submitQuiz() {
    let score = 0;

    questions[selectedLanguage].forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedOption && selectedOption.value.toLowerCase() === correctAnswers[index].toLowerCase()) {
            score++;
        }
    });

    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    
    const resultText = document.getElementById('result-text');
    resultText.innerHTML = `You got ${score} out of 10 correct.<br />${score >= 5 ? 'Congratulations! You passed the quiz.' : 'Sorry! You didn\'t pass the quiz.'}`;
}


