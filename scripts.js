document.addEventListener('DOMContentLoaded', () => {
    const artistsData = [
        {name: 'Henrique & Juliano', image: './img/artista - Henrique & Juliano.jpg'},
        {name: 'Jorge & Matheus', image: './img/artista - Jorge & Matheus.jpg'},
        {name: 'Zé Neto & Cristiano', image: './img/artista - Zé Neto & Cristiano.jpg'},
        {name: 'Matheus & Kauan', image: './img/artista - Matheus & Kauan.jpg'},
        {name: 'Gusttavo Lima', image: './img/artista - Gusttavo Lima.jpg'},
        {name: 'Luan Santana', image: './img/artista - Luan Santana.jpg'}
    ];

    const albunsData = [
        {name: 'White Noise (Sleep & Relaxation Sounds', artist: 'Sleepy John', image: './img/álbum - White Noise.jpg'},
        {name: 'O Céu Explixa Tudo (Ao Vivo)', artist: 'Henrique & Juliano', image: './img/álbum - O Céu Explica Tudo.jpg'},
        {name: 'Nada Como Um Dia Após O Outro Dia', artist: 'Racionais Mcs', image: './img/álbum - Nada Como Um Dia Após O Outro Dia.jpg'},
        {name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image: './img/álbum - HIT ME HARD AND SOFT.jpg'},
        {name: 'CAJU', artist: 'Liniker', image: './img/álbum - CAJU.jpg'},
        {name: 'Escândalo Íntimo', artist: 'Luísa Sonza', image: './img/álbum - Escândalo Íntimo.jpg'}
    ];

    const artistsGrid = document.querySelector('.artists-grid')
    const albunsGrid = document.querySelector('.albuns-grid')

    artistsData.forEach(artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-card')

        artistCard.innerHTML = `
            <img src="${artist.image}" alt="imagem do ${artist.name}">
            <div>  
                <h3>${artist.name}</h3>
                <p>artista</p>
            </div>
        `

        artistsGrid.appendChild(artistCard)
    })

    albunsData.forEach(album => {
        const albumCard = document.createElement('div')
        albumCard.classList.add('album-card')

        albumCard.innerHTML = `
            <img src="${album.image}" alt="imagem do ${album.name}">
            <div>
                <h3>${album.name}</h3>
                <p>${album.artist}</p>
            </div>
        `

        albunsGrid.appendChild(albumCard)
    })
})