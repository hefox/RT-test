import {TestBed} from '@angular/core/testing';

import {GalleriesComponent} from './galleries.component';

describe('GalleriesComponent', () => {
    beforeEach(() => TestBed.configureTestingModule({ declarations: [GalleriesComponent] }));

    it('should instantiate the GalleriesComponent', () => {
        let fixture = TestBed.createComponent(GalleriesComponent);
        expect(fixture.componentInstance instanceof GalleriesComponent).toBe(true, 'should create GalleriesComponent');
    });
});
