interface ActionWithPayload<T> {
  type: string;
  payload: T;
}

interface Beer {}

interface BeerState {
  isLoading: boolean;
  beers: Beer[];
}
