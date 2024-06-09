function getTime(tanggal) {
  const listBulan = [
    "January",
    "Febuari",
    "Maret",
    "Apr",
    "Meiiii",
    "Juni",
    "Juli",
    "Augustus",
    "Sep",
    "Okt",
    "Nov",
    "Desember",
  ];

  const date = tanggal.getDate();
  const month = tanggal.getMonth();
  const year = tanggal.getFullYear();
  let hours = tanggal.getHours();
  let minutes = tanggal.getMinutes();

  if (hours <= 9){
    hours ="0" + hours;
  }

  if (minutes <= 9){
    minutes = "0" + hours
  }
  return `${date} ${listBulan[month]} ${year} ${hours}:${minutes}`;

}

function getDistanceTime(time) {
  const timeNow = new Date().getTime(); 
  const timePosted = time;

  const distance = timeNow - timePosted; 
  

  const distanceSeconds = Math.floor(distance / 1000); 
  const distanceMinutes = Math.floor(distance / 1000 / 60); 
  const distanceHours = Math.floor(distance / 1000 / 60 / 60); 
  const distanceDay = Math.floor(distance / 1000 / 60 / 60 / 24); 
  console.log(distanceSeconds);
  console.log(distanceMinutes);
  console.log(distanceHours);
  console.log(distanceDay);

  if (distanceDay > 0) {
    return `${distanceDay} Day Ago`;
  } else if (distanceHours > 0) {
    return `${distanceHours} Hours Ago`;
  } else if (distanceMinutes > 0) {
    return `${distanceMinutes} Minutes Ago`;
  } else if (distanceSeconds > 0) {
    return `${distanceSeconds} Seconds Ago`;
  }
}

let dataBlog = [];
function submitBlog(event) {

  event.preventDefault();

  let InputTitle = document.getElementById("inputName").value;
  let inputSDate = document.getElementById("inputSDate").value;
  let inputEDate = document.getElementById("inputEDate").value;
  let inputDescription = document.getElementById("inputDescription").value;
 
   
  let inputImage = document.getElementById("inputImage").files;
  if (inputImage.length > 0) {
    inputImage = URL.createObjectURL(inputImage[0]);
  } else {
    projectImage = 'path-to-default-image.jpg'; 
  }
 

  if (InputTitle == "") {
    alert("Title harus diisi");
  }
  else if (inputSDate == ""){
    alert("data harus diisi");
  }
  else if (inputEDate == ""){
    alert("data harus diisi");
  } 
  else if (inputDescription == ""){
    alert("data harus diisi");
  }

 

  
  const blog = {
    title: InputTitle,
    Description: inputDescription,
    Image: inputImage,
    postAt: new Date(),
    penulis: "syahid",
   

    
  };
  document.querySelectorAll('[type="checkbox"]').forEach(item => {
    if (item.checked === true){
      blog[item.value] = true;
    } else if (item.checked === false){
      blog[item.value] = false;
    }
  })

   dataBlog.push(blog);
   console.log("data", dataBlog);
   renderblog();
}

function renderblog(){
  document.getElementById("content").innerHTML= "";
  for (let index = 0; index < dataBlog.length; index++) {
    document.getElementById("content").innerHTML += `
    <div class="blog-list-item">
    <div class="blog-image">
        <img class="blog-image-file"
         src="${dataBlog[index].Image}" alt="">
    </div>
    <div class="blog-contant">
        <div class="blog-button">
            <button class="btn">
                Edit Blog
            </button>
            <button class="btn">
                Post Blog
            </button>
        </div>
        <div>
            <h1 class ="judul">
                <a href="blog-detail.html" target="_black">
                  ${dataBlog[index].title}
                </a>
            </h1>
           <div>
              ${getTime(dataBlog[index].postAt)} | 
              ${dataBlog[index].penulis}
           </div>
           ${dataBlog[index].node ? "Node JS" : "" }
           ${dataBlog[index].next ? "next JS" : "" }
           ${dataBlog[index].react ? "React JS" : "" }
           ${dataBlog[index].TypeScript ? "TypeScript JS" : "" }
           <p>
            ${dataBlog[index].Description}
           </p>
           <p>
            ${getDistanceTime(dataBlog[index].postAt)}
           </p>
        </div>

    </div>

</div>`
  }
}

setInterval(function () {
  renderblog();
}, 1000);