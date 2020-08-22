import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntersectionObserverService {

  constructor() { }

  createObserver(htmlElement: HTMLElement, options?: IntersectionObserverInit): SubjectObserver {
    return new SubjectObserver(htmlElement, options);
  }

}

export class SubjectObserver {

  private _observer: IntersectionObserver;

  private _intersecting: Subject<boolean> = new Subject<boolean>();

  constructor(private htmlElement: HTMLElement, options?: IntersectionObserverInit) {
    this._observer = new IntersectionObserver(this._handelEntries.bind(this), options);
    this._observer.observe(htmlElement);
  }

  whenIntersecting(): Observable<boolean> {
    return this._intersecting.asObservable();
  }

  stopObserving(): void {
    this._observer.unobserve(this.htmlElement);
  }

  disconnect(): void {
    this._observer.disconnect();
  }

  private _handelEntries(entries: IntersectionObserverEntry[]): void {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        this._intersecting.next(entry.isIntersecting);
      }
    });
  }
}
