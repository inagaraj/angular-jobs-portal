import {Deserializable} from './deserializable.model';
export class Topcompanies {
    public topcompanies: [];

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
