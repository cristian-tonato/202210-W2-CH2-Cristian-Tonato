export function strictEquals(a,b){
    let x = Object.is(a,b)
    if (isNaN(a,b)) {
        return false
    }else if(!a && !b) {
        return true
    }
    return x
}
