const checkboxFilter = (ticket, arr) => {
    if (arr[4]) return true
    let result = false
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] && (i === ticket.segments[0].stops.length || i === ticket.segments[1].stops.length)) {
            result = true
            break
        }
    }
    return result
}

export default checkboxFilter
