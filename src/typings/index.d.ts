/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface ActionWithPayload<T> {
  type: string;
  payload: T;
}

interface Beer {}

interface BeerState {
  isLoading: boolean;
  beers: Beer[];
}
