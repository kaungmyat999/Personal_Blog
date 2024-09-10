import Image from "next/image";

export default function Certification({certs}) {    
    return <>
        <h2 className='subtitle'>CERTIFICATIONS</h2>          
        <div className="boxes">
            {certs.certifications.map((cert, index) => {
            return (
                <div key={index} className="box">
                    <Image src={cert.path} alt={cert.name} className="logo" width={70} height={70} />
                    <p className="label">{cert.name}</p>
                </div>
            );
            })}

            
        </div>
    </>
}