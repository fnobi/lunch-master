export type SheetName = "config" | "メンバー" | "お店紹介";

export type Member = {
    name: string;
    job: string;
    slackId: string;
};

export function parseMember(data: any): Member {
    return {
        name: String(data.name || ""),
        job: String(data.job || ""),
        slackId: String(data.slackId || "")
    };
}

export type Shop = {
    name: string;
    type: string;
    url: string;
    description: string;
    author: string;
};

export function parseShop(data: any): Shop {
    return {
        name: String(data.name || ""),
        type: String(data.type || ""),
        url: String(data.url || ""),
        description: String(data.description || ""),
        author: String(data.author || "")
    };
}