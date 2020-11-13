// 
// https://www.jqueryscript.net/form/Gmail-Email-Input-jQuery-GmailTagsInput.html
// 


//function to remove email tags on clicking x button.
$('#tags').on('click', 'span', function () {
    var val = $(this).text();
    $(this).remove();
    $('#inp').val(val);
    $('#inp').focus();
});


//function to remove added email address on pressing back key.
$(".emailtag").on({
    keyup: function (ev) {
        if ($('.emailAdd').length != 0 ) {
            $('#inp').val(' ')
        }
        if (8 == ev.which) {
            $('#tags span').last().remove();
        }
    }
})


// function to validate entered strings.
$("#tags input").on({
    keyup: function (ev) {
        // alert('test1', ev.keyCode)
        // console.log(ev.which)        
        if (/(32|229)/.test(ev.which) && this.value) {
            // alert((/(32|229)/.test(ev.which)));
            if ($('.emailAdd').length == 0 ) {
                validateEmail(this.value, this);
            }
        }
    }
})
// $('#tags input').on('textInput', e => {
//     var keyCode = e.originalEvent.data.charCodeAt(0);
//     if ((keyCode === 32) || (keyCode === 229)) {
//         if ($('.emailAdd').length == 0) {
//             validateEmail(this.value, this);
//         }
//     }
// })
$("#tags input").focusout(function(){
    if ($('.emailAdd').length == 0 ) {
        validateEmail(this.value, this);
    }
})

//validate email address
function validateEmail(inputValue, that) {
    var emailAddress = inputValue.trim();
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(emailAddress)) {
        $("<span/>", { text: emailAddress.toLowerCase(), insertBefore: that, class: 'emailAdd', tabindex: '1' });
        $('#inpHidden').val(that.value.trim());
        $('#inp').val(' ');
    } 
}
