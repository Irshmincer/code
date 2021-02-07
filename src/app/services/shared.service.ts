import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  

  constructor(private http: HttpClient) { }
  private characterapi = "https://gateway.marvel.com:443/v1/public/characters?limit=100&apikey=d2e66494e0349a2b28dbc5cb443d6368";
  getCharacter(){
    return this.http.get<any>(this.characterapi)
   .pipe(map((data:any) => data.data.results))
 }


private comicapi ="https://gateway.marvel.com:443/v1/public/comics?limit=100&apikey=d2e66494e0349a2b28dbc5cb443d6368";
 getComic(){
  return this.http.get<any>(this.comicapi)
 .pipe(map((data:any) => data.data.results))
}
private seriesapi ="https://gateway.marvel.com:443/v1/public/series?limit=100&apikey=d2e66494e0349a2b28dbc5cb443d6368";
getSeries(){
 return this.http.get<any>(this.seriesapi)
.pipe(map((data:any) => data.data.results))
}

}
