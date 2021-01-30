const reducer = (
    state = {
        loading: true,
        tickets: [],
        theMostCheapBool: false,
        theMostFastBool: false,
        allTickets: true,
        withoutSeg: false,
        oneSeg: false,
        twoSeg: false,
        threeSeg: false,
    },
    action
) => {
    switch (action.type) {
        case 'getTickets': // Разбить чекбоксы и фильтры на кейсы с тоглом(если есть убрать, если нет установить). Установить стор на все компоненты с состоянием.
            return {
                loading: false,
                tickets: action.tickets,
                theMostCheap: action.theMostCheap,
                theMostFast: action.theMostFast,
                theMostCheapBool: true,
                theMostFastBool: false,
            }
        case 'fromCheapToFast':
            return { ...state, ...{ theMostCheapBool: false, theMostFastBool: true } }
        case 'fromFastToCheap':
            return { ...state, ...{ theMostCheapBool: true, theMostFastBool: false } }
        case 'allClear':
            return {
                ...state,
                loading: true,
                theMostCheapBool: false,
                theMostFastBool: false,
                allTickets: true,
                withoutSeg: false,
                oneSeg: false,
                twoSeg: false,
                threeSeg: false,
            }
        default:
            return state
    }
}

export default reducer
