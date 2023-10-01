const highScoresList = document.getElementById('highScoresList'),
      highScores = JSON.parse(localStorage.getItem('highScores')) || [];

highScoresList.innerHTML = highScores
    .map(score => {
        return `<li class="high-score">${score.name}-${score.score}</li>`;
    })
    .join('');