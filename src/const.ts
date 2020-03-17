export type SheetName = "config" | "メンバー" | "お店紹介";

export type Member = {
    name: string;
    job: string;
    slackId: string;
};

export function parseMember(data: any) {
    return {
        name: String(data.name || ""),
        job: String(data.job || ""),
        slackId: String(data.slackId || "")
    };
}