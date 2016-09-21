class Cat {
  constructor(){
    this.kittens = ["Marley", "Grouchy", "Billy" ];
    this.foodCount = 100;
  }

  feedKittens(){
    // what is this???
    this.kittens.forEach( (kitten) => {
        this.feedKitten(kitten)
      } )
  }

  feedKitten( kitten ){
    this.foodCount -= 1;
    console.log(`Feeding ${kitten}!`);
  }
}

var mooskers = new Cat();
mooskers.feedKittens();
