type IncomingWebhookSendArguments = {
    username?: string;
    icon_emoji?: string;
    icon_url?: string;
    channel?: string;
    text: string;
    link_names?: boolean;
    attachments?: any;
};

export default function notifySlack(url: string, args: IncomingWebhookSendArguments) {
    return UrlFetchApp.fetch(url, {
        method: "post",
        contentType: "application/json",
        payload: JSON.stringify(args)
    });
}