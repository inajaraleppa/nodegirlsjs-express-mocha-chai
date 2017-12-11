describe('/recipes', () => {
  it('returns recipes names', function(done) {
    request.get('/recipes')
      .expect(200)
      .end(function(err, res) {
        console.log(res.body)
          expect(res.body).to.include('mocha');
          expect(res.body).to.include('chai');
          done(err);
      });
  });
});
