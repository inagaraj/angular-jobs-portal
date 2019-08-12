import {Deserializable} from './deserializable.model';
export class Latestjobspotlight {
    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
    public latestjobs: [];
    public toptools: [];
}
