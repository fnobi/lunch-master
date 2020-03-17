import notifySlack from "~/lib/notifySlack";
import captureSheetScheme from "~/lib/captureSheetScheme";
import importConfigFromSheet from "~/local/importConfigFromSheet";
import { Member, parseMember } from "~/const";

export default async function main() {
    const {
        slackWebhook,
        slackUserName = "",
        slackIconEmoji = ""
    } = importConfigFromSheet("config");

    const memberSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("メンバー");
    if (memberSheet) {
        const members = captureSheetScheme<Member>({
            parse: parseMember,
            range: memberSheet.getRange("A2:C"),
            header: [
                "name",
                "job",
                "slackId"
            ]
        });
        Logger.log(members);
    }

    if (slackWebhook) {
        await notifySlack(slackWebhook, {
            username: slackUserName,
            icon_emoji: slackIconEmoji ? slackIconEmoji : "",
            text: "やっほー"
        });
    }
}