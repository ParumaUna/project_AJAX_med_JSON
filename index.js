const mainBody = document.getElementById('mainBody')
async function fetchData(){
    console.log('data');
    const response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=c51128ab');
    const data = await response.json();
    
    document.getElementById('mainBody').innerHTML = data;
    
}

fetchData;

