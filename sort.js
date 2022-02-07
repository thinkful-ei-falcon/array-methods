const list = [
    { song: "Killer Queen", artist: "Queen", rating: 10, isActive: false },
    { song: "Ascension", artist: "Maxwell", rating: 10, isActive: true },
    { song: "As", artist: "Stevie Wonder", rating: 10, isActive: true },
    { song: "Rap God", artist: "Eminem", rating: 10, isActive: true },
    { song: "Friday", artist: "Rebecca Black", rating: 1, isActive: true },
    { song: "GOAT", artist: "Polyphia", rating: 10, isActive: true },
    { song: "Just Fine", artist: "Mary J. Blige", rating: 10, isActive: true },
    { song: "Redbone", artist: "Childish Gambino", rating: 10, isActive: true },
    { song: "Enemy", artist: "Imagine Dragons", rating: 10, isActive: true },
    { song: "In my life", artist: "The Beatles", rating: 8, isActive: false },
    {
      song: "Tell it to my heart",
      artist: "Hozier",
      rating: 10,
      isActive: true,
    },
    { song: "Tadow", artist: "FKJMasego", rating: 10, isActive: true },
    { song: "King Kunta", artist: "Kendrick Lamar", rating: 9, isActive: true },
    {
      song: "At My Worst",
      artist: "Pink Sweat$",
      rating: 10,
      isActive: true,
    },
    {
      song: "Throne",
      artist: "Bring Me The Horizon",
      rating: 10,
      isActive: true,
    },
    {
      song: "everyone wants to rule the world",
      artist: "Tears for Fears",
      rating: 8,
      isActive: true,
    },
  ];

  
let sorted = [];

for (let i = 0; i < list.length; i++) {
    let added = false;  //signify if an item has already been sorted
    for(let j =0; j<sorted.length && !added; j++){
        if(list[i].rating < sorted[j].rating){
            sorted.splice(j, 0, list[i]);
            added=true;
        }
    }
    if(!added){
        sorted.push(list[i])
    }
}

//console.log(sorted);


//Sorting numbers
//list.sort((a,b)=>b.rating-a.rating)
//console.log(list)

//Sorting Strings
list.sort((a,b)=>a.song.toLowerCase()>b.song.toLowerCase()?1:-1);
console.log(list)



//   -1   0    1   2   3