import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { SearchnewsComponent } from './searchnews.component/searchnews/searchnews.component';
import { SearchlistComponent } from './searchlist.component/searchlist/searchlist.component';
import { SearchdetailComponent } from './searchdetail.component/searchdetail/searchdetail.component';
import { SearchnewsService } from './searchnews.service/searchnews.service';
import { SearchdetailService } from './searchdetail.service/searchdetail.service';
import { HeaderComponent } from './header/header.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { AppRoutingModule } from './app.routing';
import { FavouriteListComponent } from './favourite-list/favourite-list.component';
import { UpdatefavComponent } from './updatefav/updatefav.component';
import { DeletefavComponent } from './deletefav/deletefav.component';

@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule,NgbModule.forRoot(),AppRoutingModule],
  declarations: [ AppComponent, SearchnewsComponent, SearchlistComponent, SearchdetailComponent, HeaderComponent, FavouriteComponent, FavouriteListComponent, UpdatefavComponent, DeletefavComponent ],
  providers:    [ SearchnewsService,SearchdetailService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { } 