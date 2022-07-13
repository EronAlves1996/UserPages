import { TestBed } from '@angular/core/testing';

import { ToolbarRouterService } from './toolbar-router.service';

describe('ToolbarRouterService', () => {
  let service: ToolbarRouterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolbarRouterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
