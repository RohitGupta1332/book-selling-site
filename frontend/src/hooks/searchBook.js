export async function searchBook(book){
    try{
        const result = await fetch(`http://localhost:8080/search/${book}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await result.json()
    return data
    }
    catch(error){
        console.log(error)
        return "error"
    }
}