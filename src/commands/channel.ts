import { ChannelTypes } from "discord.js/typings/enums";
import { commandHelper } from "..";
import { Command } from "../class/Command";
import { CommandContext } from "../class/CommandContext";

export default new Command({
    name: "channel",
    description: "Manage channels from here.",
    options: [
        {
            type:"SUB_COMMAND_GROUP",
            name:"create",
            description:"Used to create channels",
            options: [
                {
                    type:"SUB_COMMAND",
                    name:"single",
                    description:"Will create a certain type of channel in your serveur.",
                    options: [
                        { name: 'channelname', type: 'STRING', description: 'The name of the channel to create', required: true },
                        { name: 'channeltype', type: 'INTEGER', description: 'The type of the channel', required: true,
                            choices: [
                                {name: "text", value: ChannelTypes.GUILD_TEXT},
                                {name: "voice", value: ChannelTypes.GUILD_VOICE},
                                {name: "category", value: ChannelTypes.GUILD_CATEGORY}
                            ]
                        },
                        { name: 'private', type: 'BOOLEAN', description: 'Show the reply only to yourself? Default = True', required: false }
                    ]
                },
                {   //TODO:
                    type:"SUB_COMMAND",
                    name:"many",
                    description:"[N.A.]Will create a certain type of channel in your serveur.",
                    options: [
                        { name: 'channelsnames', type: 'STRING', description: 'The names of the channels comma separated (chan1,chan2...)', required: true },
                        { name: 'channelstypes', type: 'INTEGER', description: 'The type of the channel', required: true,
                            choices: [
                                {name: "text", value: ChannelTypes.GUILD_TEXT},
                                {name: "voice", value: ChannelTypes.GUILD_VOICE},
                                {name: "category", value: ChannelTypes.GUILD_CATEGORY}
                            ]
                        },
                        { name: 'private', type: 'BOOLEAN', description: 'Show the reply only to yourself? Default = True', required: false }
                    ]
                }
            ]
        },
        {   //TODO:
            type:'SUB_COMMAND_GROUP',
            name:'purge',
            description:'Used to delete messages amongs text based channel',
            options: [
                {
                    type:"SUB_COMMAND",
                    name:"single",
                    description:"[N.A.]Can delete a certain amount or all messages in a channel.",
                    options: [
                        { name: 'channel', type: 'CHANNEL', description: 'The channel to purge', required: true },
                        { name: 'amount', type: 'INTEGER', description: 'The number of messages to purge. (Enter a negative value to delete all.)', required: true },
                        { name: 'startfromtop', type: 'STRING', description: 'Delete from top or bottom? Default to: Top', required: false,
                            choices: [
                                {name: "top", value: 'true'},
                                {name: "bottom", value: 'false'}
                            ]
                        },
                        { name: 'private', type: 'BOOLEAN', description: 'Show the reply only to yourself? Default = True', required: false }
                    ]
                },
                {
                    type:"SUB_COMMAND",
                    name:"singlefromdate",
                    description:"[N.A.]Can delete a certain amount of messages in the channel according to the given date.",
                    options: [
                        { name: 'channel', type: 'CHANNEL', description: 'The channel to purge', required: true },
                        { name: 'date', type: 'STRING', description: 'Date to be used ? (YYYY-MM-DD)?', required: true},
                        { name: 'beforedate', type: 'BOOLEAN', description: 'Delete messages created before or after the date?', required: true},
                        { name: 'amount', type: 'INTEGER', description: 'The number of messages to purge. (Enter a negative value to delete all since/after date.)', required: true },
                        { name: 'private', type: 'BOOLEAN', description: 'Show the reply only to yourself? Default = True', required: false }
                    ]
                },
                {
                    type:"SUB_COMMAND",
                    name:"singlefromuser",
                    description:"[BETA]Will delete all or some messages created by a user in a channel.",
                    options: [
                        { name: 'channel', type: 'CHANNEL', description: 'The channel to purge', required: true },
                        { name: 'author', type: 'USER', description: 'Delete all message from this author.', required: true},
                        { name: 'amount', type: 'NUMBER', description: 'Number to delete? Default = All(-1)', required: false },
                        { name: 'private', type: 'BOOLEAN', description: 'Show the reply only to yourself? Default = True', required: false }
                    ]
                }
            ]
        }
    ],
    run: async ({ interaction, args, client }) =>  {

        const commandContext = new CommandContext(interaction, args, client);
        const subcommand = await commandHelper.importSubCommandFile(interaction);
        if (!subcommand) {
            await interaction.deferReply({ephemeral: true});
            interaction.followUp({
                ephemeral: true,
                content: "From SubCommand: I dont know what to do with that!\nThis command may be not implemented yet!:x:"
            });
            return;
        }
        subcommand.run(commandContext);
        return;
    }
});
