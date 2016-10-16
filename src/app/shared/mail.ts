export class Mail {
    uid: number;
    sender: string;
    subject: string;
    message: string;
    time_sent: number;
    time_formatted: string;
    hasBeenRead: boolean;

    constructor(
        private obj: any
    ) {
        Object.assign(this, this.setDefaults(obj));
    }

    setDefaults(obj: any) {
        if (!obj.hasOwnProperty('hasBeenRead')) {
            obj.hasBeenRead = false;
        }
        return obj;
    }
}
