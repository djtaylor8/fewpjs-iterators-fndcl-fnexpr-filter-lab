


function findMatching(array, str) {
  return array.filter(function(el) {
     return el.toLowerCase().indexOf(str.toLowerCase()) !== -1
  });
}

function fuzzyMatch(array, str) {
    return array.filter(function(el) {
        return el.toLowerCase().charAt(0) === str.toLowerCase().charAt(0)
     });
}

function matchName(array, str) {
    return array.filter(function(el) {
        return el.name.toLowerCase().indexOf(str.toLowerCase()) !== -1
    })
}