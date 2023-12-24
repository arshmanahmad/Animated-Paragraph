import React, { useEffect, useState } from 'react';
import './AnimatedPara.css';

const AnimatedPara = () => {
    const [animatedPara, setAnimatedPara] = useState(false);
    const [animateHead, setAnimateHead] = useState(false);
    useEffect(() => {
        setAnimatedPara(true);
        setAnimateHead(true);
    }, []);
    return (
        <>
            <section className='section-1'>
                <div className='heading'>
                    <h1 className={animateHead ? "main-heading" : " "} >
                        Animated para:
                    </h1>
                </div>
                <div className='para-container'>
                    <p className={animatedPara ? "paragraph" : " "}>Lorem ipsum dolor sit amet consectetur
                        , adipisicing elit. Voluptate provident enim nostrum porro optio
                        itaque, voluptates nemo, tempora suscipit atque doloribus
                        repudiandae facilis sapiente fuga quibusdam in! Fuga natus
                        error adipisci veritatis voluptate quia sint minima ducimus
                        at quidem placeat nesciunt dolore veniam dolores odio optio
                        deserunt molestiae minus, amet cumque dolorem mollitia volu
                        ptas! Veritatis cumque unde consequatur reiciendis provide
                        nt incidunt possimus architecto rerum harum porro labore de
                        serunt ex dignissimos nulla, autem odio recusandae! Libero
                        sed quo, optio itaque architecto molestias amet consequatur
                        eligendi, dolor dolorem animi veniam quidem alias neque
                        officia, explicabo quia quasi! Ratione suscipit unde, fa
                        cere excepturi reprehenderit dolores facilis enim quis e
                        veniet autem inventore incidunt? Modi, alias adipisci est
                        aspernatur velit, quasi consequuntur molestias nam dicta
                        sapiente esse doloremque maxime eos officia! Excepturi od
                        io ex culpa error aliquid tempora natus libero possimus e
                        arum ad accusantium voluptas,
                        vero esse suscipit veniam illum iure laborum ipsam illo quibusdam?</p>
                </div>
            </section>
        </>
    )
}

export default AnimatedPara