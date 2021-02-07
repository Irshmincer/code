import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

series :any =[];

  constructor(private seriesapi:SharedService) { }

  ngOnInit(): void {
    this.seriesapi.getSeries().subscribe((data: any[]) =>{
      console.log(data);
      this.series = data;
    })
  }

}
