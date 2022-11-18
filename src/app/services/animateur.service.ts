import { Injectable } from '@angular/core';
import { Animateur } from '../model/animateur.model';
import { Tv} from "../model/tv.model";
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tvWrapper } from '../model/tvWrapper';
const httpOptions = {headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class AnimateurService {
  animateurs : Animateur[];
  apiURL: string = 'http://localhost:8080/animateurs/api';
  apiURLTv: string = 'http://localhost:8080/animateurs/tv';
  tvs : Tv[];
  



    /*this.tvs = [ {idTv : 1, nomTv : "Attessia",description:""},
{idTv : 2, nomTv : "elhiwar",description:""}];*/
constructor(private http : HttpClient) { 
     this.animateurs = [{idAnimateur :1, nomAnimateur : "naoufel ouertani", dateConfirmation : new Date("01/04/2021") ,tv : {idTv : 1, nomTv : "attessia",description:""}},
  {idAnimateur :2, nomAnimateur : "hedi zaiem", dateConfirmation : new Date("01/04/2022"),tv : {idTv :2 , nomTv : "elhiwar",description:""}},
  {idAnimateur :3, nomAnimateur : "meriem belkadhi", dateConfirmation : new Date("11/10/2022"),tv : {idTv :3 , nomTv : "carthage+",description:""}}
  
  ];}
  listeAnimateurs(): Observable<Animateur[]> {return this.http.get<Animateur[]>(this.apiURL);
  }
  ajouterAnimateur( Ani: Animateur): Observable<Animateur>{
    return this.http.post<Animateur>(this.apiURL, Ani, httpOptions);
  }
  
  supprimerAnimateur(id: number)
{
  const url = `${this.apiURL}/${id}`;
        return this.http.delete(url, httpOptions);
  }
  

/*animateur! : Animateur;
consulterAnimateur(id:number): Animateur{
  this.animateur = this.animateurs.find(p => p.idAnimateur == id)!;
  return this.animateur;
  }*/
  consulterAnimateur(id:number):Observable<Animateur>{
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Animateur>(url);
        
    }

  updateAnimateur(a:Animateur)
{
  return this.http.put<Animateur>(this.apiURL, a, httpOptions);
}
trierAnimateurs(){
  this.animateurs= this.animateurs.sort((n1,n2) => {
  if (n1.idAnimateur > n2.idAnimateur) {
  return 1;
  }
  if (n1.idAnimateur < n2.idAnimateur) {
  return -1;
  }
  return 0;
  });
  }

  listeTvs():Observable<tvWrapper> {
  
      return this.http.get<tvWrapper>(this.apiURLTv);
      }
      rechercherParTv(idTv: number):Observable< Animateur[]> {
        const url = `${this.apiURL}/animtv/${idTv}`;
        return this.http.get<Animateur[]>(url);
        }
        rechercherParNom(nom: string):Observable< Animateur[]> {
const url = `${this.apiURL}/animsByName/${nom}`;
return this.http.get<Animateur[]>(url);
}

}
