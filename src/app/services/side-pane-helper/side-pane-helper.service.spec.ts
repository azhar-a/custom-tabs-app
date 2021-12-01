import { TestBed } from '@angular/core/testing';

import { SidePaneHelperService } from './side-pane-helper.service';

describe('SidePaneHelperService', () => {
  let service: SidePaneHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidePaneHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
