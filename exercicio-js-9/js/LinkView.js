class LinkView {
    constructor(link) {
        this.link = link;
    }

    template() {
        return `
        <div class="link-card">
            <span class="link">${this.link.url}</span>
            <span class="link-short">${this.link.shortedUrl}</span>
            <button class="btn btn-info">Copy</button>
        </div>
        `;
    }
}