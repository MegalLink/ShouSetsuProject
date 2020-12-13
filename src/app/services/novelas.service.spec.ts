import { TestBed } from '@angular/core/testing';

import { NovelasService } from './novelas.service';

describe('NovelasService', () => {
  let service: NovelasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NovelasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
