const cats = [
    {name: 'Maru', age: 9},
    {name: 'Mooskers', age: 7},
    {name: 'Grumpy Cat', age: 12}
  ]

// we can use map to get a list of all of the names of the cats
const names = cats.map(function(cat){
  return cat.name;
})

names // ['Maru', 'Mooskers', '']

// mutating the original array - bad
for (var i = 0; i < cats.length; i++) {
  if (cats[i].age > 10 ) {
    array.splice(i, 1)
  }
}

// pure - good

function myMap(array, callback){
  const newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push( callback(array[i], i, array) );
  }
  return newArray;
}

// not mutating any data

const total = cats.reduce(function(totalAge, cat){
  return totalAge + cat.age
}, 0);

// filter, sort - read about these
