import {Deserializable} from './deserializable.model';
export class Avgsalary 
{
    deserialize(input: any): this 
    {
        Object.assign(this, input);
        return this;
    }
    public salary: string;
    
}
