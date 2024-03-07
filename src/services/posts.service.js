export async function getPosts() {
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/posts')
        return await response.json()
    } catch (e) {
        alert(`Произошла ошибка загрузки данных \nОшибка: ${e}`)
    }
}