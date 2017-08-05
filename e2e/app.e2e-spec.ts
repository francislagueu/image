import { ImagePage } from './app.po';

describe('image App', () => {
  let page: ImagePage;

  beforeEach(() => {
    page = new ImagePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
