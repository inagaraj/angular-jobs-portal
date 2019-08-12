import {Deserializable} from './deserializable.model';
export class Aboutspecial {
    deserialize(input: any): this 
    {
        Object.assign(this, input);
        return this;
    }
    public top_special_section: [];
    public bottom_special_section : [];
    
}
