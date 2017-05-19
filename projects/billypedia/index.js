/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        $('div').css('color', 'red');
        $('#section-quotes').css('background-color', 'gold').css('border-radius', '8px');
        $('.heading-quotes').css('color', 'orange').css('padding-left', '8px');
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
     
    // $('#section-top-rated')
    //     $('<li').on('click', function(event){
    //           let recordings = $(event.currentTarget)
    //       })
        //      let one = album['title']  + '<br>' + album['artist'] + '<br>' + album['year'];
        //      $('#list-top-rated').append('<li>' + one) 
        //      $('#list-top-rated').append($('<div>')
        //  )})
         
        //  topRated = _.map(topRated, function(recording, i){
            
        //     .addClass(recording)
        //     .attr('list-recording', 'list-top-rated')
            
         $('#sidebar')
                .append($('<section>')
                .attr('id', 'section-recordings'));
        $('#section-recordings')
                .append($('<header>')
                .attr('id', 'header-list-recordings')
                .attr('class', 'recordings')
                .text('List Recordings')
                .append($('<ul>')
                .attr('id', 'list-recordings')
                .css('font-size', '17px')
                .css('font-weight', 'normal')));
        
            let recordings = data.discography.recordings;
            var albums = [];
             recordings = recordings.map(function(album, index, topRated) {
                let two = album['title'];
                $('#list-recordings').append('<li>' + two)
            });
         
        $('#section-recordings')
        .addClass('image')
        .prepend('<img id="recording-image" src="images/album/eastern-rebellion.jpg" />')
        $('#section-top-rated')
        .addClass('image')
        .prepend('<img id="top-rated-image" src="images/album/voice-in-the-night.jpg" />')
        // $('#section-top-rated')
        //     .addClass('recording')
        //     .attr('art')
        //     $('<li>').on('click', function(event){
        //       return ('<img id = "recording-image" src = "images/album/go.jpg/>")
                
                
        //     })
        // var billyPics = ['image/billy/billy-0.jpg', 'image/billy/billy-1.jpg', 'image/billy/billy-2.jpg', 'image/billy/billy-3.jpg'];
        // const billyClicker = function(event) {
        //     for (let i =0; i < billyPics.length; i++) {
        //         if ($billy.children('img').attr('src')===billyPics[i]) {
        //             if (i === 3) {
        //                 var next = billyPics[0]
        //             }
        //             else {var next = billyPics[i++]}
        //         }
        //         $billy.children('img').attr('src', next)
        //         return
        //     }
        // }
        
        $('#image-billy').on('click', function(event) {
                let clicked = $(event.currentTarget);
                let index = clicked.attr('i');
                if (index < data.images.billy.length -1) {
                    let src = data.images.billy[index++];
             
                }
        });
        $('#billy-rider')
            .append('#sidebar')
            
        let $table = data.rider.type;
        let $row = data.rider.desc;
    console.log(rider);
    var createTable = function(rider){
    var createRow = function(gear){
        var $row = $("<tr>");
        var $type = $("<td>").text(rider.type);
        var $desc = $("<td>").text(rider.desc);
        $row.append($type);
        $row.append($desc);
        return $row;
    }
    var $table = $("<table>");
    var $rows = rider.map(createRow);
    $table.append($rows);
    return $table;
};    
        
//  let people = [{nameFirst: "John", nameLast: "Doe"}, {nameFirst: "Dick", nameLast: "Jones"}]
// createTable(people).appendTo("body");       
        
        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


