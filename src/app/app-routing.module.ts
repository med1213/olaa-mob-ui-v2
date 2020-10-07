import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestLayoutComponent } from './guest-layout/guest-layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: GuestLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./guest-layout/guest-layout.module').then(m => m.GuestLayoutModule),
      }
    ]
  },
  {
    path: '404', component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
