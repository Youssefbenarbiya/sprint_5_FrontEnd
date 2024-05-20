import { Component, OnInit } from '@angular/core';
import { Equipe } from '../model/equipe.model';
import { Ligue } from '../model/ligue.model';
import { EquipeService } from '../services/equipe.service';

@Component({
  selector: 'app-recherche-par-ligue',
  templateUrl: './recherche-par-ligue.component.html',
})
export class RechercheParLigueComponent implements OnInit {
  equipes: Equipe[] = [];
  IdLigue: number | null = null;
  ligues: Ligue[] = [];

  constructor(private equipeService: EquipeService) {}

  ngOnInit(): void {
    this.equipeService.listeLigues().subscribe(ligs => {
      this.ligues = ligs._embedded.ligues;
      console.log(ligs);
    });
  }

  onChange(): void {
    if (this.IdLigue !== null) {
      this.equipeService.rechercherParLigue(this.IdLigue.toString()).subscribe(eqips => {
        this.equipes = eqips;
      });
    }
  }
}
