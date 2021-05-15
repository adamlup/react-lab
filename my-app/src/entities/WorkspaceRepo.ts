import { Workspace } from "../entities/Workspace";
import { Repository } from "./Repository";

export class WorkspaceRepo implements Repository<Workspace> {
    public getAll(): Workspace[] {
        return [
            new Workspace("Client contract", "Contract", 150, "Last update 2 days ago"),
            new Workspace("Supplier contract", "Contract", 25, "Last update 2 days ago"),
            new Workspace("Corporate", "Corporate", 25, "Last update 2 days ago"),
        ];
    }
}