<?php
$dataMahasiswa = [
    $mahasiswa1 = [
        'nama' => 'Mushlih',
        'umur' => 17
    ],
    $mahasiswa2 = [
        'nama' => 'Hadziq',
        'umur' => 11
    ]
];

$data = json_encode($dataMahasiswa);
echo $data;
