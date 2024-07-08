import React from 'react';

const Dashboard = () => {

const animeList = [
    { id: 1, title: 'Anime 1', posterUrl: 'https://m.media-amazon.com/images/M/MV5BYTIxNjk3YjItYmYzMC00ZTdmLTk0NGUtZmNlZTA0NWFkZDMwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_QL75_UX500_CR0,234,500,281_.jpg' },
    { id: 2, title: 'Anime 2', posterUrl: 'https://m.media-amazon.com/images/I/71goH8p2ENL._AC_UF1000,1000_QL80_.jpg' },
    { id: 3, title: 'Anime 3', posterUrl: 'https://m.media-amazon.com/images/I/81u55FK+TdL._AC_UF1000,1000_QL80_.jpg' },
    { id: 4, title: 'Anime 4', posterUrl: 'https://m.media-amazon.com/images/M/MV5BNDcwZDc2NTEtMzU0Ni00YTQyLWIyYTQtNTI3YjM0MzhmMmI4XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg' },
    { id: 5, title: 'Anime 5', posterUrl: 'https://m.media-amazon.com/images/M/MV5BNGY4MTg3NzgtMmFkZi00NTg5LWExMmEtMWI3YzI1ODdmMWQ1XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg' },
    { id: 6, title: 'Anime 6', posterUrl: 'https://m.media-amazon.com/images/M/MV5BYmJhMGQ4MGQtYmJmYi00MGIyLWI0NzAtNDc0N2ZiZmJmNDJlXkEyXkFqcGdeQXVyNjA5MDIyMzU@._V1_.jpg' },
    { id: 7, title: 'Anime 7', posterUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScK_uGK5TsFTJi_vaQ_9fNzg7Cn0cLYyf19w&s' },
    { id: 8, title: 'Anime 8', posterUrl: 'https://m.media-amazon.com/images/M/MV5BMTQ2NTA1N2MtMzkxOS00MjQ3LTliODctOTk0ZTk1N2FiMmNlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg' },
];

return(
    <div className="grid grid-cols-4 gap-4 p-4">
            {animeList.map(anime => (
                <div key={anime.id} className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                    <img src={anime.posterUrl} alt={anime.title} className="w-full h-64 object-cover" />
                    <div className="p-4">
                        <h3 className="text-lg font-bold">{anime.title}</h3>
                    </div>
                </div>
            ))}
        </div>
)
}

export default Dashboard;