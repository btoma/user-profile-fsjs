import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: ` 
    <main>
      <app-user-list></app-user-list>
    </main>`,
})
export class AppComponent  { name = 'Angular'; }
