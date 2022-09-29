///// LOAD EVENT TO ADD THE REQUIRED VARIABLES

window.addEventListener('load', () =>{
    const username = sessionStorage.getItem('USERNAME');
    const email = sessionStorage.getItem('EMAIL');
    const image = sessionStorage.getItem("IMAGE");
    const primary = sessionStorage.getItem("PRIMARY");
    const secondary = sessionStorage.getItem("SECONDARY");
    const university = sessionStorage.getItem("UNIVERSITY");
    const sports = sessionStorage.getItem("SPORTS");
    const music =  sessionStorage.getItem("MUSIC");
    const leadership = sessionStorage.getItem("LEADERSHIP");
    const travel = sessionStorage.getItem("TRAVEL");
    const programming = sessionStorage.getItem("PROGRAMMING");
    const gaming = sessionStorage.getItem("GAMING");
    const cooking = sessionStorage.getItem("COOKING");
    const personalStatement = sessionStorage.getItem('PERSONAL_STATEMENT');


   document.getElementById('username-input').innerHTML = username; 
    document.getElementById('email-input').innerHTML = email;
    document.getElementById('profile-photo1').src = image;
    document.getElementById('profile-photo2').src = image;
    document.getElementById('profile-photo3').src = image;
    document.getElementById('primary').innerText = primary;
    document.getElementById('secondary').textContent = secondary;
    document.getElementById('university').textContent = university;
    document.getElementById('personalStatement').textContent = personalStatement;
    
    document.getElementById('hobby1').textContent =  sports ; 
    document.getElementById('hobby2').textContent =  music  ;
    document.getElementById('hobby3').textContent =  leadership  ;
    document.getElementById('hobby4').textContent =  travel  ;
    document.getElementById('hobby5').textContent =  programming  ;
    document.getElementById('hobby6').textContent =  gaming  ;
    document.getElementById('hobby7').textContent =  cooking  ; 
});


//SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

//THEME

const theme = document.querySelector('#theme');
const profile = document.querySelector('#profile');
const themeHousing = document.querySelector('.theme');
const profileHousing = document.querySelector('.container1');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorChoice = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');


// =========================remove active class from all menu items

const changeActiveItem = () =>{
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () =>{
        changeActiveItem();
        item.classList.add('active');
    })
})

//================= THEME ====================================================

//======= OPEN CONTAINER
const openThemeContainer = () => {
    themeHousing.style.display = 'grid';
}

const closeThemeContainer = (e) => {
    if(e.target.classList.contains('theme')){
        themeHousing.style.display = 'none';
    }
}

// =========== CLICK EVENT TO MANIPULATE CONTAINER =============================
themeHousing.addEventListener('click', closeThemeContainer);
theme.addEventListener('click', openThemeContainer);

//====================== FONTS ============================

//REMOVE ACTIVE CLASS FROM SPANS OR FONT SIZE SELECTOR
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');
        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        }else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        }else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        }else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        }
        //change font size of root element
        document.querySelector('html').style.fontSize = fontSize;
    })
})
// ============== REMOVE ACTIVE CLASS FROM COLORS
const changeActiveColorClass = () =>{
    colorChoice.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

//====================CHANGE PRIMARY COLOR

colorChoice.forEach(color => {
    color.addEventListener('click', () => {
        let primaryHue;
        changeActiveColorClass();

        if(color.classList.contains('color-1')){
            primaryHue = 349;
        }else if(color.classList.contains('color-2')){
            primaryHue = 252;
        }else if(color.classList.contains('color-3')){
            primaryHue = 52;
        }else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }
        
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})




// ================= THEME BACKGROUND VALUES 
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

//==============CHANGES BACKGROUND COLOR
const changeBackground = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

Bg1.addEventListener('click', () =>{
    darkColorLightness = '17%';
    whiteColorLightness = '100%';
    lightColorLightness = '95%';
    //add active class
    Bg1.classList.add('active');
    //remove active class from the rest
    Bg2.classList.remove('active');
    changeBackground();
})

Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    //add active class
    Bg2.classList.add('active');
    // remove active class from the others
    Bg1.classList.remove('active');
    changeBackground();
});

//================= PROFILE ====================================================

//======= OPEN CONTAINER
const openProfileContainer = () => {
    profileHousing.style.display = 'grid';
}

const closeProfileContainer = (e) => {
    if(e.target.classList.contains('container1')){
        profileHousing.style.display = 'none';
    }
}

// =========== CLICK EVENT TO MANIPULATE CONTAINER =============================
profileHousing.addEventListener('click', closeProfileContainer);
profile.addEventListener('click', openProfileContainer);


////////====================== PROFILE FORM EDITOR ========================================

