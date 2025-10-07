// Simple jQuery front-end validation (additional to Flask-WTF server validations)
$(document).ready(function() {
    $('#contactForm').on('submit', function(e) {
        let valid = true;
        $('#contactForm input, #contactForm textarea').each(function() {
            if ($(this).val() === '') {
                $(this).addClass('is-invalid');
                valid = false;
            } else {
                $(this).removeClass('is-invalid');
            }
        });
        if (!valid) {
            e.preventDefault();
        }
    });

    $('#contactForm input, #contactForm textarea').on('input', function() {
        if ($(this).val() !== '') {
            $(this).removeClass('is-invalid');
        }
    });
});
