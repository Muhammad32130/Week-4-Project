
const val = document.querySelector('.val')
async function main(){
    
    const movies = await fetch("https://www.omdbapi.com/?apikey=180f5a56&s=american")
     const movie = await movies.json();
    const moviess = movie.Search.slice(0,6)
    const movieEl = document.querySelector(".movies")
    movieEl.innerHTML=moviess.map((post)=> showMovies(post)).join(' ')
    console.log(movie)
}
setTimeout(() => {
    main()
}, 1000);
function showMovies(post){
    function showimg(){
        if(post.Poster !== "N/A"){
            return `<div class="movies__contain">
            <div class="movies__row">
            <img class="img__three" src=${post.Poster} alt="">
            <h3>${post.Title}</h3>
            <p></p>
            </div>
            </div>`
            
        }
       

    }
    
    
    return showimg()
}

async function search(event){
    const search = event.target.value
    const Default= 'a'
    const movies = await fetch(`https://www.omdbapi.com/?apikey=180f5a56&s=${search || Default}`)
    const movie = await movies.json();
    const moviess = movie.Search
    const movieEl = document.querySelector(".movies")
    movieEl.innerHTML=moviess.map((post)=> showMovies(post)).join('')
    localStorage.setItem("search", search)    
}



async function slider(event){
    const search = localStorage.getItem("search")
    id = event.target.value
    val.innerHTML = id
        const Default= 'america'
        const movies = await fetch(`https://www.omdbapi.com/?apikey=180f5a56&y=${id}&s=${search || Default}`)
        const movie = await movies.json();
        const moviess = movie.Search
        const movieEl = document.querySelector(".movies")
        movieEl.innerHTML=moviess.map((post)=> showMovies(post)).join('')
        localStorage.setItem("id", id)
    }

    async function dropDown(event){
        const search = localStorage.getItem("search")
        const id = localStorage.getItem("id")
        const val = event.target.value
        const Default= 'america'
        const movies = await fetch(`https://www.omdbapi.com/?apikey=180f5a56&y=${id}&s=${search || Default}&type=${val}`)
        const movie = await movies.json();
        const moviess = movie.Search
        const movieEl = document.querySelector(".movies")
        movieEl.innerHTML=moviess.map((post)=> showMovies(post)).join('')
        console.log(moviess)
    }





    window.localStorage.clear();

