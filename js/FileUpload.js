class FileUpload {
    constructor(targetTagId, expressionTag, createTag) {
        this.targetTagId = document.getElementById(targetTagId);
        this.expressionTag = document.getElementById(expressionTag);
        this.createTag = createTag;
        this.targetTagId.addEventListener("change", this.getFileList.bind(this));
        this.previousFileArrays = [];
    }
    getFileList() {

        for (let file of this.targetTagId.files) {
            const createElementTag = document.createElement(this.createTag);
            createElementTag.textContent = file.name;
            createElementTag.onclick = function () {
                this.classList.toggle("selectFile");
            }
            this.expressionTag.append(createElementTag);
            this.previousFileArrays.push(file);
        }
        this.targetTagId.files = this.getTransferFileList(this.previousFileArrays);
        console.log(this.targetTagId.files)
    }
    // 파일 삭제
    deleteFile() {
        let count = 0;
        let targetCountNumList = [];
        const allElements = this.expressionTag.querySelectorAll(this.createTag);
        for (let elements of allElements) {
            if (elements.classList.contains("selectFile")) {
                setTimeout(() => {
                    elements.remove();
                }, 100)
                targetCountNumList.push(count);
            }
            count++;
        }
        this.deleteFileInfo(targetCountNumList);
    }
    // 삭제 후 파일정보 재정의
    deleteFileInfo(targetNum) {
        let arrayFileList = [...this.previousFileArrays];
        for (let num of targetNum) {
            delete arrayFileList[num];
        }
        arrayFileList = arrayFileList.filter((element) => element !== undefined);
        this.previousFileArrays = arrayFileList;

        this.targetTagId.files = this.getTransferFileList(this.previousFileArrays);
    }

    getTransferFileList(fileArray) {
        const list = new DataTransfer();
        fileArray.forEach((file) => {
            list.items.add(file);
        })
        return list.files;
    }
}