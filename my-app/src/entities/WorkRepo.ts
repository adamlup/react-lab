import { Work } from "../entities/Work";
import { Repository } from "./Repository";

export class WorkRepo implements Repository<Work> {
    public getAll(): Work[] {
        return [
            new Work("Contract #145", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Corporate", "Updated 3 days ago by John Doe"),
            new Work("Contract #145", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Supplier contract", "Updated 3 days ago by John Doe"),
            new Work("Contract #145", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Client contract", "Updated 3 days ago by John Doe"),
            new Work("Contract #145", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Client contract", "Updated 3 days ago by John Doe"),
            new Work("Contract #145", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Client contract", "Updated 3 days ago by John Doe"),
            new Work("Contract #145", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Client contract", "Updated 3 days ago by John Doe"),
        ];
    }
}