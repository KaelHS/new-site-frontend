import { ReactNode} from 'react'

interface CardProps {
    icon?: ReactNode | string
    title: string
    description: string
}

export const Card = ({ icon, title, description}: CardProps) => {
    return (
        <div className="w-[290px] h-72 block max-w-sm p-6 bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            {!!icon && icon}
            <h5 className="mb-2 mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">{description}</p>
        </div>
    )
}