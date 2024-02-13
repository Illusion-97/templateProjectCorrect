import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'check'
})
export class CheckPipe implements PipeTransform {

  /* Dans l'ordre
   value (le premier paramètre de la fonction) est forcément ce qui se trouve avant le pipe (|)
   ...args est toujours un tableau qui recoit tout ce qui est placé apres le nom du pipe et séparé par :
   Pour spécifier un parametre précis qu'on doit retrouver dans args, on définis simplement un parametre juste avant le tableau
   De ce fait, les parametres supplémentaires sont traités dans l'ordre
   Supprimer le tableau apres une definition de parametres permet de limiter leur nombre
  */
  transform(value: string, remplacement: string = 'Aucun texte'): string {
    return value || remplacement;
  }

}
