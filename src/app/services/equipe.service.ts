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

  private getAuthHeaders(): HttpHeaders {
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    return new HttpHeaders({ "Authorization": jwt, "Content-Type": "application/json" });
  }

  listeEquipes(): Observable<Equipe[]> {
    return this.http.get<Equipe[]>(`${this.apiURL}/all`, { headers: this.getAuthHeaders() });
  }

  listeLigues(): Observable<LigueWrapper> {
    return this.http.get<LigueWrapper>(this.apiURLLig, { headers: this.getAuthHeaders() });
  }

  consulterLigue(id: number): Observable<Ligue> {
    const url = `${this.apiURLLig}/${id}`;
    return this.http.get<Ligue>(url, { headers: this.getAuthHeaders() });
  }

  ajouterEquipe(equipe: Equipe): Observable<Equipe> {
    return this.http.post<Equipe>(`${this.apiURL}/addeqip`, equipe, { headers: this.getAuthHeaders() });
  }

  supprimerEquipe(id: number): Observable<void> {
    const url = `${this.apiURL}/deleqip/${id}`;
    return this.http.delete<void>(url, { headers: this.getAuthHeaders() });
  }

  consulterEquipe(id: number): Observable<Equipe> {
    const url = `${this.apiURL}/getbyid/${id}`;
    return this.http.get<Equipe>(url, { headers: this.getAuthHeaders() });
  }

  updateEquipe(equipe: Equipe): Observable<Equipe> {
    return this.http.put<Equipe>(`${this.apiURL}/updateeqip`, equipe, { headers: this.getAuthHeaders() });
  }

  rechercherParLigue(idLigue: string): Observable<Equipe[]> {
    const url = `${this.apiURL}/eqipligue/${idLigue}`;
    return this.http.get<Equipe[]>(url, { headers: this.getAuthHeaders() });
  }

  rechercherParNom(nom: string): Observable<Equipe[]> {
    const url = `${this.apiURL}/eqipsByName/${nom}`;
    return this.http.get<Equipe[]>(url, { headers: this.getAuthHeaders() });
  }

  ajouterLigue(ligue: Ligue): Observable<Ligue> {
    return this.http.post<Ligue>(this.apiURLLig, ligue, { headers: this.getAuthHeaders() });
  }

  supprimerLigue(id: number): Observable<void> {
    const url = `${this.apiURLLig}/${id}`;
    return this.http.delete<void>(url, { headers: this.getAuthHeaders() });
  }

  updateLigue(ligue: Ligue): Observable<Ligue> {
    const url = `${this.apiURLLig}/${ligue.idLigue}`;
    return this.http.put<Ligue>(url, ligue, { headers: this.getAuthHeaders() });
  }
}
