$(() => {
    $('.top h1').text('Traversing is fun');
    $('#list').children().text('Hey!');
    $('.element').children().addClass('hidden');
    
    $('.change-show').click(() => {
    $('.show').toggleClass('hidden');
    });
    
    $('.add-item').click(() => {
        $('#list').append('<li>New Item</li>');
    
    }); 
    }); // Document Ready Function aka DOM