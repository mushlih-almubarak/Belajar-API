<?php
// Mengambil data jsonnya
$dataJson = file_get_contents('data.json');
// Mengubah data jsonnya menjadi array associative (menggubakan parameter true)
$data = json_decode($dataJson, true);
var_dump($data);
var_dump($data["mahasiswa1"]["nama"]);