import importConfigFromSheet from "~/local/importConfigFromSheet";
import notifySlack from "~/lib/notifySlack";

export default async function main() {
    const {
        slackWebhook,
        slackUserName = "",
        slackIconEmoji = ""
    } = importConfigFromSheet('config');
    if (slackWebhook) {
        await notifySlack(slackWebhook, {
            username: slackUserName,
            icon_emoji: slackIconEmoji ? slackIconEmoji : "",
            text: "やっほー"
        });
    }
}