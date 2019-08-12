import {Deserializable} from './deserializable.model';
export class Rpatools {

    deserialize(input: any): this 
    {
        Object.assign(this, input);
        return this;
    }
    public toprpatools: [];
}
