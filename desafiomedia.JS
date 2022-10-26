// function media(n1, n2) {
//   let total = 0
//   return total = (n1 + n2) / 2

// }
// console.log(media(10, 10))

function media() {
  let total = 0
  let qtd = arguments.length 
  for(i = 0; i < qtd; i++){
    if(typeof arguments[i] !== 'number'){
      throw Error('Only Numbers')
    }
    total += arguments[i]
  }
return (total / qtd) || 0
}
let mediaTotal = media(500, 300)
console.log(mediaTotal)