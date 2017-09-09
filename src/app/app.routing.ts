import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchnewsComponent } from './searchnews.component/searchnews/searchnews.component';
import { FavouriteComponent } from './favourite/favourite.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'news',component: SearchnewsComponent },
  { path: 'favourites' , component: FavouriteComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}