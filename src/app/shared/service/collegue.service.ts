import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class CollegueService {

  collegues:Collegue[]


  constructor(private http:HttpClient) {
  }

 

    listerCollegues():Promise<Collegue[]> {
    // TODO effectuer la liste des collègues
    // TODO retourner l'objet Promise<Collegue[]>

     return this.http.get<Collegue[]>('http://localhost:8080/collegues').toPromise()
    }
    sauvegarder(newCollegue:Collegue):Promise<Collegue> {
    // TODO sauvegarder le nouveau collègue
    // TODO retourner l'objet Promise<Collegue[]>
      
      return this.http.post<Collegue>('http://localhost:8080/collegues/', newCollegue,httpOptions).toPromise();
    }
    aimerUnCollegue(unCollegue:Collegue):Promise<Collegue> {
    // TODO Aimer un collègue
    unCollegue.score += 10;
     return this.http.put<Collegue>('http://localhost:8080/collegues/${unCollegue.nom}/score', unCollegue,httpOptions).toPromise()
    }
    detesterUnCollegue(unCollegue:Collegue):Promise<Collegue> {
    // TODO Aimer un collègue
    unCollegue.score -= 5;
    return this.http.put<Collegue>('http://localhost:8080/collegues/${unCollegue.nom}/score', unCollegue,httpOptions).toPromise()
  }

}
