const quotes =[
    {quote: "삶이 있는 한 희망은 있다.",
author:"키케로"},
{quote: "먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에",
author:"엘사 맥스웰"},
{quote: "먼저핀꽃은 먼저진다 남보다 먼저 공을 세우려고 조급히 서둘것이 아니다.",
author:"채근담"},
{quote: "절대 어제를 후회하지 마라. 인생은 오늘의 내 안에 있고 내일은 스스로 만드는것이다.",
author:"L론허바드"},
{quote: "행복은 습관이다,그것을 몸에 지니라.",
author:"허버드"}
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerHTML=todaysQuote.quote;
author.innerHTML=todaysQuote.author;