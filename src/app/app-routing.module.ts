import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'timepage', loadChildren: './timepage/timepage.module#TimepagePageModule' },
  { path: 'datepage', loadChildren: './datepage/datepage.module#DatepagePageModule' },
  { path: 'finishpage', loadChildren: './finishpage/finishpage.module#FinishpagePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
