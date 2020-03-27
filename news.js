let newsHead = document.getElementById("newsHead");

var url =
  "http://newsapi.org/v2/top-headlines?" +
  "country=in&" +
  "apiKey=ba17b2185a484e30985b74008316e536";

fetch(url)
  .then(res => {
    return res.json();
  })
  .then(data => {
    let articles = data.articles;
    console.log(articles);
    let allNews = " ";
    for (news of articles) {
      let newses = `<div class="container-fluid col-8">
                      <div class="card text-center">
                        <div class="card-body">
                          <h5 class="card-title">${news["title"]}</h5>
                          <hr>
                          <p class="card-text">${news["description"]}</p>
                          <a href="${news["url"]}" target="_blank" class="btn btn-danger">Read more</a>
                        </div>
                      </div>
                    </div>`;
      allNews += newses;
      newsHead.innerHTML = allNews;
    }
  });
