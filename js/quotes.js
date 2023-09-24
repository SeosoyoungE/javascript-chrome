const quotes =[
    {quote: "창피함이 없으면 성공도 없다."}
]

const quote = document.querySelector("#quote span:first-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerHTML=todaysQuote.quote;