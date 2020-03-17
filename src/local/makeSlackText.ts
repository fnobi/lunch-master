import { Member, Shop } from "~/const";

export default function makeSlackText(members: Member[], shops: Shop[]) {
    const m = members.map(({ name, slackId, job }) => {
        const userId = slackId ? `<@${slackId}>` : name;
        return `* ${userId} (${job})`;
    }).join("\n");
    const s = shops.map(({ name, url, author }) => {
        return `
:raising_hand: *${name}* に行くよ〜
${url}`;
    }).join("\n");
    return `${m}\n\n${s}`;
};