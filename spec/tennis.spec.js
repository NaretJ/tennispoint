function Tennis(){
    this.scoreA = '';
    this.scoreB = '';
    this.echo = function(){
    if(this.scoreA === 0 && this.scoreB === 0 ){
      return 'Love - Love';
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
});
