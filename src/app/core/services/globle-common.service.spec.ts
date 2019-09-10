import { TestBed } from '@angular/core/testing';

import { GlobleCommonService } from './globle-common.service';

describe('GlobleCommonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobleCommonService = TestBed.get(GlobleCommonService);
    expect(service).toBeTruthy();
  });
});
