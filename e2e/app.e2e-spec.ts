import { VscTutorialPage } from './app.po';

describe('vsc-tutorial App', () => {
  let page: VscTutorialPage;

  beforeEach(() => {
    page = new VscTutorialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
