import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

export enum ButtonType {
  normal = 'normal',
  outline = 'outline'
}

@Component({
  selector: 'dd-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() buttonText: string = 'Anmelden ';
  @Input() buttonType: ButtonType = ButtonType.normal;
  @Input() bigButton: boolean = false;
  @Input() buttonDisable: boolean = false;
  @Input() link: string | RouterLink = undefined;
  @Input() externalLink: boolean = false;

  @Output() buttonAction: EventEmitter<void> = new EventEmitter();

  onClick(): void {
    this.buttonAction.emit();
  }

}
