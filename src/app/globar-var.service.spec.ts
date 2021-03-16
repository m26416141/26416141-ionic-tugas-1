import { TestBed } from '@angular/core/testing';

import { GlobarVarService } from './globar-var.service';

describe('GlobarVarService', () => {
  let service: GlobarVarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobarVarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
