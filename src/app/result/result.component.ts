import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../operations.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  public result = null;

  constructor(
    private operationsService: OperationsService
  ) { }

  ngOnInit() {
    this.operationsService.data$.subscribe(e => {
     this.result = e;
    });
  }

}