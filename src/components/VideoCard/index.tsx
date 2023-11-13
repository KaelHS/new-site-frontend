import { ReactNode} from 'react'
import Image from 'next/image'
import video from '../../../public/videoMiniature.png'

interface CardProps {
    icon?: ReactNode | string
    description: string
    link: string
}

export const VideoCard = ({ description, link}: CardProps) => {
    return (
        <div className="w-[290px] h-72 mx-8 block max-w-sm p-6 bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <p className="font-normal text-gray-700 dark:text-gray-400">{description}</p>
            <a className='flex gap-2 p-4 rounded-lg mt-4 bg-slate-300' href={link}>
                <Image src="/videoMiniature.png" width={40} height={40} alt='' />
                <div className='text-left'>
                    <h2 className='font-bold text-sm'>Author Name</h2>
                    <p className='text-sm'>VP of Company</p>
                </div>
            </a>
        </div>
    )
}