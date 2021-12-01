import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidePaneHelperService {
  public sidepaneVisibility: boolean;
  public activeTabID = 1;
  
  constructor() { }
}
