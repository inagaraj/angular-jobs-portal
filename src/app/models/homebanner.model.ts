import {Deserializable} from './deserializable.model';
export class Homebanner {

    deserialize(input: any): this 
    {
        Object.assign(this, input);
        return this;
    }
    public jobs_count: string;
    public profiles_count : string;
    public companies_count : string;
}
