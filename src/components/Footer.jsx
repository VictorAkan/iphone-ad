import { useState } from "react";

export const Footer = () => {
    const [showLink, setShowLink] = useState(false)

    const toggleLink = () => {
        if (showLink == false) {
            setShowLink(true)
        } else {
            setShowLink(false)
        }
    }
    return (
        <div className="flex justify-center">
            <div>
            <button onClick={toggleLink} className="text-white mt-5 bg-sky-600 p-3 rounded-md">View the link</button>
            {showLink ? <p className="text-white">This is the link</p> : ''}
            </div>
        </div>
    )
}