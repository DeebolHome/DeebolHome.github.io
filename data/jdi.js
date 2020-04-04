var dataSet = [
    [ "Round", "1.34", "320x300", "239", "8(MIP), 262K", "MIPI/SPI", "3.1V, 1.8V", "Yes"],
    [ "Round", "1.1", "218x218", "200", "64", "Direct", "4.5V, 3.2V", "No"],
    [ "Round", "1.2", "240x240", "200", "64", "Direct", "4.5V, 3.2V", "No"],
    [ "Round", "1.2 NB", "240x240", "201.6", "64", "Direct", "4.5V, 3.2V", "No"],
    [ "Round", "1.04", "208x208", "200.9", "8", "SPI", "3.0V", "No"],
    [ "Square", "1.28", "176x176", "194", "8", "SPI", "3.0V", "Yes"],
    [ "Square", "0.85", "72x144", "189.4", "8", "SPI", "3.0V", "No"],
    [ "Square", "2.7", "400x240", "172.8", "8", "SPI", "3.0V", "Yes"],
    [ "Square", "4.4", "640x480", "181.8", "8", "SPI", "3.0V", "Yes"],
    ];
 
$(document).ready(function() {
    $('#jdidata').DataTable( {
        data: dataSet,
        columns: [
            { title: "Shape" },
            { title: "Size" },
            { title: "Resolution" },
            { title: "PPI" },
            { title: "Color" },
            { title: "I/F" },
            { title: "Power" },
            { title: "B/L" },            
        ]
    } );
} );