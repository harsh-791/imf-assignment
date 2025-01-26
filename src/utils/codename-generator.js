const adjectives = ['Silent', 'Shadow', 'Phantom', 'Stealth', 'Midnight', 'Crystal', 'Golden', 'Iron'];
const nouns = ['Eagle', 'Wolf', 'Serpent', 'Dragon', 'Phoenix', 'Hawk', 'Tiger', 'Panther'];

function generateCodename() {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return `The ${adjective} ${noun}`;
}

function generateMissionSuccessProbability() {
  return Math.floor(Math.random() * (95 - 60) + 60);
}

function generateSelfDestructCode() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

module.exports = {
  generateCodename,
  generateMissionSuccessProbability,
  generateSelfDestructCode,
}; 