export class User {
    private _id: number;
    private _name: string;
    private _userName: string;
    private _email: string;
    private _phone: string;
    private _website: string;
    private _companyName: string;
    private _city: string;

    constructor(id: number, name: string, userName: string, email: string, phone: string, website: string, companyName: string, city: string) {
        this._id = id;
        this._name = name;
        this._userName = userName;
        this._email = email;
        this._phone = phone;
        this._website = website;
        this._companyName = companyName;
        this._city = city;
    }

    public get id(): number {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get userName(): string {
        return this._userName;
    }

    public set userName(userName: string) {
        this._userName = userName;
    }

    public get email(): string {
        return this._email;
    }

    public set email(email: string) {
        this._email = email;
    }

    public get phone(): string {
        return this._phone;
    }

    public set phone(phone: string) {
        this._phone = phone;
    }

    public get website(): string {
        return this._website;
    }

    public set website(website: string) {
        this._website = website;
    }

    public get companyName(): string {
        return this._companyName;
    }

    public set companyName(companyName: string) {
        this._companyName = companyName;
    }

    public get city(): string {
        return this._city;
    }

    public set city(city: string) {
        this._city = city;
    }
}