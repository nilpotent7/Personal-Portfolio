import '@/components/DescriptionCard.scss'
import Socials from '@/components/socials'
import OpenButton from '@/components/openButton'

export default function DescriptionCard(
    { 
        addButton, buttonText, buttonLink, addSocials,
        imageSource, imageSize, imageRounded,
        alignCenter: alignTextCenter, heading, tagline, text
    }: 
    {
        addButton: boolean, buttonText: string, buttonLink: string, addSocials: boolean,
        imageSource: string, imageSize: Array<string>, imageRounded: boolean,
        alignCenter: boolean, heading: string, tagline: string,  text: JSX.Element

    }
) {
    return (
        <div className="descriptionCard">
            <div className='descriptionCardContent'>
                <div className='descriptionCardMedia'>
                    <img className='descriptionCardImage' src={imageSource} alt='Avatar'
                        style={
                            imageRounded ? {
                                maxHeight: imageSize[0],
                                maxWidth: imageSize[1],
                                border: "1px solid rgb(255 255 255 / 5%)",
                                borderRadius: "3rem",
                                boxShadow: "0 0 50px 2px #000",
                            } : {
                                maxHeight: imageSize[0],
                                maxWidth: imageSize[1],
                                borderRadius: "0.5rem",
                                boxShadow: "0 0 50px 2px #000",
                                border: "1px solid rgb(255 255 255 / 5%)",
                            }
                        }/>
                    {
                        addSocials ? <>
                            <div className='descriptionCardSocials'><Socials size={40} width={300} /></div>
                        </> : <></>
                    }
                
                </div>
                <div className="descriptionCardText">
                    <div className="descriptionCardMainText" style={
                        alignTextCenter ? {textAlign: 'center'} : {}
                    }>
                        {
                            tagline == "" ? <>
                                <h1 style={{marginBottom: '24px'}}>{heading}</h1>
                            </> : <>
                                <h1>{heading}</h1>
                                <h3 style={{marginBottom: '24px'}}>{tagline}</h3>
                            </>
                        }
                        {text}
                    </div>
                        {
                            addButton ? <>
                                <div className="descriptionCardButton" style={
                                    alignTextCenter ? {justifyContent: 'center'} : {}
                                }>
                                    <OpenButton title={buttonText} href={buttonLink} arrowSpace={20}/>
                                </div>
                            </> : <></>
                        }
                </div>
            </div>
        </div>
    );
};

