var dataSet = [
    [ "IT7259EX-13", "Self-Cap", "XQFN", "3*3*0.55", "24", "13", "I2C", "3.3V", "0.5~1.5mA (Active Mode)" ],
    [ "IT7259EX-17", "Self-Cap", "XQFN", "3*3*0.55", "28", "17", "I2C", "3.3V", "0.5~1.5mA (Active Mode)" ],
    [ "IT7259EX-24", "Self-Cap", "XQFN", "4*4*0.55", "32", "24", "I2C", "3.3V", "0.5~1.5mA (Active Mode)" ],
    [ "IT7251X-24", "Self-Cap", "XQFN", "4*4*0.55", "32", "24", "I2C", "3.3V", "3mA (Active Mode)" ],
    [ "IT7226Z-17", "Self-Cap", "WLCSP", "2*2.1*0.5", "25-ball", "17", "I2C", "1.8V", "<3mW (Active Mode)" ],
    [ "IT7220XD", "Self-Cap", "XDFN", "2.5*2.5*0.55", "12", "4", "I2C", "1.7~3.6V", "<3uA (LP Mode)" ]
    ];
 
$(document).ready(function() {
    $('#itedata').DataTable( {
        data: dataSet,
        columns: [
            { title: "Model No." },
            { title: "Type" },
            { title: "Packaging" },
            { title: "Demension" },
            { title: "Pins" },
            { title: "Channels" },
            { title: "Interface" },
            { title: "Operation Power"},
		    { title: "Power Consumption"}
        ]
    } );
} );