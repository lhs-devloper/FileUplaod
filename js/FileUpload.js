class FileUpload {
    #targetTagId;
    #expressionTag;
    #previousFileArrays;
    #createTag;
    constructor(targetTagId, expressionTag, createTag) {
        this.#targetTagId = document.getElementById(targetTagId);
        this.#expressionTag = document.getElementById(expressionTag);
        this.#createTag = createTag;
        this.#targetTagId.addEventListener("change", this.getFileList.bind(this));
        this.#previousFileArrays = [];
    }
    getFileList() {

        for (let file of this.#targetTagId.files) {
            const createElementTag = document.createElement(this.#createTag);
            createElementTag.textContent = file.name;
            createElementTag.onclick = function () {
                this.classList.toggle("selectFile");
            }
            this.#expressionTag.append(createElementTag);
            this.#previousFileArrays.push(file);
        }
        this.#targetTagId.files = this.getTransferFileList(this.#previousFileArrays);
    }
    // 파일 삭제
    deleteFile() {
        let count = 0;
        let targetCountNumList = [];
        const allElements = this.#expressionTag.querySelectorAll(this.#createTag);
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
        let arrayFileList = [...this.#previousFileArrays];
        for (let num of targetNum) {
            delete arrayFileList[num];
        }
        arrayFileList = arrayFileList.filter((element) => element !== undefined);
        this.#previousFileArrays = arrayFileList;

        this.#targetTagId.files = this.getTransferFileList(this.#previousFileArrays);
    }
    // 배열들 파일리스트로 재 변환
    getTransferFileList(fileArray) {
        const list = new DataTransfer();
        fileArray.forEach((file) => {
            list.items.add(file);
        })
        return list.files;
    }

    setFileList(fileList) {
        const returnFileList = [];
        if (fileList[0] instanceof FileInfo) {
            return null;
        }
        blobList.forEach((fileInfo) => {
            const file = new File([fileInfo.blob], file.fileName, file.mimeType);
            returnFileList.push(file)
        })
        this.#previousFileArrays = returnFileList;
        this.#targetTagId.files = this.getTransferFileList(this.#previousFileArrays);
    }
}

class FileInfo {
    constructor(blob, fileName, mimeType) {
        this.blob = blob;
        this.fileName = fileName;
        this.mimeType = mimeType;
    }
}