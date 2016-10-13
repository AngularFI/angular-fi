export interface IMeetupGroup {
    created: Date;
    id: number;
    join_mode: string;
    lat: number;
    lon: number;
    name: string;
    urlname: string;
    who: string;
}

export class MeetupGroup implements IMeetupGroup {
    created: Date;
    id: number;
    join_mode: string;
    lat: number;
    lon: number;
    name: string;
    urlname: string;
    who: string;

    constructor(params: any) {
        this.created = new Date(params.created);
        this.id = parseInt(params.id, 10);
        this.join_mode = params.join_mode;
        this.lat = parseFloat(params.lat);
        this.lon = parseFloat(params.lon);
        this.name = params.name;
        this.urlname = params.urlname;
        this.who = params.who;
    }
}
