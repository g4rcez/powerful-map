export default class PowerfulMap<K extends object, V> extends WeakMap<K, V> {
  private map: Map<K, V>;
  public [Symbol.toStringTag]: string;

  public constructor() {
    super();
    this.map = new Map<K, V>();
  }

  public delete(key: K): boolean {
    return this.map.delete(this.key(key));
  }

  public get(key: K): V | undefined {
    const k = this.map.get(this.key(key));
    return k;
  }

  private key(k: K): K {
    return Symbol.for(`${Object.entries(k)}`) as any;
  }

  public set(key: K, val: V) {
    const k = this.key(key);
    this.map.set(k, val);
    return this;
  }

  public has(key: K): boolean {
    const k = this.key(key);
    return this.map.has(k);
  }
}
