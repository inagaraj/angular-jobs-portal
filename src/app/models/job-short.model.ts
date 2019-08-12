import {Deserializable} from './deserializable.model';

export class JobShort {
    deserialize(input: any): this
    {
        Object.assign(this, input);
        return this;
    }
// tslint:disable-next-line: member-ordering
    public id: number;
// tslint:disable-next-line: member-ordering
    public logoImgPath: string;
// tslint:disable-next-line: member-ordering
    public desc: string;
// tslint:disable-next-line: member-ordering
    public title: string;
// tslint:disable-next-line: member-ordering
    public premium: boolean;
// tslint:disable-next-line: member-ordering
    public postedOn: string;
// tslint:disable-next-line: member-ordering
    public experience: [];
// tslint:disable-next-line: member-ordering
    public salary: [];
// tslint:disable-next-line: member-ordering
    public location: string;
    public tools: [];
}
