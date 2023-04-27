import { Injectable } from '@angular/core';
import { Despesa } from './despesa';

@Injectable({
  providedIn: 'root'
})

//serviço para guardar as despesas//

export class DespesaService {

  despesas : Despesa[];

  constructor() {
    this.despesas = []
   }

   adicionar(desp: Despesa) :boolean{
    if (desp != null){
      this.despesas.push(desp);
      return true;
    }else{
      return false
    }
    
    
   }

   obterDespesas() : Despesa[]{
    return this.despesas;
   }
}
