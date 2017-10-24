import { browser, by, element } from 'protractor';

export class UserPage {
    navigateTo() {
        return browser.get('/user');
    }

    navigateToDetail() {
        return browser.get('/user/1');
    }

    getParagraphText() {
        return element(by.css('app-root app-user-list p')).getText();
    }

    getParagraphTextDetail() {
        return element(by.css('app-root app-user-detail p')).getText();
    }
}
