import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ligue } from '../model/ligue.model';

@Component({
  selector: 'app-update-ligue',
  templateUrl: './update-ligue.component.html',
})
export class UpdateLigueComponent implements OnInit {
  @Input() ligue!: Ligue;
  @Input() ajout!: boolean;

  @Output() ligueUpdated = new EventEmitter<Ligue>();

  constructor() {}

  ngOnInit(): void {}

  saveLigue() {
    this.ligueUpdated.emit({ ...this.ligue }); // Use spread operator to avoid reference issues
  }

  modeAjout() {
    this.ajout = true;
    this.ligue.idLigue = 0;
    this.ligue.nomLigue = '';
  }
}
