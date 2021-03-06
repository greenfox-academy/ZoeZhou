var url = 'https://time-radish.glitch.me';
window.addEventListener('load', function () {
  var submit = document.getElementById('submit');
  submit.addEventListener('click', sendData);
  // submit.onClick = sendData();

})


function sendData() {
  var href = document.getElementById('href');
  var title = document.getElementById('title');
  var obj = {
    title: title.value.trim(),
    href: href.value
  };
  // alert(title)
  if (obj.title.length <= 0) {
    alert('title is empty!');
    return false;
  }
  fetch(url + '/posts', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  }).then(function (response) {
    console.log(response);
    relocated();
  })
  href.value = '';
  title.value = '';
}

function relocated() {
  var tips = document.getElementsByClassName('tips')[0];
  tips.style.display = 'block';
  setInterval(function () {
    var seconds = document.getElementsByClassName('count-down')[0];
    var newSeconds = Number(seconds.innerText) - 1;
    seconds.innerText = newSeconds;
  }, 900)
  setTimeout(function () {
    window.location.href = '../html/index.html'
  }, 3000)
}
