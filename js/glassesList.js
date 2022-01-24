export class GlassesList {
    constructor() {
        this.glist = [];
    }
    addGlasses(glasses) {
        this.glist.push(glasses);
    }
    renderGlasses() {
        // các thẻ html chứa nội dung của các đối tượng kính
        let content = "";
        content = this.glist.reduce((glContent, item, index) => {
            glContent += `
            <div class="col-4">
                <img class="img-fluid" onclick="tryOnGlasses(event)" data-id="${item.id}" src="${item.src}" alt="Glasses">
            </div>
            `;
            return glContent
        }, ''); // '' là khai báo giá trị ban đầu của glContent
        return content;
    }
}