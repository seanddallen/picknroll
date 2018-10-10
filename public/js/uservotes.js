// let favorite = document.querySelectorAll('.favorite');
let vote = document.querySelectorAll('button.vote');

//Toggle Favorite Icon
// for(let i = 0; i<favorite.length; i++){
//   favorite[i].addEventListener('click', (e)=>{
//     if (e.target.classList.contains("grey")) {
//       e.target.classList.remove("grey");
//       e.target.classList.add("orange");
//     } else {
//       e.target.classList.remove("orange");
//       e.target.classList.add("grey");
//     }
//   });
// }

for(let i = 0; i<vote.length; i++){
  vote[i].addEventListener('click', (e)=>{
    if (e.target.classList.contains("grey")) {
      e.target.classList.remove("grey");
      e.target.classList.add("orange");
    } else {
      e.target.classList.remove("orange");
      e.target.classList.add("grey");
    }
  });
}
//Toggle Votes Icon
//if
