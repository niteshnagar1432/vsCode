let fileCreate = document.querySelector('#fileCreate');
let folderCreate = document.querySelector('#folderCreate');
let fileForm = document.querySelector('#form-file-c');
let folderForm = document.querySelector('#form-folder-c');
let refresh = document.querySelector('#refresh');

fileCreate.addEventListener('click', function () {
    closeCreation();
    fileForm.style.display = "initial";
});
folderCreate.addEventListener('click', function () {
    closeCreation();
    folderForm.style.display = "initial";
});

function closeCreation() {
    var forms = document.querySelectorAll('form');
    forms.forEach(function (val) {
        val.style.display = "none";
        console.log(val);
    });
}

window.addEventListener('keydown', function(key) {
    if (key.keyCode === 27) {
        document.querySelector('form input').value = "";
        closeCreation();
    }else if(keyCode == 13){
        alert('fileCreated');
    }
});

refresh.addEventListener('click',function(){
    window.location.reload();
});

document.querySelector('.left').addEventListener('click',function(dels){
    console.log(dels.target.id);
});