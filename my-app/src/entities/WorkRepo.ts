import { Work } from "../entities/Work";
import { Repository } from "./Repository";

export class WorkRepo implements Repository<Work> {
    public getAll(): Work[] {
        return [
            new Work("Good work", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Business", "05.05.1995"),
            new Work("Bad work", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Entertainment", "06.06.1996"),
            new Work("Super work", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Money", "07.07.1997"),
        ];
    }
}