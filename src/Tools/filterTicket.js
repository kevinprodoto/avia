import theMost from './theMost'

const filterTicket = (ticket, tickets, theMostCheapBool, theMostFastBool) => {
    if (theMostCheapBool) {
        if (ticket.price !== theMost(tickets, 'cheap')) return false
    }
    if (theMostFastBool) {
        if (ticket.segments[0].duration + ticket.segments[1].duration !== theMost(tickets, 'fast')) return false
    }
    return true
}

export default filterTicket
