import { useState } from "react";

const Accordian = ({
    
}) => {
    const [isOpen,setIsOpen] = useState(false);
    const handleToggle = () => {

    }
    return (
        <div className='accordian-container'>
            <h2>{}</h2>
            {isOpen 
                ? <div className="accordian-data hidden">
                    
                  </div>
                : null} 
        </div>
    )
}
export default Accordian;