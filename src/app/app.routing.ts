import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {GalleryDetailComponent} from './gallery-detail/gallery-detail.component';
import {GalleriesComponent} from './galleries/galleries.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'galleries', component: GalleriesComponent },
    { path: 'galleries/:galleryId', component: GalleryDetailComponent },
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
