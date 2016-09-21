const cats = [
    {name: 'Maru', age: 9},
    {name: 'Mooskers', age: 7},
    {name: 'Grumpy Cat', age: 12}
  ]

// Return an array of all of the cats under 10

function yungCats( cats ) {
  return cats.map(function(cat) {
    if (cat.age < 10 ) {
      return cat;
    }
  })
}

const younger = yungCats(cats);

// [ {name: 'Maru', age: 9}, {name: 'Mooskers', age: 7}]
// [{name: 'Maru', age: 9},{name: 'Mooskers', age: 7},{name: 'Grumpy Cat', age: 12}]


// Return a new array of all of the names of the cats
// cats: [{name: 'Maru', age: 9},{name: 'Mooskers', age: 7},{name: 'Grumpy Cat', age: 12}]

const names = myMap(cats, function(cat, i){
  return cat.name;
})

names // ['Maru', 'Mooskers', 'Grumpy Cat']

const catNames = cats.map( cat => cat.name )

function myMap(arr, callback){
  const newArray = [];
  // for every item in the array, execute the callback
  // with that element as the argument
  arr.forEach(function(element, index){
    let result = callback(element, index);
    newArray.push( result );
  })
  return newArray;
}


// mutating...

// I want to return an array that looks this:

const cats = [
    {name: 'Maru', age: 9},
    {name: 'Mooskers', age: 7},
    {name: 'Grumpy Cat', age: 12}
  ]

const catsWithTemperaments = cats.map(function(cat){
  let newCat = Object.assign({}, cat, {temperament: 'curious', home: 'Garbage Dump'})
  return newCat;
})

// [
//     {name: 'Maru', age: 9, temperament: 'curious'},
//     {name: 'Mooskers', age: 7, temperament: 'curious'},
//     {name: 'Grumpy Cat', age: 12, temperament: 'curious'}
//   ]


// pure


// Use reduce to sum all of the cats ages

const totalAge = cats.reduce(function(total, cat){
  return total + cat.age
}, 0)

totalAge // 28

const totalAgePlusTen = cats.reduce(function(total, cat){
  return total + cat.age
}, 10)

totalAgePlusTen // 38

const agesMultiplied = cats.reduce(function(product, cat){
  return product * cat.age;
}, 1)

agesMultiplied // 756

// filter, sort
// underscore provides methods to use these
