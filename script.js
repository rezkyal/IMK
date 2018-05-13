function mySearch(){
	var total=0;
	var param=document.getElementById('search').value;
	var base=document.getElementById('selectFilter').value;
	var notFound=document.getElementById('notfound');
	param=param.toLowerCase();
	var dataAnggota=document.getElementsByClassName('dataAnggota');
	for(var i=0;i<dataAnggota.length;i++){
		if(base=='nama'){
			var nama=dataAnggota[i].getAttribute('nama');
		}else if(base=='nrp'){
			var nama=dataAnggota[i].getAttribute('NRP');
		}
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
  var peminjam = document.getElementById('peminjam4');
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

function barangSearch(){
	var total=0;
	var param=document.getElementById('search').value;
	var notFound=document.getElementById('notfound');
	var tables=document.getElementById('tables');
	var base=document.getElementById('selectFilter').value;
	param=param.toLowerCase();
	var dataBarang=document.getElementsByClassName('databarang');
	console.log(dataBarang.length);
	for(var i=0;i<dataBarang.length;i++){
		if(base=='namap'){
			var nama=dataBarang[i].getAttribute('nama');
		}else if(base=='namab'){
			var nama=dataBarang[i].getAttribute('barang');
		}else if(base=='kondisi'){
			var nama=dataBarang[i].getAttribute('kondisi');
		}
		nama=nama.toLowerCase();
		var n=nama.search(param);
		if(n==-1){
			dataBarang[i].classList.add("hidden");
		}else{
			total+=1;
			dataBarang[i].classList.remove("hidden");
		}

	}
	if(total==0){
		notFound.classList.remove("hidden");
		tables.classList.add("hidden");
	}else{
		notFound.classList.add("hidden");
		tables.classList.remove("hidden");
	}
	return false;	
}

function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("tables");
  sort = document.getElementById("sortFilter").value;
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("TR");
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      // Check if the two rows should switch place:
      if(sort=="namap"){
      	x = rows[i].getElementsByTagName("TD")[0];
      	y = rows[i + 1].getElementsByTagName("TD")[0];
      	if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
      	  // I so, mark as a switch and break the loop:
      	  shouldSwitch= true;
      	  break;
      	}
      }else if(sort=="namab"){
      	x = rows[i].getElementsByTagName("TD")[1];
      	y = rows[i + 1].getElementsByTagName("TD")[1];
      	if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
      	  // I so, mark as a switch and break the loop:
      	  shouldSwitch= true;
      	  break;
      	}
      }else if(sort=="tanggalpb"){
      	x = rows[i].getElementsByTagName("TD")[2];
      	y = rows[i + 1].getElementsByTagName("TD")[2];
      	xs=x.innerHTML.split("/");
      	ys=y.innerHTML.split("/");
      	if(xs[2]==ys[2]){
      		if(xs[1]==ys[1]){
      			if(xs[0]<ys[0]){
      				shouldSwitch= true;
      				break;
      			}
      		}else if(xs[1]<ys[1]){
      			shouldSwitch= true;
      			break;
      		}
      	}else if(xs[2]<ys[2]){
      		shouldSwitch=true;
      		break;
      	}
      }else if(sort=="tanggalpl"){
      	x = rows[i].getElementsByTagName("TD")[2];
      	y = rows[i + 1].getElementsByTagName("TD")[2];
      	xs=x.innerHTML.split("/");
      	ys=y.innerHTML.split("/");
      	if(xs[2]==ys[2]){
      		if(xs[1]==ys[1]){
      			if(xs[0]>ys[0]){
      				shouldSwitch= true;
      				break;
      			}
      		}else if(xs[1]>ys[1]){
      			shouldSwitch= true;
      			break;
      		}
      	}else if(xs[2]>ys[2]){
      		shouldSwitch=true;
      		break;
      	}
      }else if(sort=="tanggalkb"){
      	x = rows[i].getElementsByTagName("TD")[3];
      	y = rows[i + 1].getElementsByTagName("TD")[3];
      	xs=x.innerHTML.split("/");
      	ys=y.innerHTML.split("/");
      	if(xs[2]==ys[2]){
      		if(xs[1]==ys[1]){
      			if(xs[0]<ys[0]){
      				shouldSwitch= true;
      				break;
      			}
      		}else if(xs[1]<ys[1]){
      			shouldSwitch= true;
      			break;
      		}
      	}else if(xs[2]<ys[2]){
      		shouldSwitch=true;
      		break;
      	}
      }else if(sort=="tanggalpl"){
      	x = rows[i].getElementsByTagName("TD")[3];
      	y = rows[i + 1].getElementsByTagName("TD")[3];
      	xs=x.innerHTML.split("/");
      	ys=y.innerHTML.split("/");
      	if(xs[2]==ys[2]){
      		if(xs[1]==ys[1]){
      			if(xs[0]>ys[0]){
      				shouldSwitch= true;
      				break;
      			}
      		}else if(xs[1]>ys[1]){
      			shouldSwitch= true;
      			break;
      		}
      	}else if(xs[2]>ys[2]){
      		shouldSwitch=true;
      		break;
      	}
      }else if(sort=="kondisi"){
      	x = rows[i].getElementsByTagName("TD")[4];
      	y = rows[i + 1].getElementsByTagName("TD")[4];
      	if(x.innerHTML=='Sangat Baik'){
      		var x1=1;
      	}else if(x.innerHTML=='Kurang Baik'){
      		var x1=2;
      	}else{
      		var x1=3;
      	}
      	if(y.innerHTML=='Sangat Baik'){
      		var y1=1;
      	}else if(y.innerHTML=='Kurang Baik'){
      		var y1=2;
      	}else{
      		var y1=3;
      	}
      	if (x1 > y1) {
      	  // I so, mark as a switch and break the loop:
      	  shouldSwitch= true;
      	  break;
      	}
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
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
		return true;
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