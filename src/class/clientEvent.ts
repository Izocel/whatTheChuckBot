import { ClientEvents } from "discord.js";
import { EventType } from "../typings/eventType";

export class ClientEvent<Key extends keyof ClientEvents> {
    constructor(eventOptions: EventType<Key>) {
        Object.assign(this, eventOptions);
    }
}