import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../operations.service';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {

  public n1 = 0;
  public n2 = 0;

  constructor(
    private operationsService: OperationsService
  ) { }

  ngOnInit() {
  }

  public sendCalculate(){
    this.operationsService.calculate(this.n1, this.n2);
  }

}