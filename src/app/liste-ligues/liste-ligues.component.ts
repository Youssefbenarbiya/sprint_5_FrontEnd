import { Component, OnInit } from '@angular/core';
import { Ligue } from '../model/ligue.model';
import { EquipeService } from '../services/equipe.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-liste-ligues',
  templateUrl: './liste-ligues.component.html',
})
export class ListeLiguesComponent implements OnInit {
  ligues!: Ligue[];
  ajout: boolean = true;
  updatedligue: Ligue = { idLigue: 0, nomLigue: '' };

  constructor(private equipeService: EquipeService,public authService: AuthService) {}

  ngOnInit(): void {
    this.chargerLigues();
  }

  

  updatedLigue(lig: Ligue) {
    this.updatedligue = lig;
    this.ajout = false;
  }

  ligueUpdated(lig: Ligue) {
    console.log('Ligue reçue du composant updateLigue', lig);
  
      this.equipeService.ajouterLigue(lig).subscribe(() => {
        this.chargerLigues();
      });
    
  }
  chargerLigues() {
    this.equipeService.listeLigues().subscribe(ligs => {
      this.ligues = ligs._embedded.ligues;
      console.log(ligs);
    });
  }
  supprimerLigue(cat: Ligue) {
    let conf = confirm('Etes-vous sûr ?');
    if (conf) {
      this.equipeService.supprimerLigue(cat.idLigue).subscribe(() => {
        console.log('Ligue supprimée');
        this.chargerLigues();
      });
    }
  }

 
}
