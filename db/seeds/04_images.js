
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      // Inserts seed entries
      return knex('images').insert([
        {img_url:'https://s3-media3.fl.yelpcdn.com/bphoto/XZdQ-kXfzJnbgNqKLpVTSw/180s.jpg', courts_id:1},
        {img_url:'https://www.curry.edu/Images/Map/basketball-lg.jpg', courts_id:1},
        {img_url:'https://www.lafitness.com/pages/images/slide-img/Image-Rotator-5L.jpg', courts_id:2}
      ]);
    });
};
