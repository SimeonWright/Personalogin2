var thumbUp = document.getElementsByClassName("fa-thumbs-up");
// var thumbDown = document.getElementsByClassName("fa-thumbs-down");
var trash = document.getElementsByClassName("fa-trash-o");
console.log(trash)


Array.from(thumbUp).forEach(function (element) {
  element.addEventListener('click', function () {
    confirm("Only check in if you are here or within 5 minutes");
    const barber = this.parentNode.parentNode.childNodes[3].innerText.trim()
    const cut = this.parentNode.parentNode.childNodes[7].innerText.trim()
    const time = this.parentNode.parentNode.childNodes[11].innerText.trim()
    const extra = this.parentNode.parentNode.childNodes[15].innerText.trim()
    // const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[9].innerText).
    fetch('messages', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'barber': barber,
        'cut': cut,
        'time': time,
        'extra': extra
        // 'thumbUp': thumbUp,



      })
    })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(data => {
        console.log(data)
        window.location.reload(true)
      })
  });
});

// Array.from(thumbDown).forEach(function (element) {
//   element.addEventListener('click', function () {
//     const name = this.parentNode.parentNode.childNodes[1].innerText
//     const msg = this.parentNode.parentNode.childNodes[3].innerText
//     const thumbDown = parseFloat(this.parentNode.parentNode.childNodes[7].innerText)
//     fetch('messages1', {
//       method: 'put',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         'name': name,
//         'msg': msg,
//         'thumbDown': thumbDown
//       })
//     })
//       .then(response => {
//         if (response.ok) return response.json()
//       })
//       .then(data => {
//         console.log(data)
//         window.location.reload(true)
//       })
//   });
// });


Array.from(trash).forEach(function (element) {
  element.addEventListener('click', function () {
  
    const barber = this.parentNode.parentNode.childNodes[3].innerText.trim()
    const cut = this.parentNode.parentNode.childNodes[7].innerText.trim()
    const time = this.parentNode.parentNode.childNodes[11].innerText.trim()
    const extra = this.parentNode.parentNode.childNodes[15].innerText.trim()
    // const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[9].innerText)
    fetch('messages', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'barber': barber,
        'cut': cut,
        'time': time,
        'extra': extra
        // `'thumbUp': thumbUp,`

      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});


// Barber
// "Ro"
// Cut
// "Shape Up"
// Time
// "7pm"
// Extra
// "Wash and Rinse"
// checkIn
// false