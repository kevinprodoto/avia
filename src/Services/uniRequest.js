export default async function getReq(str, id) {
    let res
    if (str === 'id') res = await fetch('https://front-test.beta.aviasales.ru/search')
    if (str === 'tickets') res = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${id}`)
    const result = await res.json()
    return result
}
