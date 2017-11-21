import { Pipe, PipeTransform } from '@angular/core';
import { Collegue } from '../domain/collegue';

@Pipe({
  name: 'nom'
})
export class NomPipe implements PipeTransform {

  transform(arg: Array<Collegue>, args?: string): Array<Collegue> {
    return arg.filter(c => c.nom.startsWith(args))
  }

}
