async function handleIt(event) {
    $.ajax({
        type: "POST", 
        url: "print.js",  
        data: {
            val  :event.target.field.value
        },
        success: function(response){
            // do something
        }
    })
}