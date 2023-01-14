const mainBody = document.getElementById('mainBody');
const movie = document.getElementById('movie-input');
const click = document.getElementById('butn');
console.log(movie.value);

click.addEventListener('click',async function(){

    try {
        const response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=c51128ab&s='+ movie.value);
        if(response.ok === false) {
            throw new Error(`HTTP error code: ${response.status}, HTTP error message: ${response.statusText}`);
        } 
        const data = await response.json();
        console.log(data)
        document.getElementById('mainBody').innerHTML = data;
        
    } catch (error) {
        
        console.log(error)
        document.getElementById('mainBody').innerHTML = "Opps got some internal problems. We have just dispatched a group of monkeys to fix the problem for you :)"
    } finally {
        console.log('Will alwase run at the end, no matter the outcome of the request')
    }

})

fetchData();
