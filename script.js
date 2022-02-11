let friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
  }, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet','Bible'],
    age: 26
  }, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining', 'Harry Potter'],
    age: 18
  }]


  let div = document.querySelector('div');
  let html = friends.map(friend=> 
    `<h2>${friend.name}</h2>
  <p> age:${friend.age}</p>
  <p>Favorite books: ${friend.books.join(', ')}</p>`);
  console.log(html)
  div.innerHTML=html.join('');