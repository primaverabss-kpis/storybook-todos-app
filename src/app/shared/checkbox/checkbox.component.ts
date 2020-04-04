import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {

  @Input()
  public checked: boolean = false;

  @Output()
  change: EventEmitter<boolean> = new EventEmitter<boolean>();
  showIcon: boolean;

  onMouseClick(evt: Event): void {
    this.checked = !this.checked;
    this.change.emit(this.checked);

  }
}
