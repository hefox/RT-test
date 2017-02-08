import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule, JsonpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {routing, appRoutingProviders} from './app.routing';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {GalleryDetailComponent} from './gallery-detail/gallery-detail.component';
import {GalleriesComponent} from './galleries/galleries.component';
import {GalleryService} from './gallery.service';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        GalleryDetailComponent,
        GalleriesComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    providers: [appRoutingProviders, GalleryService],
    bootstrap: [AppComponent]
})

export class AppModule {
}
