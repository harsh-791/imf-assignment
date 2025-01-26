function generateMissionProbability() {
  return Math.floor(Math.random() * 100) + 1; // 1-100%
}

module.exports = {
  generateCodename,
  generateMissionProbability,
};
