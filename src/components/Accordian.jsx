import { useState } from "react";

const Accordian = ({
    sectionTitle,
}) => {

    const [isOpen,setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='accordian-container'>
            <div className="sectionHeader">
                <h2>{sectionTitle}</h2>
                <button onClick={handleToggle}>{isOpen ? 'expand' : 'collapse'}</button>
            </div>
            {isOpen 
                ? <div className="accordian-data hidden">
                    
                  </div>
                : null} 
        </div>
    )
}
export default Accordian;