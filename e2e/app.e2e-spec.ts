import { ACFeChallengePage } from './app.po';

describe('ac-fe-challenge App', function() {
  let page: ACFeChallengePage;

  beforeEach(() => {
    page = new ACFeChallengePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
