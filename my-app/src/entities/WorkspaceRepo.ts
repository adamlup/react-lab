import { Workspace } from "../entities/Workspace";
import { Repository } from "./Repository";

export class WorkspaceRepo implements Repository<Workspace> {
    public getAll(): Workspace[] {
        return [
            new Workspace("Good workspace", "Business", 50, "05.05.1995"),
            new Workspace("Bad workspace", "Entertainment", 75, "06.06.1996"),
            new Workspace("Super workspace", "Money", 100, "07.07.1997"),
        ];
    }
}