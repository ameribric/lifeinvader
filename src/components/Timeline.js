import { useEffect, useState } from 'react'
// useEffect runs special effects when functions are loaded, you have to call it inside the const below and have to pass in something in the ()
const Timeline = () => {
    const [posts, setPosts] = useState([])
    
    useEffect(async() => {
        console.log('Rendering Timeline ...')
        let req = await fetch('https://raw.githubusercontent.com/rmdashrfv/lifeinvader/main/src/data/posts.json')
        let res = await req.json()
        setPosts(res)
    }, [])
    return (
        <div>
            <h2>Timeline</h2>
        </div>
    )
}

export default Timeline;