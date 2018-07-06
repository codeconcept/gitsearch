import { RepoModule } from './repo.module';

describe('RepoModule', () => {
  let repoModule: RepoModule;

  beforeEach(() => {
    repoModule = new RepoModule();
  });

  it('should create an instance', () => {
    expect(repoModule).toBeTruthy();
  });
});
