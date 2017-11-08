import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: ` 
    <main>
      <app-user-list></app-user-list>
      <app-user-form></app-user-form>
    </main>`,
})
export class AppComponent  { name = 'Angular'; }
