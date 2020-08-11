
function longestWord(string) {
  let array = string.split(' ');
  let longestIndex = '';
  if (array.length > 0) {
    array.forEach( element => {
        if (!longestIndex) {
        longestIndex = element;  
      } else if ( element.length > longestIndex.length ) {
      longestIndex = element;
      }
    })
  }
  console.log(longestIndex);
  };

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'