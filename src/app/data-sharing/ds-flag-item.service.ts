import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DsFlagItemService {

  constructor() { }

  private dsFlagItems = new BehaviorSubject([]);
  flagItems = this.dsFlagItems.asObservable();

  setDataSource(data) {
    this.dsFlagItems.next(data);
  }

  getFlagItem(id) {
    return this.flagItems.pipe(
      take(2),
      map(result => result.filter(res => [res.RefFlag1Id, res.RefFlag2Id, res.RefFlag3Id].some(r => r == id)).slice(0,6))
    )
  }
}
