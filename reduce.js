const list = [
    { song: "Killer Queen", artist: "Queen", rating: 10, isActive: false },
    { song: "Ascension", artist: "Maxwell", rating: 10, isActive: true },
    { song: "As", artist: "Stevie Wonder", rating: 10, isActive: true },
    { song: "Rap God", artist: "Eminem", rating: 10, isActive: true },
    { song: "Friday", artist: "Rebecca Black", rating: 10   , isActive: true },
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


  let total = 0;

  for(let song of list){
      total+=song.rating;
  }

  let avg = total/list.length;
  console.log(avg);


  let reduced = list.reduce((acc, song)=>acc+song.rating,0)

  console.log(reduced/list.length);



let catList = {};

for(let item of list){
    if(item.isActive){
        if(catList['activeArtists']){
            catList.activeArtists.push(item);
        }else{
            catList.activeArtists=[item];
        }
    }else{
        if(catList['inactiveArtists']){
            catList.inactiveArtists.push(item);
        }else{
            catList.inactiveArtists=[item];
        }
    }
}
//console.log(catList);


let catList2 = list.reduce((acc,song)=>{
    if(song.isActive){
        if(acc['activeArtists']){
            acc.activeArtists.push(song);
        }else{
            acc.activeArtists=[song];
        }
    }else{
        if(acc['inactiveArtists']){
            acc.inactiveArtists.push(song);
        }else{
            acc.inactiveArtists=[song];
        }
    }
    return acc;
},{})

console.log(catList2)

