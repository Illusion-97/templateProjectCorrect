import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent {
  @Input() // Cette annotation est nécessaire pour que le composant sibling RECOIVE quelque chose du parent
  siblingValue: string = "Sibling Value" // nomDeVariable: Type = valeur
  // Ceci crée pour la balise correspondant au selecteur de l'sibling un attribut à renseigner
  // Point important l'attribut pour le nom de la variable

  @Output() // Il s'agit de préparer le composant sibling à NOTIFIER le parent d'un évènement
  siblingValueChange: EventEmitter<string> = new EventEmitter<string>()
  // L'evenement peut TRANSMETTRE une information, d'ou le type de l'EventEmitter<TypeInformation>

  notifyParent() {
    this.siblingValueChange.emit("New Sibling Value"); 
    // Lors de la transmission, $event représente ce qu'il y a dans le emit($event)
  }
}
