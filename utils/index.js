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