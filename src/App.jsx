import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import { About } from './Components/About/About'
import SocialMediaIcon from './Components/About/SocialMediaIcon'
import { YouTubeThumbnail } from './Components/YouTubeThumbnail/YouTubeThumbnail';
import { Experience } from './Components/Experience/Experience';
import { Skills } from './Components/Skills/Skills';

function App() {

  return (
    <div>
      <Navbar/>
      <About/>
      <SocialMediaIcon/>
      <YouTubeThumbnail videoId/>
      <Experience/>
      <Skills/>

    </div>
  )
}

export default App
