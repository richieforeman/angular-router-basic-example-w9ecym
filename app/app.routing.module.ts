import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginViewComponent } from './views/login/login.component';
import { HomeViewComponent } from './views/home/home.component';
import { CatalogViewComponent } from './views/catalog/catalog.component';

@NgModule({
  declarations: [LoginViewComponent, HomeViewComponent, CatalogViewComponent],
  imports: [
    RouterModule.forRoot([
      { path: 'login', component: LoginViewComponent },
      { path: 'home/:id', component: HomeViewComponent },
      { path: 'catalog', component: CatalogViewComponent },
    ]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
