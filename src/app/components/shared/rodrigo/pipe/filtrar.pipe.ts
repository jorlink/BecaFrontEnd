import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrar'
})
export class FiltrarPipe implements PipeTransform {

  transform(value: any, args: any): any {
    const resultPosts = [];
    // tslint:disable-next-line:curly
    if (args === '') return value;
    for (const post of value){
      if(post.title.toLowerCase().indexOf(args.toLowerCase()) > -1){
        resultPosts.push(post);
      }
    }
    return resultPosts;
  }

}
