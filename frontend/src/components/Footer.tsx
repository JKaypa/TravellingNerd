import {AiOutlineLinkedin, AiOutlineHeart} from 'react-icons/ai'


export default function Footer() {
  return (
    <footer className="flex flex-col justify-around items-center bg-black text-white h-52 mt-5">
      <p>Travelling Nerd</p>
      <a href="https://www.linkedin.com/in/jkaypa/" target='_blank' rel='noopener noreferrer'><AiOutlineLinkedin className="text-3xl" /></a>
      <a href='mailto:jose_kaypa@hotmail.com?subject=Hello&body=Hi there Kaypa'>jose_kaypa@hotmail.com</a>
      <p className='flex items-center'>Made with<AiOutlineHeart className='w-8'/>by Jose Kaypa</p>
    </footer>
  )
}
