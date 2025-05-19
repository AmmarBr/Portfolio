import React, { useEffect, useState } from 'react'

// id , size , x,y , opacity , animationDuration
// id , size , x,y , delay , animationDuration
export default function StarBackground() {
    const [stars, setStars] = useState([])
    const [meteors, setMeteors] = useState([])
    useEffect(() => {
        generateStars()
        generateMeteors()

        const handelResize=()=>{
            generateStars
        }
        window.addEventListener('resize',handelResize)

        return()=>window.removeEventListener('resize',handelResize)
    }, [])

    const generateStars = () => {
        const numOfMeteors = 20
        const newMeteors = []

        for (let i = 0; i < numOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,
            })
        }

        setMeteors(newMeteors)
    }
    const generateMeteors = () => {
        const numOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000)
        const newStars = []

        for (let i = 0; i < numOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            })
        }

        setStars(newStars)
    }

    return (
        <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
            {stars.map((star) => (
                <div
                    key={star.id}
                    className='star animate-pulse-subtle'
                    style={{
                        width: star.size + 'px',
                        height: star.size + 'px',
                        left: star.x + '%',
                        top: star.y + '%',
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + 's',
                    }}
                />
            ))}
            {meteors.map((Meteors) => (
                <div
                    key={Meteors.id}
                    className='meteor animate-meteor'
                    style={{
                        width: Meteors.size  + 'px',
                        height: Meteors.size  + 'px',
                        left: Meteors.x + '%',
                        top: Meteors.y + '%',
                        animationDelay: Meteors.delay,
                        animationDuration: Meteors.animationDuration *6+'s',
                    }}
                />
            ))}
        </div>
    )
}
