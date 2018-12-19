import { AppPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;
  let url = "http://hw6-frontend-yw76.surge.sh/";

  beforeEach(() => {
    page = new AppPage();
  });

  // it('should display welcome message', () => {
  //   page.navigateTo();
  //   expect(page.getParagraphText()).toEqual('Welcome to hw4!');
  // });

  it('Register a new user named "realUser"', () => {
    page.navigateTo();
    // element(browser.getCurrentUrl().then(function(text) {
    //   console.log(text);
    // }));
    
    element(by.id('accountName')).sendKeys('realUser');
    element(by.id('emailAddress')).sendKeys('a@b');
    element(by.id('phoneNumber')).sendKeys('123-123-1234');
    element(by.id('dateOfBirth')).sendKeys('2000-11-04');
    element(by.id('zipcode')).sendKeys('12345');
    element(by.id('password')).sendKeys('123456');
    element(by.id('passwordConfir')).sendKeys('123456');

    element(by.id('submit')).click();

    expect(browser.getCurrentUrl()).toEqual(url + '#/main');

  });

  it('Log in as "realUser"', () => {
    page.navigateTo();

    element(by.id('accountName-login')).sendKeys('realUser');
    element(by.id('password-login')).sendKeys('123456');
    
    element(by.id('submit-login')).click();

    expect(browser.getCurrentUrl()).toEqual(url + '#/main');

  });

  it('Create a new article and validate the article appears in the feed', () => {
    //login
    page.navigateTo();

    element(by.id('accountName-login')).sendKeys('realUser');
    element(by.id('password-login')).sendKeys('123456');
    
    element(by.id('submit-login')).click();

    //create a new article
    element(by.id('postText')).sendKeys('new article');
    element(by.id('post')).click();

    //validate
    var text = element.all(by.css('.posts')).filter(res => {
      return res.getText().then(text => {
        return text === 'new article'
      })
    })
  });

  it('Update the status headline and verify the change', () => {
    
    //login
    page.navigateTo();

    element(by.id('accountName-login')).sendKeys('realUser');
    element(by.id('password-login')).sendKeys('123456');
    
    element(by.id('submit-login')).click();

    //update status
    element(by.id('newStatus')).sendKeys('new status');
    element(by.id('update')).click();

    var newStatus = element(by.id('userStatus')).getText();
    expect(newStatus).toEqual('new status');
    
  });

  it('Log out "realUser"', () => {
    //login
    page.navigateTo();

    element(by.id('accountName-login')).sendKeys('realUser');
    element(by.id('password-login')).sendKeys('123456');

    element(by.id('submit-login')).click();

    //logout
    element(by.id('logout')).click();
    expect(browser.getCurrentUrl()).toEqual(url + '#/auth');

  });

  it('Log in as test user', () => {
    page.navigateTo();

    element(by.id('accountName-login')).sendKeys('John');
    element(by.id('password-login')).sendKeys('john');

    element(by.id('submit-login')).click();

    expect(browser.getCurrentUrl()).toEqual(url + '#/main');
  });

  it('Search for a keyword that matches only one of test user\'s articles (verify only one article shows and verify the author)', () => {
    //login
    page.navigateTo();

    element(by.id('accountName-login')).sendKeys('realUser');
    element(by.id('password-login')).sendKeys('123456');

    element(by.id('submit-login')).click();

    //search for a keyword
    element(by.id('searchInput')).sendKeys('hi');

    //validate
    var text = element.all(by.css('.posts')).filter(res => {
      return res.getText().then(text => {
        return text === 'hi'
      })
    })
  });

  it('Log out test user', () => {
    //login
    page.navigateTo();

    element(by.id('accountName-login')).sendKeys('John');
    element(by.id('password-login')).sendKeys('john');

    element(by.id('submit-login')).click();

    //logout
    element(by.id('logout')).click();
    expect(browser.getCurrentUrl()).toEqual(url + '#/auth');
  });

});
