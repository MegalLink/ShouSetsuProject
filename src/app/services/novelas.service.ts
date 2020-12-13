import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Novela } from '../models/models';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class NovelasService {
  private url="https://listacurso-90985.firebaseio.com"
  constructor(private _http:HttpClient) {
   }
   postNovela(novela:Novela){
    return this._http.post(`${this.url}/novelas.json`,novela).pipe(
      map((resp:any)=>{
        novela.id=resp.name;
        return novela;
      })
    )

  }

  putNovela(novela:Novela){
    const novelaTemporal={
      ...novela //tomarse las propiedades de ese objeto
    };
    delete novelaTemporal.id;
    return this._http.put(`${this.url}/novelas/${novela.id}.json`,novelaTemporal);
  }
  getNovelas(){
    return this._http.get(`${this.url}/novelas.json`).pipe(map(resp=>{
       return this.crearArreglo(resp)
    }))
  }
  private crearArreglo(novelasObj:object){
    const novelas: Novela[]=[];
    console.log(novelasObj)
    if(novelasObj===null){
      return [];
    }
     Object.keys(novelasObj).forEach(key=>{
       const novela:Novela=novelasObj[key];
       novela.id=key;
       novelas.push(novela)
     });
     return novelas;
  }
  getNovela(id:string){
    return this._http.get(`${this.url}/novelas/${id}.json`)
  }
  deleteNovela(id:string)
  {
return this._http.delete(`${this.url}/novelas/${id}.json`)
  }
}
