import * as moment from "moment";

export interface ITwitterMessage {
    created: Date;
    id: number;
    image: string;
    link: string;
    message: string;
    retweetCount: number;
    retweeted: boolean;
    userLink: string;
    userName: string;
    userScreenName: string;
}

export class TwitterMessage implements ITwitterMessage {
    created: Date;
    id: number;
    image: string;
    link: string;
    message: string;
    retweetCount: number;
    retweeted: boolean;
    userLink: string;
    userName: string;
    userScreenName: string;

    constructor(params: any) {
        this.created = this.parseDate(params.created_at);
        this.id = parseInt(params.id);
        this.image = (params.entities && params.entities.media && params.entities.media[0]) ? params.entities.media[0].media_url.replace(/^http:/, "") : null;
        this.message = params.text;
        this.retweetCount = parseInt(params.retweet_count);
        this.retweeted = params.retweeted ? true : false;
        this.link = "https://twitter.com/" + params.user.screen_name + "/status/" + params.id_str;
        this.userLink = params.user ? ("https://twitter.com/" + params.user.screen_name) : null;
        this.userName = params.user ? params.user.name : null;
        this.userScreenName = params.user ? params.user.screen_name : null;
    }     

    private parseDate(tweetDate: string) {
        return moment(tweetDate, "dd MMM DD HH:mm:ss ZZ YYYY", "en").toDate();
    }
}