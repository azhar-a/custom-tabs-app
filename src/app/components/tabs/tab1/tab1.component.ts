import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common/common.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.scss'],
})
export class Tab1Component implements OnInit {

  items = [
    { title: "lorem ipsum contact 1", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " },
    { title: "lorem ipsum contact 2", content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." },
    { title: "lorem ipsum contact 3", content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." }
  ]

  constructor(public _common: CommonService) { }

  ngOnInit() { }

  details(item: any) {
    this._common.active_tab_details = item;
    this._common.navigate('/home/details');
  }

}
