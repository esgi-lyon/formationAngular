export enum State {
  info, primary, danger, warning,
}

export default class {
  constructor(
    public title: string,
    public num: number,
    public icon: string,
    public state: State = State.info,
    public symbol: string = '',
    public lastRefresh: Date | null = null
  ) {};

  getStateStr() {
    return State[this.state]
  }
}
