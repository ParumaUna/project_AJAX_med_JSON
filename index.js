const searchbar = document.getElementById('movie-input');
const click = document.getElementById('butn');
const titleDiv =document.getElementById('title')
console.log(searchbar.value);

click.addEventListener('click',async function(e){
    e.preventDefault;

    try {
        const response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=c51128ab&s='+ searchbar.value);
        if(response.ok === false) {
            throw new Error(`HTTP error code: ${response.status}, HTTP error message: ${response.statusText}`);
        } 
        const data = await response.json();
        console.log(data);


        let movies = data.Search;
        for(let movie of movies){
            console.log(movie);
            postsHTML= "";
            titleDiv.innerHTML += `
            <div>
                <h2>${movie.Title}</h2>
            </div>
            <div>
                <img src="${movie.Poster}"></img>
            </div>
            <div>
                <p>${movie.Year}</p>
            </div>
            
            `
            console.log(movie.Poster);
        
        }

    } catch (error) {
        
        console.log(error)
        document.getElementById('mainBody').innerHTML = "Opps got some internal problems. We have just dispatched a group of monkeys to fix the problem for you :)"
    } finally {
        console.log('Will alwase run at the end, no matter the outcome of the request')
    }
    
})

fetchData();
