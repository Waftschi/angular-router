import { UserPage } from './user.po';


describe('angular-router User', () => {
  let page: UserPage;

  beforeEach(() => {
    page = new UserPage();
  });

  it('should display welcome message user list', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('user-list works!');
  });

    it('should display welcome message user list etail', () => {
        page.navigateToDetail();
        expect(page.getParagraphTextDetail()).toEqual('user-detail works with ID: 1');
    });
});
