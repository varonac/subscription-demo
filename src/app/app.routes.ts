import { Routes } from '@angular/router';
import { SubscriptionComponent } from './features/subscription/subscription.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'subscriptions',
  },
  {
    path: 'subscriptions',
    component: SubscriptionComponent,
  },
  { path: '**', redirectTo: 'subscriptions' },
];
