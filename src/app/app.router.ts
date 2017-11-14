import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'users', component: AppComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);
