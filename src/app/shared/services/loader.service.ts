import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  loaderState$ = new Subject();
  constructor() { }

  showLoader() {
    this.loaderState$.next(true);
  }

  hideLoader() {
    this.loaderState$.next(false);
  }
}
