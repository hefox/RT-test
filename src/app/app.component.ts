import {Component, OnInit} from '@angular/core';

import 'foundation-sites/dist/css/foundation.css';
import '../css/main.css';

declare let $: any;

@Component({
    selector: 'my-app',
    template: require('./app.component.html')
})

export class AppComponent implements OnInit {
    ngOnInit() {
        console.log('AppComponent initializing...');
        $(document).foundation();
    }
}
