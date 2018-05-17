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

var nama = document.getElementById("Nama");
var angkatan = document.getElementById("Angkatan");
var idline = document.getElementById("IDLine");
var alamat = document.getElementById("Alamat");

var submitanggota = document.getElementById("submitanggota");
submitanggota.addEventListener("click", function(event){
    if (nrp1.validity.valid && nohp1.validity.valid && nama.validity.valid && angkatan.validity.valid && idline.validity.valid && alamat.validity.valid){
        alert("Anggota berhasil ditambahkan");
    }
},false);

var nama2 = document.getElementById("Nama2");
var angkatan2 = document.getElementById("Angkatan2");
var idline2 = document.getElementById("IDLine2");
var alamat2 = document.getElementById("Alamat2");

var btnEditAnggota = document.getElementById("btnEditAnggota");
btnEditAnggota.addEventListener("click", function(event){
  // alert("sesuatu");
    if (nrp2.validity.valid && nohp2.validity.valid && nama2.validity.valid && angkatan2.validity.valid && idline2.validity.valid && alamat2.validity.valid){
    }
},false);

var lockIconAnggota1 = document.getElementById("lockiconanggota1");
var lockIconAnggota2 = document.getElementById("lockiconanggota2");

var btnnonaktif = document.getElementById("btnnonaktif");
var btnaktif = document.getElementById("btnaktif");

btnnonaktif.addEventListener("click", function(event){
  var modal = document.getElementById("nonaktifAnggota");
  // if(modal ==null){
  //   alert("no modal");
  // }
  // modal.classname.replace("show","fade");
  // modal.className.replace( /(?:^|\s)show(?!\S)/g , '' );
},false);

btnaktif.addEventListener("click", function(event){
  // alert("sesuatu");
    lockiconanggota2 = lockIconAnggota1;
},false);