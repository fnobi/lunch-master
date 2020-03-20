import notifySlack from "~/lib/notifySlack";
import captureSheetScheme from "~/lib/captureSheetScheme";
import importConfigFromSheet from "~/local/importConfigFromSheet";
import makeSlackAttachment from "~/local/makeSlackAttachment";
import makeGroups from "~/local/makeGroups";
import { Member, parseMember, Shop, parseShop } from "~/const";

export default async function main() {
    const {
        slackWebhook,
        slackUserName = "",
        slackIconEmoji = "",
        groupMax
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

    const shopSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("お店情報");
    const shops: Shop[] = shopSheet ? captureSheetScheme<Shop>({
        parse: parseShop,
        range: shopSheet.getRange("A2:E"),
        header: [
            "name",
            "type",
            "url",
            "description",
            "author"
        ]
    }) : [];

    const groups = makeGroups(members, shops, {
        groupMax: Number(groupMax || 0)
    });

    if (slackWebhook) {
        await Promise.all(
            groups.map((g) => notifySlack(slackWebhook, {
                username: slackUserName,
                icon_emoji: slackIconEmoji ? slackIconEmoji : "",
                text: `:raising_hand: ランチに行くよ〜！\n${g.members.map(({name, slackId}) => slackId ? `<@${slackId}>` : name).join(" ")}`,
                attachments: [makeSlackAttachment(g.shop)]
            }))
        );
    }
}