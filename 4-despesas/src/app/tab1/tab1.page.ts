import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, ReactiveFormsModule],
})
export class Tab1Page {

  formgroup : FormGroup

  constructor(private formbuilder : FormBuilder) {
    this.formgroup = formbuilder.group({
      motivo: ['', [Validators.required, Validators.minLength(2)]], //[valor inicial, [validações]]
      valor: ['',[Validators.required, Validators.min(1)]],
      tipo : [],
      data : []
    })


  }

  adicionar(){

  }

  ver(){

  }

  limpar(){

  }
} 
