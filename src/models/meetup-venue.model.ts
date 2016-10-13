export interface IMeetupVenue {
    address_1: string;
    city: string;
    country: string;
    id: number;
    lat: number;
    localized_country_name: string;
    lon: number;
    name: string;
    repinned: boolean;
}

export class MeetupVenue implements IMeetupVenue {
    address_1: string;
    city: string;
    country: string;
    id: number;
    lat: number;
    localized_country_name: string;
    lon: number;
    name: string;
    repinned: boolean;

    constructor(params: any) {
        this.address_1 = params.address_1;
        this.city = params.city;
        this.country = params.country;
        this.id = parseInt(params.id, 10);
        this.lat = parseFloat(params.lat);
        this.localized_country_name = params.localized_country_name;
        this.lon = parseFloat(params.lon);
        this.name = params.name;
        this.repinned = params.repinned;
    }
}
