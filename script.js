

document.addEventListener('DOMContentLoaded', function() {
    const fileUpload = document.querySelector('.file-upload');
    const fileInput = document.querySelector('#file-input');

    fileUpload.addEventListener('click', function() {
        fileInput.click();
    });
});


document.addEventListener('DOMContentLoaded', function() {
  const fileUploads = document.querySelectorAll('.file-upload-square');
  
  fileUploads.forEach(function(fileUpload) {
    const fileInput = fileUpload.querySelector('.file-input');
    const uploadSpan = fileUpload.querySelector('span');
    
    fileUpload.addEventListener('dragover', function(e) {
      e.preventDefault();
      fileUpload.classList.add('file-upload-square-dragover');
    });
    
    fileUpload.addEventListener('dragleave', function() {
      fileUpload.classList.remove('file-upload-square-dragover');
    });
    
    fileUpload.addEventListener('drop', function(e) {
      e.preventDefault();
      fileUpload.classList.remove('file-upload-square-dragover');
      const files = e.dataTransfer.files;
      handleFiles(files, uploadSpan);
    });
    
    fileInput.addEventListener('change', function() {
      const files = fileInput.files;
      handleFiles(files, uploadSpan);
    });

    fileUpload.addEventListener('click', function() {
      fileInput.click();
    });
  });
  
  function handleFiles(files, uploadSpan) {
    if (files.length === 1) {
      uploadSpan.textContent = files[0].name;
    } else if (files.length > 1) {
      uploadSpan.textContent = files.length + ' files selected';
    } else {
      uploadSpan.textContent = 'Drag and drop files here';
    }
  }
});




const buttons = document.querySelectorAll('.role-button');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    buttons.forEach(btn => {
      btn.classList.remove('active');
    });
    this.classList.add('active');
  });
});