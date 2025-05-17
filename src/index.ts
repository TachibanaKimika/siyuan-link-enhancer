import {
    Plugin,
} from "siyuan";
import {getTitle, isPureURL} from "./helpers";

export default class PluginSample extends Plugin {
    onload() {
        this.eventBus.on("paste", async (evt) => {
            const isURL = !evt.detail.textHTML && isPureURL(evt.detail.textPlain);
            if (!isURL) return;
            evt.preventDefault();
            const url = evt.detail.textPlain;
            const aElement = await this.parseURLToAnchorElement(url);
            (evt.detail.resolve as any)({ textHTML: aElement.outerHTML });
        });
    }

    async parseURLToAnchorElement(url: string): Promise<HTMLAnchorElement> {
        const aElement = document.createElement("a");
        aElement.href = url;
        aElement.innerText = url;
        aElement.target = "_blank";
        aElement.rel = "noopener noreferrer";
        try {
            const title = await getTitle(url);
            aElement.innerText = title || url;
        } catch (e) {
            aElement.innerText = url;
        }
        return aElement;
    }
}
