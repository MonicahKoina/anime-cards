let anime = [
    {
        pic:"one piece.jpg",
        title:'One Piece',
        genre: "Adventure, Fantasy, Science fiction",
        icon:"<i class='bx bx-like' ></i>",
    },
    {
        pic:"bleach.jpeg",
        title: "Bleach",
        genre: "Super natural fantasy, comedy",
        icon:"<i class='bx bx-like' ></i>",
    },
    {
        
            pic:"naruto.jpg",
            title: "Naruto",
            genre: "Adventure, Fantasy, Martial arts",
            icon:"<i class='bx bx-like' ></i>",
        
    }
];
function displayanime({pic, title, genre, icon}){
    return `
    <div class="animecombo">
    <img src="${pic}" alt="$title">
    <h2>${title}</h2>
    <p>${genre}</p>
    <div class="like">
    <i class='bx bx-like' ></i>
    <span class="increment">
    
    </span>
    </div>
    </div>
    `
}
let cardContainer = document.getElementById("card-container");
let anime_card = anime.map((animefunc)=>{
    return displayanime(animefunc);
}).join('');
cardContainer.innerHTML = anime_card;

let likes = document.getElementsByClassName("like");
for(let like of likes){
    let increment2 = like.querySelector("span");
    increment2.innerHTML=0;
    let icon2= like.querySelector("i")
    like.addEventListener("click", changeIcon);
    function changeIcon(){
        if(icon2.classList.contains("bx-like")){
            icon2.setAttribute("class", "bx bxs-like")
            increment2.innerHTML++;
        }else{
            icon2.setAttribute("class", "bx bx-like")
            increment2.innerHTML--;
        }
    }
}