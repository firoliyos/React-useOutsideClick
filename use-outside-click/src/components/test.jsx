import { useRef, useState } from 'react'
import useOutsideClick from '.'

export default function UseOnclickOutsideTest() {
    const [showContent, setShowContent] = useState(false)
    const ref = useRef()
    useOutsideClick(ref, () => setShowContent(false))
    return(
        <div>
         {
            showContent ? <div ref={ref}>
                <h1>This is a random content</h1>
                <p>Please click outside of this to close. it won't close if you click inside this content!</p>
            </div> 
            : <button onClick={() => setShowContent(true)}>Show Content</button>
         }
        </div>
    )
}