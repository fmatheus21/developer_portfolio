import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', redirectTo: '', pathMatch: 'full' }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
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
