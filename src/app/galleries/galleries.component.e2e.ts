'use strict';

describe('Galleries Page', () => {
    beforeEach(() => {
        browser.get('/galleries');
    });

    it('should have h3 header', () => {
        let subject = element(by.tagName('h3')).isPresent();
        expect(subject).toEqual(true);
    });

    it('should have h3 header with "Galleries" text', () => {
        let subject = element(by.tagName('h3'));
        expect(subject.getText()).toBe('Galleries');
    });
});
