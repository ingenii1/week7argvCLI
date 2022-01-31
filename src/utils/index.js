//TEMPLATE FILE//
//to run the whole app in NODE: "npm init -y"==> run this in the terminal//
console.log(procces.argv);
const movieArr = [];
class movie 
{
    constructor(tittle, actor = "Not specified")
    {this.tittle = tittle;
      this.actor = actor}

      add() 
      {movieArr.push(this)}
}
module.exports = {Movie, movieArr}