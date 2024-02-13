import { Component, Input } from '@angular/core';
import { MiniPost } from 'src/app/models/mini-post';
import { MiniPostClass } from 'src/app/models/mini-post-class';
import { MiniPostClassDefault } from 'src/app/models/mini-post-class-default';

@Component({
  selector: 'app-mini-post',
  templateUrl: './mini-post.component.html',
  styleUrls: ['./mini-post.component.css']
})
export class MiniPostComponent {
  /*@Input() // Prépare le composant à RECEVOIR une information de celui qui l'apelle
  href: string = "#" // Toute valeur définie apres un @Input agit comme valeur par défaut dans le cas ou aucune information n'est fournie
  @Input()
  text: string = "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam."
  @Input()
  src: string = "assets/images/pic07.jpg"
  @Input()
  alt: string = ""*/


  /*@Input()
  miniPostClass : MiniPostClass = new MiniPostClass("#", "Texte Class", "Alt class", "image Class")*/

  /*@Input()
  miniPostClass : MiniPostClassDefault = new MiniPostClassDefault()*/

  @Input()
  miniPost: MiniPost = {
    href: '',
    text: '',
    alt: ''
  }
}
