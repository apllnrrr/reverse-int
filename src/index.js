module.exports = function reverse (n) {
  const str = n.toString()
  let res = ''
  for(let i =str.length -1 ; i>=0; i--){
    if(str[i]!='-'){
        let index = i
        res +=str[index]
    }
  }
   const result = Number(res)
   return result
}

