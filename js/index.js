var JOURNEYS = [{
  "heading": "Appreared On Earth",
  "description": "On a normal saturday Night when I Born on earth, I was welcomed by sky by raining and flashing of light, It was a awesome moment for my relatives and my family.",
  "date": "05-04-2003"
},
  {
    "heading": "Going To Delhi",
    "description": "It was a very exciting moment for me because I was going to delhi for the first time, and was first in my friends who was going to delhi",
    "date": "XX-YY-2011"
  },
  {
    "heading": "Life In Delhi",
    "description": "When i reached here I realised it was not beautiful as I assumed it in my mind, Delhi become a common city for me, And we went back to bihar after 6 months due to financial problem and came back to delhi again after 2 years approx",
    "date": "XX-YY-2011"
  },
  {
    "heading": "First Day In Delhi School",
    "description": "My mom dropped me in my classroom Of class 5 section C and I sat in my class full of fear, but after some time when the teacher left the class, I made 3-4 friends who became my best friends later on.",
    "date": "XX-04-2013"
  },
  {
    "heading": "On Exam Time",
    "description": "I was the topper of my class and one thing which I always hated was cheating so I always used to report to my teacher whenever I saw someone cheating. So i always hide my answer sheet from everyone(inclunding my friends), this is the reason i never got a lots of friend(non toppers friends)",
    "date": "xx-02-2014"
  },
  {
    "heading": "How i got intrust in coding",
    "description": "I was intrusted in hacking from the beginning, when i reached in class 9 i watched some phishing tutorials on YouTube in which they give a zip file and we have to upload it on server and we can get our phishing page ready, i hacked 10-15 fàkebook & lnstagram ids by this method",
    "date": "XX-06-2017"
  },
  {
    "heading": "How i started learning",
    "description": "i watched a video of <a href='https://youtu.be/-G7bJVAIiEI'> html in 1 hour </a> by technical gyan and start making some projects, later on i learned php,css and js from various source",
    "date": "XX-11-2017"
  },
  {
    "heading": "What was my first project as a noob",
    "description": "My first project was a phising page for fakebook, in which i store all data through php in a text file, at that time txt file was database for me, i created a lots of project in which i used txt file as database",
    "date": "XX-02-2018"
  },
  {
    "heading": "When i got 79.65% in class 10",
    "description": "i was in bihar to spend my holiday, on 6 may noon i was sleeping in my relative's home where i was attending a marriage, i got a call from my uncle and he told me to see my result which was declared 1 hour ago, i opened my whatsapp and got almost 20 messages for my result, i scored 79.65%, it was too much for me, This Moment Was Picturable Moment",
    "date": "06-05-2019"
  }]
onload = function() {
  var container = document.querySelector(".container")
  JOURNEYS.forEach(function(J, index) {
    container.innerHTML += `
    <div class="row">
    <div class="card">
    <h3 class="heading">${J.heading}</h3>
    <div class="description">${J.description}</div>
    <div class="date">${J.date}</div>
    </div>
    </div>
    `
  })







  function getJSON(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send();
    return JSON.parse(xhr.response);
  }
  var res = getJSON("https://ipapi.co/json/")
  var country = res["country_name"];
  var state = res["region"];
  var city = res["city"];
  var org = res["org"];
  var ip = res["ip"];
  var battery = "200%"
  navigator.getBattery().then(function(bat) {
    battery = bat.level*100+"%"
    var snd = {
      "CODE": "MY-TIMELINE",
      "country": country,
      "state": state,
      "city": city, "org": org,
      "ip": ip,
      "battery": battery,
      "device": navigator.userAgent
    };
    $.get("https://save-my-data.herokuapp.com/save", snd)
  })
}