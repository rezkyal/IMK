var nrp1 = document.getElementById('NRP1');
nrp1.addEventListener("input",function(event){
  if(nrp1.validity.patternMismatch){
    nrp1.setCustomValidity('NRP harus angka');
  }else{
    nrp1.setCustomValidity('');
  }
},false);
var nrp2 = document.getElementById('NRP2');
nrp2.addEventListener("input",function(event){
  if(nrp2.validity.patternMismatch){
    nrp2.setCustomValidity('NRP harus angka');
  }else{
    nrp2.setCustomValidity('');
  }
},false);
var nohp1 = document.getElementById('nohp1');
nohp1.addEventListener("input",function(event){
  if(nohp1.validity.patternMismatch){
    nohp1.setCustomValidity('No.HP harus angka');
  }else{
    nohp1.setCustomValidity('');
  }
},false);
var nohp2 = document.getElementById('nohp2');
nohp2.addEventListener("input",function(event){
  if(nohp2.validity.patternMismatch){
    nohp2.setCustomValidity('No.HP harus angka');
  }else{
    nohp2.setCustomValidity('');
  }
},false);
