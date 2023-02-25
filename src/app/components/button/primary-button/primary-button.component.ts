import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss']
})
export class PrimaryButtonComponent {

  private _onClick!: EventEmitter<any>;
  private _type!: 'square-button' | 'arrow-button';
  private _theme!: 'default' | 'dark';
  private _label!: string;

  constructor() {
    this._onClick = new EventEmitter<any>();
    this._label = "";
  }

  @Input()
  set type(value: 'square-button' | 'arrow-button') {
    this._type = value;
  }

  @Input()
  set theme(value: 'default' | 'dark') {
    this._theme = value;
  }

  get label(): string {
    return this._label;
  }
  
  @Input()
  set label(value: string) {
    this._label = value;
  }

  @Output()
  get onClick(): EventEmitter<any> {
    return this._onClick;
  }

}
