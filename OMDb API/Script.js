function cariFilm() {
    let inputan = $('.input-value').val();
    $('.hasil-pencarian').html('');

    $.getJSON(`https://www.omdbapi.com/?apikey=6ddd112e&s=` + inputan, function (hasil) {
        if (hasil.Response === 'True') {
            $('.hasil-pencarian').append('<div class="row list-film row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"></div>');
            hasil = hasil.Search;
            for (let i = 0; i < hasil.length; i++) {
                let id = hasil[i]['imdbID'];
                $.getJSON(`https://www.omdbapi.com/?apikey=6ddd112e&i=` + id, function (detail) {
                    if (hasil[i].Poster !== "N/A") {
                        $('.list-film').append(`<div class="col">
                                <div class="card shadow-sm mt-3">
                                    <img width="360" height="480" src="` + hasil[i].Poster + ` ">
                                    <div class="card-body">
                                        <h4 class="card-title">` + hasil[i].Title + `</h4>
                                        <h6 class="card-subtitle mb-3 mt-1 text-muted">` + detail.Genre + `</h6>
                                        <p class="card-text">` + detail.Plot + `</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <a href="#">
                                                    <button type="button" class="btn btn-outline-primary btn-sm">Tonton</button>
                                                </a>
                                                <button type="button"
                                                id="` + id + `"
                                                class="detail-film btn btn-outline-primary btn-sm" data-bs-toggle="modal" data-bs-target="#filmDetail" >Detail</button>
                                            </div>
                                            <small class="text-muted">Durasi: ` + detail.Runtime.replace('min', 'Menit') + `</small>
                                        </div>
                                    </div>
                                </div>
                            </div>`);
                    } else {
                        $('.list-film').append(`<div class="col">
                                <div class="card shadow-sm mt-3">
                                    <img width="360" height="480" src="No-Image.png">
                                    <div class="card-body">
                                        <h4 class="card-title">` + hasil[i].Title + `</h4>
                                        <h6 class="card-subtitle mb-3 mt-1 text-muted">` + detail.Genre + `</h6>
                                        <p class="card-text">` + detail.Plot + `</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <a href="#">
                                                    <button type="button" class="btn btn-outline-primary btn-sm">Tonton</button>
                                                </a>
                                                <button type="button"
                                                id="` + id + `"
                                                class="detail-film btn btn-outline-primary btn-sm" data-bs-toggle="modal" data-bs-target="#filmDetail" >Detail</button>
                                            </div>
                                            <small class="text-muted">Durasi: ` + detail.Runtime.replace('min', 'Menit') + `</small>
                                        </div>
                                    </div>
                                </div>
                            </div>`);
                    }
                });
            }

            // Modal
            $(document).on('click', '.detail-film', function () {
                let getID = $(this).attr('id');
                $('.modal-detail').html('');
                $.getJSON(`https://www.omdbapi.com/?apikey=6ddd112e&i=` + getID, function (detail) {
                    if (detail.Poster !== "N/A") {
                        $('.modal-detail').append(`<div class="col-8 col-sm-6">
                                <img src="` + detail.Poster + `" width="360" height="480">
                            </div>
                            <div class="col-4 col-sm-6">
                                <p>Judul: ` + detail.Title + `</p>
                                <p>Deskripsi: ` + detail.Plot + `</p>
                                <p>Kategori: ` + detail.Genre + `</p>
                                <p>Rating: ` + detail.imdbRating + `</p>
                                <p>Durasi: ` + detail.Runtime.replace('min', 'Menit') + `</p>
                                <p>Aktor: ` + detail.Actors + `</p>
                                <p>Tahun: ` + detail.Year + `</p>
                            </div>`);
                    } else {
                        $('.modal-detail').append(`<div class="col-8 col-sm-6">
                                <img src="No-Image.png" width="360" height="480">
                            </div>
                            <div class="col-4 col-sm-6">
                                <p>Judul: ` + detail.Title + `</p>
                                <p>Deskripsi: ` + detail.Plot + `</p>
                                <p>Kategori: ` + detail.Genre + `</p>
                                <p>Rating: ` + detail.imdbRating + `</p>
                                <p>Durasi: ` + detail.Runtime.replace('min', 'Menit') + `</p>
                                <p>Aktor: ` + detail.Actors + `</p>
                                <p>Tahun: ` + detail.Year + `</p>
                            </div>`);
                    }
                });
            });
        } else {
            $('.hasil-pencarian').append(`<div class="alert text-center alert-danger" role="alert">Maaf, Film Tidak Ditemukan</div>`);
        }
    });
}

// Ketika tombol enter ditekan
$('.input-value').keypress(function (nomor) {
    if (nomor.which === 13) {
        cariFilm();
    }
});

// Ketika tombol "Cari" ditekan
$('.btn-input').on('click', function () {
    cariFilm();
});