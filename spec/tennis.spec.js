function Tennis(){
    this.scoreA = '';
    this.scoreB = '';
    this.echo = function(){
    if(this.scoreA === 0 && this.scoreB === 0 ){
      return 'Love - Love';
    }
    if(this.scoreA === 0){
      if(this.scoreB === 15){
       return 'Love - fifteen';
     }
    }
  };
}
describe('tannisgame', function() {
  it('should be "Love - Love" when starting the game', function() {
	  var tennis = new Tennis();
    tennis.scoreA = 0;
    tennis.scoreB = 0;
    expect(tennis.echo()).toEqual('Love - Love');
  });
  it('should be "Love - fifteen" when scoreB get points', function() {
    var tennis = new Tennis();
    tennis.scoreA = 0;
    tennis.scoreB = 15;
    expect(tennis.echo()).toEqual('Love - fifteen');
  });
});
