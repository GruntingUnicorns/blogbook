describe('blogbook homepage', function() {

  it('should have a title', function() {
    browser.get('http://localhost:3000/');

    expect(browser.getTitle()).toEqual('BlogBook');

  });

  // have to update the second test

  it('should show a blog post', function() {
    browser.get('http://localhost:3000/');
    element(by.id('start-api')).click();
    expect(element(by.binding('card.title')).getText()).toBe("This April in Blogging U.: The Return of Writing 101!")
  });

  it("should take a link", function() {
    browser.get('http://localhost:3000/');
    element(by.id('addlink')).sendKeys('http://katebeavis.wordpress.com');
    element(by.id('submitButton')).click();
    expect(element(by.binding('link')).getText()).toEqual('http://katebeavis.wordpress.com');
  });

});
