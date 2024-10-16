import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/public/home/home.component';
import { PortfolioComponent } from './pages/public/portfolio/portfolio.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      /*useHash: false,
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      enableTracing: false,
      scrollPositionRestoration: 'enabled',
      scrollOffset: [0, 64],*/
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
