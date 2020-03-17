import { some } from "~/lib/lodashLike";

export default function captureSheetScheme<T>(props: {
    range: GoogleAppsScript.Spreadsheet.Range,
    parse: (data: any) => T,
    header: (keyof T)[]
}) {
    const { range, parse, header } = props;
    return range.getValues().map<T>(cells => {
        const res: any = {};
        header.forEach((k, i) => {
            res[k] = cells[i];
        });
        return parse(res);
    }).filter((res) => some(Object.values(res), item => !!item));
}