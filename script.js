
// imageZoom("myimage", "myresult");

function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}

function confirmTambahAnggota(){
  alert("Anggota berhasil ditambahkan");
}

function confirmPinjam(){
  alert("Pemintaan berhasil disubmit");
}

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
  peminjam.style.background = "white";
  peminjam.style.transition = "all .4s";
}

function mouseout1(){
   document.getElementById('peminjam1').style.opacity = "0";
}

function mouseover2(){
  var peminjam = document.getElementById('peminjam2');
  peminjam.style.opacity = "0.95";
  peminjam.style.background = "white";
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
  peminjam.style.background = "white";
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
  peminjam.style.background = "white";
  peminjam.style.transition = "all .4s";
}

function mouseout4(){
     document.getElementById('peminjam4').style.opacity = "0";
}

function mouseover5(){
  var peminjam = document.getElementById('peminjam5');
  peminjam.style.opacity = "0.95";
  peminjam.style.background = "white";
  peminjam.style.transition = "all .4s";
}

function mouseout5(){
  document.getElementById('peminjam5').style.opacity = "0";
}

function hapusalert(){
    // confirm("apakah data ini akan dihapus?");
    alert("Barang berhasil dihapus");
}

function mouseclick4(){
  var peminjam = document.getElementById('peminjam4');
  peminjam.style.opacity = "0.95";
  peminjam.style.background = "white";
  peminjam.style.transition = "all .4s";
}

function display(){
  document.getElementsByClassName('real')[0].style.display = "";
  document.getElementsByClassName('real')[1].style.display = "";
  document.getElementsByClassName('real')[2].style.display = "";
  document.getElementsByClassName('real')[3].style.display = "";
  document.getElementsByClassName('unreal')[0].style.display = "none";
  document.getElementsByClassName('unreal')[1].style.display = "none";
}

function display2(){
  document.getElementsByClassName('real')[0].style.display="none";
  document.getElementsByClassName('real')[1].style.display="none";
  document.getElementsByClassName('real')[2].style.display="none";
  document.getElementsByClassName('real')[3].style.display="none";
  document.getElementsByClassName('unreal')[0].style.display="";
  document.getElementsByClassName('unreal')[1].style.display="";
}

function tambahAnggota(){
  var temp;
  var table=document.getElementById('tables');
  var row=table.insertRow(tables.children[1].children.length+1);
  var elements=document.forms.tambang.getElementsByTagName('input');
  for (var i=0;i<elements.length;i++){
    temp=row.insertCell(i);
    temp.innerHTML=elements[i].value;
    temp.classList.add('table-success');
  }
  var text="<button class=' btn btn-info my-2' data-toggle='modal' data-target='#editAnggota3'><span class='oi oi-pencil'></span></button><button class=' btn btn-danger my-2' data-toggle='modal' data-target='#deleteAnggota3'><span class='oi oi-circle-x'></span></button><button class='white btn btn-secondary my-2' data-toggle='modal' data-target='#nonaktifAnggota3'><span class='oi oi-lock-locked' id='lockanggota3'></span></button><button class='white btn btn-warning my-2' data-toggle='modal' data-target='#resetAnggota3'>Reset</button>";
  temp=row.insertCell(elements.length);
  temp.innerHTML=text;
  temp.classList.add('table-success');
  temp=row.insertCell(elements.length);
  temp.innerHTML="aktif";
  temp.classList.add('table-success');
  eventFire(document.getElementById('closeanggota'), 'click');
  return false;
}



function hapusAnggota(nama){
	var trnya=document.getElementById(nama);
	trnya.classList.add("hidden");
	return false;
}

function hapusBarang(ini){
  var barang=document.getElementById(ini);
  barang.style.display="none";
}

