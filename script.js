javascript:(function(){

    if (document.getElementById('ctl00_ContentPlaceHolder1_Survey_GridView')) {
        var x = document.getElementById("ctl00_ContentPlaceHolder1_Survey_GridView").rows.length
        for (i = 2; i <= x; i++) {
            if (i < 10) {
                var buffer = 0
            } else {
                var buffer = ""
            }
            let j = Math.floor((Math.random() * 3))
            radio = document.getElementById(`ctl00_ContentPlaceHolder1_Survey_GridView_ctl${buffer}${i}_RB_Satisfaction_${j}`);
            radio.checked = true;
        };
    }

    if (document.getElementById('ctl00_ContentPlaceHolder1_CourCore_GridView')) {
        var x = document.getElementById("ctl00_ContentPlaceHolder1_CourCore_GridView").rows.length
        for (i = 2; i <= x; i++) {
            if (i < 10) {
                var buffer = 0
            } else {
                var buffer = ""
            }
            let j = Math.floor((Math.random() * 3))
            radio = document.getElementById(`ctl00_ContentPlaceHolder1_CourCore_GridView_ctl${buffer}${i}_Relation_${j}`);
            radio.checked = true;
        };
    }

    if (document.getElementById('ctl00_ContentPlaceHolder1_Tch_RadioButtonList_0')) {
        
        radio = document.getElementById(ctl00_ContentPlaceHolder1_Tch_RadioButtonList_0);
        radio.checked = true;
    }

    btn = document.getElementById('ctl00_ContentPlaceHolder1_Submit');
    btn.click();

})();