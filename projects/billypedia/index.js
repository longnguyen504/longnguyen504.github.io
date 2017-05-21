/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        $('.bio').css('color', 'brown').css('font-family', 'AvanteGarde')
        $('#section-praise').css('color', 'purple').css('font-family', 'CenturyGothic')
        $('#section-quotes').css('color', 'blue')//.css('border-radius', '8px');
        $('.heading-quotes').css('color', 'red').css('padding-left', '8px');
        $('.quote').css('font-style', 'italic').css('color', 'blue')
        $('#header-top-rated').css('font-family', 'rockwell').css('color', 'red')
        $('#list-top-rated').css('font-family', 'monaco').css('color', 'orange')
      //  uncomment this to inspect all available data; delete when done //
       // console.log(data);
        
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        let topRated = data.discography.topRated;
        var bestAlbums = [];
        bestAlbums = topRated.map(function (album, index, topRated){
        let li = $('<li>')
            .text(album['title'])
            .appendTo($('#list-top-rated'))
            .addClass(album.art)
            .attr('art', album.art)
            li.on('click', function(event){
                const trl = $('#section-top-rated')
                trl.children('img').attr('src', album.art)
                
     })
    });
     
        $('#sidebar')
                .append($('<section>')
                .attr('id', 'section-recordings'));
        $('#section-recordings')
                .append($('<header>')
                .attr('id', 'header-list-recordings')
                .attr('class', 'recordings')
                .css('font-family', 'didot')
                .text('List Recordings')
                .append($('<ul>')
                .attr('id', 'list-recordings')
                .css('font-size', '17px')
                .css('font-weight', 'normal')));
        
        let recordings = data.discography.recordings;
            var albums = [];
            recordings = recordings.map(function(album, index, topRated) {
                
            let two = album['title'];
            let li = $('<li>')
                    .text(album['title'])
                    .appendTo('#list-recordings')
                    .addClass(album.art)
                    .attr('art', album.art)
                    .css('font-family', 'papyrus')
                    .css('color', 'yellow')
                    li.on('click', function(event){
                        const ls = $('#section-recordings')
                        ls.children('img').attr('src', album.art)
                    })
        });
         
        $('#image-billy').on('click', function(event) {
            let clicked = $(event.currentTarget);
            let i = clicked.attr('i');
                if (i < data.images.billy.length - 1) {
                let src = data.images.billy[i++];
                    $('#image-billy')
                        .attr('src', "images/billy/billy-" + i + ".jpg")
                        .attr('i', i);
            } else {
                $('#image-billy')
                    .attr('src', "images/billy/billy-0.jpg")
                    .attr('i', '0');
            }
        });
            
            
        $('#section-recordings')
        .addClass('image')
        .prepend('<img id="recording-image" src="images/album/eastern-rebellion.jpg" />')
        $('#section-top-rated')
        .addClass('image')
        .prepend('<img id="top-rated-image" src="images/album/voice-in-the-night.jpg" />')

        var createTable = function(rider){
            var createRow = function(gear){
                var $row = $("<tr>");
                var $type = $("<td>").text(gear.type);
                var $desc = $("<td>").text(gear.desc);
                $row.append($type);
                $row.append($desc);
                return $row;
        }
        var $table = $("<table>");
        var $rows = rider.map(createRow);
        $table.append($rows);
        return $table;
        };    

        $('#sidebar').append($('<section>').attr('id', 'section-rider'));
        createTable(data.rider).appendTo('#section-rider').attr('id', 'billy-rider');

        $('#section-rider').prepend($('<header>').text("Billy's Rider").attr('class', 'header'));
        $('#billy-rider').prepend($('<th>').text('Description'));
        $('#billy-rider').prepend($('<th>').text('Gear')).css('font-family','impact' );

        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


