export class TestLazyService {

  private _counter = 0;

  set counter(value: number) {
    this._counter = value;
  }

  get counter() {
    return this._counter;
  }

}
