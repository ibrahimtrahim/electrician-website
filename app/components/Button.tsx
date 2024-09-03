import Image from 'next/image';

type ButtonProps = {
    type : 'button' | 'submit';
    title : string;
    icon? : string;
    full? : boolean;
    onClick?: () => void;
    }


const Button = ({type, title, icon, full, onClick}: ButtonProps) => {
  return (
    <button className='flex justify-center items-center gap-3 rounded-sm bg-orange-400 border border-orange-500 px-4 py-2 font-medium text-white hover:bg-white hover:text-orange-500 transition-all'>
        <label className='whitespace-nowrap cursor-pointer'>{title}</label>
    </button>
  )
}

export default Button