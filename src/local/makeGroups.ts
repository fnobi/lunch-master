import { Member, Shop } from "~/const";
import { shuffle } from "~/lib/lodashLike";

export default function makeGroups(members: Member[], shops: Shop[], opts: { groupMax: number }) {
    const { groupMax}  = opts;
    const ms = shuffle(members);
    const ss = shuffle(shops);
    const count = Math.ceil(members.length / groupMax);
    const res: { members: Member[], shop: Shop }[] = [];
    new Array(count).fill(0).forEach((z, i) => {
        res.push({
            shop: ss[i % ss.length],
            members: []
        });
    });
    ms.forEach((m, i) => {
        res[i % count].members.push(m);
    });
    return res;
}