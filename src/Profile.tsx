import { useEffect, useState, type ReactElement} from 'react';


const Profile = () => {
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const decide = (time: number): ReactElement => {

    switch (time % 3) {
      case 2: {
        return <span>...</span>;
        break;
      }
      case 1: {
        return <span>..&nbsp;</span>;
        break;
      } 
      case 0: {
        return <span>.&nbsp;&nbsp;</span>;
        break;
      }
    }
    
    throw new Error("Idk what happened");
  }

  return (
    <>
    <div id='top-bar'>
        <div className="logo">Silverio <span>Mirao</span></div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </nav>

        <a className="resume-btn" href="#">Resume</a>
    </div>
    <div className="main">
      <div className="coming-soon">
         <p>Under Construction{decide(seconds)}</p>
      </div>
    </div>
    </>
  );
};

export default Profile;
