import { Member } from "~/const";

export default function makeSlackText(members: Member[]) {
    return members.map(({ name, slackId, job }) => {
        const userId = slackId ? `<@${slackId}>` : name;
        return `${userId} (${job})`;
    }).join("\n");
};