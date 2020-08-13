import { ControllerMoneyUiPage } from './app.po';

describe('controllermoney-ui App', () => {
  let page: ControllerMoneyUiPage;

  beforeEach(() => {
    page = new ControllerMoneyUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
