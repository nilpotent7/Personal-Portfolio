import '@/components/DescriptionCard.scss'

export default function DescriptionCardCustom(
    { 
        leftContent,
        rightContent,
    }: 
    {
        leftContent: JSX.Element,
        rightContent: JSX.Element

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

