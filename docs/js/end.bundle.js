!function(){const e=document.getElementById("username"),t=document.getElementById("saveScoreBtn"),o=document.getElementById("finalScore"),n=localStorage.getItem("mostRecentScore"),c=JSON.parse(localStorage.getItem("highScores"))||[];o.innerText=n,e.addEventListener("keyup",(()=>{t.disabled=!e.value})),saveHighScore=t=>{t.preventDefault();const o={score:n,name:e.value};c.push(o),c.sort(((e,t)=>t.score-e.score)),c.splice(5),localStorage.setItem("highScores",JSON.stringify(c)),window.location.assign("/")}}();