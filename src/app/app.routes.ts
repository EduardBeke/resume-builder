import { Route } from '@angular/router';
import { BuilderComponent } from './builder/builder.component';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'builder',
  },
  {
    path: 'builder',
    component: BuilderComponent,
  },
];
