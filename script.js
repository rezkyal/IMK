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
	var total=0;
	var param=document.getElementById('search').value;
	var notFound=document.getElementById('notfound');
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
			total+=1;
			dataAnggota[i].classList.remove("hidden");
		}
	}
	if(total==0){
		notFound.classList.remove("hidden");
	}else{
		notFound.classList.add("hidden");
	}
	return false;
}

function validateLogin(){
	console.log('run');
	var userName = document.getElementById('userName');
	var userPassword = document.getElementById('userPassword');
	if(userName.value!="" && userPassword.value!=""){
		var execbutton = document.getElementById('execbutton');
		execbutton.setAttribute('data-toggle','modal');
		execbutton.setAttribute('data-target','#gantipass');
		// var body = document.getElementsByTagName('body');
		// body[0].classList.add("modal-open");
		// var modal = document.getElementById('gantipass');
		// modal.classList.add("show");
		// modal.style.display='block';
		// var div=document.createElement('div');
		// div.classList.add("modal-backdrop fade show");
		// document.body.appendChild(div);
		return false;
	}else{
		return false;
	}
}

function fadeOutEffect() {
    var fadeTarget = document.getElementById("target");
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity < 0.1) {
            clearInterval(fadeEffect);
        } else {
            fadeTarget.style.opacity -= 0.1;
        }
    }, 200);
}



function accept(e){
	e.classList.add('hidden');
	return false;
}