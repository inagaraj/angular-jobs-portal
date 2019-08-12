import {Deserializable} from './deserializable.model';
export class About {
    public aboutusIcons: [];

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
