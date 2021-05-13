import { Publication } from "../entities/Publication";
import { Repository } from "./Repository";

export class PublicaitonRepo implements Repository<Publication> {
    public getAll(): Publication[] {
        return [
            new Publication("Lorem ipsum dolor sit amet, consectetur adipiscing elit", "7 jan. 2020" , "Jhon Doe"),
            new Publication("Lorem ipsum dolor sit amet, consectetur adipiscing elit", "7 jan. 2020" , "Jhon Doe"),
            new Publication("Lorem ipsum dolor sit amet, consectetur adipiscing elit", "7 jan. 2020" , "Jhon Doe")
        ];
    }
}