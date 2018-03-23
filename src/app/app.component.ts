import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container-fluid">
      <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav">
              <li class="active">
                  <a [routerLink] = "['/Home']">Home</a>
              </li>
              <li>
                  <a [routerLink] = "['/AboutMe']">About me</a>
              </li>
          </ul>
      </div>
  </div>
</nav>
<router-outlet></router-outlet> 
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
