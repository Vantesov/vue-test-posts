export async function getUsers() {
    try{
        let response = await fetch(`https://jsonplaceholder.typicode.com/users`)
        return await response.json()
    } catch (e) {
        alert(`Произошла ошибка загрузки данных \nОшибка: ${e}`)
    }
}