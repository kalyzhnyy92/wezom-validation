jQuery(($) => {

    $(document).ready(function(){

        // Init fancyBox
        $().fancybox({
            selector : '.card__wezom:not(.slick-cloned) .card__fancybox',
            hash     : false
        });

        // Init Slick
        $(".card__slider").slick({
            slidesToShow   : 1,
            slidesToScroll : 1,
            infinite : true,
            dots     : false
        });

    });


    //validation форм name и email
    $(document).ready(function() {

        $.validator.addMethod("firstname", function(value, element) {
            return this.optional(element) || /^[А-Яа-яіA-Za-z\s-]*$/.test(value);
        }, "Имя должно состоять только с букв, пробелов или дефисов");
        $.validator.addMethod("email", function(value, element) {
            return this.optional(element) || /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
        }, "Некорректный Email");

        let Form = $('#subscription__form');
        Form.validate({
            rules: {
                name: {
                    required: true,
                    firstname: true,
                    rangelength: [2, 70],
                },
                email: {
                    required: true,
                    email: true,
                },
            },
            messages:{
                name:{
                    required: "Введите имя",
                    rangelength: "Имя должно быть от {0} до {1} символов",
                },
                email: {
                    required: "Введите Email",
                    email: "Некорректный Email",
                },
            },

            submitHandler: function() {
                alert("Валидация успешна!");
            }

        });
    })

});
