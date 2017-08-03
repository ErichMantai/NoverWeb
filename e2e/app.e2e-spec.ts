import { NoverWebPage } from './app.po';

describe('nover-web App', () => {
  let page: NoverWebPage;

  beforeEach(() => {
    page = new NoverWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
