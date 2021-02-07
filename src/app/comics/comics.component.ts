import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {


  comics: any[];


  constructor(private comicapi: SharedService) { }

  ngOnInit(): void {
    this.comicapi.getComic().subscribe((data: any[]) =>{
      console.log(data);
      this.comics = data;
    })

  }

}
