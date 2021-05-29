export class Post {
    private _userId: number;
    private _id: number;
    private _title: string;
    private _body: string;

    constructor(userId: number, id: number, title: string, body: string) {
        this._userId = userId;
        this._id = id;
        this._title = title;
        this._body = body;
    }

    get userId(): number {
        return this._userId;
    }

    set userId(userId: number) {
        this._userId = userId;
    }

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get title(): string {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }

    get body(): string {
        return this._body;
    }

    set body(body: string) {
        this._body = body;
    }
}