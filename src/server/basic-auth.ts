import auth = require('http-auth');

export class BasicAuth {
    realm: string;
    username: string;
    password: string;

    constructor() {
        console.log("*** ENABLING BASIC AUTHENTICATION ***");
    }

    connect(): any {
        return auth.connect(this.credentials());
    }

    private credentials(): any {
        return auth.basic({
            realm: process.env.BASIC_AUTH_REALM || "Unknown Realm"
        }, this.checker);
    }

    private checker(
        username: string,
        password: string,
        callback: Function
    ): void {
        // Return success if username and password match
        callback(
            (username === process.env.BASIC_AUTH_USER || !process.env.BASIC_AUTH_USER)
            && (password === process.env.BASIC_AUTH_PASS || !process.env.BASIC_AUTH_PASS)
        );
    }
}
