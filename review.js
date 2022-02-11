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

  let allbooks = friends.reduce((acc,friend)=>{
    return [...acc, ...friend.books]
  },[]);

  //console.log(new Set(allbooks));
  let allbooksNoDup = allbooks.reduce((prevValue,book)=>{
      if(prevValue.indexOf(book) ===-1){
          prevValue.push(book)
      }
      return prevValue;
  },[])
  console.log(allbooksNoDup)


  let friendsData = friends.map(({name, age})=>({name,age}))

  console.log(friendsData)