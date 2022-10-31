import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lazyLoadApp';

  constructor(private router: Router){}

  showFooter(){
    return !this.router.url.includes('maps');
  }
}
