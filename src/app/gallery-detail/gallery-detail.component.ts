import {Component, OnInit, ElementRef} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Gallery, GalleryService }  from './../gallery.service';
import * as jQuery from 'jquery';

@Component({
    selector: 'gallery',
    template: require('./gallery-detail.component.html'),
})

export class GalleryDetailComponent implements OnInit {
  gallery: Gallery = new Gallery();

  constructor(
    private route: ActivatedRoute,
    private service: GalleryService,
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    console.log(this.gallery)
    this.route.params
      .switchMap((params: Params) => this.service.get(params['galleryId']))
      .subscribe((gallery: Gallery) => this.gallery = gallery);
  }

  ngAfterViewInit() {
    jQuery(this.elementRef.nativeElement).foundation('reflow');
  }
}
