import notifySlack from "~/lib/notifySlack";
import captureSheetScheme from "~/lib/captureSheetScheme";
import importConfigFromSheet from "~/local/importConfigFromSheet";
import makeSlackText from "~/local/makeSlackText";
import { Member, parseMember } from "~/const";

export default async function main() {
    const {
        slackWebhook,
        slackUserName = "",
        slackIconEmoji = ""
    } = importConfigFromSheet("config");

    const memberSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("メンバー");
    const members: Member[] = memberSheet ? captureSheetScheme<Member>({
        parse: parseMember,
        range: memberSheet.getRange("A2:C"),
        header: [
            "name",
            "job",
            "slackId"
        ]
    }) : [];

    const text = makeSlackText(members);

    if (slackWebhook) {
        await notifySlack(slackWebhook, {
            username: slackUserName,
            icon_emoji: slackIconEmoji ? slackIconEmoji : "",
            text
        });
    }
}