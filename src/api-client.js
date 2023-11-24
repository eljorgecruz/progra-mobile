const URL = ''
function getMusicData(){
    return fetch(`${URL}`, {
        method: 'GET',
        headers: {
            Accept: 'aplication/json',
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => data.topartists.artist)
    .then(artists => artists.map(artist =>{
        return {
            id: artist.mbid,
            name: artist.name,
            image: artist.image[0]['#text'],
            listeners: artist.listeners,
            stremeable: artist.stremeable
        }
    }))
}

export {getMusicData}