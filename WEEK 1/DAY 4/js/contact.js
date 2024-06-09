function submitData() {
    const inputName = document.getElementById("inputName").value;
    const inputEmail = document.getElementById("inputEmail").value;
    const inputPhone = document.getElementById("inputPhone").value;
    const inputSubject = document.getElementById("inputSubjek").value;
    const inputMessage = document.getElementById("inputMessage").value;
    
  
  
    if (inputName == "") {
      alert("Name harus diisi"); 
    } else if (inputEmail == "") {
      alert("Email Harus Diisi"); 
    } else if (inputPhone == "") {
      alert("Phone Number tidak boleh K0s0n9"); 
    } else if (inputSubject == "") {
      alert("Subject tidak boleh kosong"); 
    } else if (inputMessage == "") {
      alert("Message tidak boleh kosong");
    }
    
    
    console.log(
      `Name : ${inputName}\nEmail : ${inputEmail}\nPhone : ${inputPhone}\nSubject : ${inputSubject}\nMessage : ${inputMessage}`
    );
  
    const myemail = "wsyahid45@gmail.com";
  
    let a = document.createElement("a");
    a.href = `mailto:${myemail}?subject=${inputSubject}&body=Hello my name ${inputName}, and my number ${inputPhone} ${inputMessage}`;
    a.click();
  }