"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const __1=require("../../.."),Subcommand_1=require("../../../class/Subcommand");async function interactionPostUpdate(e,t){e.args;const n=e.interaction;e.client;var a=e.ephemerality;let s=0,r=t.length;var o="Post IS UPDATED HERES THE RESULTS !!!!!!!!\n",e=await n.followUp({content:o,ephemeral:a}),e=await n.channel.messages.fetch(e.id);const l=await n.channel.messages.fetch(e.id);n.fetchReply();for(const c of t){var i=await mesgDeleterInterval(c,2e3);s+=i.id?1:0;i={content:o+`Deleted: ${s}/${r} delay = 0.5msg/sec. 😉✔️`};l.edit(i)}n.followUp({content:"Deletion is finnished !!!!!!!!",ephemeral:a})}async function mesgDeleterInterval(t,n){if(n<=0||n>=Number.MAX_SAFE_INTEGER){const e=new Error;throw e.message=`[${e.stack}]
Argument msInterval is out of range => number[0-maxSafeInt]`,e}return new Promise(async e=>{setTimeout(async()=>{e(await t.delete())},n)})}exports.default=new Subcommand_1.SubCommand(async i=>{const c=i.interaction;var e=await __1.commandHelper.resolveEphemerality(c,"private");await c.deferReply({ephemeral:e});const m=i.args;i.client;const u=new Subcommand_1.FollowUpObj;try{let t,n=0,a=0,e,s=0;const h=m.getUser("author",!0).username,d=m.getChannel("channel",!0);let r=await d.messages.fetch(),o=r.lastKey(),l=[];for(;0<r.size;)s===r.size&&(r=await d.messages.fetch({before:o}),o=r.lastKey(),s=0),r.forEach(e=>{t=e.author.username,s++,n++,a+=t===h?1:0,e.deletable&&t===h&&l.push(e)});e=l.length,0<a&&0<e?(u.reply={content:`I'm done! I'll be deleting: ${e}/${n} delay = 1x/sec. 😉✔️
                Dont forget to refresh the server your viewing by switching between servers.`},c.client.emit("debug",`CHANNEL ${d.name} IS BEING PURGED BY ${c.member.user.username} => channelID: ${d.id} numDelted: `+e)):0===n?u.reply={content:"I was unable to find any messages in this channel?! 🤔✔️"}:0===a?u.reply={content:"No message found from this author! 🤔✔️"}:0===e&&0<a?u.reply={content:`I was unable to delete any of the ${a} messages! 🤔❌
Maybe check the permissions I have on your server???`}:e!==a&&(u.reply={content:`I was unable to delete ${a-e} of the messages! 🤔❌`},c.client.emit("debug",`CHANNEL ${d.name} IS BEING PURGED BY ${c.member.user.username} => channelID: ${d.id} numDelted: `+e)),await c.editReply(u.reply),await interactionPostUpdate(i,l)}catch(e){return u.fromatOnError(e),void await c.followUp(u.reply)}});