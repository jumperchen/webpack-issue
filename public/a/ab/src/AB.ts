export class AB {
	private _value: string;
	public constructor(value: string) {
		this._value = value;
	}
	public getValue(): string {
		return this._value;
	}
}