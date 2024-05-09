const api_key='https://api.quotable.io/random'
function GenerateQuote(){
fetch(api_key)
.then(response=>
    {
        if(!response.ok){
            throw new Error("there was an error fetching")
        }
        return response.json()
    }
)
.then(data=>{
    document.getElementById('quoteText').textContent= data.content;
    document.getElementById('authorText').textContent= data.author;
})
.catch(error=>{console.error(error)});
}
