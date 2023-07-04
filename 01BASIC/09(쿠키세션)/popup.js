var checkbutton = document.querySelector("input[type=checkbox]");

checkbutton.onclick = function() {

    if(checkbutton.checked) {

        //만료시간
        var date = new Date(); //현잭시간
        date.setDate(date.getDate + 1); // 오늘 하루
        
        document.cookie = 'popup=checked; expires=' + date.toUTCString() + ";"
        
        window.close();

        
    }
};
    
    