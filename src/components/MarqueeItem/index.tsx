import Marquee from "react-fast-marquee";

interface MarqueeItemProps  {
    text: string
}

export const MarqueeItem = (props: any) => {
    const { text } = props
    return (
        <Marquee 
            style={{ 
                backgroundColor: '#e54', 
                marginBottom: '0.5rem',
                padding: '0.5rem 0'
            }}
            {...props}
            >
            <p className="text-white">{text}</p>
        </Marquee>
    )
}