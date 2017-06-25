
$(function () {

  function handleSubmit(evt) {
    evt.preventDefault();

    var $form = $(this);
    var $errorMessage = $('#errorMessage');

    $form.hide();

    console.log('Sending....')


    // collect the data
    var payload = {
      hello: 'world',
    };
    var formData = $form.serializeArray();

    /*for (var i = 0; i < formData.length; i++) {
      var fieldObj = formData[i];
      var fieldName = fieldObj.name;
      var fieldValue = fieldObj.value;
      //
    }*/

    // iterate over serialized data
    formData.forEach(function (fieldObj) {
      var fieldName = fieldObj.name;
      var fieldValue = fieldObj.value;

      payload[fieldName] = fieldValue;
    });

    // console.log('payload after', payload)

    // Send to the server
    var endpoint = 'https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6';
    /*$.ajax({
      method: 'post',
      url: endpoint,
      data: payload
    })*/

    $.post(endpoint, payload)
      .done(function () {
        console.log('successs!!!!', data)
      })
      .fail(function (err) {
        console.error('error!!!', err)
        var errorMessage = err.responseJSON.message;
        console.log('Finished!!')

        $errorMessage.text(errorMessage);
        // alert(errorMessage)
        // $form.show()
      });
  }

  $('#submitForm').on('Submit', handleSubmit);
});
