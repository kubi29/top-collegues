import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: number, args?: string): string {

    if(value >0){
      return `<font   color='green'>`+"+"+value+'</label>';
    }else if (value <0 ){
      return `<font  color='red'>`+value+'</label>';
    }else {
      return " " + value ;
    }

  }

}
