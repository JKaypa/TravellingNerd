import {AiOutlineLinkedin} from 'react-icons/ai'


export default function Footer() {
  return (
    <footer className="flex flex-col justify-around items-center bg-black text-white h-52 mt-5">
      <p>Travelling Nerd</p>
      <p>Made with love by Jose Kaypa</p>
      <AiOutlineLinkedin className="text-3xl" />
      <a>jose_kaypa@hotmail.com</a>
    </footer>
  )
}
