import checkAllTicket from './checkAllTicket'

const reducer = (
    state = {
        loading: true,
        tickets: [],
        theMostCheapBool: false,
        theMostFastBool: true,
        allTickets: true,
        withoutSeg: true,
        oneSeg: true,
        twoSeg: true,
        threeSeg: true,
    },
    action
) => {
    switch (action.type) {
        case 'getTickets':
            return { ...state, loading: false, tickets: action.tickets }
        case 'fromCheapToFast':
            return { ...state, ...{ theMostCheapBool: false, theMostFastBool: true } }
        case 'fromFastToCheap':
            return { ...state, ...{ theMostCheapBool: true, theMostFastBool: false } }
        case 'allCheckboxes':
            return state.allTickets
                ? {
                      ...state,
                      allTickets: false,
                      withoutSeg: false,
                      oneSeg: false,
                      twoSeg: false,
                      threeSeg: false,
                  }
                : {
                      ...state,
                      allTickets: true,
                      withoutSeg: true,
                      oneSeg: true,
                      twoSeg: true,
                      threeSeg: true,
                  }
        case 'seg':
            return checkAllTicket(state, action.value)
        default:
            return state
    }
}

export default reducer
