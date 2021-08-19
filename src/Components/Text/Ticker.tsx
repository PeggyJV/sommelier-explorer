import { useState } from 'react';
import { useSpring, animated } from 'react-spring';

export const Ticker = ({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element => {
    const [key, setKey] = useState(1);

    const scrolling = useSpring({
        from: { transform: 'translate(90%,0)' },
        to: { transform: 'translate(-90%,0)' },
        config: { duration: 20000 },
        reset: true,
        //reverse: key % 2 == 0,
        onRest: () => {
            setKey(key + 1);
        },
    });

    return (
        <div key={key}>
            <animated.div style={scrolling}>{children}</animated.div>
        </div>
    );
};
