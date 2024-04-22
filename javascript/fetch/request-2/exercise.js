async function creationPost(url, info) {
  const dataRequest = await fetch(url, {
    method: "POST",
    body: JSON.stringify(info),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const postInfo = await dataRequest.json();
  return console.log(postInfo);
}

const data = {
  title: "This is the title",
  completed: true,
};

const link = "https://jsonplaceholder.typicode.com/posts";

creationPost(link, data);


