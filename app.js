function scrolll() {
    var left = document.querySelector('.sneakPeeks')
    left.scrollBy(500,0)
    console.log('code run')
}

var right = document.querySelector('.sneakPeeks')
console.log(right)
function scrollr() {
    var right = document.querySelector('.sneakPeeks')
    right.scrollBy(-500,0)
    console.log('code run')
    console.log(right)
}
console.log('done')