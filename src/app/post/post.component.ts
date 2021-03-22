import { Post } from './../app.component';
import {
  AfterContentInit,
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush, /// изменения в зависимотси от входных параметровя
  encapsulation: ViewEncapsulation.None /// отменяет инкапсуляцию стилей и делает стили глобальными
})
/// implets зависимост от жизненных циклов
export class PostComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  OnDestroy,
  AfterViewChecked
 {

  @Input() item: Post;
  @ContentChild('info', { static: true }) infoRef: ElementRef;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  /// в начале
  ngOnInit(): void {
    setTimeout(() => this.item.title = 'checked', 5000);
  }
  // самы первы
  ngDoCheck(): void {
  }

  // до получения контента
  ngAfterContentInit(): void {
  }

  /// после получени контента
  ngAfterContentChecked(): void {
  }

  /// дом
  ngAfterViewInit(): void {
  }
  /// дом отобразился
  ngAfterViewChecked(): void {
  }

  ngOnDestroy(): void {
  }

}
