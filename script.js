// Project Objectives
// Build a message generator
// use Git version control
// Use command line
// develop locally on 5my computer

const quotes = [
  "I think people who vibrate at the same frequency, vibrate toward each other. They call it - in science - sympathetic vibrations. - Erykah Badu",
  "Behind every great man is a woman rolling her eyes. - Jim Carrey",
  "Take a lover who looks at you like maybe you are a bourbon biscuit. ― Frida Kahlo",
  "Luck is what happens when preparation meets opportunity.",
  "True friends are like stars; you can only recognize them when it's dark around you. - Bob Marley",
  "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",
  "Don't expect people to respect you for what you are planning to do. - Henry Ford",
  "The soul becomes dyed with the color of its thoughts - Markus Aurelius",
  "Wu-Tang is for the children. - Ol'Dirty Bastard",
  "Life is like one big Mardi Gras. But instead of showing your boobs, show people your brain, and if they like what they see, you’ll have more beads than you know what to do with. —Ellen DeGeneres",
];

const newQuote = () => {
  let randomNumber = Math.floor(Math.random() * 10);
  document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
};
