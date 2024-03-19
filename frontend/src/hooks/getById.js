export async function getById(id){
    try {
        const result = fetch(`http://localhost:8080/getbyid/${id}`,{
            method: 'GET',
            headers:{
                'Content-Type' : 'application/json'
            }
        })
        const data = (await result).json()
        return data

    } catch (error) {
        console.log(error)
    }
}