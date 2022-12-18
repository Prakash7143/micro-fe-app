import React, { useRef, useEffect } from "react";
import { mount } from 'auth/AuthApp';
import { useHistory } from "react-router-dom";


// console.log(mount);

export default ({ onSignIn }) => {
    const ref = useRef(null);
    const history = useHistory()
    
    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            // onNavigate: (location) => {
            //     console.log(location);
            // } // we can also destructure location prop object like below
            initialPath: history.location.pathname,
            onNavigate: ({ pathname: nextRouteLink }) => {
                // console.log(nextRouteLink);
                const { pathname: currentActiveUrl } = history.location;

                if(currentActiveUrl !== nextRouteLink) history.push(nextRouteLink);
            },

            onSignIn
        });

        history.listen(onParentNavigate);
    }, []);

    return <div ref={ref} />
}