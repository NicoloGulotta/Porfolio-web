import 'bootstrap/dist/css/bootstrap.css';
import './Progetti.css';

import Capstone from '../../../assets/Screenshot-Capstone.png';
import LinkSmart from '../../../assets/Screenshot BarberLink-Smartphone.jpg';
import ComingSoon from '../../../assets/images.png';
import TodoList from '../../../assets/Screenshot 2024-09-05 211849.png';
import Epibooks from '../../../assets/Screenshot 2024-09-19 182247.png';
import NetflixClone from '../../../assets/Netflix-clone.png';
import PokeSearch from '../../../assets/Screenshot PokeSearch.png';

const projects = [
    {
        img: Capstone,
        title: "Capstone Barber Shop",
        description: "Gestionale completo per barbieri sviluppato con lo stack MERN. Frontend responsive per la prenotazione intuitiva di servizi; backend sicuro con autenticazione a token per la gestione degli utenti e delle operazioni CRUD.",
        githubLink: "https://github.com/NicoloGulotta/Capstone.git",
        liveLink: "https://capstone-barber-shop.netlify.app"
    },
    {
        img: LinkSmart,
        title: "Barber Links",
        description: "Codice QR per accedere rapidamente alle recensioni e ai canali social di 'Vito Gallo Barber Shop'",
        githubLink: "https://github.com/NicoloGulotta/vito-gallo-links.git",
        liveLink: "https://vito-gallo-links.vercel.app/"
    },
    {
        img: TodoList,
        title: "TodoList-app",
        description: "Interfaccia di un'applicazione ToDo List minimalista, con funzionalità per gestire e aggiungere compiti.",
        githubLink: "https://github.com/NicoloGulotta/todo-list-app.git",
        liveLink: "https://todo-list-app-cyan-tau.vercel.app/"
    },
    {
        img: PokeSearch,
        title: "PokeSearch",
        description: "Applicazione per cercare e visualizzare i dettagli dei Pokémon",
        githubLink: "https://github.com/NicoloGulotta/epibooks.git",
        liveLink: "https://pokemon-search-delta.vercel.app/"

    },
    {
        img: Epibooks,
        title: "EpiBooks",
        description: "EpiBooks è una piattaforma per scoprire libri, con dettagli visivi e recensioni personalizzate. Permette di cercare titoli, leggere riassunti e lasciare valutazioni in modo semplice e veloce.",
        githubLink: "https://github.com/NicoloGulotta/app-react-0.git",
        liveLink: "https://epibooks-one.vercel.app/"
    },
    {
        img: NetflixClone,
        title: "NetClone",
        description: "Ho creato un'interfaccia simile a Netflix con un sistema multi-carousel, che permette di navigare tra categorie di contenuti in modo fluido e responsive.",
        githubLink: "https://github.com/NicoloGulotta/Progetto-Neflix---MultiCarousell.git",
        liveLink: "https://carousellflix.netlify.app/"
    },
    { img: ComingSoon, title: "...", description: "", githubLink: "", liveLink: "" },
];

export default function Progetti() {
    return (
        <div className="container py-5">
            <h2 className="text-light mb-5 text-center">Progetti</h2>
            <div className="row g-4">
                {projects.map((project, index) => (
                    <div key={index} className="col-12 col-sm-6 col-md-4">
                        <div className="card bg-dark h-100">
                            <img className="card-img-top" src={project.img} alt={project.title} />
                            <div className="card-body text-center">
                                <h4 className="card-title text-light">{project.title}</h4>
                                {project.description && (
                                    <p className="card-text text-light">{project.description}</p>
                                )}
                                {project.githubLink && (
                                    <a href={project.githubLink} className="btn btn-dark" target="_blank" rel="noopener noreferrer">
                                        GitHub
                                    </a>
                                )}
                                {project.liveLink && (
                                    <a href={project.liveLink} className="btn btn-light" target="_blank" rel="noopener noreferrer">
                                        Provalo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
