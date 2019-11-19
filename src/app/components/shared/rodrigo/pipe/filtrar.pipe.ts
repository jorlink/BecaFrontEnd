import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrar'
})
export class FiltrarPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const resultPosts=[];
    if(args == '') return value;
    for(let post of value){
      if(post.title.toLowerCase().indexOf(args.toLowerCase()) > -1){
        resultPosts.push(post);

      };
    };
    return resultPosts;
  }

}
