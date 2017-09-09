import { Component } from '@angular/core';
import { SearchnewsService } from './searchnews.service/searchnews.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [SearchnewsService]
})
export class AppComponent  { 
	data:any={};
  title="News";
  newsdata(data) {this.data=data;}
}