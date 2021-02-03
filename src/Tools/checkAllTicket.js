const checkAllTicket = (state, item) => {
    let result
    if (state[item]) {
        result = { ...state, allTickets: false, [item]: false, loading: true }
    } else {
        result = { ...state, [item]: true, loading: true }
    }
    if (result.withoutSeg && result.oneSeg && result.twoSeg && result.threeSeg && !result.allTickets) return { ...result, allTickets: !state.allTickets, loading: true }
    return result
}

export default checkAllTicket
