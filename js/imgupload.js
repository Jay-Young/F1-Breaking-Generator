let dropArea = document.getElementById('drop-area');

;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false);
})

function preventDefaults (e) {
    e.preventDefault();
    e.stopPropagation();
}

;['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, highlight, false);
})

;['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, unhighlight, false);
})

function highlight(e) {
    dropArea.classList.add('highlight');
}

function unhighlight(e) {
    dropArea.classList.remove('highlight');
}

dropArea.addEventListener('drop', handleDrop, false)

function handleDrop(e) {
    let dt = e.dataTransfer;
    let files = dt.files;
    handleFiles(files);
}

function handleFiles(files) {
    ([...files]).forEach(uploadFile);
}

function uploadFile(file) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function() {
        let img = document.createElement('img');
        img.src = reader.result;
        imgconst.src = img.src;
    }
}

//----------------------------------------------------------------------------------------------------------------------

document.addEventListener('paste', handlePaste);

function handlePaste(e) {
    for (let i = 0 ; i < e.clipboardData.items.length ; i++) {
        let item = e.clipboardData.items[i];
        if (item.type.indexOf("image") !== -1) {
            uploadFile(item.getAsFile());
        }
    }
}