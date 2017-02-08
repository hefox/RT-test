import {TestBed} from '@angular/core/testing';

import {GalleryDetailComponent} from './gallery-detail.component';

describe('GalleryDetailComponent', () => {
    beforeEach(() => TestBed.configureTestingModule({ declarations: [GalleryDetailComponent] }));

    it('should instantiate the GalleryDetailComponent', () => {
        let fixture = TestBed.createComponent(GalleryDetailComponent);
        expect(fixture.componentInstance instanceof GalleryDetailComponent).toBe(true, 'should create GalleryDetailComponent');
    });
});
