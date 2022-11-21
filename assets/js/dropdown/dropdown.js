const  personDropdown=document.getElementById('person-dropdown');
const  leavingDropdown=document.getElementById('leaving-dropdown');
const personContent=document.getElementById('person-content');
const guestRoomDropdown=document.querySelector('.guestroomdropdown');
let dropdown= document.querySelector('.dropdown-item-content')


    function togglePerson() {
            personContent.classList.toggle('show');
        } 

    function toggleGuestRoom() {
      dropdown.classList.toggle('show');
       console.log(dropdown);
        document.getElementById('hotelRoom').focus()
        // guestRoomContent.classList.toggle('show');
        
     }
    document.addEventListener('click', function(e) {
        
        if (!personDropdown.contains(e.target)) {

            if (personContent.classList.contains('show')) {
                personContent.classList.remove('show')
            }
        }
        if (!guestRoomDropdown.contains(e.target)) {
           if(!dropdown.contains(e.target)) {
            dropdown.classList.remove('show')
           }
           
        }
      
        
        
    
    });

 