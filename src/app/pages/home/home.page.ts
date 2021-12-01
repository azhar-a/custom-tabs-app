import { Component } from '@angular/core';
import { SidePaneHelperService } from '../../services/side-pane-helper/side-pane-helper.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public _sphs: SidePaneHelperService) {}

}
