export class Work {
    private _title: string;
    private _contents: string;
    private _type: string;
    private _lastUpdated: string;

    constructor(title: string, contents: string, type: string, lastUpdated: string) {
        this._title = title;
        this._contents = contents;
        this._type = type;
        this._lastUpdated = lastUpdated;
    }

    public get title(): string {
        return this._title;
    }

    public set title(title: string) {
        this._title = title;
    }

    public get contents(): string {
        return this._contents;
    }

    public set contents(contents: string) {
        this._contents = contents;
    }
    
    public get type(): string {
        return this._type;
    }

    public set type(type: string) {
        this._type = type;
    }

    public get lastUpdated(): string {
        return this._lastUpdated;
    }

    public set lastUpdated(lastUpdated: string) {
        this._lastUpdated = lastUpdated;
    }

}