function anggotaSearch(){
	var total=0;
	var param=document.getElementById('search').value;
	var notFound=document.getElementById('notfound');
	var tables=document.getElementById('tables');
	var base=document.getElementById('selectFilter').value;
	param=param.toLowerCase();
	var dataBarang=document.getElementsByClassName('dataanggota');
	console.log(dataBarang.length);
	for(var i=0;i<dataBarang.length;i++){
		if(base=='nama'){
			var nama=dataBarang[i].getAttribute('nama');
		}else if(base=='nrp'){
			var nama=dataBarang[i].getAttribute('nrp');
		}else if(base=='nohp'){
			var nama=dataBarang[i].getAttribute('nohp');
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

function go(ini){
  semua=document.getElementsByClassName('pages');
  for(var i=0;i<semua.length;i++){
    semua[i].parentElement.classList.remove('active');
    semua[i].parentElement.classList.remove('act');
  }
  ini.parentElement.classList.add('active');
  ini.parentElement.classList.add('act');
  dimana=ini.getAttribute('page');
  if(dimana=="1"){
    prev=document.getElementById('prev');
    prev.parentElement.classList.add('disabled');
    next=document.getElementById('next');
    next.parentElement.classList.remove('disabled');
  }else if(dimana=="3"){
    prev=document.getElementById('prev');
    prev.parentElement.classList.remove('disabled');
    next=document.getElementById('next');
    next.parentElement.classList.add('disabled');
  }else{
    prev=document.getElementById('prev');
    prev.parentElement.classList.remove('disabled');
    next=document.getElementById('next');
    next.parentElement.classList.remove('disabled');
  }
}

function goprev(){
  sekarang=document.getElementsByClassName('act');
  page=sekarang[0].children[0].getAttribute('page');
  document.getElementById('next').parentElement.classList.remove('disabled');
  if(page==2){
      ke=document.querySelectorAll('[page="1"]');
      sekarang[0].classList.remove('active');
      sekarang[0].classList.remove('act');
      ke[0].parentElement.classList.add('active');
      ke[0].parentElement.classList.add('act');
      disable=document.getElementById('prev');
      disable.parentElement.classList.add('disabled');
  }else if(page==3){
      ke=document.querySelectorAll('[page="2"]');
      sekarang[0].classList.remove('active');
      sekarang[0].classList.remove('act');
      ke[0].parentElement.classList.add('active');
      ke[0].parentElement.classList.add('act');
  } 
}

function gonext(){
  sekarang=document.getElementsByClassName('act');
  page=sekarang[0].children[0].getAttribute('page');
  document.getElementById('prev').parentElement.classList.remove('disabled');
  console.log(page);
  if(page==2){
      ke=document.querySelectorAll('[page="3"]');
      sekarang[0].classList.remove('active');
      sekarang[0].classList.remove('act');
      ke[0].parentElement.classList.add('active');
      ke[0].parentElement.classList.add('act');
      disable=document.getElementById('next');
      disable.parentElement.classList.add('disabled');
  }else if(page==1){
      ke=document.querySelectorAll('[page="2"]');
      sekarang[0].classList.remove('active');
      sekarang[0].classList.remove('act');
      ke[0].parentElement.classList.add('active');
      ke[0].parentElement.classList.add('act');
  }
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

function barangLSearch(){
	var semua = document.getElementsByClassName('barangL');
	var param=document.getElementById('search').value;
	var total=0;
	var notFound=document.getElementById('notfound');
	var bar=document.getElementById('bar');
	for(var i=0;i<semua.length;i++){
		var nama=semua[i].getAttribute('nama');
		//console.log(nama);
		nama=nama.toLowerCase();
		var n=nama.search(param);
		if(n==-1){
			semua[i].classList.add("hidden");
		}else{
			total+=1;
			semua[i].classList.remove("hidden");
		}

	}
	if(total==0){
		notFound.classList.remove("hidden");
		bar.classList.add('hidden');
	}else{
		notFound.classList.add("hidden");
		bar.classList.remove('hidden');
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
      }else if(sort=="tanggalkl"){
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

function sortTableAnggota() {
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
      if(sort=="nrp"){
      	x = rows[i].getElementsByTagName("TD")[0];
      	y = rows[i + 1].getElementsByTagName("TD")[0];
      	if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
      	  // I so, mark as a switch and break the loop:
      	  shouldSwitch= true;
      	  break;
      	}
      }else if(sort=="nama"){
      	x = rows[i].getElementsByTagName("TD")[1];
      	y = rows[i + 1].getElementsByTagName("TD")[1];
      	if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
      	  // I so, mark as a switch and break the loop:
      	  shouldSwitch= true;
      	  break;
      	}
      }else if(sort=="nohp"){
      	x = rows[i].getElementsByTagName("TD")[3];
      	y = rows[i + 1].getElementsByTagName("TD")[3];
      	if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
      	  // I so, mark as a switch and break the loop:
      	  shouldSwitch= true;
      	  break;
      	}
      }else if(sort=="status"){
      	x = rows[i].getElementsByTagName("TD")[6];
      	y = rows[i + 1].getElementsByTagName("TD")[6];
      	if(x.innerHTML=='Aktif'){
      		var x1=1;
      	}else{
      		var x1=2;
      	}
      	if(y.innerHTML=='Aktif'){
      		var y1=1;
      	}else{
      		var y1=2;
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

function editdata(data, form,close){
    var data = document.getElementById(data);
    var form = document.getElementById(form);
    
    for(var i = 0 ;i < data.children.length - 2; i++){
      console.log(form.children[i].children[1].value);
      console.log(data.children[i].innerHTML);
      data.children[i].innerHTML = form.children[i].children[1].value;
    }
    alert("Data berhasil diedit!");
    eventFire(document.getElementById(close),'click');
    return false;
}

function validateLogin(){
	var userName = document.getElementById('userName');
	var userPassword = document.getElementById('userPassword');
	if(userName.value=='admin'&&userPassword.value=='admin'){
			document.location.href='anggota.html';
			return false;
	}else if(userName.value=="5115100000" && userPassword.value=="5115100000"){
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
	}else if(userName.value!="" && userPassword.value!=""){
    window.alert('Kombinasi username dan password tidak ditemukan!');
    return false;
  }else{
		return true;
  }
}

function tambahbarang(){
  var elements=document.forms.tambang.getElementsByTagName('input');
  // var path='Picture/infocus.jpg';
  var files = document.getElementById('fileToUploadT').webkitRelativePath;
  console.log(files);
  // var path = files[0].webkitRelativePath;
  // var Folder = path.split("/");
  var text='<div nama="Penghapus Papan" id="barang5" class="container mt-lg-2 py-2 px-4 bg-light barangL"><div class="container container-barang col align-items-center"><div class="row align-items-center my-lg-3"><div class=" white col-lg-10 bg-dark rectangle" style="display: table;"><div class=" white col-lg-3 bg-dark" style="align-content: center;float: left;"><img src="'+files+'" class="imageresponse imagestandart imageresponseif" id="gambar5" onmouseover="mouseover5()" onmouseout="mouseout5()">  </div><div class="mid-sm"><font class="barangs barangskecil"><pre><b>NAMA</b>         : '+elements[0].value+'</font><br><br></pre><font class="barangs barangskecil"><pre><b>SISA STOCK</b>   : '+elements[1].value+'/'+elements[1].value+'</font></pre></div></div><div class="mid-sm" id="peminjam5">  <p>Daftar Barang Terpinjam</p>  <p style="font-size: 30px; color: green; transform: rotate(18deg); padding-top: 40px">BARANG SEDANG TIDAK DIPINJAM</p></div><div class="col-lg-2 justify-content-center align-items-center"> <button class=" btn btn-info my-2" data-toggle="modal" data-target="#editBarang"><span class="oi oi-pencil"></span></button> <button class=" btn btn-danger my-2" data-toggle="modal" data-target="#deleteBarang5"><span class="oi oi-circle-x"></span></button></div>  </div></div><div class="row">   <div class="col">       <hr class="hr-small">   </div></div>   </div>'
  var bar=document.getElementById('bar');
  var para=document.createElement('template');
  para.innerHTML= text;
  bar.appendChild(para.content);
  eventFire(document.getElementById('closeTambah'),'click');
  return false;
}

function editbarang(id,form,close,nama,jumlah){
  var form=document.getElementById(form);
  var nama=document.getElementById(nama);
  var jumlah=document.getElementById(jumlah);
  var text=jumlah.children[0].innerHTML.split('');
  text[24]=form.children[1].children[1].value;
  var text1="<b>NAMA</b>         : "+form.children[0].children[1].value;
  nama.children[0].innerHTML=text1;
  jumlah.children[0].innerHTML=text.join("");
  window.alert('Data berhasil diedit');
  eventFire(document.getElementById(close),'click');
  return false;
}

function newPassword(){
	var field
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

(function() {
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
})();



// function imageZoom(imgID, resultID) {
//   var img, lens, result, cx, cy;
//   img = document.getElementById(imgID);
//   result = document.getElementById(resultID);
//   /*create lens:*/
//   lens = document.createElement("DIV");
//   lens.setAttribute("class", "img-zoom-lens");
//   /*insert lens:*/
//   img.parentElement.insertBefore(lens, img);
//   /*calculate the ratio between result DIV and lens:*/
//   cx = result.offsetWidth / lens.offsetWidth;
//   cy = result.offsetHeight / lens.offsetHeight;
//   /*set background properties for the result DIV:*/
//   result.style.backgroundImage = "url('" + img.src + "')";
//   result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
//   /*execute a function when someone moves the cursor over the image, or the lens:*/
//   lens.addEventListener("mousemove", moveLens);
//   img.addEventListener("mousemove", moveLens);
//   /*and also for touch screens:*/
//   lens.addEventListener("touchmove", moveLens);
//   img.addEventListener("touchmove", moveLens);
//   function moveLens(e) {
//     var pos, x, y;
//     /*prevent any other actions that may occur when moving over the image:*/
//     e.preventDefault();
//     /*get the cursor's x and y positions:*/
//     pos = getCursorPos(e);
//     /*calculate the position of the lens:*/
//     x = pos.x - (lens.offsetWidth / 2);
//     y = pos.y - (lens.offsetHeight / 2);
//     /*prevent the lens from being positioned outside the image:*/
//     if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
//     if (x < 0) {x = 0;}
//     if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
//     if (y < 0) {y = 0;}
//     /*set the position of the lens:*/
//     lens.style.left = x + "px";
//     lens.style.top = y + "px";
//     /*display what the lens "sees":*/
//     result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
//   }
//   function getCursorPos(e) {
//     var a, x = 0, y = 0;
//     e = e || window.event;
//     /*get the x and y positions of the image:*/
//     a = img.getBoundingClientRect();
//     /*calculate the cursor's x and y coordinates, relative to the image:*/
//     x = e.pageX - a.left;
//     y = e.pageY - a.top;
//     /*consider any page scrolling:*/
//     x = x - window.pageXOffset;
//     y = y - window.pageYOffset;
//     return {x : x, y : y};
//   }
// }

var semua = document.getElementsByTagName('input');
if(document.getElementById('passulang')!==null){
  var passulang=document.getElementById('passulang');
}else {
  var passulang=null;
}
for (var i=0;i<semua.length;i++){
  if(passulang!=semua[i]){
    semua[i].oninvalid = function(e){
      if(e.target.validity.valueMissing){
        e.target.setCustomValidity("Field tidak boleh kosong");
      }else{
        e.target.setCustomValidity('');
      }
    };
    semua[i].oninput = function(e){
      e.target.setCustomValidity('');
    }
  }
}


function kunciAkun(id, target, table){
  var table = document.getElementById(table);
  document.getElementById(id).className = "oi oi-lock-unlocked";
  document.getElementById(id).parentElement.setAttribute("data-target",target);
  for(var i = 0; i < table.children.length ; i++){
    table.children[i].className = "table-warning";
  }
  table.children[6].innerHTML = "Non-aktif"
  return false;
}

function bukaAkun(id, target, table){
  var table = document.getElementById(table);
  document.getElementById(id).className = "oi oi-lock-locked";
  document.getElementById(id).parentElement.setAttribute("data-target",target);
  for(var i = 0; i < table.children.length ; i++){
    table.children[i].className = "table-success";
  }
  table.children[6].innerHTML = "Aktif"
  return false;
}

var strength = {
  0: "Jelek",
  1: "Lemah",
  2: "Bagus",
  3: "Sangat Bagus",
  4: "Kuat"
}

var password = document.getElementById('passlama');
var meter = document.getElementById('password-strength-meter');
var text = document.getElementById('password-strength-text');

password.addEventListener('input', function() {
  var val = password.value;
  var result = zxcvbn(val);

  // Update the password strength meter
  meter.value = result.score;

  // Update the text indicator
  if (val !== "") {
    text.innerHTML = strength[result.score]; 
  } else {
    text.innerHTML = "";
  }
});

function visible(){
  var icon = document.getElementById('visible');
  var pass = document.getElementById('passlama');
  pass.type = "";
  if(icon.className == "ion-ios-eye")
  {
    icon.className = "ion-eye-disabled";
    pass.type = "";
  }
  else
  {
    icon.className = "ion-ios-eye";
    pass.type = "password";
  }
 
}

console.log(document.getElementById('passlama').type);