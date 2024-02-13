import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  // Information dénenue par un composant
  parentValue: string = "Parent Value";
  personnalValue: number = 10;

  // Pour réagir à un evenement déclanché par un composant enfant, on peut avoir une méthode AVEC ou SANS paramètres
  reactToEvent(valeur: string, autreValeur: number = 5) {
    console.log(valeur)
    this.parentValue = valeur;
  }
}
