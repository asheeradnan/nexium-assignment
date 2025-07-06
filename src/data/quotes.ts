// data/quotes.ts
export interface Quote {
  topic: string;
  quotes: string[];
}

export const quotes: Quote[] = [
  {
    topic: "motivation",
    quotes: [
      "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
      "Push yourself, because no one else is going to do it for you.",
      "Success doesn't just find you. You have to go out and get it.",
      "The only impossible journey is the one you never begin.",
      "Your limitation—it's only your imagination."
    ]
  },
  {
    topic: "life",
    quotes: [
      "Life is what happens when you're busy making other plans.",
      "The purpose of our lives is to be happy.",
      "Get busy living or get busy dying.",
      "Life is really simple, but we insist on making it complicated.",
      "In the end, it's not the years in your life that count. It's the life in your years."
    ]
  },
  {
    topic: "success",
    quotes: [
      "Success is not final; failure is not fatal: it is the courage to continue that counts.",
      "Don't be afraid to give up the good to go for the great.",
      "Hard work beats talent when talent doesn't work hard.",
      "The way to get started is to quit talking and begin doing.",
      "Success is walking from failure to failure with no loss of enthusiasm."
    ]
  },
  {
    topic: "wisdom",
    quotes: [
      "The only true wisdom is in knowing you know nothing.",
      "It is better to remain silent at the risk of being thought a fool than to talk and remove all doubt of it.",
      "The fool doth think he is wise, but the wise man knows himself to be a fool.",
      "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
      "A wise man learns more from his enemies than a fool from his friends."
    ]
  },
  {
    topic: "dreams",
    quotes: [
      "All our dreams can come true, if we have the courage to pursue them.",
      "The future belongs to those who believe in the beauty of their dreams.",
      "A dream doesn't become reality through magic; it takes sweat, determination and hard work.",
      "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
      "Dreams don't work unless you do."
    ]
  }
];
