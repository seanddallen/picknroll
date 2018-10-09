let favorite = document.getElementById('favorite');
let vote = document.getElementById('vote');

//Toggle Favorite Icon
favorite.addEventListener('click', (e)=>{
  if (favorite.classList.contains("grey")) {
    favorite.classList.remove("grey");
    favorite.classList.add("orange");
  } else {
    favorite.classList.remove("orange");
    favorite.classList.add("grey");
  }
});


//Toggle Votes Icon
vote.addEventListener('click', (e)=>{
  if (vote.classList.contains("grey")) {
    vote.classList.remove("grey");
    vote.classList.add("orange");
  } else {
    vote.classList.remove("orange");
    vote.classList.add("grey");
  }
});
