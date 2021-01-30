const filterTicket = (
    ticket,
    theMostCheapBool,
    theMostFastBool,
    theMostCheap,
    theMostFast
    // withoutSeg,
    // oneSeg,
    // twoSeg,
    // threeSeg,
) => {
    if (theMostCheapBool) {
        if (ticket.price !== theMostCheap) return false
    }
    if (theMostFastBool) {
        if (ticket.segments[0].duration + ticket.segments[1].duration !== theMostFast) return false
    }
    return true
}

export default filterTicket
