const QUOTEBANK = [
    {
        quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
        author: "Thomas Edison"
      },
      {
        quote: "You can observe a lot just by watching.",
        author: "Yogi Berra"
      },
      {
        quote: "A house divided against itself cannot stand.",
        author: "Abraham Lincoln"
      },
      {
        quote: "Difficulties increase the nearer we get to the goal.",
        author: "Johann Wolfgang von Goethe"
      },
      {
        quote: "Fate is in your hands and no one elses",
        author: "Byron Pulsifer"
      },
      {
        quote: "Be the chief but never the lord.",
        author: "Lao Tzu"
      },
      {
        quote: "Nothing happens unless first we dream.",
        author: "Carl Sandburg"
      },
      {
        quote: "Well begun is half done.",
        author: "Aristotle"
      },
      {
        quote: "Life is a learning experience, only if you learn.",
        author: "Yogi Berra"
      },
      {
        quote: "Self-complacency is fatal to progress.",
        author: "Margaret Sangster"
      },
      {
        quote: "Peace comes from within. Do not seek it without.",
        author: "Buddha"
      },
      {
        quote: "What you give is what you get.",
        author: "Byron Pulsifer"
      },
      {
        quote: "We can only learn to love by loving.",
        author: "Iris Murdoch"
      },
      {
        quote: "Life is change. Growth is optional. Choose wisely.",
        author: "Karen Clark"
      },
      {
        quote: "You'll see it when you believe it.",
        author: "Wayne Dyer"
      },
      {
        quote: "Today is the tomorrow we worried about yesterday.",
        author: null
      },
      {
        quote: "It's easier to see the mistakes on someone else's paper.",
        author: null
      },
      {
        quote: "Every man dies. Not every man really lives.",
        author: null
      },
      {
        quote: "To lead people walk behind them.",
        author: "Lao Tzu"
      },
      {
        quote: "Having nothing, nothing can he lose.",
        author: "William Shakespeare"
      },
      {
        quote: "Trouble is only opportunity in work clothes.",
        author: "Henry J. Kaiser"
      },
      {
        quote: "A rolling stone gathers no moss.",
        author: "Publilius Syrus"
      }
    ]
    window.onload = init;
    function init() {
        generateQuote()
    }
    function generateQuote() {
        let quoteSize = QUOTEBANK.length;
        let randomIndex = Math.floor(Math.random() * quoteSize);
        let randomQuoteData = QUOTEBANK[randomIndex];

        
        let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&amp;text=%22"

        // Add the quote
        let quoteInApiFormat = randomQuoteData.quote.replace(/ /g, "%20");
        
            twitterLink += '"' + quoteInApiFormat
           
        // Add the author
        let authorInApiFormat = randomQuoteData.author.replace(/ /g, "%20");
            twitterLink += '" - ' + authorInApiFormat

        document.getElementById("tweet-quote").href = twitterLink;
        document.getElementById("text").innerText = randomQuoteData.quote;
        document.getElementById("author").innerText = randomQuoteData.author;
    }