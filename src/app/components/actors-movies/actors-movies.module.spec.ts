import { ActorsMoviesModule } from './actors-movies.module';

describe('ActorsMoviesModule', () => {
  let actorsMoviesModule: ActorsMoviesModule;

  beforeEach(() => {
    actorsMoviesModule = new ActorsMoviesModule();
  });

  it('should create an instance', () => {
    expect(actorsMoviesModule).toBeTruthy();
  });
});
