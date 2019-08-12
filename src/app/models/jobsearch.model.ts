import {Deserializable} from './deserializable.model';

export class Jobsearch {

    deserialize(input: any): this 
    {
        Object.assign(this, input);
        return this;
    }
    public id: number;
    public tool_name: string;
}
