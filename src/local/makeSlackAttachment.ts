import { Shop } from "~/const";

export default function makeSlackAttachment(shop: Shop) {
    return {
        "color": "#2eb886",
        "title": shop.name,
        "title_link": shop.url,
        "text": shop.description,
        "footer": `by ${shop.author}`,
    };
};