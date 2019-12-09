import { BehaviorSubject, Observable } from 'rxjs';
import { CleanableContainer } from './cleanable-container';


export abstract class DataContainerService<T> implements CleanableContainer {
  protected constructor(data: T = null) {
    this._data = data;
    this._data$ = new BehaviorSubject<T>(this._data);
  }

  private _data: T;

  protected get data(): T {
    return this._data;
  }

  private _data$: BehaviorSubject<T>;

  protected get data$(): Observable<T> {
    return this._data$;
  }

  public clean(): void {
    if (Array.isArray(this._data)) {
      // @ts-ignore
      this.updateData([]);
    } else {
      this.updateData(null);
    }
  }

  protected updateData(data: T): void {
    this._data = data;
    this._data$.next(this._data);
  }
}
