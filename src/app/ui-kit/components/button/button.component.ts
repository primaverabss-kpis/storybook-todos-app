import { Component, Input, OnInit, Output, EventEmitter, HostListener, OnChanges, SimpleChanges } from '@angular/core';

enum ButtonSize { Small = 'small', Medium = 'medium', Large = 'large' }
enum ButtonStyle { Circle = 'circle', Square = 'square' }

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, OnChanges {

  @Input()
  size: ButtonSize = ButtonSize.Large;

  @Input()
  style: ButtonStyle = ButtonStyle.Circle;

  @Input()
  bgColor: string = 'none';

  @Input()
  color: string = 'black';

  @Input()
  hoverColor: string;

  @Input()
  strokeWidth: string = '1px';

  @Input()
  icon: string;

  @Input()
  iconVisible: boolean = true;

  @Output()
  click: EventEmitter<Event> = new EventEmitter<Event>();

  currentColor: string;
  fontSize: string;
  borderRadius: string;

  ngOnInit(): void {
    this.updateStyles();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateStyles();
  }

  onMouseClick(evt: MouseEvent): void {
    this.click.emit(evt);
    evt.stopPropagation();
  }

  onMouseEnter(evt: Event): void {
    if (this.hoverColor) {
      this.currentColor = this.hoverColor;
    }
    evt.stopPropagation();
    evt.preventDefault();
  }

  onMouseLeave(evt: Event): void {
    this.currentColor = this.color;
    evt.stopPropagation();
    evt.preventDefault();
  }

  private updateStyles() {
    this.currentColor = this.color;
    this.borderRadius = this.style === ButtonStyle.Circle ? '50%' : '0%';

    switch (this.size) {
      case ButtonSize.Small:
        this.fontSize = '20px';
        break;
      case ButtonSize.Medium:
        this.fontSize = '30px';
        break;
      case ButtonSize.Large:
        this.fontSize = '40px';
        break;
    }
  }
}
