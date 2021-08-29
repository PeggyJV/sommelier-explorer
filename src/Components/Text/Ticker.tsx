import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { css, keyframes } from '@emotion/react';

export const Ticker = ({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element => {
    const [key, setKey] = useState(1);

    // const scrolling = useSpring({
    //     from: { transform: 'translateX(80%)' },
    //     to: { transform: 'translateX(-40%)' },
    //     config: { duration: 20000 },
    //     loop: true,
    //     //reverse: key % 2 == 0,
    //     onRest: () => {
    //         setKey(key + 1);
    //     },
    // });

    return (
        // <div key={key} style={{ clipPath: 'inset(0 100px)' }}>
        <div css={{ padding: '0 2rem' }}>
            {/* <animated.div style={scrolling}> */}
            <div>
                <div>{children}</div>
            </div>
            {/* </animated.div> */}
        </div>
    );
};
