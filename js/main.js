$(document).ready(function(){
    $('#telefone').mask('(00) 000000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            reserva: {
                required: true
            },
            mensagem: {
                required: true
            },
        },
    submitHandler: function (form) {
        alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
        form.reset();
    },
    invalidHandler: function (form, validator) {
        alert("Por favor, preencha os campos para prosseguir com o atendimento!");
    }
    })

    $('.produtos button').click(function() {
        const destino = $('#contato');
        const nomeReserva = $(this).parent().find('h3').text();

        $('#reserva').val(nomeReserva);

        $('html').animate({
            scrollTop: destino.offset().top
        })
    })


})
