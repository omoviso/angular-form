import { TestBed } from '@angular/core/testing';

import { AuthContentService } from './auth-content.service';

describe('AuthContentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthContentService = TestBed.get(AuthContentService);
    expect(service).toBeTruthy();
  });
});
