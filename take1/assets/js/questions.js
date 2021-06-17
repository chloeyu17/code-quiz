// A file containing all of the questions to be loaded

var questions = [
    {
        question: 'Which of the following is not a variable type?',
        answers: [
            { text: 'boolean', correct: false},
            { text: 'string', correct: false},
            { text: 'number', correct: false},
            { text: 'class', correct: true},
        ]
    },

    {
        question: 'What is the difference between == and ===?',
        answers: [
            { text: '== is strict equality while === is loose equality', correct: false},
            { text: '== is loose equality while === is strict equality', correct: true},
            { text: '= is strict equality while == is loose equality', correct: false},
            { text: 'We only use =, there is no such thing as == or ===', correct: false},
        ]
    },

    {
        question: 'Which of the following is a plausible javascript tag in an HTML document?',
        answers: [
            { text: '<link rel="stylesheet" type="text/css" href="./assets/css/style.css>', correct: false},
            { text: '<link rel="javascript" type="javascript" href="./assets/js/script.js>', correct: false},
            { text: '<script src="assets/js/script.js></script>', correct: true},
            { text: '<div class="script" id="javascript"></div>', correct: false}
        ]
    },

    {
        question: 'What is the difference between a var and a const?',
        answers: [
            { text: 'There is no difference', correct: false},
            { text: 'A var cannot be reassigned but a const can be', correct: false},
            { text: 'A const cannot have its value reassigned, but a var can', correct: true},
            { text: 'One is used in Javascript and the other is used in CSS', correct: false}
        ]
    }
]