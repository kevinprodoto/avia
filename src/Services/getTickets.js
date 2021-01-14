export default async function getTickets(id) {
    const res = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${id}`);
    const tickets = await res.json();
    return tickets;
}