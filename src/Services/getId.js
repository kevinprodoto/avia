export default async function getId() {
    const res = await fetch("https://front-test.beta.aviasales.ru/search");
    const id = await res.json();
    return id;
}