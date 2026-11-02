import { Component, Input } from '@angular/core';
@Component({
  imports: 
  [
    
  ],
  selector: 'app-default-login-layout',
  styleUrl: './default-login-layout.scss',
  templateUrl: './default-login-layout.html',
})
export class DefaultLoginLayout {
  @Input() title: string = "";
  @Input() primaryBtnText: string = "";
  @Input() secondaryBtnText: string = "";
}
