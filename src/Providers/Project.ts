import { ICapability } from "./Capability";
import { Customer, CustomerGroup } from "./Customers";
import { Rating } from "./Ratings";

export class Project {
    public capabilities: ICapability[] = [];
    public customerGroups: CustomerGroup[] = [];
    public ratings: Rating[] = [];

    public save(name: string) {
        localStorage.setItem(name, this.serialize());
    }

    private serialize() {
        return JSON.stringify(this);
    }
}