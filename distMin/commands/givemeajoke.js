"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const __1=require(".."),Command_1=require("../class/Command"),HttpFetcher_1=require("../tools/class/HttpFetcher"),myFunctions_1=require("../tools/myFunctions");async function fetchTheChuck(){let e={};let t=new HttpFetcher_1.HttpFetcher("Post","https://api.icndb.com/jokes/random/");var a=await t.execute();return e.valid=!1,a?.value?.joke&&a?.value?.id&&(e.id=a.value.id,e.value=a.value.joke,e.valid=!0),e}exports.default=new Command_1.Command({name:"givemeajoke",description:"Will fetch and post a Chuk Norris joke.",run:async({interaction:e})=>{var t=await __1.commandHelper.resolveEphemerality(e,"public");e.deferReply({ephemeral:t});const a=await fetchTheChuck();return a?.valid?(a.value=(0,myFunctions_1.unescapeEntities)(a.value),e.followUp(a.value)):e.followUp("No results found...")}});