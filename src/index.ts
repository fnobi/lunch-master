import importConfigFromSheet from "~/local/importConfigFromSheet";

export default function main() {
    const config = importConfigFromSheet('config');
    Logger.log(config);
}