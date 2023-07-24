import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'dd-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() buttonText: string = 'Anmelden ';
  @Input() buttonType: 'normal' | 'big' = 'normal';
  @Input() buttonDisable: boolean = false;
  @Output() buttonAction: EventEmitter<void> = new EventEmitter();

  onClick(): void {
    this.buttonAction.emit();
    console.log('Button clicked');
  }

}
