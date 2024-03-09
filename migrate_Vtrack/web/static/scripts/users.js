$(document).ready(function () {
  const checkedAmenities = {};
  $('input:checkbox').change(function () {
    const id = $(this).data('id');
    const name = $(this).data('name');
    if ($(this).is(':checked')) {
      checkedAmenities[id] = name;
    } else {
      delete checkedAmenities[id];
    }
    const res = Object.values(checkedAmenities);
    if (res.length > 0) {
      $('div.amenities > h4').text(Object.values(checkedAmenities).join(', '));
    } else {
      $('div.amenities > h4').html('&nbsp;');
    }
  });
  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/status/',
    type: 'GET',
  }).done(function (response) {
    if (response.status === 'OK') {
      $('#api_status').addClass('available');
      console.log(response.status);
    } else {
      $('#api_status').removeClass('available');
      console.log(response.status);
    }
  })
  function placesRender(data){
  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    type: 'Post',
    data: JSON.stringify({}),
    dataType: 'json',
    Headers: {
      'Content-Type': 'application/json'
    },
    success: function(data) {
      $.each(data, (index, place) => {
        const html=`
        <article>
          <div class="titlebox">
          <h2>${place.name}</h2>
          <div class="price_by_night">$${place.price_by_night}</div>
          </div>
          <div class="information">
          <div class="max_guest">${place.max_guest} Guest${place.max_guest !== 1 ? 's' : ''}</div>
          <div class="number_rooms">${place.number_rooms} Bedroom${place.number_rooms !== 1 ? 's' : ''}</div>
          <div class="number_bathrooms">${place.number_bathrooms} Bathroom${place.number_bathrooms !== 1 ? 's' : ''}</div>
        </div>
        <div class="description">
        ${place.description}
        </div>
        </article>
        `;
        $('section.places').append(html);
      })
    }
    })
  }
  $('button').on('click', () => {
    placesRender({'amenities': checkedIds});
  });
  placesRender({});
});


