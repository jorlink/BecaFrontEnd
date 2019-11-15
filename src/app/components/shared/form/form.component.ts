import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  filterform;

  constructor(
    public formBuilder: FormBuilder
  ) {
    this.filterform = this.formBuilder.group({
      name: '',
      body: ''
    });
  }

  ngOnInit() {
  }

}
