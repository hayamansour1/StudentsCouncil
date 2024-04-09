function updateName() {
    var name = document.getElementById('inputName').value;
    var nameElement = document.getElementById('name');
    nameElement.innerText = name;

    // Adjust the font size based on the length of the name
    if (name.length > 50) {
        nameElement.style.fontSize = '0.7em';
    } else if (name.length > 45) {
        nameElement.style.fontSize = '0.8em';
    } else {
        nameElement.style.fontSize = '1.5em';
    }
}

function downloadCard() {
    var name = document.getElementById('inputName').value;
    if (name == '') {
        alert('الرجاء إدخال الاسم أولاً');
        return;
    }

    var node = document.getElementById('card');
    var scale = 3; // Increase the resolution by 2

    domtoimage.toBlob(node, {
        style: {
            'transform': 'scale(' + scale + ')',
            'transform-origin': 'top left',
            'width': node.offsetWidth + 'px',
            'height': node.offsetHeight + 'px'
        },
        width: node.offsetWidth * scale,
        height: node.offsetHeight * scale
    })
    .then(function (blob) {
        window.saveAs(blob, 'بطاقة تهنئة.png');
    });
}









function dataURLToBlob(dataurl) {
    var parts = dataurl.split(','), mime = parts[0].match(/:(.*?);/)[1];
    if(parts[0].indexOf('base64') !== -1) {
        var bstr = atob(parts[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], {type:mime});
    } else {
        var raw = decodeURIComponent(parts[1]);
        return new Blob([raw], {type: mime});
    }
}