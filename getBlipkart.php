<?php

	if (isset($_SERVER['HTTP_ORIGIN'])) {
	    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
	    header('Access-Control-Allow-Credentials: true');
	    header('Access-Control-Max-Age: 86400');    // cache for 1 day
	}

	// Access-Control headers are received during OPTIONS requests
	if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

	    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
	        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

	    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
	        header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

	    exit(0);
	}

	$conn = mysqli_connect('localhost', 'root', '');
	
	if (!$conn)
		die ("Couldn't connect to database");
	
	$db = mysqli_select_db($conn, 'BlipkartDB');

	$query = 'SELECT sno, type, code, category, sub_category, city, website, name, link, price, discount, rating, url, image, date FROM tbl_facts';

	$result = mysqli_query($conn, $query);
	
	$xdata = array();

	while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
	{
		$ydata = array();

		$ydata['sno'] = $row['sno'];
		$ydata['type'] = $row['type'];
		$ydata['code'] = $row['code'];
		$ydata['category'] = $row['category'];
		$ydata['sub_category'] = $row['sub_category'];
		$ydata['city'] = $row['city'];
		$ydata['website'] = $row['website'];
		$ydata['name'] = $row['name'];
		$ydata['link'] = $row['link'];
		$ydata['price'] = $row['price'];
		$ydata['discount'] = $row['discount'];
		$ydata['rating'] = $row['rating'];
		$ydata['url'] = $row['url'];
		$ydata['image'] = $row['image'];
		$ydata['date'] = $row['date'];

		if (!json_encode($ydata))
		{
			continue;
		}
		else
		{
			$xdata[] = $ydata;
		}
	}

 	echo json_encode($xdata);
?>