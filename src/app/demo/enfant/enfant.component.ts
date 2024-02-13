import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent {
  @Input() // Cette annotation est nécessaire pour que le composant enfant RECOIVE quelque chose du parent
  enfantValue: string = "Enfant Value" // nomDeVariable: Type = valeur
  // Ceci crée pour la balise correspondant au selecteur de l'enfant un attribut à renseigner
  // Point important l'attribut pour le nom de la variable

  @Output() // Il s'agit de préparer le composant enfant à NOTIFIER le parent d'un évènement
  enfantValueChange: EventEmitter<string> = new EventEmitter<string>()
  // L'evenement peut TRANSMETTRE une information, d'ou le type de l'EventEmitter<TypeInformation>

  notifyParent() {
    this.enfantValueChange.emit(this.enfantValue); 
    // Lors de la transmission, $event représente ce qu'il y a dans le emit($event)
  }
}
