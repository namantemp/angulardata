import { Component, OnInit } from '@angular/core';
import { FavouriteService } from './favourite.service'

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  providers: [FavouriteService]
})
export class FavouriteComponent implements OnInit {
	data:any;
  constructor(private favouriteService:FavouriteService) { }

  getData(){
  	this.favouriteService.getData().subscribe((refer)=>{
  		this.data=refer;
  	});  	
  }
  ngOnInit() {
  	this.getData();
  }
}
