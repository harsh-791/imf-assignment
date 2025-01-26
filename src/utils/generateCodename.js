// generateCodename.js
const codenames = [
  "The Nightingale",
  "The Kraken",
  "Phantom Shadow",
  "Silent Strike",
  "Ghost Protocol",
  "Crimson Edge",
];

function generateCodename() {
  return codenames[Math.floor(Math.random() * codenames.length)];
}
