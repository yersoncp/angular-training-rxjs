import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class OperationsService {

  private _dataSource = new BehaviorSubject<number>(0);
  public data$ = this._dataSource.asObservable();

  constructor() { }

  public calculate(n1, n2) {
    this._dataSource.next(n1 + n2);
  }

}