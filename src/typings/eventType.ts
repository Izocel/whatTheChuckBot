import { ClientEvents, Message } from "discord.js";


const eventsMaps = {
    messageCreate: ClientEvents["messageCreate"] = "


}

function getTypes(args) {
    const [message] = args as [Message<boolean>];
    return {message};
}



export type EventType<Key extends keyof ClientEvents> = {
    public?: Boolean,
    devOnly?: Boolean,
    execute: (eventArgs: ClientEvents[Key]) => any;
};
