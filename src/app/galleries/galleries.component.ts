import {Component} from '@angular/core';
import { Gallery, GalleryService }  from './../gallery.service';

@Component({
    selector: 'galleries',
    template: require('./galleries.component.html')
})

export class GalleriesComponent {
  galleries: Gallery[] = [];
  constructor(
    private service: GalleryService
  ) {}


  ngOnInit(){
    this.service
      .getAll()
      .subscribe(p => this.galleries = p)
  }
}
