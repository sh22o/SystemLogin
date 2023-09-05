 
 var UserNameinput=document.getElementById('name')  ; 
 var SignUpEmailInput=document.getElementById('SignUpEmail') ; 
 var UserPasswordInput=document.getElementById('password');   
 var SignUpbtn=document.getElementById('SignUpbtn') ; 
 var Users; 

  if(localStorage.getItem('Users')==null){ 
    Users=[]; 

  } else{
    Users=JSON.parse(localStorage.getItem('Users')) //convert to arrayof objects 
  }




 // signUp 
 function SignUp(){ 
    InputsValidation(); 
    IsExist();  
    if( InputsValidation() == true && IsExist() == false){ 
        var user ={
            userName:UserNameinput.value, 
            Email:SignUpEmailInput.value, 
            Password:UserPasswordInput.value
        }  
          console.log(user)
        Users.push(user); 
        console.log(Users) 
        localStorage.setItem('Users',JSON.stringify(Users));  // convert to string 
        
        // display massage user Done 

        var SuccessMassage=document.getElementById('SucssesMassege'); 
        SuccessMassage.classList.replace("d-none","d-block"); 
        SignUpbtn.setAttribute("href","index.html"); 

    } else{ 

        var errorMassage= document.getElementById('tryAgain');  
        errorMassage.classList.replace("d-none","d-block")





    }
   




 }   
  var SignUpbtn=document.getElementById('SignUpbtn')

 // call function 
 SignUpbtn.addEventListener('click' , ()=>SignUp()); 
 

// userInputValidaton Function 

 function UserNameValidation(){ 
    var UserNAmeAllert = document.getElementById('UserNAmeAllert'); 
    regx= /^[A-Za-z]{3,10}(\s?[A-Za-z0-9]{7,29})?$/
    if(regx.test(UserNameinput.value) == true||UserNameinput.value!=""){
        UserNameinput.classList.add("is-valid") 
        UserNameinput.classList.remove("is-invalid")
        UserNAmeAllert.classList.replace("d-block","d-none")  
        return true;  

        

    }else{
        UserNameinput.classList.add("is-invalid") 
        UserNameinput.classList.remove("is-valid") 
        UserNAmeAllert.classList.replace("d-none","d-block")   
        return false; 



    }

 


 } 

function PasswordValidation(){
   var  regx = /^.{5,15}$/ 
   var PasswordAllert = document.getElementById('PasswordAllert'); 
   if( regx.test(UserPasswordInput.value)==true && UserPasswordInput.value!=""){ 
    UserPasswordInput.classList.add("is-valid") 
    UserPasswordInput.classList.remove("is-invalid")
    PasswordAllert.classList.replace("d-block","d-none")  
    return true;

   } else{ 
    UserPasswordInput.classList.add("is-invalid") 
    UserPasswordInput.classList.remove("is-invalid") 
    PasswordAllert.classList.replace("d-none","d-block")   
        return false; 




   }


}

function EmailValidation(){
    var EmailAllert=document.getElementById('EmailAllert'); 
    var regx=/@[a-z]{5,29}(\.com)$/ 
    if(regx.test(SignUpEmailInput.value) == true && SignUpEmailInput.value!="" ){ 
        SignUpEmailInput.classList.add("is-valid") 
        SignUpEmailInput.classList.remove("is-invalid")
        EmailAllert.classList.replace("d-block","d-none")  
        return true;


    }else { 
        SignUpEmailInput.classList.add("is-invalid") 
        SignUpEmailInput.classList.remove("is-invalid") 
        EmailAllert.classList.replace("d-none","d-block") 


    }
}
  function InputsValidation() { 
    UserNameValidation();  
    PasswordValidation(); 
    EmailValidation();  
     if( UserNameValidation()==true && PasswordValidation()==true && PasswordValidation()==true ){
     
        return true; 
     }else{
      
        return false; 
     }


  } 

  function IsExist(){ 
    var emailExist=document.getElementById('EmailExists');  
    var userNameExists=document.getElementById('userNameExists'); 
    var thisAccountExists=document.getElementById('thisAccountExists'); 
    for( var i=0; i< Users.lenght ; i++){ 
        if(Users[i].userName.lowerCase()== UserNameinput.value.lowerCase() || 
        Users[i].Email.lowerCase()== SignUpEmailInput.value.lowerCase() ) 
        { 
            UserNameinput.classList.remove("is-valied"); 
            SignUpEmailInput.classList.remove("is-valied"); 
            emailExist.classList.replace("d-none","d-block");  
            userNameExists.classList.replace("d-none","d-block");  
            thisAccountExists.classList.replace("d-none","d-block"); 


            return true; 
        } 
    } 
    return false ; 
    }


 

  // function of login 

  function login(){
    var LoginEmailInput= document.getElementById('LoginEmail'); 
    var LoginPasswordInput=document.getElementById('passwordLogin');  
    var loginbtn=document.getElementById('loginbtn'); 
    var errorLogin=document.getElementById('errorLogin'); 
    // check for inputs empaty or not 
    if(LoginEmailInput.value =="" || LoginPasswordInput.value ){
        var fillinputsAllert= document.getElementById('fillinputsAllert'); 
        fillinputsAllert.classList.replace("d-none","d-block"); 
        return false; 
    } 
    // check if the email or password in mystorage or not 
    for(var i=0 ; i<Users.lenght; i++){
        if(Users[i].Email.lowerCase()==LoginEmailInput.value.lowerCase() && 
           Users[i].Password.lowerCase()==LoginPasswordInput.value.lowerCase()){  
            localStorage.setItem('userNameSE',Users[i].userName)
            loginbtn.setAttribute("href","home.html")




        }else{ 
            errorLogin.classList.replace("d-none","d-block")

        }
    }
  } 

  var username=localStorage.getItem('userNameSE') 
  function DisplayWelcome(){
      document.getElementById('userNameD').innerHTML=`welcome ${username}`
  }   
   // loginBtn 
   var loginbtn=document.getElementById('loginbtn')
       //login function call 
   loginbtn.addEventListener('click', ()=>login()); 







  // logout Function 

  function Logout(){
    localStorage.remove('userNameSE')
  } 

  var logout =document.getElementById('logout') ; 
  logout.addEventListener("click" , ()=>logout())


  