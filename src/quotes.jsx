import React, { useState } from 'react';

function Quotes() {
    const quotes = [
        "Be the change that you wish to see in the world. - Mahatma Gandhi",
        "Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein",
        "You will face many defeats in life, but never let yourself be defeated. - Maya Angelou",
        "It always seems impossible until it is done. - Nelson Mandela",
        "Go confidently in the direction of your dreams. Live the life you have imagined. - Henry David Thoreau",
        "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
        "Be yourself; everyone else is already taken. - Oscar Wilde",
        "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
        "It does not matter how slowly you go as long as you do not stop. - Confucius",
        "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson"
    ];

    const [quote, setQuote] = useState(quotes[0]);

    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    };

    return (
        <div>
            <p>Random Quote: {quote}</p>
            <button onClick={getRandomQuote}>Get Random Quote</button>
        </div>
    );
}

export default Quotes;