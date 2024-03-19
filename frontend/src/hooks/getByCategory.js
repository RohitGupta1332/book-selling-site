export async function getByCategory(category){
    try {
        const result = await fetch(`http://localhost:8080/categories/${category}`,{
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        const data = await result.json()
        return data
    } catch (error) {
        console.log(error)
    }
}