document.querySelector('#file').addEventListener('change', function(){
    const reader = new FileReader();
    reader.addEventListener('load', ()=>{
      sessionStorage.setItem('IMAGE', reader.result);
      const imgresult = sessionStorage.getItem('IMAGE');
      document.querySelector('#preview-img').src = imgresult;
    })  
    reader.readAsDataURL(this.files[0]);
    
  });
  
/*   document.getElementById('sports').addEventListener('click', ()=>{
        if (document.getElementById('sports').checked == true) {
         const sports  = document.getElementById('sports').value;
         sessionStorage.setItem("SPORTS", sports);
        }else{
          sessionStorage.removeItem("SPORTS", sports);
        }
      });
  document.getElementById('music').addEventListener('click', ()=>{
    if (document.getElementById('music').checked == true) {
      const music  = document.getElementById('music').value;
      sessionStorage.setItem("MUSIC", music);
    }else{
      sessionStorage.removeItem("MUSIC", music);
    }
  });
  
  document.getElementById('leadership').addEventListener('click', ()=>{
        if (document.getElementById('leadership').checked == true) {
          const leadership  = document.getElementById('leadership').value;
          sessionStorage.setItem("LEADERSHIP", leadership);
        }else{
          sessionStorage.removeItem("LEADERSHIP", leadership);
        }
      });
  
      document.getElementById('travel').addEventListener('click', ()=>{
        if (document.getElementById('travel').checked == true) {
          const travel  = document.getElementById('travel').value;
          sessionStorage.setItem("TRAVEL", travel);
        }else{
          sessionStorage.removeItem("TRAVEL", travel);
        }
      });
  
      document.getElementById('programming').addEventListener('click', ()=>{
        if (document.getElementById('programming').checked == true) {
          const programming  = document.getElementById('programming').value;
         sessionStorage.setItem("PROGRAMMING", programming);
        }else{
          sessionStorage.removeItem("PROGRAMMING", programming);
        }
      });
  
      document.getElementById('gaming').addEventListener('click', ()=>{
        if (document.getElementById('gaming').checked == true) {
          const gaming  = document.getElementById('gaming').value;
          sessionStorage.setItem("GAMING", gaming);
        }else{
          sessionStorage.removeItem("GAMING", gaming);
        }
      });
  
      document.getElementById('cooking').addEventListener('click', ()=>{
        if (document.getElementById('cooking').checked == true) {
          const cooking  = document.getElementById('cooking').value;
         sessionStorage.setItem("COOKING", cooking);
        }else{
          sessionStorage.removeItem("COOKING", cooking);
        }
      });   */
      
      
     function handleSubmit(){
        /* const username  = document.getElementById('username').value;
        const email  = document.getElementById('email').value; */
      const primary  = document.getElementById('primary-input').value;
      const secondary  = document.getElementById('secondary-input').value;
      const university  = document.getElementById('university-input').value;
      const personalStatement  = document.getElementById('personal-statement').value;

  
     /*  sessionStorage.setItem("USERNAME", username);
      sessionStorage.setItem("EMAIL", email);  */       
      sessionStorage.setItem("PRIMARY", primary);
      sessionStorage.setItem("SECONDARY", secondary);
      sessionStorage.setItem("UNIVERSITY", university);
      sessionStorage.setItem("PERSONAL_STATEMENT", personalStatement);


      //HOBBIES
      if (document.getElementById('sports').checked == true) {
        const sports  = document.getElementById('sports').value;
        sessionStorage.setItem("SPORTS", sports);
       }else{
         sessionStorage.removeItem("SPORTS", sports);
       }

       if (document.getElementById('music').checked == true) {
        const music  = document.getElementById('music').value;
        sessionStorage.setItem("MUSIC", music);
      }else{
        sessionStorage.removeItem("MUSIC", music);
      }

      if (document.getElementById('leadership').checked == true) {
        const leadership  = document.getElementById('leadership').value;
        sessionStorage.setItem("LEADERSHIP", leadership);
      }else{
        sessionStorage.removeItem("LEADERSHIP", leadership);
      }

      if (document.getElementById('travel').checked == true) {
        const travel  = document.getElementById('travel').value;
        sessionStorage.setItem("TRAVEL", travel);
      }else{
        sessionStorage.removeItem("TRAVEL", travel);
      }

      if (document.getElementById('programming').checked == true) {
        const programming  = document.getElementById('programming').value;
       sessionStorage.setItem("PROGRAMMING", programming);
      }else{
        sessionStorage.removeItem("PROGRAMMING", programming);
      }

      if (document.getElementById('gaming').checked == true) {
        const gaming  = document.getElementById('gaming').value;
        sessionStorage.setItem("GAMING", gaming);
      }else{
        sessionStorage.removeItem("GAMING", gaming);
      }

      if (document.getElementById('cooking').checked == true) {
        const cooking  = document.getElementById('cooking').value;
       sessionStorage.setItem("COOKING", cooking);
      }else{
        sessionStorage.removeItem("COOKING", cooking);
      }
  
      return;
  }
