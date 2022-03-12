import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from '../produtos';

@Component({
  selector: 'app-produtos-alertas',
  templateUrl: './produtos-alertas.component.html',
  styleUrls: ['./produtos-alertas.component.css']
})
export class ProdutosAlertasComponent implements OnInit {
  
  @Input() produto!: Produto;
  @Output() notifica = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
