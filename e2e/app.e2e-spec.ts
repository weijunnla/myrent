import { MyrentPage } from './app.po';

describe('myrent App', () => {
  let page: MyrentPage;

  beforeEach(() => {
    page = new MyrentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
