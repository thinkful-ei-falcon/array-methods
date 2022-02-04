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


//Find  return the first instance of a record depending on a case
let eminemSong = list.find(song=>song.artist==="Eminem");
//console.log(eminemSong);

//Filter - return a list of records depending on a case
let activeArtists = list.filter(song=>song.isActive);
//console.log(activeArtists)

let lesserRatedArtists = activeArtists.filter(song=>song.rating<10);
//console.log(lesserRatedArtists);

//Map - used to loop through an array and modify data that will be output
let artist = list.map(song=>song.artist)
//console.log(artist);

let reducedRatings = list.map(song=>{
    if(song.rating===10){
        song.rating=1;
    }
    return song;
})

//console.log(reducedRatings);

//Some  -- if a case is true for atleast 1 item in an array, this returns true
let isSongTadow = list.some(song=>song.song==="Tadow");
//console.log(isSongTadow)

let isRowRow = list.some(song=>song.song==="Row Row Row your boat");
//console.log(isRowRow);

//Every - return true if a case is true for all items in the array

let hasArtist = list.every(song=> 'artist' in song);
console.log(hasArtist);


let nonZeroRating = list.every(song=> song.rating>0);
console.log(nonZeroRating);

let artistIsEnVogue = list.every(song=>song.artist==="En Vogue");
console.log(artistIsEnVogue);