import { CommandInteractionOptionResolver } from "discord.js";
import { ExtendedInteraction } from "../typings/commandType";
import { AppClient } from "./appClient";

export class CommandContext {

    public interaction:ExtendedInteraction;
    public args:CommandInteractionOptionResolver;
    public client:AppClient;
    public ephemerality:boolean;

    constructor(interaction:ExtendedInteraction,args:CommandInteractionOptionResolver,
            client:AppClient) 
    {
        this.args = args;
        this.client = client;
        this.interaction = interaction;
    }
}