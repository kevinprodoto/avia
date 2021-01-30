const theMost = (arr, str) => {
    let result = 1000000
    if (str === 'cheap') {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].price < result) {
                result = arr[i].price
            }
        }
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].segments[0].duration + arr[i].segments[1].duration < result) {
                result = arr[i].segments[0].duration + arr[i].segments[1].duration
            }
        }
    }
    return result
}
export default theMost
