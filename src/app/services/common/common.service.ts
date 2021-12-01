import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  active_tab_details = {};

  constructor(private router: Router) { }

  navigate(route: string, root?: boolean) {
    this.router.navigate([route], { replaceUrl: root, });
  }
}
