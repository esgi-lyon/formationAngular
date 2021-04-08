export default class {
  constructor(
    public title: string,
    public num: number,
    public icon: string,
    public state: string = 'info',
    public symbol: string = '',
    public lastRefresh: Date | null = null
  ) {};
}
