import { Event } from "../typings/event";
import { sendBanner } from "../commands/banner";

export default new Event("guildMemberAdd", async (member) => {
    if (!member) return;
    return sendBanner(member, "welcome");
});
