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