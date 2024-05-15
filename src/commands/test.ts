import {
	ActionRowBuilder,
	MessageActionRowComponentBuilder,
	StringSelectMenuBuilder,
	StringSelectMenuOptionBuilder
} from "discord.js";
import { Command } from "../class/command";

export default new Command({
	name: "test",
	public: true,
	devOnly: true,
	description: "Used in BETA environment only.",
	execute: async ({ interaction }) => {
		if (process.env.environment !== "dev") return;

		const select = new StringSelectMenuBuilder()
			.setCustomId('starter')
			.setPlaceholder('Make a selection!')
			.addOptions(
				new StringSelectMenuOptionBuilder()
					.setLabel('Bulbasaur')
					.setDescription('The dual-type Grass/Poison Seed Pokémon.')
					.setValue('bulbasaur'),
				new StringSelectMenuOptionBuilder()
					.setLabel('Charmander')
					.setDescription('The Fire-type Lizard Pokémon.')
					.setValue('charmander'),
				new StringSelectMenuOptionBuilder()
					.setLabel('Squirtle')
					.setDescription('The Water-type Tiny Turtle Pokémon.')
					.setValue('squirtle'),
			);

		const row: ActionRowBuilder<MessageActionRowComponentBuilder> = new ActionRowBuilder;
		row.addComponents(select);


		await interaction.reply({
			content: 'Choose your starter!',
			components: [row],
			ephemeral: true
		});
	}
});