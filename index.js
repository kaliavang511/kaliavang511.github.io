  let upload = document.getElementById("kalia");
  let inputFile = document.getElementById("input-file");

  inputFile.onchange = function(){
    upload.src = URL.createObjectURL(inputFile.files[0]);
  }
