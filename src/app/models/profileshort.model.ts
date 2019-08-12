import {Deserializable} from './deserializable.model';
export class Profileshort {
    deserialize(input: any): this 
    {
        Object.assign(this, input);
        return this;
    }
    public jobseekers: [];
    
}
