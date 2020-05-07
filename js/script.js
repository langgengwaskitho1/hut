$.getJSON('data/pizza.json', function(data) {
    let menu = data.menu;
    // kalau diphp cara mengambil data["menu"]
   
    // dijquery ada yg untuk pengulangan naamaya $each 
    // ambil tiap2 menu lalu lakukan fungsi berikut : 
    // i = index = 0 ->14 
    $.each(menu, function(i, data) {
        $('#daftar-menu').append('<div class="col-md-3"><div class="card mb-3"><img src="img/menu/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +' </h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title">Rp. '+ data.harga +'</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>');
    });
});

$('.nav-link').on('click', function() {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
    // this = smua li yang kita klik

    let kategori = $(this).html();
    // kita ambil apa2 yang bisa kita klik, html = namanya
    
    $('h1').html(kategori);
    // jquery carikan saya h1 dan gantikan dengan html(kategorinya)
});

// DIATAS SAMA SAJA DENGAN $.ajax