import { CommandInteractionOptionResolver } from "discord.js";
import { ExtendedInteraction } from "../typings/commandType";
import { ClientEvent } from "../class/clientEvent";
import { client } from "..";

export default new ClientEvent<"interactionCreate">({
    execute: async (event) => {
        event.
        if (!event.isCommand() || !event?.commandName || event.user.bot) {
            return;
        }

        console.log("CMDDDD")
        const command = client.commands.get(event.commandName);
        return command.run({
            client,
            event: event as ExtendedInteraction,
            args: event.options as CommandInteractionOptionResolver,
        });
    }
});


