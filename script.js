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