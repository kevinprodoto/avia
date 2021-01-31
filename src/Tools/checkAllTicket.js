const checkAllTicket = (state, item) => {
    let result
    if (state[item]) {
        result = { ...state, allTickets: false, [item]: false }
    } else {
        result = { ...state, [item]: true }
    }
    if (result.withoutSeg && result.oneSeg && result.twoSeg && result.threeSeg && !result.allTickets) return { ...result, allTickets: !state.allTickets }
    return result
}

export default checkAllTicket
