import {ChangeDetectionStrategy, Component} from '@angular/core';
import {environment} from '../../../../../environments/environment';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-logo',
  styleUrls: ['./logo.component.scss'],
  templateUrl: './logo.component.html',
})
export class LogoComponent {
  public logoText = environment.logoText;
}
