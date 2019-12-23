jQuery(($) => {

    //При клике на изображение показать галерею slick
    $(document).ready(function () {
        //при клике на ссылку в слайде запускаем галерею
        $('.card__slider').each(function () {
            const slider = $(this);
            const gallery = slider.find('.card__fancybox');

            slider.on('click', '.card__fancybox', function (e) {
                e.preventDefault();
                //узнаём индекс слайда без учёта клонов
                var totalSlides = +$(this).parents('.slider').slick("getSlick").slideCount,
                    dataIndex = +$(this).parents('.slide').data('slick-index'),
                    trueIndex;
                switch (true) {
                    case (dataIndex < 0):
                        trueIndex = totalSlides + dataIndex;
                        break;
                    case (dataIndex >= totalSlides):
                        trueIndex = dataIndex % totalSlides;
                        break;
                    default:
                        trueIndex = dataIndex;
                }
                //вызывается элемент галереи, соответствующий индексу слайда
                $.fancybox.open(gallery, {}, trueIndex);
                return false;
            });

            slider.slick();
        })
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