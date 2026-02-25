import '@/components/DescriptionCard.scss'

export default function DescriptionCardCustom(
    { 
        leftContent,
        rightContent,
    }: 
    {
        leftContent: any,
        rightContent: any

    }
) {
    return (
        <div className="descriptionCard">
            <div className='descriptionCardContent'>
                <div className='descriptionCardMedia'>
                    {leftContent}
                </div>
                <div className="descriptionCardText">
                    {rightContent}
                </div>
            </div>
        </div>
    );
};

