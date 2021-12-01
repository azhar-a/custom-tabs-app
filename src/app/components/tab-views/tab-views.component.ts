import { Component, OnInit } from '@angular/core';
import { SidePaneHelperService } from '../../services/side-pane-helper/side-pane-helper.service';

@Component({
  selector: 'app-tab-views',
  templateUrl: './tab-views.component.html',
  styleUrls: ['./tab-views.component.scss'],
})
export class TabViewsComponent implements OnInit {

  constructor(public _sphs: SidePaneHelperService) { }

  ngOnInit() {}

}
