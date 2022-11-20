const  personDropdown=document.getElementById('person-dropdown');
const  leavingDropdown=document.getElementById('leaving-dropdown');
const personContent=document.getElementById('person-content');
const guestRoomDropdown=document.querySelector('.guestroomdropdown');
const guestRoomContent=document.getElementById('guestroomdropdown-content');

    function togglePerson() {
            personContent.classList.toggle('show');
        } 

    function toggleGuestRoom() {
        document.getElementById('hotelRoom').focus()
        guestRoomContent.classList.toggle('show');
        
     }
    document.addEventListener('click', function(e) {
        
        if (!personDropdown.contains(e.target)) {

            if (personContent.classList.contains('show')) {
                personContent.classList.remove('show')
            }
        }
      
        
        
    
    });

 