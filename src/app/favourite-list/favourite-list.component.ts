import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-favourite-list',
  templateUrl: './favourite-list.component.html',
  styleUrls: ['./favourite-list.component.css']
})
export class FavouriteListComponent implements OnInit {
	@Input() dispdata:any;
	updatedata:any;
	deletedata:any;
  constructor() { }

  ngOnInit() {
  }
  updatefav(data){
  	this.updatedata=data;
  }
}
