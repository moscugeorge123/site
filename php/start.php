<?php 

	error_reporting(E_ALL);

	$service_port = 2025;

	$address = "10.0.2.15";


	$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
	if ($socket === false) {
	    echo "socket_create() failed: reason: " . socket_strerror(socket_last_error()) . "\n";
	}

	$result = socket_connect($socket, $address, $service_port);
	if ($result === false) {
	    echo "socket_connect() failed.\nReason: ($result) " . socket_strerror(socket_last_error($socket)) . "\n";
	}

	
	$out = '';

	while ($out = socket_read($socket, 2048)) {
	    echo $out;
	}
 ?>