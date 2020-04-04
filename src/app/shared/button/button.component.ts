import { Component, Input, OnInit, Output, EventEmitter, HostListener } from '@angular/core';

enum ButtonSize { Small = 'small', Medium = 'medium', Large = 'large' }
enum ButtonStyle { Circle = 'circle', Square = 'square' }

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input()
  size: ButtonSize = ButtonSize.Large;

  @Input()
  style: ButtonStyle = ButtonStyle.Circle;

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
  internalSize: string;
  iconFontSize: string;
  iconPadding: string;
  borderRadius: string;

  ngOnInit(): void {
    this.currentColor = this.color;
    this.borderRadius = this.style === ButtonStyle.Circle ? '50%' : '0%';

    switch (this.size) {
      case ButtonSize.Small:
        this.internalSize = '20px';
        this.iconFontSize = '20px';
        this.iconPadding = '3px';
        break;
      case ButtonSize.Medium:
        this.internalSize = '30px';
        this.iconFontSize = '24px';
        this.iconPadding = '0px';
        break;
      case ButtonSize.Large:
        this.internalSize = '40px';
        this.iconFontSize = '24px';
        this.iconPadding = '0px';
        break;
    }
  }

  onMouseClick(evt: Event): void {
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

}
