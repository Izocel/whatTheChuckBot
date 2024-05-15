import { client } from "..";
import { Command } from "../class/command";

export default new Command({
    name: "help",
    public: true,
    description: "Will display help for commands. (this)",
    execute: async ({ interaction }) => {
        await interaction.reply({ content: await client.getCommandsHelp(), ephemeral: true });
    }
});