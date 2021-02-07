import { Component, OnInit } from '@angular/core';
import { SharedService} from '../services/shared.service';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {


  characters: any[];

  constructor(private charactersapi:SharedService) { }

  ngOnInit(): void {
    this.charactersapi.getCharacter().subscribe((data: any[]) =>{
      console.log(data);
      this.characters = data;
    })
  }





}
