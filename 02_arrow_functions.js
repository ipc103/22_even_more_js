// broken code

class Cat {

  constructor(){
    this.kittens = ["Marley", "Grouchy", "Billy" ];
    this.foodCount = 100;
  }

  feedKittens(){
    this.kittens.forEach(function(kitten){
      this.feedKitten(kitten)
    })
  }

  feedKitten( kitten ){
    this.foodCount -= 1;
    console.log(`Feeding ${kitten}!`);
  }
}

var mooskers = new Cat();
mooskers.feedKittens();

// fix this by setting a variable to self
// we'll fix this a better way using bind
// Arrow functions
  // Use to bind this into anonymous functions
  // Also can be used for implicit returns
