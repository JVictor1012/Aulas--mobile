import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { TipoDespesa } from '../model/despesa';
import { DespesaService } from '../model/despesa.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, ReactiveFormsModule, CommonModule /*para o ngFor*/],
})
export class Tab1Page {

  formgroup : FormGroup
  tipo : string[]
  concluida : boolean;

  constructor(private despesasService : DespesaService,
              private formbuilder : FormBuilder, 
              private router: Router) {

    this.formgroup = formbuilder.group({
      motivo: ['', [Validators.required, Validators.minLength(2)]], //[valor inicial, [validações]]
      valor: ['',[Validators.required, Validators.min(1)]],
      tipo : [TipoDespesa.OUTROS, [Validators.required]],
      data : [new Date().toISOString()]
    })

    this.tipo = Object.values(TipoDespesa)
    this.concluida = false;
    

  }

  adicionar(){
    
    const despesa = this.formgroup.value
    if( despesa != null){
      this.despesasService.adicionar(despesa)
      console.log(this.despesasService.despesas)
    }  
  }

  ver(){
    this.router.navigate(['tabs/tab2'])
  }

  limpar(){
    this.formgroup.setValue(
      {
      motivo: '', 
      valor : 0, 
      tipo : '',
      data : new Date().toISOString(),
      });
  }
} 
