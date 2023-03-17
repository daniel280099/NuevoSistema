function datos(){
    $.ajax({
        type: "GET",
        url: 'data/datosgenerales.json',
        
        success: function (dataH) {
            console.log(dataH)
            var images = "";
            for(var i = 0; i<dataH.length; i++){
                images += `<div class="col-sm-4 text-center my-2 "><img class="rounded-120px" src="${dataH[i].imagen}" width="200" height="200"></div>`;
            }
            $(".contendor-images").append(images)
            console.log(images)

        },
        dataType: "json"
    })
}
$(function(){
    datos();
})