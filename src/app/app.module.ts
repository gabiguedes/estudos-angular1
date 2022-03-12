import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { RouterModule } from '@angular/router';
import { ProdutosAlertasComponent } from './produtos-alertas/produtos-alertas.component';
import { ProdutosDetalhesComponent } from './produtos-detalhes/produtos-detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ListaProdutoComponent,
    ProdutosAlertasComponent,
    ProdutosDetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: ListaProdutoComponent },
      { path: 'produtos/:produtoId', component: ProdutosDetalhesComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
