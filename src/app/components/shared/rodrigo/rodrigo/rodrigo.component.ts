import { Component, OnInit } from '@angular/core';
import { PostserviceService } from '../services/postservice.service';
import { FiltrarPipe } from '../pipe/filtrar.pipe';

@Component({
  selector: 'app-rodrigo',
  templateUrl: './rodrigo.component.html',
  styleUrls: ['./rodrigo.component.css']
})
export class RodrigoComponent implements OnInit {
  condicional:boolean;
  filtro:string;
  FilterPost;
  posts;
  constructor(
    public PostService: PostserviceService
  
  )
  {
    
    this.condicional =true;
    
  }
  ngOnInit() {

    this.PostService.llamame().subscribe((data)=>{
      this.posts=data;
      console.log(data);
  

    });
    
  }
  filtrar(filtro){
  }
}
