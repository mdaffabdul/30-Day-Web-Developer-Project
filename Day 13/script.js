const quotes = [
    { 
        text: "Talk is cheap. Show me the code.", 
        author: "Linus Torvalds" 
    },
    { 
        text: "Code is like humor. When you have to explain it, it’s bad.", 
        author: "Cory House" 
    },
    { 
        text: "First, solve the problem. Then, write the code.", 
        author: "John Johnson" 
    },
    { 
        text: "Experience is the name everyone gives to their mistakes.", 
        author: "Oscar Wilde" 
    },
    { 
        text: "Java is to JavaScript what car is to Carpet.", 
        author: "Chris Heilmann" 
    },
    {
        text: "Simplicity is the soul of efficiency.",
        author: "Austin Freeman"
    }
];

    const createQuote = () => {
        const textDisplay = document.getElementById('quote-text');
        const authorDisplay = document.getElementById('quote-author');

        const randomIndex = Math.floor(Math.random() * quotes.length);

        const selectedQuote = quotes[randomIndex];

        textDisplay.innerText = `"${selectedQuote.text}"`;
        authorDisplay.innerText = `- ${selectedQuote.author}`;
    };