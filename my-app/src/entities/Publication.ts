export class Publication {
    private _title: string;
    private _date: string;
    private _userName: string;

    constructor(title: string, date: string, userName: string) {
        this._title = title;
        this._date = date;
        this._userName = userName;
    }

    get title(): string {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }

    get date(): string {
        return this._date;
    }

    set date(date: string) {
        this.date = date;
    }

    get userName(): string {
        return this._userName;
    }

    set userName(userName: string) {
        this._userName = userName;
    }
}