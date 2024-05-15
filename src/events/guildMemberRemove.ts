import { ClientEvent } from "../class/clientEvent";
import { ClientEvents } from "discord.js";

type eventArgs = ClientEvents["messageCreate"];

export default new ClientEvent<"messageCreate">({
    execute: async (eventArgs: eventArgs) => {

        const [message] = eventArgs;

    }
});