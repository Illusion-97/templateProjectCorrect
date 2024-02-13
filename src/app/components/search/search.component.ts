import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Input() 
  text: string = ''

  @Output() // Prépare à envoyer une information au composant parent
  textChange: EventEmitter<string> = new EventEmitter<string>(); // Le type d'un Output est TOUJOURS EventEmiter<typeEvent>
   
  afficherInputValue(event: any) {
    this.text = event.target.value
    // On déclenche l'evenement de trasmission par la fonction emit de l'EventEmitter
    this.textChange.emit(this.text)
  }

  /*checkText(value: string, remplacement: string = 'Aucun texte') {
    // Valeurs dites 'Falsy'
    // string -> undefined / null / ''
    // number -> undefined / null / 0
    return value || remplacement
  }*/
}
