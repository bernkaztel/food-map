$(document).ready(function (e) {
    splash(1000);
    initMap();
    $('#filter').change(function () {
        $.fn.deleteall();

        var selectedIndex = $('#filter').prop('selectedIndex');
        // console.log(selectedIndex);
        var selectedTop = parseFloat(this[selectedIndex].dataset.top).toFixed(2);
        var selectedBottom = parseFloat(this[selectedIndex].dataset.bottom).toFixed(2);
        // console.log(selectedTop);
        // console.log(selectedBottom);
        $.each(data, function () {
            // if (this.rating > selectedBottom && this.rating < selectedTop) 
            selectedRating = [];
            for (i = 0; i < data.results.length; i++) {
                var restaurantRating = (this[i].rating);
                var restaurantName = (this[i].name);
                // console.log(restaurantRating);
                if (restaurantRating >= selectedBottom & restaurantRating <= selectedTop) {
                    selectedRating.push(this[i]);
                    // console.log(restaurantName);
                } //final del if
            } //final of for
            console.log(selectedRating);
            $.fn.makeUl();
            $('.openModal').click(function (e) {
                e.preventDefault();
                var mymodal = $('#myModal');
                mymodal.find('#restaurantnamemodal').text(this.dataset.name);
                mymodal.find('#restaurantadresss').text(this.dataset.adress);
                mymodal.find('#restaurantimagemodal').attr('src', this.dataset.image);
                mymodal.modal('show');

            }); //final of showmodal
        }); //final of each
    }); //final pf change

    $.fn.makeUl = function () {
        selectedRating.forEach(function (value) {
            var newname = value.name;
            var newadress = value.vicinity;
            var newrating = value.rating;
            var newimage = value.images;
            console.log(newname + newadress + newrating);
            $.fn.cloning(newname, newrating, newimage, newadress);
            //Se borran las opciones anteriores
            $('#container:first-child').remove();
        }); //final  of  each
    }; //final de funcion makeUL

    $.fn.cloning = function (newname, newrating, newimage, newadress) {
        var firstcontainer = $("<div></div>");
        firstcontainer.attr({
            class: 'panel panel-sucess center-block',
            id: 'restauranttemplate'
        });
        $("#container").append(firstcontainer);
        var heading = $("<div></div>");
        heading.attr({
            class: 'panel-heading text-center',
        });
        firstcontainer.append(heading);
        var secondcontainer = $("<div></div>");
        secondcontainer.attr({
            class: 'panel-body nopadding text-center',
        });
        firstcontainer.append(secondcontainer);
        var resimage = $("<img></img>");
        resimage.attr({
            class: ' img-responsive imgrest center-block',
            id: newimage,
            src: newimage
        });
        secondcontainer.append(resimage);
        var spanname = $("<span></span>").text(newname);
        spanname.attr({
            class: 'restaurantname text-center',
            id: newname,
        });
        heading.append(spanname);
        var spanname2 = $("<span></span>");
        spanname2.attr({
            class: 'text-center',
        });
        secondcontainer.append(spanname2);
        var icon = $("<i></i>");
        icon.attr({
            class: 'fa fa-star text-center',
        });
        secondcontainer.append(icon);
        var stars = $("<span></span>").text(' ' + newrating);
        stars.attr({
            id: newrating,
            class: 'stars text-center'
        });
        secondcontainer.append(stars);
        var thirdcontainer = $("<div></div>");
        thirdcontainer.attr({
            class: 'panel-footer panel-restaurant',
        });
        firstcontainer.append(thirdcontainer);
        secondcontainer.append(stars);
        var button = $("<button></button>").text('Más detalles');
        button.attr({
            class: 'btn btn-sm center-block openModal',
            id: newname + '1',
            'data-adress': newadress,
            'data-name': newname,
            'data-image': newimage
        });
        thirdcontainer.append(button);
    }; //final of cloning

    $.fn.deleteall = function () {
        //Se borran las opciones anteriores
        $('#container').empty();
    }; //final de deleteall

    function splash(param) {
        var time = param;
        setTimeout(function () {
            $('#splashscreen').hide();
            $('#all').attr('class', 'contenedor noppading');
        }, time);
    } //final de splash
    //Función de crear mapa
    function initMap() {
        var myLatLng = {
            lat: 19.4255003,
            lng: -99.17226699999999
        };
        var myLatLng2 = {
            lat: 19.4184537,
            lng: -99.1563879
        };
        var myLatLng3 = {
            lat: 19.4279395,
            lng: -99.16712749999999
        };
        var myLatLng4 = {
            lat: 19.4201223,
            lng: -99.16733029999999
        };
        var myLatLng5 = {
            lat: 19.42796749999999,
            lng: -99.1643466
        };
        var myLatLng6 = {
            lat: 19.413661,
            lng: -99.160366
        };
        var myLatLng7 = {
            lat: 19.42313,
            lng: -99.16798799999999
        };
        var myLatLng8 = {
            lat: 19.4283376,
            lng: -99.1627737
        };
        var myLatLng9 = {
            lat: 19.4336477,
            lng: -99.1544303
        };
        var myLatLng10 = {
            lat: 19.4242074,
            lng: -99.1647936
        };
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 13,
            center: myLatLng
        });

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'St.Regis México City'
        });
        var marker2 = new google.maps.Marker({
            position: myLatLng2,
            map: map,
            title: 'Four Points Sheraton'
        });
        var marker3 = new google.maps.Marker({
            position: myLatLng3,
            map: map,
            title: 'Sheraton Maria Isabel'
        });
        var marker4 = new google.maps.Marker({
            position: myLatLng4,
            map: map,
            title: "Fisher's"
        });
        var marker5 = new google.maps.Marker({
            position: myLatLng5,
            map: map,
            title: "Marriot"
        });
        var marker6 = new google.maps.Marker({
            position: myLatLng6,
            map: map,
            title: "Covadonga"
        });
        var marker7 = new google.maps.Marker({
            position: myLatLng7,
            map: map,
            title: "Hippodrome Hotel Condesa"
        });
        var marker8 = new google.maps.Marker({
            position: myLatLng8,
            map: map,
            title: "Olive Garden"
        });
        var marker9 = new google.maps.Marker({
            position: myLatLng9,
            map: map,
            title: "Le Méridien Mexico City"
        });
        var marker10 = new google.maps.Marker({
            position: myLatLng10,
            map: map,
            title: "Wingstop Zona Rosa"
        });
    }
}); //final de ready
