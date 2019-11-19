import { Component, OnInit, Output } from '@angular/core';
import { PostserviceService } from '../services/postservice.service';
import { User } from '../models/user';
import { FiltrarPipe } from '../pipe/filtrar.pipe';
import { Posts } from '../models/posts';

@Component({
  selector: 'app-rodrigo',
  templateUrl: './rodrigo.component.html',
  styleUrls: ['./rodrigo.component.css']
})
export class RodrigoComponent implements OnInit {
  condicional:boolean;
  filtro:string;
  FilterPost;
  posts:Posts;
  user:User;
  constructor(
    public PostService: PostserviceService
  )
  {
    
    this.condicional =true;
    
  }
  ngOnInit() {

    this.PostService.Posts().subscribe((data)=>{
      this.posts=data;
      console.log(data);
  

    });
    
  }
  EnviarID(params){
    this.PostService.BuscarUser(params).subscribe((data)=>{
      this.user=data[0];
      console.log(this.user);
  })
   }
   FiltrarId(event){
     console.log(event);
     this.posts=(event);
     
   }


}