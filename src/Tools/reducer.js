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
            return { ...state, tickets: action.tickets }
        case 'fromCheapToFast':
            return { ...state, ...{ theMostCheapBool: false, theMostFastBool: true, loading: true, } }
        case 'fromFastToCheap':
            return { ...state, ...{ theMostCheapBool: true, theMostFastBool: false, loading: true, } }
        case 'allCheckboxes':
            return state.allTickets
                ? {
                      ...state,
                      allTickets: false,
                      withoutSeg: false,
                      oneSeg: false,
                      twoSeg: false,
                      threeSeg: false,
                      loading: true,
                  }
                : {
                      ...state,
                      allTickets: true,
                      withoutSeg: true,
                      oneSeg: true,
                      twoSeg: true,
                      threeSeg: true,
                      loading: true,
                  }
        case 'seg':
            return checkAllTicket(state, action.value)
        case "loaderFalse": 
            return {...state, loading: false}
        default:
            return state
    }
}

export default reducer
