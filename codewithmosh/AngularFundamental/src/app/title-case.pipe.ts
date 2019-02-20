import { Pipe, PipeTransform } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if(!value) return null;
    
    let words = value.split(' ');
    
    // for(let i = 0; i< words.length; i++){
    //  words[i] = this.toTitleCase(words[i]);
    // }

    words = words.map(word=>{return this.toTitleCase(word);})
    return words.join(' ');
  }

    private isPreposition(word:string):boolean{
      let prepositions = ['of', 'in', 'on', 'at', 'the'];
      return prepositions.includes(word);
    }

    private toTitleCase(word:string):string{
      if(this.isPreposition(word))
      {
        return word.toLowerCase();
      }
      else
      {
        return word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase();
      }
    }
}
