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

var semua = document.getElementsByTagName("input");
for (var i=0;i<semua.length-1;i++){
	semua[i].setCustomValidity('Field tidak boleh kosong');
}

function mySearch(){
  var param=document.getElementById('search').value;
  param=param.toLowerCase();
  var dataAnggota=document.getElementsByClassName('dataAnggota');
  for(var i=0;i<dataAnggota.length;i++){
    var nama=dataAnggota[i].getAttribute('nama');
    nama=nama.toLowerCase();
    var n=nama.search(param);
    console.log(n);
    if(n==-1){
      dataAnggota[i].classList.add("hidden");
    }else{
      dataAnggota[i].classList.remove("hidden");
    }
  }
  return false;
}


function blabla(){
      'use strict';
      window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          }, false);
        });
      }, false);
    }

function dudu(){
      document.getElementById("peminjam").innerHTML = alert("My First Jquery Test");;
   };

function mouseover1(){
  var peminjam = document.getElementById('peminjam1');
  peminjam.style.opacity = "0.95";
  peminjam.style.background = "grey";
  peminjam.style.transition = "all .4s";
}

function mouseout1(){
   document.getElementById('peminjam1').style.opacity = "0";
}

function mouseover2(){
  var peminjam = document.getElementById('peminjam2');
  peminjam.style.opacity = "0.95";
  peminjam.style.background = "grey";
  peminjam.style.transition = "all .4s";
}

function mouseout2(){
     document.getElementById('peminjam2').style.opacity = "0";
}

function mouseover3(){
  var peminjam = document.getElementById('peminjam3');
  var page = document.getElementById('newpage');
  var img = document.getElementById('gambar3');
  peminjam.style.opacity = "0.95";
  peminjam.style.transition = "all .4s";
  peminjam.style.background = "grey";
  page.style.opacity ="1";
  img.style.transform = "scale(1.5)";
}

function mouseout3(){
    document.getElementById('peminjam3').style.opacity = "0";
    var img = document.getElementById('gambar3');
    var page = document.getElementById('newpage');
    page.style.opacity ="0";
    img.style.transform = "scale(1.0)";
  
}
function mouseover4(){
  var peminjam = document.gdetElementById('peminjam4');
  peminjam.style.opacity = "0.95";
  peminjam.style.background = "grey";
  peminjam.style.transition = "all .4s";
}

function mouseout4(){
     document.getElementById('peminjam4').style.opacity = "0";
}

function mouseover5(){
  var peminjam = document.getElementById('peminjam5');
  peminjam.style.opacity = "0.95";
  peminjam.style.background = "grey";
  peminjam.style.transition = "all .4s";
}

function mouseout5(){
  document.getElementById('peminjam5').style.opacity = "0";
}

function editalert(){
    alert("Data Sudah di Edit!");
}

function hapusalert(){
    confirm("apakah data ini akan dihapus?");
}

function mouseclick4(){
  var peminjam = document.getElementById('peminjam4');
  peminjam.style.opacity = "0.95";
  peminjam.style.background = "grey";
  peminjam.style.transition = "all .4s";
}

function display(){
  document.getElementsByClassName('real')[0].style.visibility = "visible";
  document.getElementsByClassName('real')[1].style.visibility = "visible";
  document.getElementsByClassName('real')[2].style.visibility = "visible";
  document.getElementsByClassName('real')[3].style.visibility = "visible";
  document.getElementsByClassName('unreal')[0].style.visibility = "collapse";
  document.getElementsByClassName('unreal')[1].style.visibility = "collapse";
}

function display2(){
  document.getElementsByClassName('real')[0].style.visibility = "collapse";
  document.getElementsByClassName('real')[0].style.whiteSpace = "nowrap";
  document.getElementsByClassName('real')[1].style.visibility = "collapse";
  document.getElementsByClassName('real')[1].style.whiteSpace = "nowrap";
  document.getElementsByClassName('real')[2].style.visibility = "collapse";
  document.getElementsByClassName('real')[2].style.whiteSpace = "nowrap";
  document.getElementsByClassName('real')[3].style.visibility = "collapse";
  document.getElementsByClassName('real')[3].style.whiteSpace = "nowrap";
  document.getElementsByClassName('unreal')[0].style.visibility = "visible";
  document.getElementsByClassName('unreal')[1].style.visibility = "visible";
}