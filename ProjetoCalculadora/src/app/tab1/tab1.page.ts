import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { concat } from 'rxjs';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent],
})
export class Tab1Page {

  num : number;
  expressao: string;
  resultado: number;

  constructor() {
    this.num = 0
    this.expressao = ''
    this.resultado = 0 

  }

  limpar(){
    this.expressao = ''
  
  }

  addNum(num: number){
    this.expressao += num ;
  }

  addParentesisL(){
    let valor = "("
    this.expressao += valor ;
  }

  addParentesisR(){
    let valor = ")"
    this.expressao += valor ;
  }

  addSoma(){
    this.expressao += " + " ;
  }

  addSubtracao(){
    this.expressao += " - " ;
  }

  addMultiplicacao(){
    this.expressao += " X " ;
  }

  addDivisao(){
    this.expressao += " / " ;
  }

  calcular(){
    this.expressao = ''
  }

}
