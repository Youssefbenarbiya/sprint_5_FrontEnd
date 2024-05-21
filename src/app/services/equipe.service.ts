import { Injectable } from '@angular/core';
import { Equipe } from '../model/equipe.model';
import { Ligue } from '../model/ligue.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LigueWrapper } from '../model/LigueWrapped.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  private apiURL: string = 'http://localhost:8090/equipes/api';
  private apiURLLig: string = 'http://localhost:8090/equipes/ligue';

  constructor(private http: HttpClient, private authService: AuthService) {}

  

  listeEquipes(): Observable<Equipe[]> {
    return this.http.get<Equipe[]>(`${this.apiURL}/all`);
  }

  listeLigues(): Observable<LigueWrapper> {
    return this.http.get<LigueWrapper>(this.apiURLLig);
  }

  consulterLigue(id: number): Observable<Ligue> {
    const url = `${this.apiURLLig}/${id}`;
    return this.http.get<Ligue>(url);
  }

  ajouterEquipe(equipe: Equipe): Observable<Equipe> {
    return this.http.post<Equipe>(`${this.apiURL}/addeqip`, equipe);
  }

  supprimerEquipe(id: number): Observable<void> {
    const url = `${this.apiURL}/deleqip/${id}`;
    return this.http.delete<void>(url);
  }

  consulterEquipe(id: number): Observable<Equipe> {
    const url = `${this.apiURL}/getbyid/${id}`;
    return this.http.get<Equipe>(url);
  }

  updateEquipe(equipe: Equipe): Observable<Equipe> {
    return this.http.put<Equipe>(`${this.apiURL}/updateeqip`, equipe);
  }

  rechercherParLigue(idLigue: string): Observable<Equipe[]> {
    const url = `${this.apiURL}/equipeligue/${idLigue}`;
    return this.http.get<Equipe[]>(url);
  }

  rechercherParNom(nom: string): Observable<Equipe[]> {
    const url = `${this.apiURL}/eqipsByName/${nom}`;
    return this.http.get<Equipe[]>(url);
  }

  ajouterLigue(ligue: Ligue): Observable<Ligue> {
    return this.http.post<Ligue>(this.apiURLLig, ligue);
  }

  supprimerLigue(id: number): Observable<void> {
    const url = `${this.apiURLLig}/${id}`;
    return this.http.delete<void>(url);
  }

  updateLigue(ligue: Ligue): Observable<Ligue> {
    const url = `${this.apiURLLig}/${ligue.idLigue}`;
    return this.http.put<Ligue>(url, ligue);
  }
}
