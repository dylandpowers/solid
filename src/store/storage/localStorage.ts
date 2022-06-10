// scores will be sorted in decreasing order
export function getSortedScores(): Array<number> {
  const items = localStorage.getItem('scores');
  if (!items) {
    return [];
  }

  return items.split(",").map(Number).sort((a, b) => b - a);
}

export function addScore(score: number) {
  const items = localStorage.getItem('scores');
  if (!items) {
    localStorage.setItem('scores', [score].toString());
  } else {
    const parsed = items.split(',').map(Number);
    parsed.push(score);
    localStorage.setItem('scores', parsed.toString());
  }
}