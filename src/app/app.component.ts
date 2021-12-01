import { Component } from '@angular/core';
import { SidePaneHelperService } from './services/side-pane-helper/side-pane-helper.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(public _sphs: SidePaneHelperService) { }

  onSplitPaneChange(e: any) {
    this._sphs.sidepaneVisibility = e.detail.visible;
    console.log(e.detail.visible);
  }
}