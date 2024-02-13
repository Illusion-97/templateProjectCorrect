import { Component } from '@angular/core';
import { MiniPost } from 'src/app/models/mini-post';
import { MiniPostClass } from 'src/app/models/mini-post-class';
import { MiniPostClassDefault } from 'src/app/models/mini-post-class-default';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  aMiniPost: MiniPost = {
    href: 'UnLien',
    text: 'Lorem Ipsum',
    alt: 'alternatif',
    src: 'pic07.jpg'
  } 

  postArray: MiniPost[] = [
    {
      href: 'UnLien1',
      text: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam',
      alt: 'alternatif8',
      src: 'pic08.jpg'
    },
    {
      href: 'UnLien1',
      text: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam',
      alt: 'alternatifSansImage'
    },
    {
      href: 'UnLien2',
      text: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam',
      alt: 'alternatif9',
      src: 'pic09.jpg'
    }
  ]

  /*constructor() {
    this.aMiniPost.href = "Un Lien";
    this.aMiniPost.src = "uneImage.png"
  }*/

  afficherMiniPostText() {
    alert(this.aMiniPost.text)
  }

  reagirAuChangementDeTexte(value : any) {
    this.aMiniPost.text = value
  }
}
