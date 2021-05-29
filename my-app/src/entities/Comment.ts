export class Comment {
    private _postId: number;
    private _id: number;
    private _name: string;
    private _email: string;
    private _body: string;

    constructor(postId: number, id: number, name: string, email: string, body: string) {
        this._postId = postId;
        this._id = id;
        this._name = name;
        this._email = email;
        this._body = body;
    }

    get postId(): number {
        return this._postId;
    }

    set postId(postId: number) {
        this._postId = postId;
    }

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get email(): string {
        return this._email;
    }

    set email(email: string) {
        this._email = email;
    }

    get body(): string {
        return this._body;
    }

    set body(body: string) {
        this._body = body;
    }
}