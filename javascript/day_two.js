const $name = prompt("Whats your name?");
const age = prompt("How old are you?");
const language = prompt("What programming language do you study?");
const resume = "Hi " + $name + ", you have " + age + " years old and already learning " + language + "!";

alert(resume)

function likeLanguage(language) {
    const question = prompt("Do you like to study " + language + "? Reply with number 1 to yes or 2 to no.");
    return question;
}

function toDoQuestion() {
    switch (likeLanguage(language)) {
        case '1':
            alert("Very good! Keep studying and you will be very success.");
            break;
        case '2':
            alert("Oh what a shame... Have you tried learning other languages?");
            break;
        default:
            alert("Please enter a valid value?");
            toDoQuestion();
    }
}

toDoQuestion();