import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'/// регистрирует в корневом модуле
})/// без него нельзя инжектировать
export class AppCounterService {
  counter = 0;

  constructor() { }

  increase() {
    this.counter++;
  }

  decrease() {
    this.counter--;
  }
}
