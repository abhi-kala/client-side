var xhr = require('xhr')
var example = require('./views/example.hbs')

xhr.get('https://api.wheretheiss.at/v1/satellites', function (err, data) {
  if (err) {
    console.log(err)
  }

  console.log(data.body) // in case you're curious
  console.log(data.body[0]) // in case you're curious
  console.log(data.body[0].name) // in case you're curious
  data.body.forEach(function (element) {
    console.log(element);
  })

  document.body.innerHTML = example(data.body)
})
