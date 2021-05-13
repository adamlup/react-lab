export class Workspace {
    private _title: string;
    private _type: string;
    private _numberOfUsers: number;
    private _lastUpdated: string;

    constructor(title: string, type: string, numberOfUsers: number, lastUpdated: string) {
        this._title = title;
        this._type = type;
        this._numberOfUsers = numberOfUsers;
        this._lastUpdated = lastUpdated;
    }

    public get title(): string {
        return this._title;
    }

    public set title(title: string) {
        this._title = title;
    }

    public get type(): string {
        return this._type;
    }

    public set type(type: string) {
        this._type = type;
    }

    public get numberOfUsers(): number {
        return this._numberOfUsers;
    }

    public set numberOfUsers(numberOfUsers: number) {
        this._numberOfUsers = numberOfUsers;
    }

    public get lastUpdated(): string {
        return this._lastUpdated;
    }

    public set lastUpdated(lastUpdated: string) {
        this._lastUpdated = lastUpdated;
    }
}