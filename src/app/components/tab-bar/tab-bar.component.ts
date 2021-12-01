import { Component, OnInit } from '@angular/core';
import { SidePaneHelperService } from '../../services/side-pane-helper/side-pane-helper.service';
import { CommonService } from '../../services/common/common.service';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss'],
})
export class TabBarComponent implements OnInit {

  tabs = [
    { id: 1, icon: 'person-circle' },
    { id: 2, icon: 'chatbubble-ellipses' },
    { id: 3, icon: 'cog' }
  ]

  constructor(public _sphs: SidePaneHelperService, private _common: CommonService) { }

  ngOnInit() { }

  tabChange(id: number){
    this._sphs.activeTabID = id;
    this._common.navigate('/home', true);
  }

}
