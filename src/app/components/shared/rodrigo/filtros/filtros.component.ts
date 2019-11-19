import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PostserviceService } from '../services/postservice.service';
import { Posts } from '../models/posts';



@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})

export class FiltrosComponent implements OnInit {
 posts: Posts;
 @Output() Filtrar = new EventEmitter();
  constructor(

    private Postservice: PostserviceService
  )
  {
  }
  ngOnInit() {

  }

  EnviarId(id){
    this.Postservice.FiltroID(id).subscribe((data:Posts)=>{
      this.posts=data;
      console.log(this.posts);
      this.Filtrar.emit(this.posts);
    });
    
    
  }

}
