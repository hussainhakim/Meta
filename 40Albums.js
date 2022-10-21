const myAlbumName = ["Thriller","Dangerous", "Bad", "Invincible"];
const singerName = "Michael Jackson";
const albumYear = [1982,1991,1987,2001];

let albumArray = [];

for(let i=0;i<myAlbumName.length;i++) {
    albumArray.push(make_album(myAlbumName[i],singerName,albumYear[i]));
}

while (albumArray.length){
    console.log(albumArray.pop());
}

function make_album(albumName, singerName, albumYear) {
    return {
        albumName: albumName,
        singerName: singerName,
        albumYear: albumYear
    }
}