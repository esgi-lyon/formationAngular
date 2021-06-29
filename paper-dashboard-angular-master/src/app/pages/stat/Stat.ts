export enum State {
  SUCCESS, DANGER, WARNING,
}

export default class {
  constructor(
    public id: string,
    public title: string,
    public value: number,
    public icon: string,
    public appreciation: State = State.SUCCESS,
    public updatedAt: Date | null = null
  ) {};
}
