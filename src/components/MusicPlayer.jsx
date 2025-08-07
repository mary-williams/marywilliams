import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef } from 'react';
import './MusicPlayer.css'

function MusicPlayer() {

    const songs = [
    { 
        title: "In Undertow", 
        artist: "Alvvays",
        album: "Antisocialities",
        src: "/music/Alvvays - In Undertow.mp3",
        img: '/albums/Alvvays.jpeg'
    },
    { 
        title: "Persephone", 
        artist: "Yumi Zouma",
        album: "Willowbank",
        src: "/music/Yumi Zouma - Persephone.mp3",
        img: "/albums/Persephone.jpeg"
    },
    {
        title: "This is the Day",
        artist: "The The",
        album:"Soul Mining",
        src:"/music/The The - This Is the Day.mp3",
        img:"/albums/The The-Soul Mining.jpeg"
    },
    {
        title: "Don't Play No Game I Can't Win",
        artist: "Beastie Boys",
        album:"Hot Sauce Committee",
        src:"/music/Beastie Boys - Don't Play no Game That I Can't Win.mp3",
        img:"/albums/Beastie-Boys-Hot-Sauce-Committee.jpeg"
    },
    {
        title: "Now and Then",
        artist: "Sjowgren",
        album: "Single",
        src:"/music/sjowgren - now & then.mp3",
        img:"/albums/now-and-then.jpeg"
    }
  ];
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? songs.length - 1 : prev - 1));
    setIsPlaying(false);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === songs.length - 1 ? 0 : prev + 1));
    setIsPlaying(false);
  };

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleAudioEnded = () => setIsPlaying(false);

  const song = songs[current];

  return (
    <div className="info-box music-player">
      <div className="music-track">
        <img
          src={song.img}
          alt={`${song.title} album cover`}
          className="music-album"
        />
        <span className="music-title">{song.title}</span>
        <span className="music-artist">{song.artist} -- {song.album}</span>
        <audio
          ref={audioRef}
          controls
          src={song.src}
          style={{ display: "none" }}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={handleAudioEnded}
        />
        <div className="music-controls">
          <button onClick={handlePrev}>
            <FontAwesomeIcon icon={faBackward} size="lg" />
          </button>
          <button onClick={handlePlayPause}>
            {isPlaying
              ? <FontAwesomeIcon icon={faPause} size="lg" />
              : <FontAwesomeIcon icon={faPlay} size="lg" />
            }
          </button>
          <button onClick={handleNext}>
            <FontAwesomeIcon icon={faForward} size="lg" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;