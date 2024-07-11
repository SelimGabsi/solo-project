// function changeImage() {
//     var img = document.getElementById('image')
//     img.src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9MjkYr1Mt7XqNifTqFoQWS78GKIVQHHx08mDu7tq7sw&s'

// }

$('#button1').click(function(){
    console.log('gymone');
  $("#img1").attr("src",'https://scontent.ftun2-2.fna.fbcdn.net/v/t39.30808-6/393635399_840028574789533_4190255770972465704_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=qiYHpDDK-SEQ7kNvgFuE30M&_nc_ht=scontent.ftun2-2.fna&oh=00_AYCP4Kqly2pzCWwNnwS8OHSVKi1xxmSdYKeXgxt35ITobw&oe=6691D1B5')
})

function generateID() {
  var count = 0;
  return function () {
    return count++;
  };
}
var id = generateID();

var loseweightdiet = ['salad','eggs','rice','fish','fruits'];
var gainmusclediet = ['tuna','eggs','meat','chicken','oatmeal'];

var dietimages = ['salad.', 'eggs.', 'rice.', 'fish.', 'fruits.', 'oatmeal.', 'chicken.', 'meat.', 'tuna.'];

function GetFit(id, personName, programName, dietList) {
  return {
      id: id,
      personName: personName,
      programName: programName,
      dietList: dietList
  }
}

$(document).ready(function() {
  $('#get-started').click(function() {
      $(this).fadeOut(300, function() {
          $('#menus').fadeIn(300);
      });
  });
});


$(document).ready(function() {
  $('.menu').click(function() {
      
      var personName = $('#username').val();
      var dietList;
      if (personName=== '') {
          alert('Please enter your name.');
          return;
      }
      var programName = $(this).find('h2').text();
    
      if (programName === "Lose weight") {
          dietList = loseweightdiet;
      }
      else {
          dietList = gainmusclediet;
      }
      var id = generateID();
      var fit = GetFit(id, personName, programName, dietList);
      //console.log(fit);
      
      $('#menus').fadeOut(300, function() {
          var dietListul = document.getElementById('diet-list');
          var personNamep = document.getElementById('person-name');
          dietListul.innerHTML = '';

          for (var i = 0; i < dietList.length; i++) {
              var listItem = document.createElement('li');
              listItem.textContent = dietList[i];
              dietListul.appendChild(listItem);
          }
          personNamep.textContent = personNamep.textContent + ' ' + personName;
          $(personNamep).add(dietListul).fadeIn(300);
      });
      
  });
});