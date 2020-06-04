import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: 'home',
      loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'pg-details/:ddd/:phone',
      loadChildren: () => import('./pg-details/pg-details.module').then( m => m.PgDetailsPageModule)
    },
    {
      path: 'pg-add-phone',
      loadChildren: () => import('./pg-add-phone/pg-add-phone.module').then( m => m.PgAddPhonePageModule)
    },
    {
      path: 'pg-add-content',
      loadChildren: () => import('./pg-add-content/pg-add-content.module').then( m => m.PgAddContentPageModule)
    },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
