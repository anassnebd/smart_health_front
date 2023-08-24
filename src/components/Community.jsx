import React, {useState, useEffect} from 'react'
import SidebarDoctor from './Doctor/SidebarDoctor'
import { Plus, Home, User, Search, PieChart,Key, Settings, MessageCircle , Heart} from 'react-feather';
import PersonImg from '../assets/images/person.png'
import './components.css'
import Blog1 from '../assets/images/blogs/blog1.png'
import Blog2 from '../assets/images/blogs/blog2.jpg'
import Blog3 from '../assets/images/blogs/blog3.jpeg'
import Blog4 from '../assets/images/blogs/blog4.jpg'
import Blog5 from '../assets/images/blogs/blog5.jpg'

function Community() {
    const [text, setText] = useState('');
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);

  useEffect(() => {
    const voiceList = speechSynthesis.getVoices();
    setVoices(voiceList);
    setSelectedVoice(voiceList.find(voice => voice.lang === 'fr-FR')); // Default to French
    
    speechSynthesis.onvoiceschanged = () => {
      const updatedVoiceList = speechSynthesis.getVoices();
      setVoices(updatedVoiceList);
    };
  }, []);

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleVoiceChange = (event) => {
    const selectedVoiceURI = event.target.value;
    const newSelectedVoice = voices.find(voice => voice.voiceURI === selectedVoiceURI);
    setSelectedVoice(newSelectedVoice);
  };

  const handleSpeak = () => {
    
    if (text && selectedVoice) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = selectedVoice;
      window.speechSynthesis.speak(utterance);
    }
  };

  
  return (
    <div className='flex'>
        <SidebarDoctor/>
        <div className='w-10/12 bg-gray-100 flex'>
        <div className="App">
        {/* <script src="https://code.responsivevoice.org/responsivevoice.js?key=bbaQ0wJm"></script> */}
      <h1>Text-to-Speech</h1>
      <select onChange={handleVoiceChange}>
        {voices.map(voice => (
          <option key={voice.voiceURI} value={voice.voiceURI}>
            {voice.name} - {voice.lang}
          </option>
        ))}
      </select>
      <br />
      <textarea
        rows="4"
        cols="50"
        placeholder="Enter text..."
        value={text}
        onChange={handleInputChange}
      ></textarea>
      <br />
      <button onClick={handleSpeak}>Speak</button>
    </div>
            <div className='w-8/12 h-screen p-10 overflow-auto'>
                <div className='flex bg-white p-3 pt-2 pb-2 rounded-md '>
                    <input type="text" className='outline-none w-11/12 pl-3 pr-3 font-sans font-semibold' placeholder='Ajouter un nouveau poste ' />
                    <button className='bg-royal_purple text-white p-2 rounded-md ml-9'><Plus className='h-5'/></button>
                </div>
                <div className='mt-7 bg-white rounded-md p-7'>
                    <div className="flex">
                        <div className="flex w-10/12">
                            <img src={PersonImg} className="rounded-md h-12" alt="" srcset="" />
                            <div className='block ml-3'>
                                <h1>Anass Nebdaoui</h1>
                                <p className='font-sans -mt-1 text-sm'>6 heures</p>
                            </div>
                        </div>
                        <div className='tag_profile bg-ice_purple p-1 h-7 pl-3 ml-9 pr-3 rounded-full  '>
                            <p className='text-royal_purple font-sans text-sm font-semibold'>Docteur</p>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <p className='font-sans text-sm'>🌟 Health & Wellness Update! 🌟<br/>
                        Hey there, wonderful folks! 👋 Dr. Emily here, your friendly neighborhood family physician, with some valuable insights to share about staying on top of your health game. 💪
                        <br/>🌱 Holistic Approach to Wellness: We all know that true health isn't just about treating illnesses – it's about nurturing our bodies, minds, and souls. Let's dive into some tips for a well-rounded approach to wellness</p>
                    </div>
                    <div className='flex mt-5'>
                        <button className='p-2 pl-4 pr-4 text-icon_gray bg-back_gray flex font-sans font-semibold rounded-full text-sm transition duration-1000  hover:bg-red-500 hover:text-white'><Heart className='h-6'/></button>
                        <button className='p-2 pl-4 pr-4 ml-3 text-icon_gray bg-back_gray flex font-sans font-semibold rounded-full transition duration-1000  text-sm hover:border-2 hover:border-gray-400'><MessageCircle className='h-6'/>&nbsp;&nbsp;Répondre</button>
                    </div>
                    
                </div>

                <div className='mt-7 bg-white rounded-md p-7'>
                    <div className="flex">
                        <div className="flex w-10/12">
                            <img src={PersonImg} className="rounded-md h-12" alt="" srcset="" />
                            <div className='block ml-3'>
                                <h1>Anass Nebdaoui</h1>
                                <p className='font-sans -mt-1 text-sm'>6 heures</p>
                            </div>
                        </div>
                        <div className='tag_profile bg-ice_purple p-1 h-7 pl-3 ml-9 pr-3 rounded-full  '>
                            <p className='text-royal_purple font-sans text-sm font-semibold'>Docteur</p>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <p className='font-sans text-sm'>🌟 Health & Wellness Update! 🌟<br/>
                        Hey there, wonderful folks! 👋 Dr. Emily here, your friendly neighborhood family physician, with some valuable insights to share about staying on top of your health game. 💪
                        <br/>🌱 Holistic Approach to Wellness: We all know that true health isn't just about treating illnesses – it's about nurturing our bodies, minds, and souls. Let's dive into some tips for a well-rounded approach to wellness</p>
                    </div>
                    <div className='flex mt-5'>
                        <button className='p-2 pl-4 pr-4 text-icon_gray bg-back_gray flex font-sans font-semibold rounded-full text-sm transition duration-1000  hover:bg-red-500 hover:text-white'><Heart className='h-6'/></button>
                        <button className='p-2 pl-4 pr-4 ml-3 text-icon_gray bg-back_gray flex font-sans font-semibold rounded-full transition duration-1000  text-sm hover:border-2 hover:border-gray-400'><MessageCircle className='h-6'/>&nbsp;&nbsp;Répondre</button>
                    </div>
                    
                </div>

                <div className='mt-7 bg-white rounded-md p-7'>
                    <div className="flex">
                        <div className="flex w-10/12">
                            <img src={PersonImg} className="rounded-md h-12" alt="" srcset="" />
                            <div className='block ml-3'>
                                <h1>Anass Nebdaoui</h1>
                                <p className='font-sans -mt-1 text-sm'>6 heures</p>
                            </div>
                        </div>
                        <div className='tag_profile bg-ice_purple p-1 h-7 pl-3 ml-9 pr-3 rounded-full  '>
                            <p className='text-royal_purple font-sans text-sm font-semibold'>Docteur</p>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <p className='font-sans text-sm'>🌟 Health & Wellness Update! 🌟<br/>
                        Hey there, wonderful folks! 👋 Dr. Emily here, your friendly neighborhood family physician, with some valuable insights to share about staying on top of your health game. 💪
                        <br/>🌱 Holistic Approach to Wellness: We all know that true health isn't just about treating illnesses – it's about nurturing our bodies, minds, and souls. Let's dive into some tips for a well-rounded approach to wellness</p>
                    </div>
                    <div className='flex mt-5'>
                        <button className='p-2 pl-4 pr-4 text-icon_gray bg-back_gray flex font-sans font-semibold rounded-full text-sm transition duration-1000  hover:bg-red-500 hover:text-white'><Heart className='h-6'/></button>
                        <button className='p-2 pl-4 pr-4 ml-3 text-icon_gray bg-back_gray flex font-sans font-semibold rounded-full transition duration-1000  text-sm hover:border-2 hover:border-gray-400'><MessageCircle className='h-6'/>&nbsp;&nbsp;Répondre</button>
                    </div>
                    
                </div>
            </div>

            <div className='w-4/12 h-screen p-7 mt-3'>
                <div className="bg-white p-5">
                    <h1>Diététiciens Blogs</h1>
                    
                    <div className="mt-1 flex hover:bg-gray-100 p-1 cursor-pointer rounded-md">
                        <img src={Blog3} alt="" className='h-12 rounded-md' srcset="" />
                        <h1 className='font-sans font-medium text-xs mt-2 ml-3'>Mindful Eating in a Fast Food World: Strategies for Balanced Choices</h1>
                    </div>
                    <div className="mt-1 flex hover:bg-gray-100 p-1 cursor-pointer rounded-md">
                        <img src={Blog2} alt="" className='h-12 rounded-md' srcset="" />
                        <h1 className='font-sans font-medium text-xs mt-2 ml-3'>The Balanced Plate Chronicles: A Dietitian's Perspective on Nutrition</h1>
                    </div>
                    <div className="mt-1 flex hover:bg-gray-100 p-1 cursor-pointer rounded-md">
                        <img src={Blog4} alt="" className='h-12 rounded-md' srcset="" />
                        <h1 className='font-sans font-medium text-xs mt-2 ml-3'>Savoring Health: Wholesome Recipes and Expert Nutrition Insights</h1>
                    </div>
                    <div className="mt-1 mb-3 flex hover:bg-gray-100 p-1 cursor-pointer rounded-md">
                        <img src={Blog5} alt="" className='h-12 rounded-md' srcset="" />
                        <h1 className='font-sans font-medium text-xs mt-2 ml-3'>The Foodie's Formula: Unveiling the Secrets Nutrient-Packed Meals</h1>
                    </div>
                    <a href="/" className='text-sm text-second_royal_blue pl-2'>Voir Plus...</a>
                </div>


                <div className="bg-white p-5 mt-5">
                    <h1>Evénements</h1>
                    
                    <div className="mt-1 flex  p-1 cursor-pointer rounded-md">
                        <div className='h-12 w-16 rounded-md text-center bg-gray-200'>
                            <h1 className='day pt-1 '>7</h1>
                            <p className='font-sans text-xs -mt-1'>Juin</p>
                        </div>
                        <h1 className=' font-medium text-sm mt-3 ml-3 pr-3 -space-y-3'>Séance Enligne Grp 2</h1>
                    </div>
                    
                    <div className="mt-1 flex  p-1 cursor-pointer rounded-md">
                        <div className='h-12 w-16 rounded-md text-center bg-gray-200'>
                            <h1 className='day pt-1 '>24</h1>
                            <p className='font-sans text-xs -mt-1'>Nov</p>
                        </div>
                        <h1 className=' font-medium text-sm mt-3 ml-3 pr-3 -space-y-3'>Séance Présentielle Grp 7</h1>
                    </div>
                    
                    <div className="mt-1 flex  p-1 cursor-pointer rounded-md">
                        <div className='h-12 w-16 rounded-md text-center bg-gray-200'>
                            <h1 className='day pt-1 '>12</h1>
                            <p className='font-sans text-xs -mt-1'>Sep</p>
                        </div>
                        <h1 className=' font-medium text-sm mt-3 ml-3 pr-3 -space-y-3'>Séance Enligne Grp 3</h1>
                    </div>
                    
                    <a href="/" className='text-sm text-second_royal_blue pl-2'>Historique des evénement</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Community