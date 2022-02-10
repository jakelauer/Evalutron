export class CustomerGroup {
    public readonly id: string;

    constructor(id: string) {
        this.id = id;
    }
}

export class Customer extends CustomerGroup {
    public readonly groupKey: string = this.id;
}