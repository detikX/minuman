

$(document).ready(function () {



    setTimeout(() => {
        $(".preloader").fadeOut(1000);
        $(".preloader").remove();
        // $("html, body").animate({ scrollTop: 0 }, 10);
        window.scrollTo(0, 0);

    }, 2000);

    new WOW().init();
});
const ctx = document.getElementById('myChart');

$(".datax .questionx p,.datax .questionx .name, .datax .questionx li, .datax .questionx h3, .datax .questionx small, .datax .questionx canvas").attr({ "data-wow-delay": "0.2s" }).addClass('wow animate__animated animate__fadeIn')
$(".datax .questionx img").attr({ "data-wow-delay": "0.5s" }).addClass('wow animate__animated animate__zoomIn')



new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [
            'Rasa Penasaran',
            'Enak Rasanya',
            'Aspek Harga',
            'Influencer',
            'Rumah Tangga',
            'Iklan',
            'Teman',
            'Media Sosial',
            'Tetangga'
        ],
        datasets: [{
            label: 'Persen (%)',
            data: [32.4, 27.1, 14.4, 6.4, 5.8, 3.8, 3.6, 3.4, 3.3],
            borderWidth: 2,
            borderRadius: 2,
            backgroundColor: [
                'rgba(255, 205, 86,.6)',
                'rgba(54, 162, 235,.6)',
                'rgba(255, 99, 132,.6)',
                'rgba(255, 205, 86,.6)',
                'rgba(54, 162, 235,.6)',
                'rgba(255, 99, 132,.6)'
            ],
            borderColor: [
                'rgba(255, 205, 86,1)',
                'rgba(54, 162, 235,1)',
                'rgba(255, 99, 132,1)',
                'rgba(255, 205, 86,1)',
                'rgba(54, 162, 235,1)',
                'rgba(255, 99, 132,1)'
            ],
            hoverOffset: 4
        }]
    },
    options: {
        maintainAspectRatio: false,
        // responsive: true,
        indexAxis: 'y',
        plugins: {
            title: {
                display: true,
                text: "Mengapa orang suka konsumsi MBDK?",
                color: "black",
                font: {
                    family: "'Rubik'", // Your font family
                    size: 20,
                    weight: "bold",
                },

                // padding: {
                //     top: 10,
                //     bottom: 30,
                // },
            },
            legend: {
                position: "bottom",
                labels: {
                    font: {
                        family: "'Rubik'",
                    },
                },
            },
        },

        animations: {
            x: {
                duration: 5000,
                from: 0
            },
            y: {
                duration: 3000,
                from: 500
            }
        },
        scales: {

            y: {
                // min: 10,
                // max: 100,
                beginAtZero: true,
                // title: {
                //     display: true,
                //     color: "black",
                //     text: "Pasangan Calon",
                //     font: {
                //         family: "'Montserrat'", // Your font family
                //         size: 14,
                //         weight: "bold",
                //     },
                //     padding: 20,
                // },
                // ticks: {
                //     color: "black",
                //     font: {
                //         family: "'Montserrat'", // Your font family
                //         size: 14,
                //     },
                // },
            },
        }
    },
    plugins: [ChartDataLabels],
});

// $('#pilpres-daerah').on('click', function (event) {
//     event.preventDefault()
//     // alert(1)
//     // // $(this).tab('show')
// })
setTimeout(() => {
    // $(".pilpres_daerah").not('.slick-initialized').slick()

}, 1000);


$('#pills-tab .nav-item button').on('shown.bs.tab', function (e) {
    e.target
    e.relatedTarget
    setTimeout(() => {
        $(".nav-tabs:first-child").addClass("active")
        $('.pilpres_daerah').slick('setPosition');
    }, 100);


});

$('#pills-tab-2 .nav-item button').on('shown.bs.tab', function (e) {
    e.target
    e.relatedTarget
    setTimeout(() => {
        $('.pileg_daerah').slick('setPosition');
    }, 100);

});

// $('#pills-tab .nav-item button').on('click', function (e) {
//     // console.log(event);
//     // // ('.pilpres-daerah').slick('setPosition', 0);
//     // event.preventDefault()
//     // $(this).tab('show')
//     e.preventDefault();
//     $('.nav-link').removeClass('active');
//     $(this).tab('show');
// })

$('.category-click .category-airline .buttonx').on('click', function () {
    $('.buttonx').removeClass('selected');
    $(this).addClass('selected');
});


$('.kategori-item').click(function (event) {
    var id = $(this).attr('id');
    var toShow = '#show-' + id;

    $('.dashboard-content').not(toShow).hide();
    $(toShow).fadeIn();
    $(".info-klik").hide()
});

$(".closes").click(function () {
    $(".dashboard-content").hide()
})

// $(".to-peta").click(function () {
//     $('html,body').animate({
//         scrollTop: $(".mapsx").offset().top
//     },
//         600);
// })

$('.kategori-item').onclick = function () {
    $(this).focus();
};

