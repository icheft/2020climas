
(function ($) {
    "use strict";

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    //to be changed: so hard~~~~idk how to write JS
    function getCountry(){
        //  讀取radio的值
        var togetherGo = document.getElementById("go-together");
        if(togetherGo.checked){
            alert('歡迎來到 fooish.com');
            document.getElementById('result').value =  3700 ;
        }
        alert('歡迎來到 fooish.com');
    }

 




    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    

})(jQuery);



// light/dark toggle
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

const isDarkModeOn = document.querySelector('#dark-mode-prompt');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); //add this
        $("#form-btn").removeClass('btn-outline-dark').addClass('btn-outline-light');
        isDarkModeOn.innerHTML = `Dark Mode Enabled`;
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); //add this
        $("#form-btn").removeClass('btn-outline-light').addClass('btn-outline-dark');

        isDarkModeOn.innerHTML = `Light Mode On`;
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        $("#form-btn").removeClass('btn-outline-dark').addClass('btn-outline-light');
        isDarkModeOn.innerHTML = `Dark Mode Enabled`;
    }
}
