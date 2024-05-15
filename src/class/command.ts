import { CommandType } from "../typings/commandType";

export class Command {
    constructor(commandOptions: CommandType) {
        Object.assign(this, commandOptions);
    }
}