import { Command } from "../class/command";

export default new Command({
    name: "ping",
    public: true,
    description: "Will pong",
    execute: async ({ interaction }) => {
        await interaction.reply({ content: "PONG!", ephemeral: true });
    }
});