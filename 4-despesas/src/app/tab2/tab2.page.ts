import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Despesa } from '../model/despesa';
import { DespesaService } from '../model/despesa.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, CommonModule]
})
export class Tab2Page {

  listaDespesas: Despesa[]

  constructor(private despesasService : DespesaService) {
    this.listaDespesas = this.despesasService.obterDespesas();
  }





}

