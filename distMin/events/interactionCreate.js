"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const __1=require(".."),Event_1=require("../class/Event");exports.default=new Event_1.Event("interactionCreate",async e=>{if(e.isCommand()&&!e.member.user.bot){const t=__1.client.commands.get(e.commandName);return t||(await e.deferReply({ephemeral:!0}),e.followUp({ephemeral:!0,content:"I dont know what to do with that!\nThis command may be not implemented yet!"})),t.run({args:e.options,client:__1.client,interaction:e})}});